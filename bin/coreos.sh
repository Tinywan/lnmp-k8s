#!/usr/bin/env bash

set -ex

# $ export SERVER_HOST=192.168.57.1
# $ curl http://SERVER_HOST:8080/bin/coreos.sh | NODE_NAME=1 bash

if [ -n "${NODE_NAME}"];then
  NODE_NAME="$1"
fi

FCOS_VERSION=30.20190801.0

if [ -z "${NODE_NAME}" ];then
  echo "Please input NODE_NAME

example:

$ ./coreos.sh 1
$ ./coreos.sh 2
$ ./coreos.sh {n}
$ ./coreos.sh basic
$ curl xxx | NODE_NAME=1 bash

"

  exit
fi

IGNITION_NAME=ignition-${NODE_NAME}.json

if [ $NODE_NAME = 'basic' ];then IGNITION_NAME=basic.json; fi

curl -O http://${SERVER_HOST:-192.168.57.1}:${port:-8080}/disk/$IGNITION_NAME

echo $IGNITION_NAME

sleep 5

/usr/libexec/coreos-installer \
      -d sda \
      -i $IGNITION_NAME \
      -b http://${SERVER_HOST:-192.168.57.1}:${port:-8080}/current/fedora-coreos-${FCOS_VERSION}-metal.raw.xz