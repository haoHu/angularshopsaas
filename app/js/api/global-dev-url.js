define(['IX'], function () {
	IX.ns("Hualala.Global");
	/**
	 * 接口库的维护
	 * @type {Array}	[apiName, apiPath, urlType, method]
	 */
	var AjaxMappingURLs = [
		// 门店注册接口
		["shopRegister", "/test/shopReg.json", "", "GET"],
		// 门店用户登录接口
		["empLogin", "/test/emp/Login.json", "", "GET"],
		// 门店用户注销
		["empLogout", "/test/emp/Logout.ajax", "", "GET"],
		// 门店用户修改密码
		["empModifyPWD", "/test/emp/ModifyPWD.ajax", "", "GET"],
		// 门店用户重置密码
		["empResetPWD", "/test/emp/ResetPWD.ajax", "", "GET"],

		// 获取店铺信息
		["getShopInfo", "/test/shop/getShopInfo.json", "", "GET"],

		// 获取渠道列表
		["getChannelLst", "/test/shop/getChannelLst.json", "", "GET"],
		// 获取订单字典表
		["getOrderNotesLst", "/test/shop/getOrderNotesLst.json", "", "GET"],

		// 获取菜单列表数据
		["getFoodLst", "/test/shop/getFoodLst.json", "", "GET"],
		// 获取沽清列表
		["getSoldOutFoodLst", "/test/shop/getSoldOutFoodLst.json", "", "GET"],
		// 根据订单Key获取订单详情数据
		["getOrderByOrderKey", "/test/order/getOrderByOrderKey.json", "", "GET"],
		// 更改订单头消息
		["updateOrderHead", "/test/commonSuccess.json", "", "GET"]
	];
	Hualala.Global.AjaxMappingURLs = AjaxMappingURLs;
	return AjaxMappingURLs;
});