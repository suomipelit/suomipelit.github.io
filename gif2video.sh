#!/bin/bash
set -xeuo pipefail
for gif in gifs/*; do
    webm=video/$(basename "$gif" .gif).webm
    mp4=video/$(basename "$gif" .gif).mp4
    [[ ! -f "$webm" ]] && ffmpeg -i "$gif" -f webm -vcodec libvpx-vp9 -pix_fmt yuv420p -crf 26 "$webm"
    [[ ! -f "$mp4" ]] && ffmpeg -i "$gif" -f mp4 -vcodec libx264 -pix_fmt yuv420p -crf 26 -preset veryslow -tune animation "$mp4"
done