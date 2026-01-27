FROM timbru31/node-chrome:24

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
COPY package.json package-lock.json ./

RUN npm ci 

# Install Playwright browsers (uses proxy env if needed)
# RUN npx playwright install chromium

# Copy the rest of your code
COPY . .

# Default command - run tests but keep container alive for debugging
CMD ["sh", "-c", "npm run test; echo 'Tests completed. Container will stay alive for debugging...'; tail -f /dev/null"]
