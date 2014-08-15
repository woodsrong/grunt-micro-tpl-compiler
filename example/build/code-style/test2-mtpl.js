KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0, filepath = "example/src/code-style/test2.mtpl.html";
    try {
        p += '<table class="table table-headed table-hover table-trade">';
        p += " <thead>";
        p += " <tr>";
        p += ' <th width="10%">时间</th>';
        p += ' <th width="10%">对方编号</th>';
        p += ' <th width="10%">淘宝账号</th>';
        p += ' <th width="18%">商品名称</th>';
        p += ' <th width="10%">号码</th>';
        p += ' <th width="10%">卡类型</th>';
        p += ' <th width="12%">收货信息</th>';
        p += ' <th width="10%">交易状态</th>';
        p += " <th>操作</th>";
        p += " </tr>";
        p += " </thead>";
        p += " <tbody>";
        line = 16;
        p += " ";
        line = 17;
        var rows = data.table.rows;
        line = 18;
        for (var i = 0, l = rows.length; i < l; i++) {
            line = 19;
            var row = rows[i];
            line = 20;
            line = 21;
            p += ' <tr data-tradeId="';
            p += row.tradeId;
            p += '">';
            line = 22;
            p += " <td>";
            p += row.time;
            p += "</td>";
            p += " <td>";
            line = 24;
            p += ' <a data-tabIndex="0" href="javascript:void(0)" class="j_TradeDetail">';
            p += row.tradeId;
            p += "</a>";
            p += " </td>";
            line = 26;
            p += " <td>";
            p += row.nick;
            p += "</td>";
            p += " <td>";
            p += ' <div class="table-trade-text-wrap">';
            line = 29;
            p += " ";
            if (row.itemName) {
                line = 30;
                p += " <p>";
                p += row.itemName;
                p += "</p>";
                line = 31;
                p += " ";
            }
            line = 32;
            p += " ";
            if (row.itemMeal) {
                line = 33;
                p += " <p>";
                p += row.itemMeal;
                p += "</p>";
                line = 34;
                p += " ";
            }
            p += " </div>";
            p += " </td>";
            line = 37;
            p += " <td>";
            p += row.itemPhone;
            p += "</td>";
            p += " <td>";
            line = 39;
            p += " ";
            if (row.cardType) {
                line = 40;
                p += " ";
                p += row.cardType;
                p += ' <p><a data-type="1" href="javascript:void(0)" class="j_TradeModify">修改</a></p>';
                line = 42;
                p += " ";
            }
            p += " </td>";
            p += " <td>";
            p += ' <div class="table-trade-text-wrap">';
            line = 46;
            p += " ";
            if (row.userName) {
                line = 47;
                p += " <p>";
                p += row.userName;
                p += "</p>";
                line = 48;
                p += " ";
            }
            line = 49;
            p += " ";
            if (row.userPhone) {
                line = 50;
                p += " <p>";
                p += row.userPhone;
                p += "</p>";
                line = 51;
                p += " ";
            }
            line = 52;
            p += " ";
            if (row.shippingAddress) {
                line = 53;
                p += " <p>";
                p += row.shippingAddress;
                p += "</p>";
                line = 54;
                p += " ";
            }
            line = 55;
            p += " ";
            if (row.userName || row.userPhone || row.shippingAddress) {
                p += ' <p><a data-type="2" href="javascript:void(0)" class="j_TradeModify">修改</a></p>';
                line = 57;
                p += " ";
            }
            p += " </div>";
            p += " </td>";
            line = 60;
            p += " <td>";
            p += row.tradeStatus;
            p += "</td>";
            p += " <td>";
            p += ' <p><a data-tabIndex="0" href="javascript:void(0)" class="j_TradeDetail">订单详情</a></p>';
            p += ' <p><a data-type="3" href="javascript:void(0)" class="j_TradeModify">订单修改</a></p>';
            p += ' <p><a data-tabIndex="2" href="javascript:void(0)" class="j_TradeDetail">修改记录</a></p>';
            p += " </td>";
            p += " </tr>";
            line = 67;
            p += " ";
        }
        p += " </tbody>";
        p += "</table>";
    } catch (e) {
        if (window.console) {
            console.error("Source mtpl filepath: '" + filepath + "'");
            console.error("Line Number: " + line);
            console.error(e.toString());
        }
    }
    return p;
}});