KISSY.add(function (S, require, exports, module) {
 return function (data) {
    var p = "", line = 0, filepath = "example/src/code-style/test2.mtpl.html";
    try {
        line = 1;
        p += '<table class="table table-headed table-hover table-trade">';
        line = 2;
        p += " <thead>";
        line = 3;
        p += " <tr>";
        line = 4;
        p += '  <th width="10%">时间</th>';
        line = 5;
        p += '  <th width="10%">对方编号</th>';
        line = 6;
        p += '  <th width="10%">淘宝账号</th>';
        line = 7;
        p += '  <th width="18%">商品名称</th>';
        line = 8;
        p += '  <th width="10%">号码</th>';
        line = 9;
        p += '  <th width="10%">卡类型</th>';
        line = 10;
        p += '  <th width="12%">收货信息</th>';
        line = 11;
        p += '  <th width="10%">交易状态</th>';
        line = 12;
        p += "  <th>操作</th>";
        line = 13;
        p += " </tr>";
        line = 14;
        p += " </thead>";
        line = 15;
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
            p += "  <td>";
            p += row.time;
            p += "</td>";
            line = 23;
            p += "  <td>";
            line = 24;
            p += '   <a data-tabIndex="0" href="javascript:void(0)" class="j_TradeDetail">';
            p += row.tradeId;
            p += "</a>";
            line = 25;
            p += "  </td>";
            line = 26;
            p += "  <td>";
            p += row.nick;
            p += "</td>";
            line = 27;
            p += "  <td>";
            line = 28;
            p += '   <div class="table-trade-text-wrap">';
            line = 29;
            p += "    ";
            if (row.itemName) {
                line = 30;
                p += "    <p>";
                p += row.itemName;
                p += "</p>";
                line = 31;
                p += "    ";
            }
            line = 32;
            p += "    ";
            if (row.itemMeal) {
                line = 33;
                p += "    <p>";
                p += row.itemMeal;
                p += "</p>";
                line = 34;
                p += "    ";
            }
            line = 35;
            p += "   </div>";
            line = 36;
            p += "  </td>";
            line = 37;
            p += "  <td>";
            p += row.itemPhone;
            p += "</td>";
            line = 38;
            p += "  <td>";
            line = 39;
            p += "   ";
            if (row.cardType) {
                line = 40;
                p += "   ";
                p += row.cardType;
                line = 41;
                p += '   <p><a data-type="1" href="javascript:void(0)" class="j_TradeModify">修改</a></p>';
                line = 42;
                p += "   ";
            }
            line = 43;
            p += "  </td>";
            line = 44;
            p += "  <td>";
            line = 45;
            p += '   <div class="table-trade-text-wrap">';
            line = 46;
            p += "    ";
            if (row.userName) {
                line = 47;
                p += "    <p>";
                p += row.userName;
                p += "</p>";
                line = 48;
                p += "    ";
            }
            line = 49;
            p += "    ";
            if (row.userPhone) {
                line = 50;
                p += "    <p>";
                p += row.userPhone;
                p += "</p>";
                line = 51;
                p += "    ";
            }
            line = 52;
            p += "    ";
            if (row.shippingAddress) {
                line = 53;
                p += "    <p>";
                p += row.shippingAddress;
                p += "</p>";
                line = 54;
                p += "    ";
            }
            line = 55;
            p += "    ";
            if (row.userName || row.userPhone || row.shippingAddress) {
                line = 56;
                p += '    <p><a data-type="2" href="javascript:void(0)" class="j_TradeModify">修改</a></p>';
                line = 57;
                p += "    ";
            }
            line = 58;
            p += "   </div>";
            line = 59;
            p += "  </td>";
            line = 60;
            p += "  <td>";
            p += row.tradeStatus;
            p += "</td>";
            line = 61;
            p += "  <td>";
            line = 62;
            p += '   <p><a data-tabIndex="0" href="javascript:void(0)" class="j_TradeDetail">订单详情</a></p>';
            line = 63;
            p += '   <p><a data-type="3" href="javascript:void(0)" class="j_TradeModify">订单修改</a></p>';
            line = 64;
            p += '   <p><a data-tabIndex="2" href="javascript:void(0)" class="j_TradeDetail">修改记录</a></p>';
            line = 65;
            p += "  </td>";
            line = 66;
            p += " </tr>";
            line = 67;
            p += " ";
        }
        line = 68;
        p += " </tbody>";
        line = 69;
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