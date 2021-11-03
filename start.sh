#!/bin/bash

docker run --rm -v "$PWD":/app denoland/deno:1.15.3 run /app/index.ts