var homeData = JSON.parse(sessionStorage.getItem("home"));
var category = JSON.parse(sessionStorage.getItem("category"))
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
//商品分类列表
banner_main.forEach(function(item,i) {
	var categoryHtml = '';
	banner_sub[i].forEach(function(item2) {
		categoryHtml+=`
			<li>
				<a href='#'>
					<img src='${item2.avatar}' />
					<p>${item2.name}</p>
				</a>
			</li>
		`
	});
	$(`
		<li>
			<span class='icon1'>▼</span>
			<a href='#'>${item.name}<a>
			<ul class='clearfix'>${categoryHtml}</ul>
		</li>
	`).appendTo(".category-list>ul.category");
});
(function(){
	var i = 2;
	$('.category-list span.icon1').on('click',function(){
		if(!$(this).parent().hasClass('active')){
			$(this).parent().animate({ height:'59px' },800);
			$(this).css({color:'#ff6700',border:'1px solid #ff6700'});
			$(this).text('▲');
			$(this).parent().addClass('active');
			return ;
		}else{
			$(this).parent().animate({ height:"100%" },800);
			$(this).parent().removeClass('active');
			$(this).css({color:'#b0b0b0',border:'1px solid #b0b0b0'})
			$(this).text('▼');
			return ;
		}
		
	})
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