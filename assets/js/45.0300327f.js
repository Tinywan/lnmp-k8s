(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{365:function(e,t,s){"use strict";s.r(t);var a=s(33),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kubelet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubelet"}},[e._v("#")]),e._v(" Kubelet")]),e._v(" "),s("h2",{attrs:{id:"初始化步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化步骤"}},[e._v("#")]),e._v(" 初始化步骤")]),e._v(" "),s("ul",[s("li",[e._v("参考 "),s("code",[e._v("bin/generate-kubelet-bootstrap-kubeconfig.sh")])])]),e._v(" "),s("h2",{attrs:{id:"必须手动-approve-server-cert-csr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#必须手动-approve-server-cert-csr"}},[e._v("#")]),e._v(" 必须手动 approve server cert csr")]),e._v(" "),s("p",[s("strong",[e._v("基于 "),s("a",{attrs:{href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet-tls-bootstrapping/#certificate-rotation",target:"_blank",rel:"noopener noreferrer"}},[e._v("安全性考虑"),s("OutboundLink")],1),e._v("，CSR approving controllers 不会（也不能）自动 approve kubelet server 证书签名请求，需要手动 approve。")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("https://github.com/opsnull/follow-me-install-kubernetes-cluster/issues/326")])]),e._v(" "),s("li",[s("p",[e._v("https://github.com/opsnull/follow-me-install-kubernetes-cluster/issues/399")])]),e._v(" "),s("li",[s("p",[e._v("https://github.com/kubernetes/kubernetes/issues/73356")])]),e._v(" "),s("li",[s("p",[e._v("https://github.com/kubernetes/community/pull/1982")])]),e._v(" "),s("li",[s("p",[e._v("1.10 可以自动轮换 server 证书")])]),e._v(" "),s("li",[s("p",[e._v("1.11 删除了此功能 https://github.com/kubernetes/kubernetes/commit/7665f15b7d8d9006e410e41f6678cfa2be3ac602")])])]),e._v(" "),s("blockquote",[s("p",[e._v("Note: The CSR approving controllers implemented in core Kubernetes do not approve node serving certificates for "),s("a",{attrs:{href:"https://github.com/kubernetes/community/pull/1982",target:"_blank",rel:"noopener noreferrer"}},[e._v("security reasons"),s("OutboundLink")],1),e._v(". To use RotateKubeletServerCertificate operators need to run a custom approving controller, or manually approve the serving certificate requests.")])]),e._v(" "),s("p",[e._v("未手动 approve 之前报错如下。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("bootstrap.go:65"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Using bootstrap kubeconfig to generate TLS client cert, key and kubeconfig "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("\n\nbootstrap.go:96"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" No valid private key and/or certificate found, reusing existing private key or creating a new one\n")])])]),s("h3",{attrs:{id:"手动-approve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动-approve"}},[e._v("#")]),e._v(" 手动 approve")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl get csr\n\nNAME                                                   AGE     REQUESTOR                 CONDITION\ncsr-4gzpq                                              4m20s   system:node:node1         Pending\ncsr-62qp7                                              50m     system:node:node1         Pending\ncsr-6ml4w                                              12m     system:node:node1         Pending\ncsr-8nvc2                                              63m     system:node:node1         Pending\ncsr-f6gbd                                              38m     system:node:node1         Pending\ncsr-sjthd                                              25m     system:node:node1         Pending\ncsr-sxjxf                                              2m41s   system:node:node1         Pending\nnode-csr-j1Ja8wpP3FxFBMnEVNsrwYosgWk_-796bWmRg9cnFTE   63m     system:bootstrap:fp7k2i   Approved,Issued\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# approve 倒数第二个，例如")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# $ kubectl certificate approve csr-sxjxf")]),e._v("\n$ kubectl certificate approve CSR_NAME\n\n$ kubectl describe csr CSR_NAME\n")])])]),s("h2",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[e._v("#")]),e._v(" 特性")]),e._v(" "),s("h3",{attrs:{id:"使用-tls-bootstrap-机制自动生成-client-和-server-证书，过期后自动轮转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-tls-bootstrap-机制自动生成-client-和-server-证书，过期后自动轮转"}},[e._v("#")]),e._v(" 使用 TLS bootstrap 机制自动生成 client 和 server 证书，过期后自动轮转")]),e._v(" "),s("ul",[s("li",[e._v("过期，server 证书也得(必须) "),s("strong",[e._v("手动 approve")])])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v(":32:52.516590    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5468")]),e._v(" certificate_manager.go:556"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Certificate expiration is "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-09-07 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":27:50 +0000 UTC, rotation deadline is "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),e._v("-09-07 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(":11:00.773330597 +0000 UTC\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v(":32:52.516652    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5468")]),e._v(" certificate_manager.go:288"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Waiting 38m8.256684197s "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" next certificate rotation\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(":11:00.785321    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5468")]),e._v(" certificate_manager.go:412"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Rotating certificates\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(":11:00.883560    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5468")]),e._v(" reflector.go:207"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Starting reflector *v1.CertificateSigningRequest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("0s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" from k8s.io/client-go/tools/watch/informerwatcher.go:146\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("19")]),e._v(":58:38.503176   "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15572")]),e._v(" certificate_manager.go:414"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" certificate request was not signed: timed out waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the condition "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("未手动 approve 报错"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 手动 approve 之后")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(":20:19.916775    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5468")]),e._v(" csr.go:249"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" certificate signing request csr-kgd6x is approved, waiting to be issued\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(":20:19.967255    "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5468")]),e._v(" csr.go:245"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" certificate signing request csr-kgd6x is issued\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在证书所在文件夹看到证书已经更新")]),e._v("\n")])])]),s("ul",[s("li",[e._v("假设过期时间设为 1 小时, "),s("code",[e._v("kubelet")]),e._v(" 会在 "),s("code",[e._v("43")]),e._v(" 分钟（具体时间看日志）时轮换")])]),e._v(" "),s("h2",{attrs:{id:"bootstrap-token-auth-和授予权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-token-auth-和授予权限"}},[e._v("#")]),e._v(" Bootstrap Token Auth 和授予权限")]),e._v(" "),s("p",[s("code",[e._v("kublet")]),e._v(" 启动时查找配置的 "),s("code",[e._v("--kubeletconfig")]),e._v(" 文件是否存在，如果不存在则使用 "),s("code",[e._v("--bootstrap-kubeconfig")]),e._v(" 向 "),s("code",[e._v("kube-apiserver")]),e._v(" 发送证书签名请求 (CSR)。")]),e._v(" "),s("p",[s("code",[e._v("kube-apiserver")]),e._v(" 收到 CSR 请求后，对其中的 Token 进行认证（事先使用 kubeadm 创建的 token），认证通过后将请求的 user 设置为 "),s("code",[e._v("system:bootstrap:")]),e._v("，group 设置为 "),s("code",[e._v("system:bootstrappers")]),e._v("，这一过程称为 Bootstrap Token Auth。")]),e._v(" "),s("p",[e._v("kubelet 启动后使用 "),s("code",[e._v("--bootstrap-kubeconfig")]),e._v(" 向 kube-apiserver 发送 CSR 请求，当这个 CSR 被 approve 后，"),s("code",[e._v("kube-controller-manager")]),e._v(" 为 kubelet 创建 TLS 客户端证书、私钥和 --kubeletconfig 文件。")]),e._v(" "),s("h3",{attrs:{id:"kubelet-client-current-pem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubelet-client-current-pem"}},[e._v("#")]),e._v(" kubelet-client-current.pem")]),e._v(" "),s("p",[e._v("这是一个软连接文件，当 kubelet 配置了 "),s("code",[e._v("--feature-gates=RotateKubeletClientCertificate=true")]),e._v(" 选项后，会在证书总有效期的 70%~90% 的时间内发起续期请求，请求被批准后会生成一个 "),s("code",[e._v("kubelet-client-时间戳.pem")]),e._v(" "),s("code",[e._v("kubelet-client-current.pem")]),e._v(" 文件则始终软连接到最新的真实证书文件，除首次启动外，kubelet 一直会使用这个证书同 apiserver 通讯")]),e._v(" "),s("h3",{attrs:{id:"kubelet-server-current-pem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubelet-server-current-pem"}},[e._v("#")]),e._v(" kubelet-server-current.pem")]),e._v(" "),s("p",[e._v("同样是一个软连接文件，当 kubelet 配置了 "),s("code",[e._v("--feature-gates=RotateKubeletServerCertificate=true")]),e._v(" 选项后，会在证书总有效期的 70%~90% 的时间内发起续期请求，请求被批准后会生成一个 "),s("code",[e._v("kubelet-server-时间戳.pem")]),e._v(" "),s("code",[e._v("kubelet-server-current.pem")]),e._v(" 文件则始终软连接到最新的真实证书文件，该文件将会一直被用于 kubelet 10250 api 端口鉴权")]),e._v(" "),s("p",[s("code",[e._v("kubelet-client.crt")]),e._v(" 该文件在 kubelet 完成 TLS bootstrapping 后生成，此证书是由 "),s("code",[e._v("controller-manager")]),e._v(" 签署的，此后 kubelet 将会加载该证书，用于与 apiserver 建立 TLS 通讯，同时使用该证书的 CN 字段作为用户名，O 字段作为用户组向 apiserver 发起其他请求")]),e._v(" "),s("h2",{attrs:{id:"pause-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pause-容器"}},[e._v("#")]),e._v(" pause 容器")]),e._v(" "),s("ul",[s("li",[e._v("https://github.com/kubernetes/kubernetes/tree/master/build/pause")]),e._v(" "),s("li",[e._v("https://github.com/rootsongjc/kubernetes-handbook/blob/master/concepts/pause-container.md")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ docker run -it --rm --name pause -p "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8081")]),e._v(":80 --ipc shareable registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.2\n\n$ docker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --network container:pause "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --pid container:pause "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --ipc"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("container:pause "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    nginx:1.19.0-alpine\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 能访问到 80 端口")]),e._v("\n")])])]),s("h2",{attrs:{id:"动态-kubelet-配置（dynamic-kubelet-configuration）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态-kubelet-配置（dynamic-kubelet-configuration）"}},[e._v("#")]),e._v(" 动态 kubelet 配置（Dynamic Kubelet Configuration）")]),e._v(" "),s("p",[s("code",[e._v("Kubelet")]),e._v(" "),s("strong",[e._v("动态配置")]),e._v(" 可以使让我们及其方便的大规模更新集群 "),s("code",[e._v("Kubelet")]),e._v(" 配置，让我们可以像配置集群中其他应用一样通过 "),s("code",[e._v("ConfigMap")]),e._v(" 配置 "),s("code",[e._v("Kubelet")]),e._v("，并且 "),s("code",[e._v("Kubelet")]),e._v(" 能动态感知到配置的变化，自动退出重新加载最新配置。不仅如此，Kubelet Dynamic Config 还有本地 "),s("code",[e._v("Checkpoint")]),e._v(" 数据、失败回滚到上一个可用配置集等美丽特性。")]),e._v(" "),s("ul",[s("li",[e._v("https://kubernetes.io/docs/tasks/administer-cluster/reconfigure-kubelet/")])]),e._v(" "),s("p",[e._v("根据官方文档配置即可。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("jq "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'.kubeletconfig|.kind="KubeletConfiguration"|.apiVersion="kubelet.config.k8s.io/v1beta1"\'')]),e._v("\n")])])]),s("p",[e._v("此命令在 "),s("code",[e._v("kubeletconfig")]),e._v(" 字段增加 "),s("code",[e._v('kind="KubeletConfiguration"')]),e._v(" "),s("code",[e._v('apiVersion="kubelet.config.k8s.io/v1beta1"')])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl get no "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${NODE_NAME}")]),e._v(" -o json "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.status.config'")]),e._v("\n")])])]),s("p",[s("strong",[e._v("注意事项")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("kubelet 必须配置重启（systemd），重载配置时 kubelet 会自动退出")])]),e._v(" "),s("li",[s("p",[e._v("如果你的 NODE IP 不固定（WSL2），请不要使用动态配置")])]),e._v(" "),s("li",[s("p",[e._v("https://cloud.tencent.com/developer/article/1381318")])]),e._v(" "),s("li",[s("p",[e._v("https://kubernetes.io/blog/2018/07/11/dynamic-kubelet-configuration/")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);