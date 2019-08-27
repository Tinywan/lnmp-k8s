#!/usr/bin/env bash

set -e

echo "Set app"
mkdir -p ../app/laravel/public
cp deployment/app/index.php ../app/laravel/public/
# mkdir -p ../app
# docker run -it --rm -v $PWD/helm/nginx-php/config/php/composer/config.testing.json:/tmp/config.json -v $PWD/../app:/app khs1994/php:7.3.8-composer-alpine composer global config --unset repos.packagist
# docker run -it --rm -v $PWD/helm/nginx-php/config/php/composer/config.testing.json:/tmp/config.json -v $PWD/../app:/app khs1994/php:7.3.8-composer-alpine composer create-project --prefer-dist laravel/laravel=5.8.* laravel
echo "Up nfs server"
./lnmp-k8s nfs
sleep 20
docker ps -a
./lnmp-k8s nfs logs
sudo mkdir -p /tmp2
# install nfs dep
sudo apt install -y nfs-common
sudo travis_retry mount -t nfs4 ${SERVER_IP}:/lnmp/log /tmp2
sudo umount /tmp2
sed -i "s#192.168.199.100#${SERVER_IP}#g" deployment/pv/lnmp-volume.linux.nfs.yaml
./lnmp-k8s create
echo "${SERVER_IP} laravel2.t.khs1994.com" | sudo tee -a /etc/hosts
ping -c 1 laravel2.t.khs1994.com
sleep 120
kubectl get -n lnmp all
curl -k https://laravel2.t.khs1994.com
./lnmp-k8s delete
./lnmp-k8s cleanup
./lnmp-k8s nfs down
echo "Test noNFS volume"
cp -rf ../app ~/app
./lnmp-k8s create --no-nfs
sleep 50
kubectl get -n lnmp all
curl -k https://laravel2.t.khs1994.com
ip addr
test "${LNMP_K8S_SINGLE_INSTALL_OPTIONS}" = "--containerd" && (kubectl apply -f deployment/runtimeClass/runtimeClass.yaml && kubectl apply -f deployment/runtimeClass/pod.yaml) || true
test "${LNMP_K8S_SINGLE_INSTALL_OPTIONS}" = "--crio" && (kubectl apply -f deployment/runtimeClass/runtimeClass.yaml && kubectl apply -f deployment/runtimeClass/pod.yaml) || true
test -z "${LNMP_K8S_SINGLE_INSTALL_OPTIONS}" && docker run -it --rm --runtime=runsc alpine:3.10 uname -a || true
test -z "${LNMP_K8S_SINGLE_INSTALL_OPTIONS}" && docker run -it --rm alpine:3.10 uname -a || true
sleep 10
kubectl get all
kubectl get pod
POD_NAME=`kubectl get pod | awk '{print $1}' | tail -1` || true
kubectl exec ${POD_NAME} -- uname -a || true
cd cli
sh generate.sh || true
cd ..
git diff
