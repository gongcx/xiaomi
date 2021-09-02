var homeData = JSON.parse(sessionStorage.getItem("home"));
var category = JSON.parse(sessionStorage.getItem("category"));
var profile = JSON.parse(sessionStorage.getItem('profile'));
var address = JSON.parse(sessionStorage.getItem('address'));
var store = JSON.parse(sessionStorage.getItem("store"));
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
//退出登录
$('.col-right .name p').on('click',function() {
		
		sessionStorage.setItem('store',JSON.stringify([]));
		var store = JSON.parse(sessionStorage.getItem("store"));
		$('.col-right').empty();
		if(store.length === 0){
			$('.top-container>ul.fr li').eq(4).html(`<a href='../login/login.html'>登录</a>`);
			$('.top-container>ul.fr li').eq(2).html(`<a href='../register/register.html'>注册</a>`)
		}else{
			store.forEach(function(item){
				$('.top-container>ul.fr li').eq(4).text(`${item[0].name}`);
			});
			$('.top-container>ul.fr li').eq(2).html(`<a href='../profile/profile.html'>个人中心</a>`);
		};
		icon();
});
if(store.length !== 0){
	var store = JSON.parse(sessionStorage.getItem('store'))[0][0];
	$('.col-right .name h3').text(`${store.name}`);
}

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

