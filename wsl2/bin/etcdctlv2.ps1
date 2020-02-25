. $PSScriptRoot/../.env.example.ps1
. $PSScriptRoot/../.env.ps1

etcdctl `
  --endpoints=${K8S_ETCD_ENTRYPOINTS} `
  --ca-file="$PSScriptRoot/../certs/ca.pem" `
  --cert-file="$PSScriptRoot/../certs/etcd-client.pem" `
  --key-file="$PSScriptRoot/../certs/etcd-client-key.pem" `
  $args

if (!$?){
  throw "etcdctl exec error"
}

# cluster-health
