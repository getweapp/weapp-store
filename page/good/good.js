var app = getApp();
Page({
	data: {
		filterId: 1,
		goods:
		[
			{
				id: 1,
				name: '周杰伦',
				pic: '/imgs/index/good.jpg',
				price: 2
			},
			{
				id: 2,
				name: '彭于晏',
				pic: '/imgs/index/good.jpg',
				price: 3
			},
			{
				id: 3,
				name: '蔡依林',
				pic: '/imgs/index/good.jpg',
				price: 2
			},
			{
				id: 4,
				name: '林俊杰',
				pic: '/imgs/index/good.jpg',
				price: 2
			},
			{
				id: 5,
				name: '蔡依林',
				pic: '/imgs/index/good.jpg',
				price: 2
			},
			{
				id: 6,
				name: '林俊杰',
				pic: '/imgs/index/good.jpg',
				price: 2
			}
		],

		cart: {
			count: 0,
			total: 0,
			list: {}
		},



	},

	onLoad: function () {
		console.log("onLoad");
		this.setData({
			id: 0
		});

	},

	//计算
	tapAddCart: function (e) {
		this.addCart(e.target.dataset.id);
		console.log(e.target.dataset.id);
	},
	tapReduceCart: function (e) {
		this.reduceCart(e.target.dataset.id);
	},
	addCart: function (id) {
		console.log(this.data.cart.list);
		var num = this.data.cart.list[id] || 0;
		console.log("num" + num);

		this.data.cart.list[id] = num + 1;
		this.countCart();
	},
	reduceCart: function (id) {
		var num = this.data.cart.list[id] || 0;
		if (num <= 1) {
			delete this.data.cart.list[id];
		} else {
			this.data.cart.list[id] = num - 1;
		}
		this.countCart();
	},
	countCart: function () {
		var count = 0,
			total = 0;
		for (var id in this.data.cart.list) {
			var goods = this.data.goods[id];
			count += this.data.cart.list[id];
			total += goods.price * this.data.cart.list[id];
		}
		this.data.cart.count = count;
		this.data.cart.total = total;
		this.setData({
			cart: this.data.cart
		});
	},

	//显示隐藏购物车
	showCartDetail: function () {
		this.setData({
			showCartDetail: !this.data.showCartDetail
		});
	},
	hideCartDetail: function () {
		this.setData({
			showCartDetail: false
		});
	},

	//显示隐藏商品详情弹窗
	showGoodsDetail: function (e) {

		this.setData({
			showGoodsDetail: !this.data.showGoodsDetail,
			id: e.target.dataset.id
		});
	},
	hideGoodsDetail: function () {
		this.setData({
			showGoodsDetail: false
		});
	},


	pay: function () {
		wx.navigateTo({
			url: '../pay/pay'
		})
	},






});

