var homeData = JSON.parse(sessionStorage.getItem("home"));
var category = JSON.parse(sessionStorage.getItem("category"));
var profile = JSON.parse(sessionStorage.getItem('profile'));
var address = JSON.parse(sessionStorage.getItem('address'));
var store = JSON.parse(sessionStorage.getItem('store'))[0];
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
var address = address.filter(function(item){ return item.u_name === store[0].name })
console.log(address);
(function(){
	//添加地址数据
	
	function addressData(stu) {
		stu.forEach(function(item) {
			$(`
				<div class='address' data-id = ${item.id}>
					<h2>${item.name}</h2>
					<p>${item.cell}</p>
					<p>${item.selectionbar}</p>
					<p>${item.detailed}</p>
					<p>${item.tag}</p>
					<button class='btn-update' type='button'>修改</button>
					<button class='btn-remove' type='button'>删除</button>
				</div>
			
			`).appendTo('.address-box')
		});
	};
	addressData(address);
	
	
	$('.col-right .btn').on('click', function(){
		layer.open({
			title:'添加收货地址',
			area:["600px","550px"],
			content:`
				<fieldset class='helped'>
					<legend class='helped'>姓名</legend>
					<input type='text' class='name'  placeholder="姓名" />
				</fieldset>
				<fieldset class='helped'>
					<legend class='helped'>手机号</legend>
					<input type='text' class='cell' placeholder='手机号' />
				</fieldset>
				<fieldset class='helped'>
					<legend class='helped'>省/市/区/街道</legend>
					<input type='text' class='selectionbar' placeholder='省/市/区/街道' />
				</fieldset>
				<fieldset class='helped'>
					<legend class='helped'>详细地址</legend>
					<input type='text' class='detailed' placeholder='详细地址，路名或街道名称，门牌号' />
				</fieldset>
				<fieldset class='helped'>
					<legend class='helped'>地址标签</legend>
					<input type='text' class='tag' placeholder='如：家、公司' />
				</fieldset>
			`,
			yes:function() {
				var name = $('input.name').val().trim(),
					cell = $('input.cell').val().trim(),
					selectionbar = $('input.selectionbar').val().trim(),
					detailed = $('input.detailed').val().trim(),
					tag = $('input.tag').val().trim(),
					u_name = store[0].name;
					var id = 0;
					if(address.length === 0){
						id = 1;
					}else{
						id = address[address.length-1].id+1;
					}
					
					var stu = { id, u_name, name, cell, selectionbar, detailed, tag }
					address.push(stu);
					sessionStorage.setItem('address', JSON.stringify(address));
					$('.address-box').html('');
					addressData(address);
					layer.alert('添加成功!')
			}
			
		});
	});
	$('.address-box')
	.on('click','button.btn-remove', function() {
		var that = this;
		layer.confirm("确认要删除数据吗?", { btn: [ "确定", "取消" ] }, function() {
			var id = parseInt($(that).parent()[0].dataset.id);//.dataset.id取出藏的值
			var i = address.findIndex(function(item) {
				return item.id === id;
			});
			address.splice(i,1);
			$(that).parent().remove();//删除HTML中的li
			layer.alert('删除成功');
		});
		
		
	})
	.on('click','button.btn-update', function() {
		var id = parseInt($(this).parent().attr('data-id'));
		var i = address.findIndex(function(item){ return item.id === id })
		var that = $(this);
		layer.open({
			title:'修改',
			area:["600px","550px"],
			content:`
				<fieldset class='helped'>
					<legend class='helped' >姓名</legend>
					<input type='text' class='name' value='${address[i].name}' placeholder="姓名" />
				</fieldset>
				<fieldset class='helped' >
					<legend class='helped' >手机号</legend>
					<input type='text' class='cell' value='${address[i].cell}' placeholder='手机号' />
				</fieldset>
				<fieldset class='helped' >
					<legend class='helped' >省/市/区/街道</legend>
					<input type='text' class='selectionbar' value='${address[i].selectionbar}' placeholder='省/市/区/街道' />
				</fieldset>
				<fieldset class='helped' >
					<legend class='helped' >详细地址</legend>
					<input type='text' class='detailed' value='${address[i].detailed}' placeholder='详细地址，路名或街道名称，门牌号' />
				</fieldset>
				<fieldset class='helped' >
					<legend class='helped' >地址标签</legend>
					<input type='text' class='tag' value='${address[i].tag}' placeholder='如：家、公司' />
				</fieldset>
			
			`,
			yes:function(){
				var name = $('input.name').val().trim(),
					cell = $('input.cell').val().trim(),
					selectionbar = $('input.selectionbar').val().trim(),
					detailed = $('input.detailed').val().trim(),
					tag = $('input.tag').val().trim(),
					u_name = store[0].name;
					var id = 0;
					if(address.length === 0){
						id = 1;
					}else{
						id = address[address.length-1].id+1;
					}
					var stu = { id, u_name, name, cell, selectionbar, detailed, tag }
					address.splice(i,1,stu)
					sessionStorage.setItem('address', JSON.stringify(address));
					$('.address-box').html('');
					addressData(address);
					layer.alert('修改成功!')
			}
			
		})
		
	});
	$('input.name').focus(function(){
		console.log(0000)
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
);
$('.header>ul.nav>li:nth-child(even)').css({ display: 'none' });
$('.header>ul.nav>li').css({ padding: '40px 15px' });
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




