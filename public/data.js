//自定义虚拟出项目一所需要的所有数据，并放入sessionStorage中

sessionStorage.setItem('users', JSON.stringify([
	{ name: 'user1', paw: '123' },
	{ name: 'user2', paw: '123' },
	{ name: 'user3', paw: '123' }
]));
//存放登录用户
sessionStorage.setItem('store', JSON.stringify([
	
]));
//存放结算商品
sessionStorage.setItem('close', JSON.stringify(

));
//确认订单中的商品地址信息
sessionStorage.setItem('dizhi', JSON.stringify(

));
sessionStorage.setItem('category', JSON.stringify([
	{ id: 1, name: '小米手机' },
	{ id: 2, name: 'Redmi' },
	{ id: 3, name: '电视' },
	{ id: 5, name: '笔记本' },
	{ id: 6, name: '家电' },
	{ id: 7, name: '路由器' },
	{ id: 8, name: '智能插件' },
	{ id: 9, name: '服务' },
	{ id: 10, name: '社区' }
]));
sessionStorage.setItem('home', JSON.stringify({
	promotion: [
		[
			{ name: '小米10S', pirce: 3299, avatar: 'images/header-sub001.png' },
			{ name: '小米11', pirce: 3999, avatar: 'images/header-sub002.png' },
			{ name: '小米10至尊纪念版', pirce: 5299, avatar: 'images/header-sub003.png' },
			{ name: '小米10', pirce: 3399, avatar: 'images/header-sub004.png' },
			{ name: '小米10 青春版 5G', pirce: 2099, avatar: 'images/header-sub005.png' },
			{ name: '小米MIX Alpha', pirce: 19999, avatar: 'images/header-sub006.png' }
		],
		[
			{ name: 'K40 Pro 系列', pirce: 2799, avatar: 'images/header-sub101.png' },
			{ name: 'Remin K40', pirce: 1999, avatar: 'images/header-sub102.png' },
			{ name: 'Remin Note 9 系列', pirce: 999, avatar: 'images/header-sub103.png' },
			{ name: 'Redmi K30S 至尊纪念版', pirce: 2599, avatar: 'images/header-sub104.png' },
			{ name: 'Redmi K30 至尊纪念版', pirce: 1999, avatar: 'images/header-sub105.jpg' },
			{ name: 'Redmi 9A', pirce: 499, avatar: 'images/header-sub106.jpg' },
		],
		[
			{ name: '小米10S', pirce: 3299, avatar: 'images/header-sub001.png' },
			{ name: '小米11', pirce: 3999, avatar: 'images/header-sub002.png' },
			{ name: '小米10至尊纪念版', pirce: 5299, avatar: 'images/header-sub003.png' },
			{ name: 'Redmi K30S 至尊纪念版', pirce: 2599, avatar: 'images/header-sub104.png' },
			{ name: 'Redmi K30 至尊纪念版', pirce: 1999, avatar: 'images/header-sub105.jpg' },
		],
		[
			{ name: '小米10S', pirce: 3299, avatar: 'images/header-sub001.png' },
			{ name: '小米11', pirce: 3999, avatar: 'images/header-sub002.png' },
			{ name: '小米10 青春版 5G', pirce: 2099, avatar: 'images/header-sub005.png' },
			{ name: '小米MIX Alpha', pirce: 19999, avatar: 'images/header-sub006.png' }
		],
		[
			{ name: 'K40 Pro 系列', pirce: 2799, avatar: 'images/header-sub101.png' },
			{ name: 'Remin K40', pirce: 1999, avatar: 'images/header-sub102.png' },
			{ name: 'Remin Note 9 系列', pirce: 999, avatar: 'images/header-sub103.png' },
			{ name: 'Redmi K30S 至尊纪念版', pirce: 2599, avatar: 'images/header-sub104.png' },
			{ name: 'Redmi K30 至尊纪念版', pirce: 1999, avatar: 'images/header-sub105.jpg' },
			{ name: 'Redmi 9A', pirce: 499, avatar: 'images/header-sub106.jpg' },
		],
		[
			{ name: 'Redmi K30S 至尊纪念版', pirce: 2599, avatar: 'images/header-sub104.png' },
			{ name: 'Redmi K30 至尊纪念版', pirce: 1999, avatar: 'images/header-sub105.jpg' },
			{ name: 'Redmi 9A', pirce: 499, avatar: 'images/header-sub106.jpg' },
			{ name: 'K40 Pro 系列', pirce: 2799, avatar: 'images/header-sub101.png' },
			{ name: 'Remin K40', pirce: 1999, avatar: 'images/header-sub102.png' },
			{ name: 'Remin Note 9 系列', pirce: 999, avatar: 'images/header-sub103.png' },
		],
		[
			{ name: 'K40 Pro 系列', pirce: 2799, avatar: 'images/header-sub101.png' },
			{ name: 'Remin K40', pirce: 1999, avatar: 'images/header-sub102.png' },
			{ name: 'Redmi K30 至尊纪念版', pirce: 1999, avatar: 'images/header-sub105.jpg' },
			{ name: 'Redmi 9A', pirce: 499, avatar: 'images/header-sub106.jpg' },
		]
	],
	banner: {
		bgc: [
			'images/bgc1.jpg','images/bgc2.jpg','images/bgc3.jpg','images/bgc4.jpeg','images/bgc5.jpg',
		],
		banner_main:[
			{ id: 1, cid: 1, name: '手机 电话卡' , icon: 'iconfont icon-Fill'},
			{ id: 2, cid: 2, name: '电视 盒子', icon: 'iconfont icon-Fill' },
			{ id: 3, cid: 3, name: '笔记本 显示器', icon: 'iconfont icon-Fill' },
			{ id: 4, cid: 4, name: '家电 插线板', icon: 'iconfont icon-Fill' },
			{ id: 5, cid: 5, name: '出行 穿戴', icon: 'iconfont icon-Fill' },
			{ id: 6, cid: 6, name: '智能 路由器', icon: 'iconfont icon-Fill' },
			{ id: 7, cid: 7, name: '电源 配件', icon: 'iconfont icon-Fill' },
			{ id: 8, cid: 8, name: '健康 儿童', icon: 'iconfont icon-Fill' },
			{ id: 9, cid: 9, name: '耳机 音箱', icon: 'iconfont icon-Fill' },
			{ id: 10, cid: 10, name: '生活 箱包', icon: 'iconfont icon-Fill' }
			
		],
		banner_sub: [
				[
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
					{ name: '小米 11S至尊版', avatar: 'images/sub1-7.png' },
					{ name: '小米 9C', avatar: 'images/sub1-8.png' },
					{ name: '小米 10', avatar: 'images/sub1-9.png' },
					{ name: '小米 8', avatar: 'images/sub1-10.png' },
					{ name: '小米 8R青春版', avatar: 'images/sub1-11.png' },
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
					{ name: '小米 11S至尊版', avatar: 'images/sub1-7.png' },
					{ name: '小米 9C', avatar: 'images/sub1-8.png' },
					{ name: '小米 10', avatar: 'images/sub1-9.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' }
					
				],
				[
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
					{ name: '小米 11S至尊版', avatar: 'images/sub1-7.png' },
					{ name: '小米 9C', avatar: 'images/sub1-8.png' },
					{ name: '小米 10', avatar: 'images/sub1-9.png' },
					{ name: '小米 8', avatar: 'images/sub1-10.png' },
					{ name: '小米 8R青春版', avatar: 'images/sub1-11.png' },
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
				],
				[
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
				],
				[
					{ name: '小米 11S至尊版', avatar: 'images/sub1-7.png' },
					{ name: '小米 9C', avatar: 'images/sub1-8.png' },
					{ name: '小米 10', avatar: 'images/sub1-9.png' },
					{ name: '小米 8', avatar: 'images/sub1-10.png' },
					{ name: '小米 8R青春版', avatar: 'images/sub1-11.png' },
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
				],
				[
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
					{ name: '小米 11S至尊版', avatar: 'images/sub1-7.png' },
					{ name: '小米 9C', avatar: 'images/sub1-8.png' },
					{ name: '小米 10', avatar: 'images/sub1-9.png' },
					{ name: '小米 8', avatar: 'images/sub1-10.png' },
					{ name: '小米 8R青春版', avatar: 'images/sub1-11.png' },
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
					{ name: '小米 11S至尊版', avatar: 'images/sub1-7.png' },
					{ name: '小米 9C', avatar: 'images/sub1-8.png' },
					{ name: '小米 10', avatar: 'images/sub1-9.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' }
					
				],
				[
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
					{ name: '小米 11S至尊版', avatar: 'images/sub1-7.png' },
					{ name: '小米 9C', avatar: 'images/sub1-8.png' },
					{ name: '小米 10', avatar: 'images/sub1-9.png' },
					{ name: '小米 8', avatar: 'images/sub1-10.png' },
					{ name: '小米 8R青春版', avatar: 'images/sub1-11.png' },
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
				],
				[
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
				],
				[
					{ name: '小米 11S至尊版', avatar: 'images/sub1-7.png' },
					{ name: '小米 9C', avatar: 'images/sub1-8.png' },
					{ name: '小米 10', avatar: 'images/sub1-9.png' },
					{ name: '小米 8', avatar: 'images/sub1-10.png' },
					{ name: '小米 8R青春版', avatar: 'images/sub1-11.png' },
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
				],
				[
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
					{ name: '小米 11S至尊版', avatar: 'images/sub1-7.png' },
					{ name: '小米 9C', avatar: 'images/sub1-8.png' },
					{ name: '小米 10', avatar: 'images/sub1-9.png' },
					{ name: '小米 8', avatar: 'images/sub1-10.png' },
					{ name: '小米 8R青春版', avatar: 'images/sub1-11.png' },
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
				],
				[
					{ name: '小米 100', avatar: 'images/sub1-12.png' },
					{ name: '小米 10S', avatar: 'images/sub1-1.png' },
					{ name: '小米 11S', avatar: 'images/sub1-1.png' },
					{ name: '小米 10S至尊版', avatar: 'images/sub1-2.png' },
					{ name: '小米 R5', avatar: 'images/sub1-3.png' },
					{ name: '小米 R9', avatar: 'images/sub1-4.png' },
					{ name: '小米 12', avatar: 'images/sub1-5.png' },
					{ name: '小米 10s青春版', avatar: 'images/sub1-6.png' },
				]
		]
	},
	
	parts:[
			{
				avatar:'images/shouji001.jpg',
				title:'手机',
				list:[
						{avatar:'images/shouji002.jpg',
						name:'小米10s',
						brief:'骁龙870 | 对称式双扬立体声',
						price:'3299'
						},
						{avatar:'images/shouji003.jpg',
						name:'Redmi  K40 Pro 系列',
						brief:'骁龙888 / E4 旗舰直屏',
						price:'2799'
						},
						{avatar:'images/shouji004.jpg',
						name:'Redmi K40',
						brief:'骁龙870，新一代 E4 AMOLED旗舰直屏',
						price:'1999'
						},
						{avatar:'images/shouji005.jpg',
						name:'小米11',
						brief:'骁龙888 | 2K四曲面屏',
						price:'3999'
						},
						{avatar:'images/shouji006.jpg',
						name:'小米10',
						brief:'骁龙865/1亿像素相机',
						price:'3399'
						},
						{avatar:'images/shouji007.jpg',
						name:'Note 9 Pro',
						brief:'一亿像素夜景相机，120Hz六档变速高刷屏',
						price:'1599'
						},
						{avatar:'images/shouji008.jpg',
						name:'Note 9',
						brief:'天玑 800U处理器，5000mAh电池，',
						price:'1299'
						},
						{avatar:'images/shouji009.jpg',
						name:'Note 9 4G',
						brief:'6000mAh长续航',
						price:'999'
						},
						{avatar:'images/shouji008.jpg',
						name:'Note 9',
						brief:'天玑 800U处理器，5000mAh电池，',
						price:'1299'
						},
						{avatar:'images/shouji009.jpg',
						name:'Note 9 4G',
						brief:'6000mAh长续航',
						price:'999'
						}
					]
				},
			{
				avatar:'images/jiadian001.jpg',
				title:'家电',
				list:[
					{
						avatar:'images/jiadian002.jpg',
						name:'小米全面屏电视65英寸 E65X',
						brief:'全面屏设计',
						price:'2999'
					},
					{
						avatar:'images/jiadian003.jpg',
						name:'全面屏电视E43K',
						brief:'全面屏设计，海量内容',
						price:'1299'
					},
					{
						avatar:'images/jiadian004.jpg',
						name:'小米电视4A 70英寸',
						brief:'大屏更享受',
						price:'3499'
					},
					{
						avatar:'images/jiadian005.jpg',
						name:'米家互联网对开门冰箱 540L',
						brief:'重磅新品福利特惠',
						price:'2899'
					},
					{
						avatar:'images/jiadian006.jpg',
						name:'Redmi全自动波轮洗衣机1A 8kg',
						brief:'一键操作，父母都爱用',
						price:'799'
					},
					{
						avatar:'images/jiadian007.jpg',
						name:'Air 13.3" 2019款',
						brief:'新一代独立显卡',
						price:'5399'
					},
					{
						avatar:'images/jiadian008.jpg',
						name:'米家互联网烟灶套装（天然气) ',
						brief:'点火排烟，风随火动',
						price:'2298'
					},
					{
						avatar:'images/jiadian009.jpg',
						name:'全面屏电视E43K',
						brief:'全面屏设计，海量内容',
						price:'1299'
					},
					{
						avatar:'images/jiadian006.jpg',
						name:'Redmi全自动波轮洗衣机1A 8kg',
						brief:'一键操作，父母都爱用',
						price:'799'
					},
					{
						avatar:'images/jiadian007.jpg',
						name:'Air 13.3" 2019款',
						brief:'新一代独立显卡',
						price:'5399'
					},
				]
			}
		],
	products:[
		{ id: 1, cid: 1, sales: 12, name:'Redmi K40', brief:'骁龙870，新一代 E4 AMOLED旗舰直屏 ', price:1999, oldprice:'', avatar:'../images/ia_100002482.jpg' ,images:['../images/ia_100002223.jpg','../images/ia_100002238.jpg','../images/ia_100002242.jpg','../images/ia_100002239.jpg','../images/ia_100002226.jpg']},
		{ id: 2, cid: 1, sales: 54, name:'Redmi  K40 Pro 系列', brief:'骁龙888 / E4 旗舰直屏 ', price: 2799, oldprice: '',avatar: '../images/ia_100002491.jpg',images:['../images/ia_300000216.jpg','../images/ia_300000217.jpg','../images/ia_300000218.jpg','../images/ia_300000219.jpg','../images/ia_300000220.jpg']},
		{ id: 3, cid: 1, sales: 23, name:'Redmi Note 9 系列', brief:'国内首发骁龙 750G处理器，一亿像素夜景相机 ', price: 999, oldprice: '',avatar: '../images/ia_100002483.jpg'},
		{ id: 4, cid: 1, sales: 23, name:'Redmi K30S 至尊纪念版', brief:'144Hz[7档]变速高刷屏 ', price: 2599, oldprice: '',avatar: '../images/ia_100002484.jpg'},
		{ id: 5, cid: 1, sales: 13, name:'Redmi 10X 5G', brief:'双5G待机，天玑820处理器 ', price: 2899, oldprice:3399 ,avatar: '../images/ia_100002485.jpg'},
		{ id: 6, cid: 1, sales: 56, name:'小米10', brief:'骁龙865/1亿像素相机 ', price: 3999, oldprice: '',avatar: '../images/ia_100002487.jpg'},
		{ id: 7, cid: 1, sales: 79, name:'小米10 青春版 5G', brief:'50倍潜望式变焦 / 轻薄5G手机 ', price: 2999, oldprice: '',avatar: '../images/ia_100002489.jpg'},
		{ id: 8, cid: 1, sales: 32, name:'Redmi K30 Pro 变焦版', brief:'双模5G，骁龙865，弹出全面屏 ', price: 3999, oldprice: 4599,avatar: '../images/ia_100002491.jpg'},
		{ id: 9, cid: 1, sales: 46, name:'小米10至尊纪念版', brief:'120X 变焦/120W秒充/120Hz屏幕 ', price: 6999, oldprice: '',avatar: '../images/ia_100002492.jpg'},
		{ id: 10, cid: 1, sales: 21, name:'Redmi K30 至尊纪念版', brief:'120Hz弹出全面屏，天玑1000+旗舰处理器 ', price: 7999, oldprice: '',avatar: '../images/ia_100002493.jpg'},
		{ id: 11, cid: 1, sales: 23, name:'Redmi Note 8', brief:'千元4800万四摄 ', price: 999, oldprice: '',avatar: '../images/ia_100002491.jpg'},
		{ id: 12, cid: 1, sales: 98, name:'Redmi 9A', brief:'5000mAh长循环大电量，6.53"超大护眼屏幕 ', price: 3399, oldprice: 3999,avatar: '../images/ia_100002496.jpg'},
		{ id: 13, cid: 1, sales: 76, name:'小米10至尊纪念版', brief:'小米10', price: 5299, oldprice: '',avatar: '../images/ia_100002497.jpg'},
		{ id: 14, cid: 1, sales: 65, name:'Redmi 10X 5G', brief:'双5G待机，天玑820处理器 ', price: 1399, oldprice: 1799,avatar: '../images/ia_100002497.jpg'},
		{ id: 15, cid: 1, sales: 134, name:'Redmi 10X Pro 5G', brief:'双5G待机，天玑820处理器 ', price: 2099, oldprice: 2299,avatar: '../images/ia_100002499.jpg'},
		{ id: 16, cid: 1, sales: 36, name:'Redmi Note 8', brief:'5000mAh长循环大电量', price: 9899, oldprice: 12999,avatar: '../images/ia_100002496.jpg'},
		{ id: 17, cid: 2, sales: 36, name:'Redmi 智能电视 X55', brief:'金属边框全面屏', price: 1098, oldprice: 1599,avatar: '../images/ia_200000695.jpg'},
		{ id: 18, cid: 2, sales: 68, name:'Redmi 智能电视 X65', brief:'金属边框全面屏', price: 1699, oldprice: 2099,avatar: '../images/ia_200000701.jpg'},
		{ id: 19, cid: 2, sales: 83, name:'全面屏电视E43K', brief:'全面屏设计，海量内容', price: 1999, oldprice: 2299,avatar: '../images/ia_200000702.jpg'},
		{ id: 20, cid: 2, sales: 48, name:'小米电视4A 32英寸', brief:'人工智能系统，高清液晶屏', price: 1786, oldprice: 1999,avatar: '../images/ia_200000703.jpg'},
		{ id: 21, cid: 2, sales: 15, name:'小米电视4A 60英寸', brief:'人工智能语音系统,超高清画质', price: 1298, oldprice: 1399,avatar: '../images/ia_200000709.jpg'},
		{ id: 22, cid: 2, sales: 95, name:'全面屏电视E55A', brief:'全面屏设计，人工智能语音', price: 897, oldprice: 1199,avatar: '../images/ia_200000723.jpg'},
		{ id: 23, cid: 2, sales: 24, name:'全面屏电视E65A', brief:'全面屏设计，人工智能语音', price: 1500, oldprice: 1799,avatar: '../images/ia_200000709.jpg'},
		{ id: 24, cid: 2, sales: 69, name:'小米电视4S 75英寸', brief:'4K HDR，人工智能语音', price: 1999, oldprice: 1899,avatar: '../images/ia_100000002563.jpg'},
		{ id: 25, cid: 2, sales: 24, name:'小米电视4A 70英寸', brief:'大屏更享受', price: 1999, oldprice: 1899,avatar: '../images/ia_100000002572.jpg'},
		{ id: 26, cid: 2, sales: 58, name:'全面屏电视 E55C', brief:'全面屏设计，人工智能语音', price: 2100, oldprice: 2399,avatar: '../images/ia_100000002577.jpg'},
		{ id: 27, cid: 2, sales: 24, name:'Redmi 红米电视 70英寸', brief:'70英寸震撼巨屏，4K画质，细腻如真', price: 3299, oldprice: 3000,avatar: '../images/ia_100000002598.jpg'},
		{ id: 28, cid: 2, sales: 13, name:'小米电视4A 32英寸', brief:'人工智能系统，高清液晶屏', price: 2390, oldprice: 2099,avatar: '../images/ia_100000002631.jpg'},
		{ id: 29, cid: 2, sales: 85, name:'小米电视4A 55英寸', brief:'全面屏设计，人工智能语音', price:2899 , oldprice:2599 ,avatar: '../images/ia_100000002638.jpg'},
		{ id: 30, cid: 2, sales: 36, name:'全面屏电视 E55C', brief:'全面屏设计，人工智能语音', price:3599 , oldprice:3200 ,avatar: '../images/ia_100000002652.jpg'},
		{ id: 31, cid: 2, sales: 24, name:'全面屏电视E65A', brief:'全面屏设计，人工智能语音', price: 2399, oldprice: 2699,avatar: '../images/ia_100000002577.jpg'},
		{ id: 32, cid: 2, sales: 28, name:'全面屏电视E55A', brief:'全面屏设计，人工智能语音', price: 2199, oldprice: 2399,avatar: '../images/ia_100000002563.jpg'},
	],
}));

sessionStorage.setItem('cart', JSON.stringify([
		{ id: 1, u_name: 'user1', pid: 1, pirce: 1999, count: 1 },
		{ id: 2, u_name: 'user1', pid: 2, pirce: 2799, count: 2 },
		{ id: 3, u_name: 'user1', pid: 3, pirce: 999, count: 1 },
		{ id: 4, u_name: 'user1', pid: 4, pirce: 2599, count: 1 },
		// { id: 5, u_name: 'user2', pid: 5, pirce: 2899, count: 1 },
		// { id: 6, u_name: 'user2', pid: 6, pirce: 3999, count: 1 },
	]))

sessionStorage.setItem('profile', JSON.stringify({
	profileTitle:[
		{ id: 1, name: '订单中心 '},
		{ id: 2, name: '个人中心' },
		{ id: 3, name: '售后服务' },
		{ id: 4, name: '账户管理' }
	],
	profileList:[
		[
			{ id: 1,name:'我的订单',href: '../order/order.html'},
			{ id: 2,name:'评价晒单' },
			{ id: 3,name:'话费充值订单' },
			{ id: 4,name:'以旧换新订单' },
		],
		[
			{ id: 1,name:'我的个人中心',href:'../profile/profile.html'},
			{ id: 2,name:'消息通知' },
			{ id: 3,name:'购买资格' },
			{ id: 4,name:'现金账户' },
			{ id: 5,name:'小米礼品卡'},
			{ id: 6,name:'现金券' },
			{ id: 7,name:'喜欢的商品' },
			{ id: 8,name:'优惠券' },
			{ id: 9,name:'收货地址',href:'../address/address.html'},
			{ id: 10,name:'红包' }
		],
		[
			{ id: 1,name:'服务记录' },
			{ id: 2,name:'申请服务' },
			{ id: 3,name:'领取快递报销' }
		],
		[
			{ id: 1,name:'个人信息' },
			{ id: 2,name:'修改密码' }
		],
	],
	
}));
sessionStorage.setItem('address', JSON.stringify([
	{ id: 1, u_name:'user1', name: '巩持轩', cell: '17866801859',selectionbar: '山东省 青岛市 城阳区 城阳街道', detailed: '中享思途', tag: '学校' },
	
]));
//订单
sessionStorage.setItem('order', JSON.stringify([
	
]));
//订单详情
sessionStorage.setItem('orderDetail', JSON.stringify([
	
]));


