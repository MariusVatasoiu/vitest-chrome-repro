## Repro steps

Set the `Disk usage limit` to 16 - 24 GB.

```bash
docker volume create vitest-trace
```

```bash
docker build -t vitest-node-ubuntu .
```

Run the tests:

```bash
docker run --rm -it --name vitest-run \
    -v vitest-trace:/trace \
    -e HOME=/trace/home \
    -e XDG_CACHE_HOME=/trace/cache \
    -e TMPDIR=/work/tmp \
    vitest-node-ubuntu
```

And in the same time in another terminal run of these scripts:

```bash
bash watch-deleted-targets.sh vitest-run
```

```bash
bash watch-deleted-open.sh vitest-run
```
