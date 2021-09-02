var homeData = JSON.parse(sessionStorage.getItem("home"));
var category = JSON.parse(sessionStorage.getItem("category"))

//渲染header导航内容
category.forEach(function(item, i) {
	var nav_mianHtml = ''
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


$('.banner .section-01 .pro img').animate({
	opacity:'1',
	marginTop:'0px'
},2000);
$('.banner .section-01 .pro p').animate({
	opacity:'1',
	marginTop:'20px'
},2000);

//放大镜
$(".jqzoom").jqueryzoom({xzoom:300,yzoom:400});


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
	var id = parseInt(query.id || 1);
	// 根据商品分类id 筛选出商品并显示
	var products = homeData.products;
	var detailData = products.filter(function(item) {
		return item.id === id;
	});
	var imgList = detailData[0].images;

	imgList.forEach(function(item,i){
		$(`
			<li><img src='${item}'/></li>
		`).appendTo('.img-list ul')
		
	});
	
	$(`
		<img src="${imgList[0]}" jqimg='${imgList[0]}'>
	`).appendTo('.jqzoom');
	
	$('.img-list li').on('click',function(){
		$('.jqzoom').empty();
		var i = $(this).index();
		$(`
			<img src="${imgList[i]}" jqimg='${imgList[i]}'>
		`).appendTo('.jqzoom');
	});
	
(function() {
	var detail = detailData[0];

	$(`
		<h1>${detail.name}</h1>
		<p>${detail.brief}</p>
		<h5>小米自营</h5>
		<span class='price'>${detail.price}元</span>
		<h3>选择版本</h3>
		<div class="select-color">
			<button type="button">6GB+128GB</button>
			<button type="button">8GB+128GB</button>
			<button type="button">8GB+256GB</button>
		</div>
		<h3>选择颜色</h3>
		<div class="select-color">
			<button type="button">耀眼绿</button>
			<button type="button">钻石黑</button>
			<button type="button">月光白</button>
			<button type="button">玫瑰金</button>
		</div>
		<button class='cart' type="button"><a href='#'>加入购物车</a></button>
		
	`).appendTo('.detail-right')
	$('.select-color>button').on('click',function(){
		$(this).css({border:'1px solid #ff6700',color:'#ff6700'})
		.siblings().css({border:'1px solid #E0E0E0',color:'#757575'})
	});
	var obj = {};
	var count = 0;
var cartData = JSON.parse(sessionStorage.getItem("cart"));
var store = JSON.parse(sessionStorage.getItem("store"))[0];
	$('button.cart').on('click',function() {
		if(store === undefined){
			alert('请先登录！')
		}else{
			var cartUser = cartData.filter(function (item){ return item.u_name === store[0].name });
			var same = cartUser.findIndex(function(item) { return item.pid === detailData[0].id });
			var sameId = cartUser.filter(function(item) { return item.pid === detailData[0].id });
			if(same === -1){
				if(cartData.length === 0){
					obj.id = 1;
				}else{
					obj.id = cartData[cartData.length-1].id + 1;
				}
				obj.u_name = store[0].name;
				obj.pid = detail.id;
				obj.pirce = detail.price;
				obj.count = 1;
				cartData.push(obj)
				sessionStorage.setItem("cart",JSON.stringify(cartData));
				layer.alert('添加购物车成功！');
			}else{
				var index = cartData.findIndex(function(item) { return item.id === sameId[0].id });
				count = sameId[0].count + 1;
				obj.id = sameId[0].id;
				obj.u_name = store[0].name;
				obj.pid = detail.id;
				obj.pirce = detail.price;
				obj.count = count;
				cartData.splice(index,1,obj);
				sessionStorage.setItem("cart",JSON.stringify(cartData));
				layer.alert('添加购物车成功！');
				
			}
		}
		icon();
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
		$('.top-container>ul.fr li').eq(4).html(`<a href='../login/login.html'>登录</a>`);
		$('.top-container>ul.fr li').eq(2).html(`<a href='../register/register.html'>注册</a>`)
	}else{
		store.forEach(function(item){
			$('.top-container>ul.fr li').eq(4).text(`${item[0].name}`);
		});
		$('.top-container>ul.fr li').eq(2).html(`<a href='../profile/profile.html'>个人中心</a>`);
	};
})();

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
)





