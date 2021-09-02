var homeData = JSON.parse(sessionStorage.getItem("home"));
var category = JSON.parse(sessionStorage.getItem("category"));

//渲染header导航内容
category.forEach(function(item, i) {
	var nav_mianHtml = '';
	if(homeData.promotion[i]){
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
// banner轮播图
var bgc = homeData.banner.bgc;
bgc.forEach(function(item){
	$(`
		<li><img src="${ item }" /></li>
	`).appendTo('.banner ul.list');
});
var i = 0;
function run() {
	if(i>=$('.banner>ul.list>li').length){
		i = 0;
		$('.banner>ul.list>li').eq(0).fadeIn(1000)
		.siblings().fadeOut(1000);
	}else{
		$('.banner>ul.list>li').eq(i).fadeIn(1000)
		.siblings().fadeOut(1000);
	}
	i++;
}
// 计时器
var interval = setInterval(function() {
	run();
	point()
	
},2000);
// 鼠标在banner上计时停止
$('.banner').on('mouseover', function() {
	clearInterval(interval);
});
//鼠标移出计时开始
$('.banner').on('mouseout', function() {
	clearInterval(interval);
	interval = setInterval(function() {
		run();
		point();
	},2000);
});
// 点击右按钮
$('.banner_right').on('click', function() {
	run();
	point();
});
// 点击左按钮
$('.banner_left').on('click',function(){
	if(i === 0){
		i = 5;
		$('.banner>ul.list>li').eq(0).fadeIn(1000)
		.siblings().fadeOut(1000);
	}else{
		$('.banner>ul.list>li').eq(i).fadeIn(1000)
		.siblings().fadeOut(1000);
	}
	i--;
	point()
});
// 小圆点的变色
function point() {
	$('.point_box span').eq(i-1).css({backgroundColor:'#fff'})
	.siblings().css({ backgroundColor: ' rgba(0,0,0,0.6)' });
};
var point1 = $('.point_box span');
$('.point_box span').on('click', function(){
	$('.banner ul.list li').eq($(this).index()).show()
	.siblings().hide();
	$(this).css({backgroundColor:'#fff'})
	.siblings().css({ backgroundColor: ' rgba(0,0,0,0.6)' });
	i = $(this).index()+1;
});

/* banner里面的列表 */
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
	`).appendTo('.banner_mainwarp>ul.mian');
	
});
//part部分
var parts = homeData.parts;

parts.forEach(function(item,i){
	var partHtml ="";
	item.list.forEach(function(item2){
		partHtml+=`
			<li>
				<div class='a-box'>
					<a href='#'>
						<img src='${item2.avatar}' />
						<h5>${item2.name}</h5>
						<p>${item2.brief}</p>
						<span>￥${item2.price}元</span>
					</a>
				</div>
			</li>
		`;
	});
	$(`
		<div class='part'>
			<div class='img-box w'><img src='${item.avatar}' /></div>
			<h2>${item.title}</h2>
			<ul class='list-warp'>${partHtml}</ul>
		</div>
	`).appendTo('.parts');
});


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



//导航列表
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
			$('.top .cart').css({color:'#fff'})
			$('.top .cart').hover(function(){
				$(this).css({color:'#ff6700'});
				},function(){
					$(this).css({color:'#fff'});
			});
		}
	}
	icon();

$('.header>ul.nav>li:nth-child(even)').css({ display: 'none' });
$('.header>ul.nav>li').css({ padding: '40px 20px' });

