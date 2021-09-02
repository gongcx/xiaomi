var homeData = JSON.parse(sessionStorage.getItem("home"));
var category = JSON.parse(sessionStorage.getItem("category"))
//渲染header导航内容
category.forEach(function(item, i) {
	var nav_mianHtml = ''
	if (homeData.promotion[i]) {
		homeData.promotion[i].forEach(function(item2) {
			nav_mianHtml += `
				<li>
					<a href='#'>
						<img src='${item2.avatar}'>
						<p>${item2.name}</p>
						<span>￥${item2.pirce}元</span>
					</a>
				</li>
			`;
		});
	};
	$(`
		<li>
			<a href="#">${ item.name }</a>
			<ul class='nav-sub'>${nav_mianHtml}</ul>
		<li>
	`).appendTo('.header ul.nav');
});
$(`
	<div class='goods-list fl'>
		<a href='../category/category.html'>全部商品分类</a>
		<div class='banner_mainwarp'>
			<ul class='mian' ></ul>
		</div>
	</div>
`).insertBefore('ul.nav');
var banner_main = homeData.banner.banner_main;
var banner_sub = homeData.banner.banner_sub;

banner_main.forEach(function(item, i) {
	var banner_subHtml = '';
	if (banner_sub[i]) {
		banner_sub[i].forEach(function(item2) {
			banner_subHtml +=
				`
					<li class='sub_li'>
						<a href="#">
							<img src="${item2.avatar}" />
							<span>${item2.name}</span>
						</a>
					</li>
				`
		});

	}
	$(`
		<li>
			<a href='../list/list.html?cid=${item.cid}'>
				<span>${item.name}</span>
				<span class='${item.icon}'></span>
				<ul class='sub'>${banner_subHtml}</ul>
			</a>
		</li>
	`).appendTo('.goods-list ul.mian');

});


function searchParse(url) {
	var searchString = url.slice(url.indexOf('?') + 1);
	if (searchString.length === 0) return {};
	var params = searchString.split('&');
	var obj = {};
	params.forEach(function(param) {
		obj[param.split('=')[0]] = param.split('=')[1];
	})
	return obj;
};

	//从地址栏中url解析出商品的分类 id
	var query = searchParse(window.location.href);
	var cid = parseInt(query.cid || 1);
	// 根据商品分类id 筛选出商品并显示
	
	var products = homeData.products;
	var listData = products.filter(function(item) {
		return item.cid === cid;
	});


function addList() {
	if (listData.length === 0) $('ul.list').replaceWith(`
		<div style='height:auto; width:100%; text-align:center'>
			<h1 style="line-height:300px; text-align:center" >商品已售完...</h1>
		</div>
	`)
	else {
		listData.forEach(function(item) {
			$(`
				<li>
					<a href='../detail/detail.html?id=${item.id}'>
						<img src='${item.avatar}' />
						<div class='figure clearfix'>
							<div class='left'>
								<h3>${item.name}</h3>
								<p>${item.brief}</p>
							</div>
							<div class='right'>
								<span class='price'>${item.price}<span>元起</span></span>
								<span class='oldprice'>${item.oldprice}</span>
							</div>
						</div>
						<div class='sales'>月销：${item.sales}</div>
					</a>
				</li>
			`).appendTo('ul.list');
		});
	};

};
(function (){
	
	addList();
})();
//排序
//排序函数
//默认

//升序
function ascend(property) {
	return function(a, b) {
		var value1 = a[property];
		var value2 = b[property];
		return value1 - value2;
	};
};
//降序
function descend(property) {
	return function(a, b) {
		var value1 = a[property];
		var value2 = b[property];
		return value2 - value1;
	};
};
// 默认
$('.sort button').eq(0).on('click', function() {
	listData = listData.sort(ascend('id'));
	$('ul.list').html('');
	addList();
	$('.sort button.price').children().text('');
	$('.sort button.sales').children().text('');
});
//按价格升序
$('.sort button.price').on('click', function() {
	if($(this).hasClass('aaa')){
		$('ul.list').empty();
		listData = listData.sort(ascend('price'));
		addList();
		$(this).removeClass('aaa')
		$(this).children().text('升序')
	}else{
		$('ul.list').empty();
		listData = listData.sort(descend('price'));
		addList();
		$(this).addClass('aaa')
		$(this).children().text('降序')
	}
	$('.sort button.sales').children().text('');
});
//按销量升序
$('.sort button.sales').on('click', function() {
	if($(this).hasClass('aaa')){
		$('ul.list').empty();
		listData = listData.sort(ascend('sales'));
		addList();
		$(this).removeClass('aaa')
		$(this).children().text('升序')
	}else{
		$('ul.list').empty();
		listData = listData.sort(descend('sales'));
		addList();
		$(this).addClass('aaa')
		$(this).children().text('降序')
	}
	$('.sort button.price').children().text('');
});
// 导航购物车小图标
	function icon(){
		var count = 0;
		var store = JSON.parse(sessionStorage.getItem('store'));
		if(store.length === 0){
			$('.top span.count').text(`(0)`)
		}else{
			var counts = JSON.parse(sessionStorage.getItem("cart"));
			var list = counts.filter(function(item) { return item.u_name === store[0][0].name });
			list.forEach(function(item) {
				count +=item.count;
			})
		}
		$('.top span.count').text(`(${count})`)
		if(count>0){
			$('.top .cart').css({color:'#ff6700'})
		}else{
			$('.top .cart').css({color:'#fff'});
			$('.top .cart').hover(function(){
				$(this).css({color:'#ff6700'});
			},function(){
				$(this).css({color:'#fff'});
			});
		}
	}
	icon();

(function(){
	
	
	
	//登录
		var store = JSON.parse(sessionStorage.getItem("store"));
	
	if(store.length === 0){
		$('.top-container>ul.fr li').eq(4).html(`<a href='../login/login.html'>登录</a>`);
		$('.top-container>ul.fr li').eq(2).html(`<a href='../register/register.html'>注册</a>`)
	}else{
		store.forEach(function(item){
			$('.top-container>ul.fr li').eq(4).text(`${item[0].name}`);
		});
		$('.top-container>ul.fr li').eq(2).html(`<a href='../profile/profile.html'>个人中心</a>`);
	};
	
		
})();

//置顶按钮
$(window).scroll(function() {
	if ($(document).scrollTop() > 160) {
		$('.assist1').fadeIn();
	} else {
		$('.assist1').fadeOut();
	}
});
$('.assist1').click(function() {
	var timer = setInterval(function() {
		if ($(document).scrollTop() == 0) {
			clearInterval(timer);
		} else {
			$(document).scrollTop($(document).scrollTop() - 30);
		}
	}, 5);
});


$('.header>ul.nav>li:nth-child(-n + 14)').hover(
	function() {
		$('.header>.nav-main').css({
			height: '200px',
			borderTop:'1px solid #ccc',
			borderBottom:'1px solid #ccc'
		})
	},
	function() {
		$('.header>.nav-main').css({
			height: '0px',
			border:'none'
		})
	}
);
$('.header>ul.nav>li:nth-child(even)').css({ display: 'none' });
$('.header>ul.nav>li').css({ padding: '40px 15px' });