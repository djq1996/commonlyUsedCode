
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
//分页
pageFenye({
	id: "#brokerPage",
	item: ".describe .broker-list",
	showType: "block"
});
pageFenye({
	id: "#tablePage",
	item: "#table-cont tr",
	showType: "table-row"
});

/*---------------------------轮播图 -----------------------------------*/
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 5,
	touchRatio: 0.2,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
	slideToClickedSlide: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
/*大图模式*/
var big_img = new Swiper('.big-img', {
	spaceBetween: 10,
	loopedSlides: 5,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
$(".gallery-top").on("click", ".swiper-slide", function() {
	var index = $(this).index();
	big_img.slideTo(index, 1000, false); //切换到第一个slide，速度为1秒
	window.top.layer.open({
		type: 1,
		title: false,
		shade: 0.4,
		skin: 'bg-img-class',
		shadeClose: true,
		closeBtn: 1,
		content: $(".big-img"),
		area: ["80%", "80%"],
	});
});
setTimeout(function(){
	$(".big-img").hide()
},0)
/*---------------------------判断经纪人位置-----------------------------------*/

var el = document.querySelector('.broker'), //经纪人
	fix_nav = document.querySelector('.fix-nav'), //导航栏
	zhoubian = document.querySelector('a[name=zhoubian]'), //周边
	elTop = el.offsetTop,
	fix_nav_top = fix_nav.offsetTop,
	zhoubian_top = zhoubian.offsetTop;

var nav_tab = document.querySelectorAll('.fix-nav a');
var nav_div = document.querySelectorAll('.maodian');
var a = nav_div.offsetHeight;
window.onscroll = function() {
	var sTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(sTop > elTop) {
		el.style.position = 'fixed';
		el.style.top = '50px';
		//		el.style.right = '50px';
		el.style.background = '#fff';
		el.style.zIndex = '7';
		fix_nav.style.display = 'block'
	} else {
		el.style.position = 'relative';
		el.style.top = 'auto';
		el.style.right = 'auto';
	}

	if(sTop > zhoubian_top - 100) {
		el.style.display = 'none'
	} else {
		el.style.display = 'block'
	}

	if(sTop < 600) {
		fix_nav.style.display = 'none'
	}

	/*导航跟动内容*/
	for(var i = 0; i < nav_div.length; i++) {
		if(sTop + 50 >= nav_div[i].offsetTop) {
			for(var j = 0; j < nav_div.length; j++) {
				nav_tab[j].className = "";
			}
			nav_tab[i].className = "navLiActive";
		}
	}
}
/*---------------------------地图需要小区的名称 -----------------------------------*/
//var communityName = "牡丹江新星花园";
/*---------------------------地图需要小区的名称 -----------------------------------*/
/*初始化地图*/
var map = new AMap.Map("djq-baidu-api", {
    resizeEnable: true,
    scrollWheel: false,
    zoom: 10
});
AMap.plugin(['AMap.ToolBar', 'AMap.Scale'],
    function () {
        map.addControl(new AMap.ToolBar());

        map.addControl(new AMap.Scale());

    });
var placeSearch, geocoder, lngAndLat = [], //周边搜索，经纬度获取，经纬度存值
	classNum = 0, // icon  样式
	lnglat; //计算距离
//地点查询参数
var option = {
	city: "全国", //城市
	type: "地铁|公交",
	map: map,
	//panel: "panel"
};
AMap.service(["AMap.PlaceSearch"], function() {
	//构造地点查询类
	placeSearch = new AMap.PlaceSearch(option);
});
AMap.service('AMap.Geocoder', function() { //回调函数
	//实例化Geocoder
	geocoder = new AMap.Geocoder({
		city: "全国" //
	});

})

$(".itemBtn li").click(function() {
	classNum = $(this).index();
	$("#serachName").text($(this).find('a').text())
	/*设置搜索关键字*/
	placeSearch.setType($(this).attr('data-type'));
	//获取当前房子位置经纬度
	getNL();
	$(this).addClass('active').siblings().removeClass('active')

});
/*默认执行一次搜索交通*/

setTimeout(function() {
	getNL()
}, 200);

/*根据关键字获取经纬度*/
var getNL = function() {
	//geocoder.getLocation(communityName, function(status, result) {
	//	if(status === 'complete' && result.info === 'OK') {
	//		var data = result.geocodes[0];
	//		lngAndLat.push(data.location.lng)
	//		lngAndLat.push(data.location.lat)
	//		//
	//		lnglat = new AMap.LngLat(data.location.lng, data.location.lat)
	//		load()
	//		//比如在获得的经纬度上打上一个Marker
	//	} else {
	//		console.log('获取经纬度失败')
	//		//获取经纬度失败
	//	}
	//});

	var $CoordinatesX = $("#CoordinatesX").val();
	var $CoordinatesY = $("#CoordinatesY").val();
	lngAndLat.push($CoordinatesX)
	lngAndLat.push($CoordinatesY)
	lnglat = new AMap.LngLat($CoordinatesX, $CoordinatesY)
	load()
}
//周边查询
var load = function() {
	placeSearch.searchNearBy("", lngAndLat, 2000, function(status, result) {
		if(status === 'complete' && result.info === 'OK') {
			var arr = result.poiList.pois;
			var str = '';
			var classArr = ['icon-jt', 'icon-gouwu1', 'icon-school', 'icon-yinhang', 'icon-add', 'icon-canting', 'icon-xiuxian1']
			for(var i = 0; i < arr.length; i++) {
				str += '<li>' +
					'<div class="address clearfix">' +
					'<div class="address-name">' +
					'<i class="icon iconfont ' + classArr[classNum] + '"></i>' +
					'<span>' + arr[i].name + '</span>' +
					'</div>' +
					'<div class="address-juli">' +
					'<i class="icon iconfont icon-juli"></i>' +
					'<span>' + lnglat.distance([arr[i].location.lng, arr[i].location.lat]).toFixed(0) + '米</span>' +
					'</div>' +
					'</div>' +
					'<div class="address-car">' + arr[i].address + '</div>' +
					'</li>'
			}
			$(".results-box").html(str)
		}
	});
};
