#!/bin/sh

TAG=$(git describe --tags)
NAME="shadow-dashboard-web-gui-$TAG"

mv dist/ $NAME

zip -r "$NAME.zip" "$NAME/"
