#!/bin/bash
if [[ $@ == *"--build"* ]] || [[ $@ == *"-b"* ]]; then
    docker build -t edumeet_translation:latest . --no-cache
fi
if [[ $@ == *"--run"* ]] || [[ $@ == *"-r"* ]]; then
    docker run -d -p $(cut -d "=" -f2 <<< $(cat docker.env | sed 's@^@@g' | grep "PORT" | paste -s -d " ") | paste -s -d " ") edumeet_translation:latest
fi