#!/bin/sh

NAME="shadow-dashboard-web-gui-${git describe --tags}"

mv dist/ $NAME

zip -r "$NAME.zip" "$NAME/"
