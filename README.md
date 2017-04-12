# jqGridExportExcel
jqGrid动态获取列并导出Excel

### 1.版本
#### 1.1 JS脚本文件
> - jquery-1.11.0.min.js
> -  jquery.jqGrid.min.js  --->  4.6.0
> - jquery.tablednd.js 
> - ui.multiselect.js
#### 1.2 CSS样式文件
> - jquery-ui.css
> - ui.jqgrid.css
> - ui.multiselect.css

### 2.修改jquery.jqGrid.min.js源文件
  excelExport: function (a) {
            a = c.extend({exptype: "remote", url: a, oper: "oper", tag: "excel", exportOptions: {}}, a || {});
            return this.each(function () {
                if (this.grid) {
                    var d;
                    "remote" === a.exptype && (d = c.extend({}, this.p.postData), d[a.oper] = a.tag, d = jQuery.param(d), d = -1 !==
                   a.url.indexOf("?") ? a.url + "&" + d : a.url + "?" + d, window.location = d)
                   改为： 
                   a.url.indexOf("?") ? a.url + "&" + d : a.url + "?" + d, window.location = a.url)
                }
            })
        }
 
 ### 3.特别提示
  测试4.7.1导出Excel报Cannot read property 'indexOf' of null,暂时不知道什么原因导致的。
