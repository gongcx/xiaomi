var homeData = JSON.parse(sessionStorage.getItem("home"));
var products = homeData.products;
var category = JSON.parse(sessionStorage.getItem("category"));
var profile = JSON.parse(sessionStorage.getItem('profile'));
var address = JSON.parse(sessionStorage.getItem('address'));
var store = JSON.parse(sessionStorage.getItem("store"));
var orderData = JSON.parse(sessionStorage.getItem('order'));
var close = JSON.parse(sessionStorage.getItem('close'));

//渲染header导航内容
category.forEach(function(item, i) {
	var nav_mianHtml = ''
	if(homeData.promotion[i]){
		homeData.promotion[i].forEach(function(item2) {
			nav_mianHtml += `
				<li>
					<a href='../list/list.html?cid=${item.cid}'>
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
		<a href='#'>全部商品分类</a>
		<div class='banner_mainwarp'>
			<ul class='mian' ></ul>
		</div>
	</div>
`).insertBefore('ul.nav');
var banner_main = homeData.banner.banner_main;
var banner_sub = homeData.banner.banner_sub;

banner_main.forEach(function(item,i) {
	var banner_subHtml = '';
	if(banner_sub[i]){
		banner_sub[i].forEach(function(item2){
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

(function(){
	profileTitle = profile.profileTitle;
	profileList = profile.profileList;
	profileTitle.forEach(function(item,i){
		var profileListHtml = '';
		profileList[i].forEach(function(item2){
			profileListHtml+=`
				<li><a href='${item2.href}'>${item2.name}</a><li>
			`
			
		})
		$(`
			<h3 class='title'>${item.name}</h3>
			<ul>${profileListHtml}</ul>
			
		`).appendTo('.col-left')
	});
})();




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
			$('.top .cart').css({color:'#ff6700'});
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
		$('.col-right').empty();
		$('.top-container>ul.fr li').eq(4).html(`<a href='../login/login.html'>登录</a>`);
		$('.top-container>ul.fr li').eq(2).html(`<a href='../register/register.html'>注册</a>`)
	}else{
		store.forEach(function(item){
			$('.top-container>ul.fr li').eq(4).text(`${item[0].name}`);
		});
		$('.top-container>ul.fr li').eq(2).html(`<a href='../profile/profile.html'>个人中心</a>`);
	};
})();
//订单详情


//全部订单
(function(){
	var orderDetail = JSON.parse(sessionStorage.getItem('orderDetail'))
	var name = JSON.parse(sessionStorage.getItem('store'))[0][0].name;
	var order = orderData.filter(function(item){ return item.u_name === name });
	var arr1 = [];
	order.forEach(function(item2){
		var ordernow = orderDetail.filter(function(item) { return item[0].orderId === item2.id })[0];
		arr1.push(ordernow)
	});
	var ispay = '';
	order.forEach(function(item,i){ 
		if(item.isPay === false){
			ispay = '等待付款';
			isp = '未支付'
		}else{
			ispay = '等待收货';
			isp = '在线支付'
		}
		var showHtml ='';
			arr1[i].forEach(function(item2) {
				var name = products.filter(function(item3) { return item2.pid === item3.id })[0].name;
				showHtml+=`
				<div class='show clearfix'>
					<div class='img-box'><img src='${item2.avatar}' /></div>
					<span class='name'>${name}</span>
					<span class='price'>${item2.price}元 x ${item2.count}</span>
					<button class='look fr'>联系客服</button>
				</div>
				`
			});
		
		$(`
			<div class="order">
				<div class='order-top'>
					<h3>${ ispay }</h3>
					<span>${item.time}</span>
					<span>丨</span>
					<span>${item.address.name}</span>
					<span>丨</span>
					<span>订单号：521032269331180${item.id}</span>
					<span>丨</span>
					<span>${isp}</span>
					<span class='fr'>应付金额：<span class="total">${item.total}</span>元</span><br />
					<span>收货信息：${item.address.name} ${item.address.cell} ${item.address.selectionbar} ${item.address.detailed} ${item.address.tag}</span>
				</div>
				<div class='show-warp clearfix'>
					${showHtml}
				</div>
			</div>
		`).appendTo('ul>li.all>.order-warpper');
	});
})();
//待支付订单
(function(){
	var orderDetail = JSON.parse(sessionStorage.getItem('orderDetail'))
	var name = JSON.parse(sessionStorage.getItem('store'))[0][0].name;
	var order = orderData.filter(function(item){ return item.u_name === name });
	var arr1 = [];
	order = order.filter(function(item) { return item.isPay === false });
	order.forEach(function(item2){
		var ordernow = orderDetail.filter(function(item) { return item[0].orderId === item2.id })[0];
		arr1.push(ordernow)
	});
	console.log(arr1)
	var ispay = '';

	console.log(order)
	order.forEach(function(item,i){ 
			ispay = '等待付款';
		var showHtml ='';
			arr1[i].forEach(function(item2) {
				var name = products.filter(function(item3) { return item2.pid === item3.id })[0].name;
				showHtml+=`
				<div class='show clearfix'>
					<div class='img-box'><img src='${item2.avatar}' /></div>
					<span class='name'>${name}</span>
					<span class='price'>${item2.price}元 x ${item2.count}</span>
					<button class='look fr'>联系客服</button>
				</div>
				`
			});
		
		$(`
			<div class="order">
				<div class='order-top'>
					<h3>${ ispay }</h3>
					<span>${item.time}</span>
					<span>丨</span>
					<span>${item.address.name}</span>
					<span>丨</span>
					<span>订单号：521032269331180${item.id}</span>
					<span>丨</span>
					<span>未支付</span>
					<span class='fr'>应付金额：<span class="total">${item.total}</span>元</span><br />
					<span>收货信息：${item.address.name} ${item.address.cell} ${item.address.selectionbar} ${item.address.detailed} ${item.address.tag}</span>
				</div>
				<div class='show-warp clearfix'>
					${showHtml}
				</div>
			</div>
		`).appendTo('ul>li.unpaid>.order-warpper');
	});
})();

//待收货订单
(function(){
	var orderDetail = JSON.parse(sessionStorage.getItem('orderDetail'));
	var name = JSON.parse(sessionStorage.getItem('store'))[0][0].name;
	var order = orderData.filter(function(item){ return item.u_name === name });
	var arr1 = [];
	order = order.filter(function(item) { return item.isPay === true });
	order.forEach(function(item2){
		var ordernow = orderDetail.filter(function(item) { return item[0].orderId === item2.id })[0];
		arr1.push(ordernow)
	});
	var ispay = '';

	order.forEach(function(item,i){ 
		ispay = '等待收货';
		var showHtml ='';
			arr1[i].forEach(function(item2) {
				var name = products.filter(function(item3) { return item2.pid === item3.id })[0].name;
				showHtml+=`
				<div class='show clearfix'>
					<div class='img-box'><img src='${item2.avatar}' /></div>
					<span class='name'>${name}</span>
					<span class='price'>${item2.price}元 x ${item2.count}</span>
					<button class='look fr'>联系客服</button>
				</div>
				`
			});
		
		$(`
			<div class="order">
				<div class='order-top'>
					<h3>${ ispay }</h3>
					<span>${item.time}</span>
					<span>丨</span>
					<span>${item.address.name}</span>
					<span>丨</span>
					<span>订单号：521032269331180${item.id}</span>
					<span>丨</span>
					<span>在线支付</span>
					<span class='fr'>应付金额：<span class="total">${item.total}</span>元</span><br />
					<span>收货信息：${item.address.name} ${item.address.cell} ${item.address.selectionbar} ${item.address.detailed} ${item.address.tag}</span>
				</div>
				<div class='show-warp clearfix'>
					${showHtml}
				</div>
			</div>
		`).appendTo('ul>li.paid>.order-warpper');
	});
})();

$("ul>li.all").on('click', function() {
	$(this).css({color:'#ff6700'});
	$(this).children().show()
	$(this).siblings().children().hide();
	$(this).siblings().css({color:'#757575'});
});
$("ul>li.unpaid").on('click', function() {
	$(this).css({color:'#ff6700'});
	$(this).children().show()
	$(this).siblings().children().hide();
	$(this).siblings().css({color:'#757575'});
});
$("ul>li.paid").on('click', function() {
	$(this).css({color:'#ff6700'});
	$(this).children().show()
	$(this).siblings().children().hide();
	$(this).siblings().css({color:'#757575'});
});

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

