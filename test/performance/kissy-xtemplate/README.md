Performance Test - compared with kissy xtemplate
====
性能测试，和kissy xtemplate比较

## 实验：分别使用micro template和kissy xtemplate执行同样逻辑的模板拼接操作100000次，比较耗时

### 实验前假设

js模板的性能瓶颈主要体现在以下两点
* 模板是否预编译
* 字符串拼接方式，+=（v8引擎有特别优化，性能不错） 或者 array.join()(IE浏览器下表现更佳)

粗略看，mtpl和xtpl都是编译后的模板，而且字符串拼接都是使用的+=，性能应该差异不大。

### 实验结果

机器：Mac Air（Intel dual core i5 1.3GHz）
浏览器：chrome 35 stable version

* mtpl：执行100000次，耗时约100ms；
* xtpl：执行100000次，耗时约4500ms；

性能相差一个数量级之多，达到约45倍!

> 数据如有错误，恳请指正

### 实验源文件
* <https://github.com/aliqin/grunt-micro-tpl-compiler/tree/master/test/performance/kissy-xtemplate>

### jsperf实验结果
* <http://jsperf.com/performance-comparison-between-micro-tpl-and-kissy-xtem/4>
* 说明
 - mtpl和xtpl都已经预加载

![resukt](http://gtms04.alicdn.com/tps/i4/TB1RYrsFVXXXXXEXpXX3zh9_FXX-978-349.png)
