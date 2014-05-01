(function() {
	'use strict';
	var $asm = {};
	global.MimeGame = global.MimeGame || {};
	global.MimeGame.Client = global.MimeGame.Client || {};
	global.MimeGame.Client.Directives = global.MimeGame.Client.Directives || {};
	global.MimeGame.Client.Directives.Canvas = global.MimeGame.Client.Directives.Canvas || {};
	global.MimeGame.Client.Filters = global.MimeGame.Client.Filters || {};
	global.MimeGame.Client.Scope = global.MimeGame.Client.Scope || {};
	global.MimeGame.Client.Scope.Controller = global.MimeGame.Client.Scope.Controller || {};
	global.MimeGame.Client.Scope.Directive = global.MimeGame.Client.Scope.Directive || {};
	global.MimeGame.Client.Scope.Directive.Canvas = global.MimeGame.Client.Scope.Directive.Canvas || {};
	global.MimeGame.Client.Services = global.MimeGame.Client.Services || {};
	global.MimeGame.Client.Utils = global.MimeGame.Client.Utils || {};
	global.Triangles = global.Triangles || {};
	global.Triangles.Utility = global.Triangles.Utility || {};
	ss.initAssembly($asm, 'MimeGame.Client');
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.TriangleMove
	var $MimeGame_Client_$TriangleMove = function(location, color) {
		this.$location = null;
		this.$color = null;
		this.$location = location;
		this.$color = color;
	};
	$MimeGame_Client_$TriangleMove.__typeName = 'MimeGame.Client.$TriangleMove';
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.BuildAngular
	var $MimeGame_Client_BuildAngular = function() {
	};
	$MimeGame_Client_BuildAngular.__typeName = 'MimeGame.Client.BuildAngular';
	$MimeGame_Client_BuildAngular.setup = function() {
		var module = angular.module('MimeGame', ['ui.utils', 'ui.bootstrap']).config(['$httpProvider', $MimeGame_Client_BuildAngular.$buildHttpProvider]).controller($MimeGame_Client_Controllers_$LevelSelectorController.$name, [$MimeGame_Client_BuildAngular.$scopeName, $MimeGame_Client_Services_CreateUIService.name$1, function(scope, createUIService) {
			return new $MimeGame_Client_Controllers_$LevelSelectorController(scope, createUIService);
		}]).controller($MimeGame_Client_Controllers_$TriangleGameController.$name, [$MimeGame_Client_BuildAngular.$scopeName, $MimeGame_Client_Services_CreateUIService.name$1, function(scope1) {
			return new $MimeGame_Client_Controllers_$TriangleGameController(scope1);
		}]).service($MimeGame_Client_Services_CreateUIService.name$1, [$MimeGame_Client_BuildAngular.$compileName, $MimeGame_Client_BuildAngular.$rootScopeName, function(compileService, rootScopeService) {
			return new $MimeGame_Client_Services_CreateUIService(compileService, rootScopeService);
		}]).directive($MimeGame_Client_Directives_FancyListDirective.name$1, [function() {
			return new $MimeGame_Client_Directives_FancyListDirective();
		}]).directive($MimeGame_Client_Directives_FancyListIndexDirective.name$1, [function() {
			return new $MimeGame_Client_Directives_FancyListIndexDirective();
		}]).directive($MimeGame_Client_Directives_FancyHorizontalListDirective.name$1, [function() {
			return new $MimeGame_Client_Directives_FancyHorizontalListDirective();
		}]).directive($MimeGame_Client_Directives_FancyHorizontalListIndexDirective.name$1, [function() {
			return new $MimeGame_Client_Directives_FancyHorizontalListIndexDirective();
		}]).directive($MimeGame_Client_Directives_Canvas_CanvasAssetFrameDirective.name$1, [function() {
			return new $MimeGame_Client_Directives_Canvas_CanvasAssetFrameDirective();
		}]).directive($MimeGame_Client_Directives_DraggableDirective.name$1, [function() {
			return new $MimeGame_Client_Directives_DraggableDirective();
		}]).directive($MimeGame_Client_Directives_FloatingWindowDirective.name$1, [function() {
			return new $MimeGame_Client_Directives_FloatingWindowDirective();
		}]).directive($MimeGame_Client_Directives_ForNextDirective.name$1, [function() {
			return new $MimeGame_Client_Directives_ForNextDirective();
		}]).filter($MimeGame_Client_Filters_RoundFilter.name$1, [function() {
			var $t1 = new $MimeGame_Client_Filters_RoundFilter();
			return ss.mkdel($t1, $t1.filter);
		}]).filter($MimeGame_Client_Filters_SwitchFilter.name$1, [function() {
			var $t2 = new $MimeGame_Client_Filters_SwitchFilter();
			return ss.mkdel($t2, $t2.filter);
		}]).run([$MimeGame_Client_BuildAngular.$http, $MimeGame_Client_BuildAngular.$templateCache, $MimeGame_Client_Services_CreateUIService.name$1, function(http, templateCache, createUIService1) {
			$MimeGame_Client_BuildAngular.$buildCache(http, templateCache);
			createUIService1.create($MimeGame_Client_Controllers_$LevelSelectorController.$view);
			createUIService1.create($MimeGame_Client_Controllers_$TriangleGameController.$view);
		}]);
		//            MinimizeController.Register(module);
		angular.bootstrap(window.document, ['MimeGame']);
	};
	$MimeGame_Client_BuildAngular.$buildCache = function(http, templateCache) {
		var uis = [$MimeGame_Client_Controllers_$LevelSelectorController.$view];
		for (var index = 0; index < uis.length; index++) {
			var ui = { $: ss.formatString('{1}partials/UIs/{0}.html', uis[index], $MimeGame_Client_Utils_Constants.contentAddress) };
			http.get(ui.$, null).success(ss.mkdel({ ui: ui }, function(a) {
				return templateCache.put(this.ui.$, a);
			}));
		}
	};
	$MimeGame_Client_BuildAngular.$buildHttpProvider = function(httpProvider) {
		httpProvider.defaults.useXDomain = true;
		delete httpProvider.defaults.headers.common['X-Requested-With'];
	};
	global.MimeGame.Client.BuildAngular = $MimeGame_Client_BuildAngular;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.RaphaelBoundingBox
	var $MimeGame_Client_RaphaelBoundingBox = function() {
	};
	$MimeGame_Client_RaphaelBoundingBox.__typeName = 'MimeGame.Client.RaphaelBoundingBox';
	$MimeGame_Client_RaphaelBoundingBox.createInstance = function() {
		return $MimeGame_Client_RaphaelBoundingBox.$ctor();
	};
	$MimeGame_Client_RaphaelBoundingBox.$ctor = function() {
		var $this = {};
		$this.x = 0;
		$this.y = 0;
		$this.x2 = 0;
		$this.y2 = 0;
		$this.width = 0;
		$this.height = 0;
		return $this;
	};
	global.MimeGame.Client.RaphaelBoundingBox = $MimeGame_Client_RaphaelBoundingBox;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Triangle
	var $MimeGame_Client_Triangle = function(_x, _y, pointUp, _color) {
		this.$spacing = 19;
		this.$transitionToColor = null;
		this.transitioning = 0;
		this.selected = false;
		this.glow = false;
		this.color = null;
		this.pointUp = false;
		this.y = 0;
		this.x = 0;
		this.element = null;
		this.x = _x;
		this.y = _y;
		this.pointUp = pointUp;
		this.color = _color;
		this.selected = false;
		this.glow = false;
	};
	$MimeGame_Client_Triangle.__typeName = 'MimeGame.Client.Triangle';
	global.MimeGame.Client.Triangle = $MimeGame_Client_Triangle;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.TriangleGame
	var $MimeGame_Client_TriangleGame = function() {
		this.$boardHeight = 6;
		this.$boardWidth = 11;
		this.$drawTick = 0;
		this.$myCanvas = null;
		this.$myTriangleGrid = null;
		this.$myTriangleList = null;
		$MimeGame_Client_TriangleGame.instance = this;
		this.$myCanvas = $MimeGame_Client_Utils_CanvasInformation.create(document.getElementById('cnvGameBoard'), $MimeGame_Client_TriangleGame.size.x, $MimeGame_Client_TriangleGame.size.y);
		$MimeGame_Client_Utils_Extensions.addEvent(this.$myCanvas.canvas, 'contextmenu', function(evt) {
			evt.preventDefault();
		});
		this.$init();
		window.setInterval(ss.mkdel(this, this.$drawBoard), 16);
	};
	$MimeGame_Client_TriangleGame.__typeName = 'MimeGame.Client.TriangleGame';
	global.MimeGame.Client.TriangleGame = $MimeGame_Client_TriangleGame;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.TrianglePiece
	var $MimeGame_Client_TrianglePiece = function() {
	};
	$MimeGame_Client_TrianglePiece.__typeName = 'MimeGame.Client.TrianglePiece';
	$MimeGame_Client_TrianglePiece.$ctor = function(x, y, pointUp) {
		var $this = {};
		$this.x = 0;
		$this.y = 0;
		$this.pointUp = false;
		$this.x = x;
		$this.y = y;
		$this.pointUp = pointUp;
		return $this;
	};
	global.MimeGame.Client.TrianglePiece = $MimeGame_Client_TrianglePiece;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Controllers.LevelSelectorController
	var $MimeGame_Client_Controllers_$LevelSelectorController = function(scope, createUIService) {
		this.$scope = null;
		this.$createUIService = null;
		this.$scope = scope;
		this.$scope.visible = true;
		this.$createUIService = createUIService;
		this.$scope.model = $MimeGame_Client_Scope_Controller_LevelSelectorScopeModel.$ctor();
		this.$scope.callback = $MimeGame_Client_Scope_Controller_LevelSelectorScopeCallback.$ctor();
		scope.model.loadingStatus = 'Level Not Loaded';
		this.$scope.callback.windowClosed = function() {
		};
		//scope.SwingAway(SwingDirection.Left, false, null);
		scope.$watch('model.selectedLevel', ss.mkdel(this, function() {
			if (ss.isValue(this.$scope.model.selectedLevel)) {
				this.$scope.callback.loadLevel(this.$scope.model.selectedLevel);
			}
		}));
	};
	$MimeGame_Client_Controllers_$LevelSelectorController.__typeName = 'MimeGame.Client.Controllers.$LevelSelectorController';
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Controllers.TriangleGameController
	var $MimeGame_Client_Controllers_$TriangleGameController = function(scope) {
		this.$scope = null;
		this.$scope = scope;
		this.$scope.model = $MimeGame_Client_Scope_Controller_TriangleGameScopeModel.$ctor();
		this.$scope.callback = $MimeGame_Client_Scope_Controller_TriangleGameScopeCallback.$ctor();
		new $MimeGame_Client_TriangleGame();
	};
	$MimeGame_Client_Controllers_$TriangleGameController.__typeName = 'MimeGame.Client.Controllers.$TriangleGameController';
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Directives.DraggableDirective
	var $MimeGame_Client_Directives_DraggableDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$MimeGame_Client_Directives_DraggableDirective.__typeName = 'MimeGame.Client.Directives.DraggableDirective';
	global.MimeGame.Client.Directives.DraggableDirective = $MimeGame_Client_Directives_DraggableDirective;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Directives.FancyHorizontalListDirective
	var $MimeGame_Client_Directives_FancyHorizontalListDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyHorizontalList.html', $MimeGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bind: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$MimeGame_Client_Directives_FancyHorizontalListDirective.__typeName = 'MimeGame.Client.Directives.FancyHorizontalListDirective';
	global.MimeGame.Client.Directives.FancyHorizontalListDirective = $MimeGame_Client_Directives_FancyHorizontalListDirective;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Directives.FancyHorizontalListIndexDirective
	var $MimeGame_Client_Directives_FancyHorizontalListIndexDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyHorizontalListIndex.html', $MimeGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bindIndex: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$MimeGame_Client_Directives_FancyHorizontalListIndexDirective.__typeName = 'MimeGame.Client.Directives.FancyHorizontalListIndexDirective';
	global.MimeGame.Client.Directives.FancyHorizontalListIndexDirective = $MimeGame_Client_Directives_FancyHorizontalListIndexDirective;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Directives.FancyListDirective
	var $MimeGame_Client_Directives_FancyListDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyList.html', $MimeGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bind: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$MimeGame_Client_Directives_FancyListDirective.__typeName = 'MimeGame.Client.Directives.FancyListDirective';
	global.MimeGame.Client.Directives.FancyListDirective = $MimeGame_Client_Directives_FancyListDirective;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Directives.FancyListIndexDirective
	var $MimeGame_Client_Directives_FancyListIndexDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/fancyListIndex.html', $MimeGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { items: '=', bindIndex: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$MimeGame_Client_Directives_FancyListIndexDirective.__typeName = 'MimeGame.Client.Directives.FancyListIndexDirective';
	global.MimeGame.Client.Directives.FancyListIndexDirective = $MimeGame_Client_Directives_FancyListIndexDirective;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Directives.FloatingWindowDirective
	var $MimeGame_Client_Directives_FloatingWindowDirective = function() {
		this.link = null;
		this.$myElement = null;
		this.$myScope = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.templateUrl = null;
		this.transclude = false;
		//            myUIManagerService = uiManagerService;
		this.restrict = 'EA';
		this.templateUrl = ss.formatString('{0}partials/floatingWindow.html', $MimeGame_Client_Utils_Constants.contentAddress);
		this.replace = true;
		this.transclude = true;
		this.scope = { width: '=', height: '=', left: '=', top: '=', windowTitle: '=', visible: '=', onclose: '&' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$MimeGame_Client_Directives_FloatingWindowDirective.__typeName = 'MimeGame.Client.Directives.FloatingWindowDirective';
	global.MimeGame.Client.Directives.FloatingWindowDirective = $MimeGame_Client_Directives_FloatingWindowDirective;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Directives.ForNextDirective
	var $MimeGame_Client_Directives_ForNextDirective = function() {
		this.link = null;
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$MimeGame_Client_Directives_ForNextDirective.__typeName = 'MimeGame.Client.Directives.ForNextDirective';
	global.MimeGame.Client.Directives.ForNextDirective = $MimeGame_Client_Directives_ForNextDirective;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Directives.Canvas.CanvasAssetFrameDirective
	var $MimeGame_Client_Directives_Canvas_CanvasAssetFrameDirective = function() {
		this.link = null;
		this.replace = false;
		this.restrict = null;
		this.scope = null;
		this.template = null;
		this.transclude = false;
		this.restrict = 'EA';
		this.template = '<canvas></canvas>';
		this.replace = true;
		this.transclude = true;
		this.scope = { frame: '=', width: '=', height: '=', inline: '=' };
		this.link = ss.mkdel(this, this.$linkFn);
	};
	$MimeGame_Client_Directives_Canvas_CanvasAssetFrameDirective.__typeName = 'MimeGame.Client.Directives.Canvas.CanvasAssetFrameDirective';
	global.MimeGame.Client.Directives.Canvas.CanvasAssetFrameDirective = $MimeGame_Client_Directives_Canvas_CanvasAssetFrameDirective;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Filters.RoundFilter
	var $MimeGame_Client_Filters_RoundFilter = function() {
	};
	$MimeGame_Client_Filters_RoundFilter.__typeName = 'MimeGame.Client.Filters.RoundFilter';
	global.MimeGame.Client.Filters.RoundFilter = $MimeGame_Client_Filters_RoundFilter;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Filters.SwitchFilter
	var $MimeGame_Client_Filters_SwitchFilter = function() {
	};
	$MimeGame_Client_Filters_SwitchFilter.__typeName = 'MimeGame.Client.Filters.SwitchFilter';
	global.MimeGame.Client.Filters.SwitchFilter = $MimeGame_Client_Filters_SwitchFilter;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope._KeepBaseScopeAlive
	var $MimeGame_Client_Scope__KeepBaseScopeAlive = function() {
	};
	$MimeGame_Client_Scope__KeepBaseScopeAlive.__typeName = 'MimeGame.Client.Scope._KeepBaseScopeAlive';
	global.MimeGame.Client.Scope._KeepBaseScopeAlive = $MimeGame_Client_Scope__KeepBaseScopeAlive;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Controller.LevelModel
	var $MimeGame_Client_Scope_Controller_LevelModel = function() {
	};
	$MimeGame_Client_Scope_Controller_LevelModel.__typeName = 'MimeGame.Client.Scope.Controller.LevelModel';
	$MimeGame_Client_Scope_Controller_LevelModel.createInstance = function() {
		return $MimeGame_Client_Scope_Controller_LevelModel.$ctor();
	};
	$MimeGame_Client_Scope_Controller_LevelModel.$ctor = function() {
		var $this = {};
		$this.name = null;
		return $this;
	};
	global.MimeGame.Client.Scope.Controller.LevelModel = $MimeGame_Client_Scope_Controller_LevelModel;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Controller.LevelSelectorScope
	var $MimeGame_Client_Scope_Controller_LevelSelectorScope = function() {
		this.model = null;
		this.callback = null;
		$MimeGame_Client_Scope_Directive_FloatingWindowBaseScope.call(this);
	};
	$MimeGame_Client_Scope_Controller_LevelSelectorScope.__typeName = 'MimeGame.Client.Scope.Controller.LevelSelectorScope';
	global.MimeGame.Client.Scope.Controller.LevelSelectorScope = $MimeGame_Client_Scope_Controller_LevelSelectorScope;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Controller.LevelSelectorScopeCallback
	var $MimeGame_Client_Scope_Controller_LevelSelectorScopeCallback = function() {
	};
	$MimeGame_Client_Scope_Controller_LevelSelectorScopeCallback.__typeName = 'MimeGame.Client.Scope.Controller.LevelSelectorScopeCallback';
	$MimeGame_Client_Scope_Controller_LevelSelectorScopeCallback.createInstance = function() {
		return $MimeGame_Client_Scope_Controller_LevelSelectorScopeCallback.$ctor();
	};
	$MimeGame_Client_Scope_Controller_LevelSelectorScopeCallback.$ctor = function() {
		var $this = {};
		$this.windowClosed = null;
		$this.loadLevel = null;
		return $this;
	};
	global.MimeGame.Client.Scope.Controller.LevelSelectorScopeCallback = $MimeGame_Client_Scope_Controller_LevelSelectorScopeCallback;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Controller.LevelSelectorScopeModel
	var $MimeGame_Client_Scope_Controller_LevelSelectorScopeModel = function() {
	};
	$MimeGame_Client_Scope_Controller_LevelSelectorScopeModel.__typeName = 'MimeGame.Client.Scope.Controller.LevelSelectorScopeModel';
	$MimeGame_Client_Scope_Controller_LevelSelectorScopeModel.createInstance = function() {
		return $MimeGame_Client_Scope_Controller_LevelSelectorScopeModel.$ctor();
	};
	$MimeGame_Client_Scope_Controller_LevelSelectorScopeModel.$ctor = function() {
		var $this = {};
		$this.selectedLevel = null;
		$this.loadingStatus = null;
		$this.levels = null;
		return $this;
	};
	global.MimeGame.Client.Scope.Controller.LevelSelectorScopeModel = $MimeGame_Client_Scope_Controller_LevelSelectorScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Controller.TriangleGameScope
	var $MimeGame_Client_Scope_Controller_TriangleGameScope = function() {
		this.model = null;
		this.callback = null;
	};
	$MimeGame_Client_Scope_Controller_TriangleGameScope.__typeName = 'MimeGame.Client.Scope.Controller.TriangleGameScope';
	global.MimeGame.Client.Scope.Controller.TriangleGameScope = $MimeGame_Client_Scope_Controller_TriangleGameScope;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Controller.TriangleGameScopeCallback
	var $MimeGame_Client_Scope_Controller_TriangleGameScopeCallback = function() {
	};
	$MimeGame_Client_Scope_Controller_TriangleGameScopeCallback.__typeName = 'MimeGame.Client.Scope.Controller.TriangleGameScopeCallback';
	$MimeGame_Client_Scope_Controller_TriangleGameScopeCallback.createInstance = function() {
		return $MimeGame_Client_Scope_Controller_TriangleGameScopeCallback.$ctor();
	};
	$MimeGame_Client_Scope_Controller_TriangleGameScopeCallback.$ctor = function() {
		var $this = {};
		return $this;
	};
	global.MimeGame.Client.Scope.Controller.TriangleGameScopeCallback = $MimeGame_Client_Scope_Controller_TriangleGameScopeCallback;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Controller.TriangleGameScopeModel
	var $MimeGame_Client_Scope_Controller_TriangleGameScopeModel = function() {
	};
	$MimeGame_Client_Scope_Controller_TriangleGameScopeModel.__typeName = 'MimeGame.Client.Scope.Controller.TriangleGameScopeModel';
	$MimeGame_Client_Scope_Controller_TriangleGameScopeModel.createInstance = function() {
		return $MimeGame_Client_Scope_Controller_TriangleGameScopeModel.$ctor();
	};
	$MimeGame_Client_Scope_Controller_TriangleGameScopeModel.$ctor = function() {
		var $this = {};
		return $this;
	};
	global.MimeGame.Client.Scope.Controller.TriangleGameScopeModel = $MimeGame_Client_Scope_Controller_TriangleGameScopeModel;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Directive.FloatingWindowBaseScope
	var $MimeGame_Client_Scope_Directive_FloatingWindowBaseScope = function() {
		this.swingAway = null;
		this.swingBack = null;
		this.minimize = null;
		this.visible = false;
		this.minimized = false;
		this.onClose = null;
		this.onReady = null;
		this.destroyWindow = null;
		$MimeGame_Client_Services_ManagedScope.call(this);
	};
	$MimeGame_Client_Scope_Directive_FloatingWindowBaseScope.__typeName = 'MimeGame.Client.Scope.Directive.FloatingWindowBaseScope';
	global.MimeGame.Client.Scope.Directive.FloatingWindowBaseScope = $MimeGame_Client_Scope_Directive_FloatingWindowBaseScope;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Directive.FloatingWindowPosition
	var $MimeGame_Client_Scope_Directive_FloatingWindowPosition = function() {
	};
	$MimeGame_Client_Scope_Directive_FloatingWindowPosition.__typeName = 'MimeGame.Client.Scope.Directive.FloatingWindowPosition';
	$MimeGame_Client_Scope_Directive_FloatingWindowPosition.createInstance = function() {
		return $MimeGame_Client_Scope_Directive_FloatingWindowPosition.$ctor();
	};
	$MimeGame_Client_Scope_Directive_FloatingWindowPosition.$ctor = function() {
		var $this = {};
		$this.display = null;
		$this.left = null;
		$this.top = null;
		$this.marginLeft = null;
		$this.marginTop = null;
		$this.zIndex = 0;
		return $this;
	};
	global.MimeGame.Client.Scope.Directive.FloatingWindowPosition = $MimeGame_Client_Scope_Directive_FloatingWindowPosition;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Directive.FloatingWindowScope
	var $MimeGame_Client_Scope_Directive_FloatingWindowScope = function() {
		this.$parent = null;
		this.visible = false;
		this.width = null;
		this.height = null;
		this.left = null;
		this.top = null;
		this.sizeStyle = null;
		this.lastSizeStyle = null;
		this.positionStyles = null;
		this.lastPositionStyles = null;
		this.windowTitle = null;
		this.onclose = null;
		this.close = null;
		this.minimize = null;
		this.maximize = null;
		this.restore = null;
		this.isMaximized = false;
		MimeGame.Client.Scope.BaseScope.call(this);
	};
	$MimeGame_Client_Scope_Directive_FloatingWindowScope.__typeName = 'MimeGame.Client.Scope.Directive.FloatingWindowScope';
	global.MimeGame.Client.Scope.Directive.FloatingWindowScope = $MimeGame_Client_Scope_Directive_FloatingWindowScope;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Directive.Size
	var $MimeGame_Client_Scope_Directive_Size = function() {
	};
	$MimeGame_Client_Scope_Directive_Size.__typeName = 'MimeGame.Client.Scope.Directive.Size';
	$MimeGame_Client_Scope_Directive_Size.createInstance = function() {
		return $MimeGame_Client_Scope_Directive_Size.$ctor();
	};
	$MimeGame_Client_Scope_Directive_Size.$ctor = function() {
		var $this = {};
		$this.width = null;
		$this.height = null;
		return $this;
	};
	global.MimeGame.Client.Scope.Directive.Size = $MimeGame_Client_Scope_Directive_Size;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Directive.SwingDirection
	var $MimeGame_Client_Scope_Directive_SwingDirection = function() {
	};
	$MimeGame_Client_Scope_Directive_SwingDirection.__typeName = 'MimeGame.Client.Scope.Directive.SwingDirection';
	global.MimeGame.Client.Scope.Directive.SwingDirection = $MimeGame_Client_Scope_Directive_SwingDirection;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Scope.Directive.Canvas.CanvasAssetFrameScope
	var $MimeGame_Client_Scope_Directive_Canvas_CanvasAssetFrameScope = function() {
		this.inline = false;
		this.width = 0;
		this.height = 0;
		$MimeGame_Client_Services_ManagedScope.call(this);
	};
	$MimeGame_Client_Scope_Directive_Canvas_CanvasAssetFrameScope.__typeName = 'MimeGame.Client.Scope.Directive.Canvas.CanvasAssetFrameScope';
	global.MimeGame.Client.Scope.Directive.Canvas.CanvasAssetFrameScope = $MimeGame_Client_Scope_Directive_Canvas_CanvasAssetFrameScope;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Services.CreatedUI
	var $MimeGame_Client_Services_CreatedUI$1 = function(T) {
		var $type = function(scope, element) {
			this.scope = null;
			this.element = null;
			this.scope = scope;
			this.element = element;
		};
		ss.registerGenericClassInstance($type, $MimeGame_Client_Services_CreatedUI$1, [T], {
			destroy: function() {
				if (!ss.staticEquals(this.scope.onDestroy, null)) {
					this.scope.onDestroy();
				}
				this.scope.$destroy();
				this.element.remove();
			}
		}, function() {
			return null;
		}, function() {
			return [];
		});
		return $type;
	};
	$MimeGame_Client_Services_CreatedUI$1.__typeName = 'MimeGame.Client.Services.CreatedUI$1';
	ss.initGenericClass($MimeGame_Client_Services_CreatedUI$1, $asm, 1);
	global.MimeGame.Client.Services.CreatedUI$1 = $MimeGame_Client_Services_CreatedUI$1;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Services.CreateUIService
	var $MimeGame_Client_Services_CreateUIService = function(compileService, rootScopeService) {
		this.$myCompileService = null;
		this.$myRootScopeService = null;
		this.$singltons = {};
		this.$myCompileService = compileService;
		this.$myRootScopeService = rootScopeService;
	};
	$MimeGame_Client_Services_CreateUIService.__typeName = 'MimeGame.Client.Services.CreateUIService';
	global.MimeGame.Client.Services.CreateUIService = $MimeGame_Client_Services_CreateUIService;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Services.ManagedScope
	var $MimeGame_Client_Services_ManagedScope = function() {
		this.onDestroy = null;
		MimeGame.Client.Scope.BaseScope.call(this);
	};
	$MimeGame_Client_Services_ManagedScope.__typeName = 'MimeGame.Client.Services.ManagedScope';
	global.MimeGame.Client.Services.ManagedScope = $MimeGame_Client_Services_ManagedScope;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Utils.CanvasInformation
	var $MimeGame_Client_Utils_CanvasInformation = function(context, domCanvas) {
		this.context = null;
		this.jCanvas = null;
		this.canvas = null;
		this.context = context;
		this.jCanvas = domCanvas;
		this.canvas = domCanvas[0];
	};
	$MimeGame_Client_Utils_CanvasInformation.__typeName = 'MimeGame.Client.Utils.CanvasInformation';
	$MimeGame_Client_Utils_CanvasInformation.create = function(canvas, w, h) {
		if (w === 0) {
			w = 1;
		}
		if (h === 0) {
			h = 1;
		}
		return new $MimeGame_Client_Utils_CanvasInformation(Raphael(canvas, w, h), $(canvas));
	};
	global.MimeGame.Client.Utils.CanvasInformation = $MimeGame_Client_Utils_CanvasInformation;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Utils.Constants
	var $MimeGame_Client_Utils_Constants = function() {
	};
	$MimeGame_Client_Utils_Constants.__typeName = 'MimeGame.Client.Utils.Constants';
	global.MimeGame.Client.Utils.Constants = $MimeGame_Client_Utils_Constants;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Utils.Extensions
	var $MimeGame_Client_Utils_Extensions = function() {
	};
	$MimeGame_Client_Utils_Extensions.__typeName = 'MimeGame.Client.Utils.Extensions';
	$MimeGame_Client_Utils_Extensions.addEvent = function(element, eventName, listener) {
		if (!!ss.isValue(element.addEventListener)) {
			element.addEventListener(eventName, listener, false);
		}
		else {
			element.AttachEvent(eventName, listener);
		}
	};
	$MimeGame_Client_Utils_Extensions.upsideDown = function(items) {
		var pieces = [];
		var highest = 0;
		for (var $t1 = 0; $t1 < items.length; $t1++) {
			var trianglePiece = items[$t1];
			if (trianglePiece.y > highest) {
				highest = trianglePiece.y;
			}
		}
		for (var $t2 = 0; $t2 < items.length; $t2++) {
			var trianglePiece1 = items[$t2];
			ss.add(pieces, $MimeGame_Client_TrianglePiece.$ctor(trianglePiece1.x, highest - trianglePiece1.y, !trianglePiece1.pointUp));
		}
		return pieces;
	};
	$MimeGame_Client_Utils_Extensions.inverse = function(items) {
		var pieces = [];
		for (var $t1 = 0; $t1 < items.length; $t1++) {
			var trianglePiece = items[$t1];
			ss.add(pieces, $MimeGame_Client_TrianglePiece.$ctor(trianglePiece.x, trianglePiece.y, !trianglePiece.pointUp));
		}
		return pieces;
	};
	$MimeGame_Client_Utils_Extensions.takeRandom = function(T) {
		return function(items) {
			var ls = ss.arrayClone(items);
			ls.sort(function(a, b) {
				return ss.Int32.trunc(ss.round(Math.random()) - 0.5);
			});
			return ls;
		};
	};
	$MimeGame_Client_Utils_Extensions.percent$1 = function(num) {
		return num + '%';
	};
	$MimeGame_Client_Utils_Extensions.percent = function(num) {
		return num + '%';
	};
	global.MimeGame.Client.Utils.Extensions = $MimeGame_Client_Utils_Extensions;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Utils.Point
	var $MimeGame_Client_Utils_Point = function() {
	};
	$MimeGame_Client_Utils_Point.__typeName = 'MimeGame.Client.Utils.Point';
	$MimeGame_Client_Utils_Point.$ctor = function(x, y) {
		var $this = {};
		$this.x = 0;
		$this.y = 0;
		$this.x = x;
		$this.y = y;
		return $this;
	};
	global.MimeGame.Client.Utils.Point = $MimeGame_Client_Utils_Point;
	////////////////////////////////////////////////////////////////////////////////
	// MimeGame.Client.Utils.Pointer
	var $MimeGame_Client_Utils_Pointer = function() {
	};
	$MimeGame_Client_Utils_Pointer.__typeName = 'MimeGame.Client.Utils.Pointer';
	$MimeGame_Client_Utils_Pointer.$ctor = function(x, y, delta, right) {
		var $this = $MimeGame_Client_Utils_Point.$ctor(x, y);
		$this.delta = 0;
		$this.right = false;
		$this.delta = delta;
		$this.right = right;
		return $this;
	};
	global.MimeGame.Client.Utils.Pointer = $MimeGame_Client_Utils_Pointer;
	////////////////////////////////////////////////////////////////////////////////
	// Triangles.Utility.Help
	var $Triangles_Utility_Help = function() {
	};
	$Triangles_Utility_Help.__typeName = 'Triangles.Utility.Help';
	$Triangles_Utility_Help.getColor = function(_start, _end, _percent) {
		if (ss.isNullOrUndefined(_start)) {
			_start = '#FFFFFF';
		}
		var hex2Dec = function(_hex) {
			return parseInt(_hex, 16);
		};
		var dec2Hex = function(_dec) {
			return ((_dec < 16) ? '0' : '') + _dec.toString(16);
		};
		_start = _start.substr(1, 7);
		_end = _end.substr(1, 7);
		var r1 = hex2Dec(_start.substr(0, 2));
		var g1 = hex2Dec(_start.substr(2, 4));
		var b1 = hex2Dec(_start.substr(4, 6));
		var r2 = hex2Dec(_end.substr(0, 2));
		var g2 = hex2Dec(_end.substr(2, 4));
		var b2 = hex2Dec(_end.substr(4, 6));
		var pc = _percent / 100;
		var r = ss.Int32.trunc(Math.floor(r1 + pc * (r2 - r1) + 0.5));
		var g = ss.Int32.trunc(Math.floor(g1 + pc * (g2 - g1) + 0.5));
		var b = ss.Int32.trunc(Math.floor(b1 + pc * (b2 - b1) + 0.5));
		return '#' + dec2Hex(r) + dec2Hex(g) + dec2Hex(b);
	};
	$Triangles_Utility_Help.getCursorPosition = function(ev) {
		if (!!(ev.originalEvent && ev.originalEvent.targetTouches && ev.originalEvent.targetTouches.length > 0)) {
			ev = ss.cast(ev.originalEvent.targetTouches[0], Event);
		}
		return $MimeGame_Client_Utils_Pointer.$ctor(0, 0, ss.unbox(ss.cast((!!ev.wheelDelta ? (ev.wheelDelta / 40) : (!!ev.detail ? -ev.detail : 0)), ss.Int32)), !!ss.referenceEquals(ev.Button, 2));
	};
	$Triangles_Utility_Help.getRandomColor = function() {
		return $Triangles_Utility_Help.colors[ss.Int32.trunc(Math.random() * $Triangles_Utility_Help.colors.length)];
	};
	$Triangles_Utility_Help.isPointInTriangle = function(_s, _a, _b, _c) {
		var asX = _s.x - _a.x;
		var asY = _s.y - _a.y;
		var sAb = (_b.x - _a.x) * asY - (_b.y - _a.y) * asX > 0;
		if ((_c.x - _a.x) * asY - (_c.y - _a.y) * asX > 0 === sAb) {
			return false;
		}
		if ((_c.x - _b.x) * (_s.y - _b.y) - (_c.y - _b.y) * (_s.x - _b.x) > 0 !== sAb) {
			return false;
		}
		return true;
	};
	$Triangles_Utility_Help.log = function(_cont) {
		var console = $('#txtConsole');
		var text = console.val();
		console.val(text + _cont + '\n');
		console.scrollTop(console[0].scrollHeight - console.height());
	};
	global.Triangles.Utility.Help = $Triangles_Utility_Help;
	ss.initClass($MimeGame_Client_$TriangleMove, $asm, {});
	ss.initClass($MimeGame_Client_BuildAngular, $asm, {});
	ss.initClass($MimeGame_Client_RaphaelBoundingBox, $asm, {});
	ss.initClass($MimeGame_Client_Triangle, $asm, {
		getCurrentColor: function() {
			var increase = 15;
			if (this.transitioning + increase >= 100) {
				this.color = this.$transitionToColor;
				this.transitioning = 0;
			}
			if (this.transitioning > 0) {
				return $Triangles_Utility_Help.getColor(this.color, this.$transitionToColor, this.transitioning += increase);
			}
			return this.color;
		},
		transitionTo: function(_toColor) {
			this.$transitionToColor = _toColor;
			this.transitioning = 1;
		},
		draw: function(_context) {
			var strokeStyle = '';
			var lineWidth = 0;
			//worst code
			if (this.selected) {
				strokeStyle = '#FAFAFA';
			}
			else if (this.glow) {
				strokeStyle = 'gold';
			}
			else {
				strokeStyle = 'black';
			}
			if (this.selected) {
				lineWidth = 5;
			}
			else if (this.glow) {
				lineWidth = 4;
			}
			else {
				lineWidth = 3;
			}
			var currentColor = this.getCurrentColor();
			if (ss.isNullOrUndefined(currentColor)) {
				if (ss.isValue(this.element)) {
					this.element.remove();
				}
				this.element = null;
				return;
			}
			//  _context.ShadowColor ="black";
			//  _context.ShadowBlur = 20;
			//  _context.ShadowOffsetX = ((mouseX - TriangleGame.Offset.X - TriangleGame.Size.X / 2.0) / TriangleLength / 2)*5;
			//  _context.ShadowOffsetY = ((mouseY - TriangleGame.Offset.Y - TriangleGame.Size.Y / 2.0) / TriangleLength)*5;
			var fillStyle = currentColor;
			if (ss.isNullOrUndefined(this.element)) {
				if (this.pointUp) {
					var x = this.x / 2;
					var y = this.y;
					var xxx = x * 60 + x * this.$spacing - this.$spacing / 2 + $MimeGame_Client_TriangleGame.offset.x;
					var yyy = y * $MimeGame_Client_Triangle.triangleLength + ss.Int32.div(y * this.$spacing, 2) + $MimeGame_Client_TriangleGame.offset.y;
					if (this.selected) {
						//  ctx.rotate((cur+=3)*Math.PI/180); 
					}
					this.element = _context.path('M' + xxx + ' ' + yyy + 'L' + (xxx + 30) + ' ' + (yyy + $MimeGame_Client_Triangle.triangleLength) + 'L' + (xxx - 30) + ' ' + (yyy + $MimeGame_Client_Triangle.triangleLength) + 'L' + xxx + ' ' + yyy);
				}
				else {
					var x1 = (this.x - 1) / 2;
					var y1 = this.y;
					var xxx1 = x1 * 60 + x1 * this.$spacing + $MimeGame_Client_TriangleGame.offset.x;
					var yyy1 = y1 * $MimeGame_Client_Triangle.triangleLength + ss.Int32.div(y1 * this.$spacing, 2) + $MimeGame_Client_TriangleGame.offset.y;
					if (this.selected) {
						//  ctx.rotate((cur+=3)*Math.PI/180); 
					}
					this.element = _context.path('M' + xxx1 + ' ' + yyy1 + 'L' + (xxx1 + 60) + ' ' + yyy1 + 'L' + (xxx1 + 30) + ' ' + (yyy1 + $MimeGame_Client_Triangle.triangleLength) + 'L' + xxx1 + ' ' + yyy1);
				}
				this.element.attr({ 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
				this.element.mousedown(ss.mkdel(this, function(e) {
					var pointer = $Triangles_Utility_Help.getCursorPosition(e);
					$MimeGame_Client_TriangleGame.instance.mouseDown(pointer, this);
				}));
				this.element.mouseover(ss.mkdel(this, function(e1) {
					$MimeGame_Client_TriangleGame.instance.mouseOver(this);
				}));
				var touched;
				this.element.touchstart(ss.mkdel(this, function(e2) {
					var pointer1 = $Triangles_Utility_Help.getCursorPosition(e2);
					touched = true;
					window.setTimeout(ss.mkdel(this, function() {
						if (touched) {
							pointer1.right = true;
							$MimeGame_Client_TriangleGame.instance.mouseDown(pointer1, this);
						}
					}), 500);
					//right click
					$MimeGame_Client_TriangleGame.instance.mouseDown(pointer1, this);
					e2.preventDefault();
				}));
				this.element.touchend(function(e3) {
					touched = false;
					e3.preventDefault();
				});
				this.element.touchmove(ss.mkdel(this, function(e4) {
					$MimeGame_Client_TriangleGame.instance.mouseOver(this);
					e4.preventDefault();
				}));
			}
			lineWidth *= 2;
			this.element.attr({ fill: fillStyle, 'stroke-width': lineWidth, stroke: strokeStyle });
			//
			//
			//                        if (Glow) {
			//
			//
			//                        _context.LineWidth = 8;
			//
			//
			//                        if (transitioning > 0) _context.StrokeStyle = "white";
			//
			//
			//                        else _context.StrokeStyle = "black";
			//
			//
			//                        _context.Stroke();
			//
			//
			//                        _context.LineWidth = 4;
			//
			//
			//                        _context.StrokeStyle = "gold";
			//
			//
			//                        _context.Stroke();
			//
			//
			//                        } else if (Selected) {
			//
			//
			//                        _context.Stroke();
			//
			//
			//                        _context.LineWidth = 4;
			//
			//
			//                        _context.StrokeStyle = "black";
			//
			//
			//                        _context.Stroke();
			//
			//
			//                        } else
			//
			//
			//                        _context.Stroke();
			//
			//
			//                        
			//
			//
			//                        if (( Neighbors || HighlightedNeighbors ) && !Glow) {
			//
			//
			//                        _context.LineWidth = 2;
			//
			//
			//                        _context.StrokeStyle = "#345782";
			//
			//
			//                        _context.Stroke();
			//
			//
			//                        }
			//
			//
			//                        if (Neighbors) {
			//
			//
			//                        _context.StrokeStyle = "black";
			//
			//
			//                        _context.LineWidth = 9;
			//
			//
			//                        _context.Stroke();
			//
			//
			//                        
			//
			//
			//                        _context.StrokeStyle = "white";
			//
			//
			//                        _context.LineWidth = 4;
			//
			//
			//                        _context.Stroke();
			//
			//
			//                        }
		},
		pop: function() {
			this.color = null;
		},
		getNeighbors: function(_board) {
			var neighs;
			if (this.pointUp) {
				neighs = $MimeGame_Client_Triangle.$pointUpNeighbors;
			}
			else {
				neighs = $MimeGame_Client_Triangle.$pointDownNeighbors;
			}
			var result = [];
			for (var i = 0; i < neighs.length; i++) {
				var cX = this.x + neighs[i].x;
				var cY = this.y + neighs[i].y;
				if (cX >= 0 && cX < _board.length && cY >= 0 && cY < _board[0].length) {
					if (ss.isValue(_board[cX][cY].color)) {
						ss.add(result, _board[cX][cY]);
					}
				}
			}
			return result;
		}
	});
	ss.initClass($MimeGame_Client_TriangleGame, $asm, {
		mouseOver: function(triangle) {
			for (var l = 0; l < this.$myTriangleList.length; l++) {
				this.$myTriangleList[l].glow = false;
				if (ss.referenceEquals(this.$myTriangleList[l], triangle)) {
					this.$myTriangleList[l].glow = true;
				}
			}
		},
		mouseDown: function(pointer, triangle) {
			if (!pointer.right) {
				for (var l = 0; l < this.$myTriangleList.length; l++) {
					if (ss.referenceEquals(this.$myTriangleList[l], triangle)) {
						if (this.$myTriangleList[l].selected === true) {
							this.$myTriangleList[l].selected = false;
						}
						else {
							this.$myTriangleList[l].selected = true;
						}
					}
					else {
						this.$myTriangleList[l].selected = false;
					}
				}
			}
		},
		$dropTriangles: function() {
			if (this.$drawTick % 3 !== 0) {
				return;
			}
			var didPointUp = false;
			var bad = { $: true };
			while (bad.$) {
				bad.$ = false;
				var noMoves = true;
				for (var y = this.$boardHeight - 1; y >= 0; y--) {
					var poppedThisRow = { $: false };
					for (var x = ss.Int32.div(this.$boardWidth, 2); x >= 0; x--) {
						noMoves = this.$popTris(x, y, didPointUp, noMoves, poppedThisRow, bad);
					}
					for (var x1 = ss.Int32.div(this.$boardWidth, 2); x1 < this.$boardWidth; x1++) {
						noMoves = this.$popTris(x1, y, didPointUp, noMoves, poppedThisRow, bad);
					}
					if (poppedThisRow.$ && true) {
						return;
					}
				}
				if (noMoves && didPointUp) {
					break;
				}
				didPointUp = true;
			}
		},
		$popTris: function(x, y, didPointUp, noMoves, poppedThisRow, bad) {
			var current = this.$myTriangleGrid[x][y];
			if (ss.isNullOrUndefined(current.color) && current.transitioning === 0) {
				if (!current.pointUp && didPointUp) {
					return noMoves;
				}
				if (y === 0 && !current.pointUp) {
					current.transitionTo($Triangles_Utility_Help.getRandomColor());
					return noMoves;
				}
				var neighbors = current.getNeighbors(this.$myTriangleGrid);
				var $t1 = $MimeGame_Client_Utils_Extensions.takeRandom($MimeGame_Client_Triangle).call(null, neighbors);
				for (var $t2 = 0; $t2 < $t1.length; $t2++) {
					var neighbor = $t1[$t2];
					if (neighbor.y === current.y) {
						if (!neighbor.pointUp && current.pointUp) {
							current.transitionTo(neighbor.color);
							neighbor.color = null;
							noMoves = false;
							poppedThisRow.$ = true;
							break;
						}
					}
					else if (neighbor.y < current.y) {
						current.transitionTo(neighbor.color);
						neighbor.color = null;
						noMoves = false;
						poppedThisRow.$ = true;
						break;
					}
				}
				if (ss.isNullOrUndefined(current.color) && current.transitioning === 0) {
					if (y === 0) {
						current.transitionTo($Triangles_Utility_Help.getRandomColor());
					}
					else {
						bad.$ = true;
					}
				}
			}
			return noMoves;
		},
		$init: function() {
			this.$myTriangleList = [];
			this.$myTriangleGrid = new Array(this.$boardWidth);
			for (var x = 0; x < this.$boardWidth; x++) {
				this.$myTriangleGrid[x] = new Array(this.$boardHeight);
			}
			for (var y = 0; y < this.$boardHeight; y++) {
				for (var x1 = 0; x1 < this.$boardWidth; x1++) {
					var off = ((y % 2 === 0) ? 1 : 0);
					var off2 = (x1 + off) % 2 === 0;
					var tri = new $MimeGame_Client_Triangle(x1, y, off2, $Triangles_Utility_Help.getRandomColor());
					this.$myTriangleGrid[x1][y] = tri;
					ss.add(this.$myTriangleList, tri);
				}
			}
		},
		$drawBoard: function() {
			this.$drawTick++;
			this.$dropTriangles();
			this.$myCanvas.canvas.style.backgroundColor = '#343434';
			for (var l = 0; l < this.$myTriangleList.length; l++) {
				this.$myTriangleList[l].draw(this.$myCanvas.context);
			}
		}
	});
	ss.initClass($MimeGame_Client_TrianglePiece, $asm, {});
	ss.initClass($MimeGame_Client_Controllers_$LevelSelectorController, $asm, {});
	ss.initClass($MimeGame_Client_Controllers_$TriangleGameController, $asm, {});
	ss.initClass($MimeGame_Client_Directives_DraggableDirective, $asm, {
		$linkFn: function(scope, element, attrs) {
			element.draggable({ cancel: '.window .inner-window' });
		}
	});
	ss.initClass($MimeGame_Client_Directives_FancyHorizontalListDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(item) {
				scope.bind = item;
			};
			scope.currentClass = function(item1) {
				return (!!ss.referenceEquals(item1, scope.bind) ? 'fancy-horizontal-list-item fancy-horizontal-list-item-selected' : 'fancy-horizontal-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($MimeGame_Client_Directives_FancyHorizontalListIndexDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(index) {
				scope.bindIndex = index;
			};
			scope.currentClass = function(index1) {
				return (!!ss.referenceEquals(index1, scope.bindIndex) ? 'fancy-horizontal-list-item fancy-horizontal-list-item-selected' : 'fancy-horizontal-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($MimeGame_Client_Directives_FancyListDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(item) {
				scope.bind = item;
			};
			scope.currentClass = function(item1) {
				return (!!ss.referenceEquals(item1, scope.bind) ? 'fancy-list-item fancy-list-item-selected' : 'fancy-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($MimeGame_Client_Directives_FancyListIndexDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			scope.itemClick = function(index) {
				scope.bindIndex = index;
			};
			scope.currentClass = function(index1) {
				return (!!ss.referenceEquals(index1, scope.bindIndex) ? 'fancy-list-item fancy-list-item-selected' : 'fancy-list-item ');
			};
			scope.parentScope = scope['$parent']['$parent']['$parent'];
		}
	});
	ss.initClass($MimeGame_Client_Directives_FloatingWindowDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			this.$myElement = element;
			this.$myScope = scope;
			$MimeGame_Client_Directives_FloatingWindowDirective.$items.add(element, scope);
			element.click(ss.thisFix(ss.mkdel(this, function(elem, event) {
				this.$focus();
			})));
			scope.$parent.swingAway = ss.mkdel(this, function(a, b, c) {
				this.swingAway(a, b, element, c);
			});
			scope.$parent.swingBack = ss.mkdel(this, function(c1) {
				this.swingBack(scope, element, c1);
			});
			scope.$parent.minimize = function() {
				scope.$parent.minimized = true;
				scope.minimize();
			};
			scope.$parent.destroyWindow = function() {
				scope.$destroy();
				element.remove();
			};
			var $t1 = $MimeGame_Client_Scope_Directive_FloatingWindowPosition.$ctor();
			$t1.left = scope.left;
			$t1.top = scope.top;
			$t1.display = 'block';
			scope.positionStyles = $t1;
			scope.positionStyles.zIndex = 10000;
			if (scope.left.indexOf('%') !== -1) {
				scope.positionStyles.marginLeft = -ss.Int32.div(parseInt(ss.replaceAllString(scope.width, 'px', '')), 2) + 'px';
			}
			if (scope.top.indexOf('%') !== -1) {
				scope.positionStyles.marginTop = -ss.Int32.div(parseInt(ss.replaceAllString(scope.height, 'px', '')), 2) + 'px';
			}
			var $t2 = $MimeGame_Client_Scope_Directive_Size.$ctor();
			$t2.width = scope.width;
			$t2.height = scope.height;
			scope.sizeStyle = $t2;
			scope.maximize = function() {
				if (!scope.isMaximized) {
					scope.lastPositionStyles = scope.positionStyles;
					scope.lastSizeStyle = scope.sizeStyle;
					var $t3 = $MimeGame_Client_Scope_Directive_FloatingWindowPosition.$ctor();
					$t3.left = '0';
					$t3.top = '0';
					$t3.display = 'block';
					scope.positionStyles = $t3;
					var $t4 = $MimeGame_Client_Scope_Directive_Size.$ctor();
					$t4.width = '100%';
					$t4.height = '100%';
					scope.sizeStyle = $t4;
				}
				else {
					scope.positionStyles = scope.lastPositionStyles;
					scope.sizeStyle = scope.lastSizeStyle;
					scope.lastPositionStyles = null;
					scope.lastSizeStyle = null;
				}
				scope.isMaximized = !scope.isMaximized;
			};
			scope.close = function() {
				if (!ss.staticEquals(scope.onclose, null)) {
					scope.onclose();
				}
				if (!ss.staticEquals(scope.$parent.onClose, null)) {
					scope.$parent.onClose();
				}
				//todo destroy
				scope.positionStyles.display = 'none';
			};
			scope.minimize = function() {
				//                myUIManagerService.OnMinimize(scope);
				scope.$parent.swingAway(5, false, function() {
					scope.positionStyles.display = 'none';
				});
			};
			scope.restore = function() {
				scope.$parent.swingBack(null);
				scope.positionStyles.display = 'block';
			};
			this.$focus();
			if (!ss.staticEquals(scope.$parent.onReady, null)) {
				scope.$parent.onReady();
			}
		},
		$focus: function() {
			var $t1 = $MimeGame_Client_Directives_FloatingWindowDirective.$items.getEnumerator();
			try {
				while ($t1.moveNext()) {
					var floatingWindowScope = $t1.current();
					floatingWindowScope.value.positionStyles.zIndex = 10000;
				}
			}
			finally {
				$t1.dispose();
			}
			if ($MimeGame_Client_Directives_FloatingWindowDirective.$items.containsKey(this.$myElement)) {
				$MimeGame_Client_Directives_FloatingWindowDirective.$items.get_item(this.$myElement).positionStyles.zIndex = 10001;
				if (ss.isNullOrUndefined(this.$myScope.$root.$$phase)) {
					this.$myScope.$apply();
				}
			}
		},
		swingBack: function(scope, element, callback) {
			window.setTimeout(function() {
				var js = {};
				js['left'] = scope.left;
				js['top'] = scope.top;
				element.css('display', 'block');
				element.animate(js, 'fast', 'swing', callback);
			}, 1);
		},
		swingAway: function(direction, simulate, element, callback) {
			var js = {};
			var distance = '3000';
			switch (direction) {
				case 0: {
					js['left'] = '-' + distance + 'px';
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 1: {
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 2: {
					js['left'] = distance + 'px';
					js['top'] = '-' + distance + 'px';
					break;
				}
				case 3: {
					js['left'] = distance + 'px';
					break;
				}
				case 4: {
					js['left'] = distance + 'px';
					js['top'] = distance + 'px';
					break;
				}
				case 5: {
					js['top'] = distance + 'px';
					break;
				}
				case 6: {
					js['left'] = '-' + distance + 'px';
					js['top'] = distance + 'px';
					break;
				}
				case 7: {
					js['left'] = distance + 'px';
					break;
				}
			}
			if (simulate) {
				element.css(js);
				element.css('display', 'none');
				if (!ss.staticEquals(callback, null)) {
					callback();
				}
			}
			else {
				element.animate(js, 'slow', 'swing', function() {
					element.css('display', 'none');
					if (!ss.staticEquals(callback, null)) {
						callback();
					}
				});
			}
		}
	});
	ss.initClass($MimeGame_Client_Directives_ForNextDirective, $asm, {
		$linkFn: function(scope, element, attrs) {
			$MimeGame_Client_Directives_ForNextDirective.$forCounter++;
			var next = element.next();
			var id = next.attr('id');
			if (ss.isNullOrUndefined(id)) {
				id = 'forLink' + $MimeGame_Client_Directives_ForNextDirective.$forCounter;
				next.attr('id', id);
			}
			element.attr('for', id);
		}
	});
	ss.initClass($MimeGame_Client_Directives_Canvas_CanvasAssetFrameDirective, $asm, {
		$linkFn: function(scope, element, attr) {
			element.width(scope.width);
			element.height(scope.height);
			element[0].style.display = (scope.inline ? 'inline-block' : 'block');
			var $t1 = element[0];
			var context = ss.cast(ss.cast($t1, ss.isValue($t1) && (ss.isInstanceOfType($t1, Element) && $t1.tagName === 'CANVAS')).getContext('2d'), CanvasRenderingContext2D);
			var updateFrame = function() {
				context.canvas.width = context.canvas.width;
				context.webkitImageSmoothingEnabled = false;
				context.mozImageSmoothingEnabled = false;
				context.imageSmoothingEnabled = false;
			};
			scope.$watch('frame', updateFrame);
			scope.$watch('frame.width', updateFrame);
			scope.$watch('frame.height', updateFrame);
		}
	});
	ss.initClass($MimeGame_Client_Filters_RoundFilter, $asm, {
		filter: function(input) {
			return parseInt(input.toString());
		}
	});
	ss.initClass($MimeGame_Client_Filters_SwitchFilter, $asm, {
		filter: function(val, on, off) {
			return (val ? on : off);
		}
	});
	ss.initClass($MimeGame_Client_Scope__KeepBaseScopeAlive, $asm, {});
	ss.initClass($MimeGame_Client_Scope_Controller_LevelModel, $asm, {});
	ss.initClass($MimeGame_Client_Services_ManagedScope, $asm, {}, MimeGame.Client.Scope.BaseScope);
	ss.initClass($MimeGame_Client_Scope_Directive_FloatingWindowBaseScope, $asm, {}, $MimeGame_Client_Services_ManagedScope);
	ss.initClass($MimeGame_Client_Scope_Controller_LevelSelectorScope, $asm, {}, $MimeGame_Client_Scope_Directive_FloatingWindowBaseScope);
	ss.initClass($MimeGame_Client_Scope_Controller_LevelSelectorScopeCallback, $asm, {});
	ss.initClass($MimeGame_Client_Scope_Controller_LevelSelectorScopeModel, $asm, {});
	ss.initClass($MimeGame_Client_Scope_Controller_TriangleGameScope, $asm, {});
	ss.initClass($MimeGame_Client_Scope_Controller_TriangleGameScopeCallback, $asm, {});
	ss.initClass($MimeGame_Client_Scope_Controller_TriangleGameScopeModel, $asm, {});
	ss.initClass($MimeGame_Client_Scope_Directive_FloatingWindowPosition, $asm, {});
	ss.initClass($MimeGame_Client_Scope_Directive_FloatingWindowScope, $asm, {}, MimeGame.Client.Scope.BaseScope);
	ss.initClass($MimeGame_Client_Scope_Directive_Size, $asm, {});
	ss.initEnum($MimeGame_Client_Scope_Directive_SwingDirection, $asm, { topLeft: 0, top: 1, topRight: 2, right: 3, bottomRight: 4, bottom: 5, bottomLeft: 6, left: 7 });
	ss.initClass($MimeGame_Client_Scope_Directive_Canvas_CanvasAssetFrameScope, $asm, {}, $MimeGame_Client_Services_ManagedScope);
	ss.initClass($MimeGame_Client_Services_CreateUIService, $asm, {
		create$1: function(T) {
			return function(ui) {
				return this.create$3(T).call(this, ui, function(a, b) {
				});
			};
		},
		create$3: function(T) {
			return function(ui, populateScope) {
				var scope = this.$myRootScopeService.$new();
				var html = $(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $MimeGame_Client_Utils_Constants.contentAddress));
				populateScope(scope, html);
				var item = this.$myCompileService(html)(scope);
				item.appendTo(window.document.body);
				if (ss.isNullOrUndefined(scope.$$phase)) {
					scope.$apply();
				}
				scope = angular.element(item.children()[0]).scope() || scope;
				return new (ss.makeGenericType($MimeGame_Client_Services_CreatedUI$1, [T]))(scope, item);
			};
		},
		createSingleton: function(ui) {
			return this.createSingleton$1($MimeGame_Client_Services_ManagedScope).call(this, ui);
		},
		createSingleton$1: function(T) {
			return function(ui) {
				return this.createSingleton$2(T).call(this, ui, function(a, b) {
				});
			};
		},
		createSingleton$2: function(T) {
			return function(ui, populateScope) {
				var scope;
				if (ss.keyExists(this.$singltons, ui)) {
					var html = this.$singltons[ui];
					if (html.parent().length === 0) {
						delete this.$singltons[ui];
					}
				}
				if (ss.keyExists(this.$singltons, ui)) {
					var html1 = this.$singltons[ui];
					if (html1[0].nodeType === 8) {
						this.$singltons[ui] = html1 = html1.next();
					}
					scope = this.$myRootScopeService.$new();
					populateScope(scope, html1);
					var item = this.$myCompileService(html1)(scope);
					if (ss.isNullOrUndefined(scope.$$phase)) {
						scope.$apply();
					}
					scope = angular.element(item.children()[0]).scope() || scope;
					return new (ss.makeGenericType($MimeGame_Client_Services_CreatedUI$1, [T]))(scope, html1);
				}
				else {
					scope = this.$myRootScopeService.$new();
					var html2 = $(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $MimeGame_Client_Utils_Constants.contentAddress));
					populateScope(scope, html2);
					var item1 = this.$myCompileService(html2)(scope);
					item1.appendTo(window.document.body);
					if (ss.isNullOrUndefined(scope.$$phase)) {
						scope.$apply();
					}
					scope = angular.element(item1.children()[0]).scope() || scope;
					this.$singltons[ui] = item1;
					return new (ss.makeGenericType($MimeGame_Client_Services_CreatedUI$1, [T]))(scope, item1);
				}
			};
		},
		create: function(ui) {
			var scope = this.$myRootScopeService.$new();
			var item = this.$myCompileService($(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $MimeGame_Client_Utils_Constants.contentAddress)))(scope);
			item.appendTo(window.document.body);
			if (ss.isNullOrUndefined(scope.$$phase)) {
				scope.$apply();
			}
			scope = angular.element(item.children()[0]).scope() || scope;
			return new (ss.makeGenericType($MimeGame_Client_Services_CreatedUI$1, [$MimeGame_Client_Services_ManagedScope]))(scope, item);
		},
		create$2: function(ui, scope) {
			var item = this.$myCompileService($(ss.formatString('<div ng-include src="\'{1}partials/UIs/{0}.html\'"></div>', ui, $MimeGame_Client_Utils_Constants.contentAddress)))(scope);
			item.appendTo(window.document.body);
			if (ss.isNullOrUndefined(scope.$$phase)) {
				scope.$apply();
			}
			scope = angular.element(item.children()[0]).scope() || scope;
			return new (ss.makeGenericType($MimeGame_Client_Services_CreatedUI$1, [$MimeGame_Client_Services_ManagedScope]))(scope, item);
		}
	});
	ss.initClass($MimeGame_Client_Utils_CanvasInformation, $asm, {});
	ss.initClass($MimeGame_Client_Utils_Constants, $asm, {});
	ss.initClass($MimeGame_Client_Utils_Extensions, $asm, {});
	ss.initClass($MimeGame_Client_Utils_Point, $asm, {});
	ss.initClass($MimeGame_Client_Utils_Pointer, $asm, {}, $MimeGame_Client_Utils_Point);
	ss.initClass($Triangles_Utility_Help, $asm, {});
	$MimeGame_Client_Controllers_$LevelSelectorController.$name = 'LevelSelectorController';
	$MimeGame_Client_Controllers_$LevelSelectorController.$view = 'LevelSelector';
	$MimeGame_Client_Utils_Constants.contentAddress = '';
	$MimeGame_Client_Services_CreateUIService.name$1 = 'CreateUIService';
	$Triangles_Utility_Help.colors = ['#FF0000', '#00FF00', '#0000FF', '#880088', '#888800', '#008888'];
	$MimeGame_Client_Utils_CanvasInformation.$blackPixel = null;
	$MimeGame_Client_Triangle.muliplyer = 0.6;
	$MimeGame_Client_Triangle.triangleLength = 60;
	$MimeGame_Client_Triangle.$pointUpNeighbors = [$MimeGame_Client_Utils_Point.$ctor(-1, 0), $MimeGame_Client_Utils_Point.$ctor(1, 0), $MimeGame_Client_Utils_Point.$ctor(-2, 0), $MimeGame_Client_Utils_Point.$ctor(2, 0), $MimeGame_Client_Utils_Point.$ctor(0, -1), $MimeGame_Client_Utils_Point.$ctor(-1, -1), $MimeGame_Client_Utils_Point.$ctor(1, -1), $MimeGame_Client_Utils_Point.$ctor(0, 1), $MimeGame_Client_Utils_Point.$ctor(-1, 1), $MimeGame_Client_Utils_Point.$ctor(1, 1), $MimeGame_Client_Utils_Point.$ctor(-2, 1), $MimeGame_Client_Utils_Point.$ctor(2, 1)];
	$MimeGame_Client_Triangle.$pointDownNeighbors = [$MimeGame_Client_Utils_Point.$ctor(-1, 0), $MimeGame_Client_Utils_Point.$ctor(1, 0), $MimeGame_Client_Utils_Point.$ctor(-2, 0), $MimeGame_Client_Utils_Point.$ctor(2, 0), $MimeGame_Client_Utils_Point.$ctor(0, 1), $MimeGame_Client_Utils_Point.$ctor(-1, 1), $MimeGame_Client_Utils_Point.$ctor(1, 1), $MimeGame_Client_Utils_Point.$ctor(0, -1), $MimeGame_Client_Utils_Point.$ctor(-1, -1), $MimeGame_Client_Utils_Point.$ctor(1, -1), $MimeGame_Client_Utils_Point.$ctor(-2, -1), $MimeGame_Client_Utils_Point.$ctor(2, -1)];
	$MimeGame_Client_TriangleGame.instance = null;
	$MimeGame_Client_TriangleGame.offset = $MimeGame_Client_Utils_Point.$ctor(160, 70);
	$MimeGame_Client_TriangleGame.size = $MimeGame_Client_Utils_Point.$ctor(1100, 850);
	$MimeGame_Client_Controllers_$TriangleGameController.$name = 'TriangleGameController';
	$MimeGame_Client_Controllers_$TriangleGameController.$view = 'TriangleGame';
	$MimeGame_Client_Directives_FancyListDirective.name$1 = 'fancyList';
	$MimeGame_Client_Directives_FancyListIndexDirective.name$1 = 'fancyListIndex';
	$MimeGame_Client_Directives_FancyHorizontalListDirective.name$1 = 'fancyHorizontalList';
	$MimeGame_Client_Directives_FancyHorizontalListIndexDirective.name$1 = 'fancyHorizontalListIndex';
	$MimeGame_Client_Directives_Canvas_CanvasAssetFrameDirective.name$1 = 'canvasAssetFrame';
	$MimeGame_Client_Directives_DraggableDirective.name$1 = 'draggable';
	$MimeGame_Client_Directives_FloatingWindowDirective.name$1 = 'floatingWindow';
	$MimeGame_Client_Directives_FloatingWindowDirective.$items = new (ss.makeGenericType(ss.Dictionary$2, [Object, $MimeGame_Client_Scope_Directive_FloatingWindowScope]))();
	$MimeGame_Client_Directives_ForNextDirective.name$1 = 'forNext';
	$MimeGame_Client_Directives_ForNextDirective.$forCounter = 0;
	$MimeGame_Client_Filters_RoundFilter.name$1 = 'round';
	$MimeGame_Client_Filters_SwitchFilter.name$1 = 'switch';
	$MimeGame_Client_BuildAngular.$scopeName = '$scope';
	$MimeGame_Client_BuildAngular.$rootScopeName = '$rootScope';
	$MimeGame_Client_BuildAngular.$compileName = '$compile';
	$MimeGame_Client_BuildAngular.$http = '$http';
	$MimeGame_Client_BuildAngular.$templateCache = '$templateCache';
	$($MimeGame_Client_BuildAngular.setup);
})();
