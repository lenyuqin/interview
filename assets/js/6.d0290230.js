(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{413:function(t,s,a){"use strict";a.r(s);var r=a(21),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"mysql常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql常见问题"}},[t._v("#")]),t._v(" MySQL常见问题")]),t._v(" "),a("h3",{attrs:{id:"b-树能存多少数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树能存多少数据"}},[t._v("#")]),t._v(" B+树能存多少数据？")]),t._v(" "),a("p",[t._v("一个扇区的大小是512字节，而文件系统的最小单元是块，一个块的大小是4k，而对于InnoDB存储引擎也有自己的最小储存单元——页（Page），一个页的大小是16K。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/201907031018375.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly90aWFueWFsZWkuYmxvZy5jc2RuLm5ldA==,size_16,color_FFFFFF,t_70",alt:"img"}})]),t._v(" "),a("p",[t._v("假设一行数据的大小是1k，那么一个页可以存放16行这样的数据。")]),t._v(" "),a("p",[t._v("假设主键ID为bigint类型，长度为8字节，而指针大小在InnoDB源码中设置为6字节，这样一共14字节，")]),t._v(" "),a("p",[t._v("我们一个页中能存放多少这样的单元，其实就代表有多少指针，即16384/14=1170。")]),t._v(" "),a("p",[t._v("那么可以算出一棵高度为2的B+树，能存放1170*16=18720条这样的数据记录。三层就是 1170 * 1170 *16=2千多万条！")]),t._v(" "),a("h3",{attrs:{id:"何时用聚集索引何时用非聚集索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何时用聚集索引何时用非聚集索引"}},[t._v("#")]),t._v(" 何时用聚集索引何时用非聚集索引")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210129232338563.png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);