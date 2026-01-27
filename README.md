## Repro steps

```bash
docker volume create vitest-trace
```

```bash
docker build -t vitest-node-ubuntu .
```

```bash
docker run --rm -it --name vitest-run \
    -v vitest-trace:/trace \
    -e HOME=/trace/home \
    -e XDG_CACHE_HOME=/trace/cache \
    -e TMPDIR=/work/tmp \
    vitest-node-ubuntu
```

```bash
bash watch-deleted-targets.sh vitest-run
```

```bash
bash watch-deleted-open.sh vitest-run
```
