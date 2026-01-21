# docker build -t vitest-node-ubuntu .
# docker run --storage-opt size=2G vitest-node-ubuntu
#docker run --rm -it --name vitest-run \
#-v vitest-tarce:/trace \
#-e HOME=/trace/home \
#-e XDG_CACHE_HOME=/trace/cache \
#-e TMPDIR=/work/tmp \
#vitest-node-ubuntu


# ---------- single-stage build that uses a local headers tarball ----------
ARG NODE_VERSION=24.13.0
# FROM node:${NODE_VERSION}-bullseye
FROM timbru31/node-chrome:24

# Accept proxy args and expose them only in this stage (used by apt, npm, playwright)
ARG http_proxy
ARG https_proxy
ARG no_proxy

ENV http_proxy=${http_proxy}
ENV https_proxy=${https_proxy}
ENV HTTP_PROXY=${http_proxy}
ENV HTTPS_PROXY=${https_proxy}
ENV NO_PROXY=${no_proxy}

# System deps for node-gyp and Playwright (browser tests)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      python3 make g++ \
      lsof procps \
      wget libnss3 libatk-bridge2.0-0 libgtk-3-0 libxss1 libasound2 \
      libgbm-dev libxshmfence-dev libxcomposite1 libxrandr2 libglu1-mesa \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files and npm config first (better layer caching)
COPY package.json package-lock.json .npmrc ./

# Copy the pre-downloaded Node headers tarball from build context
# (Ensure the file exists at this path in your repo)
COPY node-headers/node-v${NODE_VERSION}-headers.tar.gz /opt/node-headers.tar.gz

# Install dependencies; node-gyp will use the local headers tarball (no external download)
RUN npm ci --prefer-offline --no-audit --progress=false \
           --tarball=/opt/node-headers.tar.gz
# RUN npm ci 

# Install Playwright browsers (uses proxy env if needed)
# RUN npx playwright install chromium

# Copy the rest of your code
COPY . .

# Default command - run tests but keep container alive for debugging
CMD ["sh", "-c", "npm run test; echo 'Tests completed. Container will stay alive for debugging...'; tail -f /dev/null"]
