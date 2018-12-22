(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"efk-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#efk-插件","aria-hidden":"true"}},[e._v("#")]),e._v(" EFK 插件")]),e._v(" "),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("推荐宿主机内存 16G")])]),e._v(" "),t("li",[t("p",[e._v("虚拟机每个节点内存分配 3G，之前分配了 2G 一直报错")])]),e._v(" "),t("li",[t("p",[e._v("es-statefulset.yaml 的 replicas 参数 "),t("strong",[e._v("不能")]),e._v(" 为 1")])])]),e._v(" "),t("h2",{attrs:{id:"资源占用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源占用","aria-hidden":"true"}},[e._v("#")]),e._v(" 资源占用")]),e._v(" "),t("p",[t("code",[e._v("elasticsearch-logging-N")]),e._v(" 单个 pod 内存占用 1.5 G。")]),e._v(" "),t("h2",{attrs:{id:"基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础知识","aria-hidden":"true"}},[e._v("#")]),e._v(" 基础知识")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("elasticsearch 负责存储日志。")])]),e._v(" "),t("li",[t("p",[e._v("fluentd 负责将集群中 docker 主机上的日志发送给 elasticsearch，因此 fluentd 在 k8s 集群中需要以 daemonset 的方式运行。")])]),e._v(" "),t("li",[t("p",[e._v("kibana 负责图形化展示日志信息。")])])]),e._v(" "),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署")]),e._v(" "),t("ul",[t("li",[e._v("https://github.com/kubernetes/kubernetes/tree/master/cluster/addons/fluentd-elasticsearch")])]),e._v(" "),t("h3",{attrs:{id:"给-node-打标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给-node-打标签","aria-hidden":"true"}},[e._v("#")]),e._v(" 给 Node 打标签")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl label nodes NODE_NAME beta.kubernetes.io/fluentd-ds-ready"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),t("h3",{attrs:{id:"部署-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 部署")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl create -f addons/efk\n\n$ kubectl get pods -n kube-system -o wide"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'elasticsearch|fluentd|kibana'")]),e._v("\n\n$ kubectl cluster-info"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -E "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Elasticsearch|Kibana'")]),e._v("\n\n$ kubectl proxy --address"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'192.168.57.1'")]),e._v(" --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("8086 --accept-hosts"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'^*$'")]),e._v("\n")])])]),t("p",[e._v("http://192.168.57.1:8086/api/v1/namespaces/kube-system/services/kibana-logging/proxy")]),e._v(" "),t("h2",{attrs:{id:"删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl delete deployment.apps/kibana-logging -n kube-system\n\n$ kubectl delete service/kibana-logging -n kube-system\n\n$ kubectl delete service/elasticsearch-logging -n kube-system\n\n$ kubectl delete daemonset.apps/fluentd-es-v2.2.0 -n kube-system\n\n$ kubectl delete statefulset.apps/elasticsearch-logging -n kube-system\n\n$ kubectl delete statefulset.apps/elasticsearch-logging -n kube-system\n")])])]),t("h2",{attrs:{id:"资源列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源列表","aria-hidden":"true"}},[e._v("#")]),e._v(" 资源列表")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("service/elasticsearch-logging\n\nservice/kibana-logging\n\ndaemonset.apps/fluentd\n")])])]),t("h2",{attrs:{id:"more-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-information","aria-hidden":"true"}},[e._v("#")]),e._v(" More Information")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("http://blog.51cto.com/ylw6006/2071943")])]),e._v(" "),t("li",[t("p",[e._v("https://www.jianshu.com/p/1000ae80a493")])])])])}],!1,null,null,null);r.options.__file="efk.md";a.default=r.exports}}]);