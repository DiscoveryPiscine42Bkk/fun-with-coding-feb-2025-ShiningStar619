#!/bin/bash
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for arg in "$@"; do
        echo "$arg"
        if [ $(($OPTIND - 1)) -ge 2 ]; then
            break
        fi
    done
fi


