(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{365:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oci-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oci-runtime"}},[t._v("#")]),t._v(" OCI Runtime")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("https://kubernetes.io/docs/concepts/containers/runtime-class/")])]),t._v(" "),a("li",[a("p",[t._v("https://github.com/opencontainers/runtime-spec/blob/master/implementations.md")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/opencontainers/runc",target:"_blank",rel:"noopener noreferrer"}},[t._v("runc"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/containers/crun",target:"_blank",rel:"noopener noreferrer"}},[t._v("crun"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/google/gvisor",target:"_blank",rel:"noopener noreferrer"}},[t._v("runsc"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/kata-containers/runtime",target:"_blank",rel:"noopener noreferrer"}},[t._v("kata-containers"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"runc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runc"}},[t._v("#")]),t._v(" runc")]),t._v(" "),a("ul",[a("li",[t._v("https://github.com/opencontainers/runc")])]),t._v(" "),a("h2",{attrs:{id:"gvisor-runsc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gvisor-runsc"}},[t._v("#")]),t._v(" gvisor(runsc)")]),t._v(" "),a("ul",[a("li",[t._v("https://github.com/google/gvisor")]),t._v(" "),a("li",[t._v("https://gvisor.dev/docs/user_guide/docker/")])]),t._v(" "),a("h3",{attrs:{id:"在-kubernetes-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-kubernetes-使用"}},[t._v("#")]),t._v(" 在 Kubernetes 使用")]),t._v(" "),a("h4",{attrs:{id:"containerd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#containerd"}},[t._v("#")]),t._v(" Containerd")]),t._v(" "),a("ul",[a("li",[t._v("https://github.com/google/gvisor-containerd-shim")]),t._v(" "),a("li",[t._v("https://github.com/google/gvisor-containerd-shim/blob/master/docs/runtime-handler-shim-v2-quickstart.md")])]),t._v(" "),a("p",[t._v("下载 "),a("code",[t._v("containerd-shim-runsc-v1")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL -o /usr/local/bin/containerd-shim-runsc-v1 https://github.com/google/gvisor-containerd-shim/releases/download/v0.0.3/containerd-shim-runsc-v1.linux-amd64\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/containerd-shim-runsc-v1\n")])])]),a("p",[a("code",[t._v("/etc/containerd/config.toml")])]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [plugins.cri.containerd.runtimes.${HANDLER_NAME}]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("plugins.cri.containerd.runtimes.runsc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("runtime_type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.containerd.runsc.v1"')]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart containerd\n")])])]),a("h4",{attrs:{id:"cri-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cri-o"}},[t._v("#")]),t._v(" cri-o")]),t._v(" "),a("p",[a("code",[t._v("/etc/crio/crio.conf")])]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [crio.runtime.runtimes.${HANDLER_NAME}]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("crio.runtime.runtimes.runsc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#  runtime_path = "${PATH_TO_BINARY}"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("runtime_path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/bin/runsc"')]),t._v("\n")])])]),a("h4",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("新建 "),a("code",[t._v("runtimeclass")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node.k8s.io/v1beta1  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RuntimeClass is defined in the node.k8s.io API group")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RuntimeClass\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myclass  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The name the RuntimeClass will be referenced by")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RuntimeClass is a non-namespaced resource")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# handler: myconfiguration  # The name of the corresponding CRI configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" runsc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 值与 CRI 配置文件对应 ${HANDLER_NAME}")]),t._v("\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("runtimeclass")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mypod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与 runtimeclass 配置文件的 metadata.name 对应")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runtimeClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myclass\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n")])])]),a("h3",{attrs:{id:"在-docker-中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-docker-中使用"}},[t._v("#")]),t._v(" 在 Docker 中使用")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("runsc")]),t._v(" 与 "),a("code",[t._v("Docker")]),t._v(" 的 "),a("code",[t._v("--exec-opt native.cgroupdriver=systemd")]),t._v(" 不兼容。")]),t._v(" "),a("li",[t._v("https://github.com/google/gvisor/issues/193")])]),t._v(" "),a("p",[t._v("下载 "),a("code",[t._v("runsc")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://github.com/docker-practice/gvisor-mirror/releases/download/nightly/runsc-linux-amd64.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -C /usr/local/bin -zxvf -\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /usr/local/bin/runsc\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/runsc\n")])])]),a("p",[t._v("配置 Docker")]),t._v(" "),a("p",[a("code",[t._v("/etc/docker/daemon.json")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runtimes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runsc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/bin/runsc"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runsc-kvm"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/bin/runsc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runtimeArgs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--platform=kvm"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在 Docker 中使用")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run --runtime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("runsc --rm hello-world\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("安装 kvm")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" qemu-kvm\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);