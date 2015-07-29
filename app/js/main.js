require.config({
	// baseUrl : './js',
	appDir : './js',
	paths : {
		'angular' : 'vendor/angular/angular',
		'angular-route' : 'vendor/angular-route/angular-route',
		'angular-resource' : 'vendor/angular-resource/angular-resource',
		'angular-cookies' : 'vendor/angular-cookies/angular-cookies',
		'angular-sanitize' : 'vendor/angular-sanitize/angular-sanitize',
		'ui.bootstrap' : 'vendor/angular-bootstrap/ui-bootstrap-tpls',
		'bootstrap' : 'vendor/bootstrap/bootstrap',
        'bootstrap-datetimepicker' : 'vendor/bootstrap-datetimepicker/bootstrap-datetimepicker.min',
        'bootstrap-datetimepicker.zh-CN': 'vendor/bootstrap-datetimepicker/locales/bootstrap-datetimepicker.zh-CN',
		'jquery' : 'vendor/jquery/jquery',
		'underscore' : 'vendor/underscore/underscore',
		'api' : 'api/api',
		'IX' : 'utils/ixutils',
		'commonFn' : 'utils/commonFn',
		'datatype' : 'utils/datatype',
		'global-const' : 'api/global-const',
		// 'global-dev-url' : 'api/global-dev-url',
		'global-url' : 'api/global-url',
		'angularLocalStorage' : 'vendor/angularLocalStorage/angularLocalStorage',
		'pymatch' : 'utils/pymatch',
		'matcher' : 'utils/matcher',
		'uuid' : 'vendor/node-uuid/uuid'
	},
	shim : {
		'angular' : {
			deps : ['jquery']
		},
		'app' : {
			deps : ['angular', 'angular-route', 'angular-resource', 'bootstrap', 'bootstrap-datetimepicker', 'bootstrap-datetimepicker.zh-CN','ui.bootstrap', 'angularLocalStorage', 'angular-cookies', 'angular-sanitize']
		},
		'angular-route' : {
			deps : ['angular']
		},
		'angular-resource' : {
			deps : ['angular']
		},
		'angular-sanitize' : {
			deps : ['angular']
		},
		'bootstrap' : {
			deps : ['jquery']
		},
        'bootstrap-datetimepicker' : {
            deps : ['jquery', 'bootstrap']
        },
        'bootstrap-datetimepicker.zh-CN' : {
            deps : ['jquery', 'bootstrap', 'bootstrap-datetimepicker']
        },
		'underscore' : {
			exports : '_'
		},
		'IX' : {
			exports : 'IX'
		},
		'commonFn' : {
			exports : 'commonFn',
			deps : ['IX', 'jquery']
		},
		'matcher' : {
			deps : ['IX', 'pymatch']
		},
		'datatype' : {
			exports : 'datatype',
			deps : ['IX']
		},
		'ui.bootstrap' : {
			deps : ['angular']
		},
		'angularLocalStorage' : {
			deps : ['angular']
		},
		'angular-cookies' : {
			deps : ['angular']
		}
	}
});

require(['app', 'underscore', 'IX', 'commonFn', 'datatype', 'global-const', 'global-url', 'api', 'matcher', 'uuid'], function (app, _) {
	IX.ns("Hualala");
	if (window.HualalaWorkMode == 'dev') {
		// require(['global-dev-url', 'api'], function () {
		// 	angular.bootstrap(document, ['app']);
		// });
		require(['global-url', 'api'], function () {
			// 测试服务器
			// Hualala.Global.AJAX_DOMAIN = 'http://hualalasaas.oicp.net:15220';
			Hualala.Global.AJAX_DOMAIN = 'http://10.10.2.166:8080';
			// 丁工机器
			// Hualala.Global.AJAX_DOMAIN = 'http://10.10.2.140:8080';
			// 朱敏机器
			// Hualala.Global.AJAX_DOMAIN = 'http://10.10.2.42:8080';
			// local develop
			// Hualala.Global.AJAX_DOMAIN = 'http://127.0.0.1:8080';
			angular.bootstrap(document, ['app']);

		});
	} else {
		require(['global-url', 'api'], function () {
			angular.bootstrap(document, ['app']);
		});
	}
	// 全局禁止鼠标右键菜单
	$(document).bind('contextmenu', function (e) {
		if (!Hualala.Common.isTagName(e, ['INPUT', 'TEXTAREA'])) {
			e.preventDefault();
			return false;
		}
		return true;
	});
	// 选择性全局屏蔽双击触发选中事件
	$(':not(input, select, textarea)').disableSelection().on('doubleclick', function (e) {
		if (!Hualala.Common.isTagName(e, ['INPUT', 'TEXTAREA'])) {
			e.preventDefault();
			return false;
		}
		return true;
	});
});