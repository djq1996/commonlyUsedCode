
/**
 * 分页
 * @param {} id  分页的盒子
 * @param {} item  需要隐藏的子元素
 * @param {} showType  显示方式  表格的和块级元素
 */

function pageFenye(option) {

    var obj, j, obj1, j1;
    var page1 = 0;
    var nowPage1 = 0;//当前页
    var listNum1 = 3;//每页显示<ul>数
    var PagesLen1;//总页数
    var PageNum1 = 4;//分页链接接数(5个)

    function pageComment() {
        obj1 = $(option.item);
        j1 = obj1.length;
        if (j1 > 0) {
            PagesLen1 = Math.ceil(j1 / listNum1);
            upPage1(0, option.id.substr(1));
        }
        else {
            //document.getElementById("changpageC").innerHTML = '<div class="smmiaoshu" style="width:100%"> <img src="/images/jilu.jpg" alt="" style="width:100%;height:auto"/></div>';
        }
    }
    function upPage1(p, id) {
        nowPage1 = p
        //内容变换
        for (var i = 0; i < j1; i++) {
            obj1[i].style.display = "none"
        }
        for (var i = p * listNum1; i < (p + 1) * listNum1; i++) {
            if (obj1[i]) obj1[i].style.display = option.showType
        }
        //分页链接变换
        var strS = "<a href=\"javascript:;\" data-page=\"0\">首页</a>  ";
        var PageNum_2 = PageNum1 % 2 == 0 ? Math.ceil(PageNum1 / 2) + 1 : Math.ceil(PageNum1 / 2)
        var PageNum_3 = PageNum1 % 2 == 0 ? Math.ceil(PageNum1 / 2) : Math.ceil(PageNum1 / 2) + 1
        var strC = "", startPage, endPage;
        if (PageNum1 >= PagesLen1) { startPage = 0; endPage = PagesLen1 - 1 }
        else if (nowPage1 < PageNum_2) { startPage = 0; endPage = PagesLen1 - 1 > PageNum1 ? PageNum1 : PagesLen1 - 1 }//首页
        else { startPage = nowPage1 + PageNum_3 >= PagesLen1 ? PagesLen1 - PageNum1 - 1 : nowPage1 - PageNum_2 + 1; var t = startPage + PageNum1; endPage = t > PagesLen1 ? PagesLen1 - 1 : t }
        for (var i = startPage; i <= endPage; i++) {
            if (i == nowPage1) strC += "<a class=\"page-on\" href=\"javascript:;\"  data-page=\"" + i + "\">" + (i + 1) + "</a> ";
            else strC += "<a href=\"javascript:;\" data-page=\"" + i + "\">" + (i + 1) + "</a> ";
        }
        var strE = "<a href=\"javascript:;\" data-page=\"" + (PagesLen1 - 1) + "\">尾页</a>";
        document.getElementById(id).innerHTML = '<div class="page">' + strS + strC + strE + '</div>';
    }
    pageComment();
    $(option.id).on('click', 'a', function () {
        upPage1(parseInt($(this).attr('data-page')), option.id.substr(1))
    })
};

/*数组去重*/
Array.prototype.distinct = function () {
    var arr = this,
        result = [];
    //  len = arr.length;
    arr.forEach(function (v, i, arr) {    //这里利用map，filter方法也可以实现
        var bool = arr.indexOf(v, i + 1);    //从传入参数的下一个索引值开始寻找是否存在重复
        if (bool === -1) {
            result.push(v);
        }
    })
    return result;
};

//回顶部
$(".top").click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 500)
})

//刷新
function ReloadPage() {
    window.location.reload();
}
