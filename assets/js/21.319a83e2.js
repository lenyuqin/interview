(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{428:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-什么是事务传播行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是事务传播行为"}},[t._v("#")]),t._v(" 1. 什么是事务传播行为？")]),t._v(" "),s("p",[t._v("事务传播行为用来描述由某一个事务传播行为修饰的方法被嵌套进另一个方法的时事务如何传播。")]),t._v(" "),s("p",[t._v("用伪代码说明：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//doSomething")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transaction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Propagation")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("XXX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("methodB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//doSomething")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("代码中"),s("code",[t._v("methodA()")]),t._v("方法嵌套调用了"),s("code",[t._v("methodB()")]),t._v("方法，"),s("code",[t._v("methodB()")]),t._v("的事务传播行为由"),s("code",[t._v("@Transaction(Propagation=XXX)")]),t._v("设置决定。这里需要注意的是"),s("code",[t._v("methodA()")]),t._v("并没有开启事务，某一个事务传播行为修饰的方法并不是必须要在开启事务的外围方法中调用。")]),t._v(" "),s("h2",{attrs:{id:"事务的七种传播行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务的七种传播行为"}},[t._v("#")]),t._v(" 事务的七种传播行为")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TyDXIx8yqoKI0K7vJdU6UqPQULYQmViaaXman8MPJI1nJEbzhYFL9fIWnqCNEucxiaddIkd0K5WkhuQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("h2",{attrs:{id:"事务隔离的五种级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离的五种级别"}},[t._v("#")]),t._v(" 事务隔离的五种级别")]),t._v(" "),s("p",[s("strong",[t._v("TransactionDefinition 接口中定义了五个表示隔离级别的常量：")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("TransactionDefinition.ISOLATION_DEFAULT:")]),t._v(" 使用后端数据库默认的隔离级别，Mysql 默认采用的 REPEATABLE_READ隔离级别 Oracle 默认采用的 READ_COMMITTED隔离级别.")]),t._v(" "),s("li",[s("strong",[t._v("TransactionDefinition.ISOLATION_READ_UNCOMMITTED:")]),t._v(" 最低的隔离级别，允许读取尚未提交的数据变更，"),s("strong",[t._v("可能会导致脏读、幻读或不可重复读")])]),t._v(" "),s("li",[s("strong",[t._v("TransactionDefinition.ISOLATION_READ_COMMITTED:")]),t._v(" 允许读取并发事务已经提交的数据，"),s("strong",[t._v("可以阻止脏读，但是幻读或不可重复读仍有可能发生")])]),t._v(" "),s("li",[s("strong",[t._v("TransactionDefinition.ISOLATION_REPEATABLE_READ:")]),t._v(" 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，"),s("strong",[t._v("可以阻止脏读和不可重复读，但幻读仍有可能发生。")])]),t._v(" "),s("li",[s("strong",[t._v("TransactionDefinition.ISOLATION_SERIALIZABLE:")]),t._v(" 最高的隔离级别，完全服从ACID的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，"),s("strong",[t._v("该级别可以防止脏读、不可重复读以及幻读")]),t._v("。但是这将严重影响程序的性能。通常情况下也不会用到该级别。")])]),t._v(" "),s("h2",{attrs:{id:"事务失效的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务失效的原因"}},[t._v("#")]),t._v(" 事务失效的原因")]),t._v(" "),s("p",[t._v("主要是这八点：")]),t._v(" "),s("ol",[s("li",[t._v("数据库引擎是否支持事务(比如MyISAM就不支持事务）")]),t._v(" "),s("li",[t._v("注解所在的类是否被加载成Bean")]),t._v(" "),s("li",[t._v("注解所在的方法是否为public所修饰")]),t._v(" "),s("li",[t._v("是否发生了自调用机制——同一个类之中的方法相互调用")]),t._v(" "),s("li",[t._v("所用的数据源是否加载了事务管理器")]),t._v(" "),s("li",[s("code",[t._v("@Transactional")]),t._v("的扩展配置propagation是否正确（七种传播行为）")]),t._v(" "),s("li",[t._v("异常被吃掉了——自己try自己catch")]),t._v(" "),s("li",[t._v("异常抛出错误——抛的不是RuntimeException")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.xiaoyou66.com/2021/04/09/6557a8de658ed.png",alt:"image-20210409204919647"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);