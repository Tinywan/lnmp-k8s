# Kubelet

## 自动 Approved 证书失败

* https://github.com/opsnull/follow-me-install-kubernetes-cluster/issues/326

* 状态： 正在排查

### 错误详情

```bash
bootstrap.go:65] Using bootstrap kubeconfig to generate TLS client cert, key and kubeconfig file

bootstrap.go:96] No valid private key and/or certificate found, reusing existing private key or creating a new one
```

### 解决办法

```bash
$ kubectl get csr

NAME                                                   AGE     REQUESTOR                 CONDITION
csr-4gzpq                                              4m20s   system:node:node1         Pending
csr-62qp7                                              50m     system:node:node1         Pending
csr-6ml4w                                              12m     system:node:node1         Pending
csr-8nvc2                                              63m     system:node:node1         Pending
csr-f6gbd                                              38m     system:node:node1         Pending
csr-sjthd                                              25m     system:node:node1         Pending
csr-sxjxf                                              2m41s   system:node:node1         Pending
node-csr-j1Ja8wpP3FxFBMnEVNsrwYosgWk_-796bWmRg9cnFTE   63m     system:bootstrap:fp7k2i   Approved,Issued

# approve 倒数第二个，例如
# $ kubectl certificate approve csr-sxjxf
$ kubectl certificate approve CSR_NAME

$ kubectl describe csr CSR_NAME
```

## 特性

* 使用 TLS bootstrap 机制自动生成 client 和 server 证书，过期后自动轮转；
