(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{328:function(n,t,s){"use strict";s.r(t);var e=s(33),a=Object(e.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"coredns-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coredns-插件"}},[n._v("#")]),n._v(" CoreDNS 插件")]),n._v(" "),s("ul",[s("li",[n._v("https://github.com/kubernetes/kubernetes/blob/master/cluster/addons/dns/coredns/coredns.yaml.base")])]),n._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("$ kubectl apply -k addons/coredns\n\n$ kubectl get all -n kube-system\n")])])]),s("h2",{attrs:{id:"test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[n._v("#")]),n._v(" Test")]),n._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("$ kubectl run nginx --image"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("nginx:alpine\n\n$ kubectl get pod\n\n$ kubectl expose pod nginx-6b4b85b77b-sxskl --port "),s("span",{pre:!0,attrs:{class:"token number"}},[n._v("80")]),n._v("\n\n$ kubectl run nginx2 --image"),s("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("nginx:alpine\n\n$ kubectl get pod\n\n$ kubectl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("exec")]),n._v(" nginx2-5f48f6bb64-gr5jk -i -t -- /bin/sh\n\nroot@nginx:/"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# cat /etc/resolv.conf")]),n._v("\n\nroot@nginx:/"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# ping nginx")]),n._v("\n\nroot@nginx:/"),s("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# curl nginx")]),n._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);