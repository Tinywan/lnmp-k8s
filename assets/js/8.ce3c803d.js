(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{208:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"coredns-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coredns-插件"}},[t._v("#")]),t._v(" CoreDNS 插件")]),t._v(" "),n("ul",[n("li",[t._v("https://github.com/kubernetes/kubernetes/blob/master/cluster/addons/dns/coredns/coredns.yaml.base")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ kubectl apply -k addons/coredns\n\n$ kubectl get all -n kube-system\n")])])]),n("h2",{attrs:{id:"test"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("$ kubectl run nginx --image"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx:alpine\n\n$ kubectl get pod\n\n$ kubectl expose pod nginx-6b4b85b77b-sxskl --port "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n\n$ kubectl run nginx2 --image"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx:alpine\n\n$ kubectl get pod\n\n$ kubectl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" nginx2-5f48f6bb64-gr5jk -i -t -- /bin/sh\n\nroot@nginx:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /etc/resolv.conf")]),t._v("\n\nroot@nginx:/"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ping nginx")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);