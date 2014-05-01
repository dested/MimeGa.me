using System;
using System.Html;
using System.Runtime.CompilerServices;
using jQueryApi;
using MimeGame.Client.Controllers;
using MimeGame.Client.Directives;
using MimeGame.Client.Directives.Canvas;
using MimeGame.Client.Filters;
using MimeGame.Client.Scope.Controller;
using MimeGame.Client.Services;
using MimeGame.Client.Utils;
using ng;

namespace MimeGame.Client
{
    public static class BuildAngular
    {
        private const string ScopeName = "$scope";
        private const string RootScopeName = "$rootScope";
        private const string CompileName = "$compile";
        private const string Http = "$http";
        private const string TemplateCache = "$templateCache";
        static BuildAngular()
        {
            jQuery.OnDocumentReady(Setup);
        }

        public static void Setup()
        {



            var module = angular.Module("MimeGame", new string[] {"ui.utils", "ui.bootstrap"})
                .Config(new object[] {"$httpProvider", new Action<dynamic>(buildHttpProvider)})
                .Controller(LevelSelectorController.Name, new object[] { ScopeName, CreateUIService.Name, new Func<LevelSelectorScope, CreateUIService, object>((scope, createUIService) => new LevelSelectorController(scope, createUIService)) })
                .Controller(TriangleGameController.Name, new object[] { ScopeName, CreateUIService.Name, new Func<TriangleGameScope, object>((scope) => new TriangleGameController(scope)) })
                .Service(CreateUIService.Name, new object[] {CompileName, RootScopeName, new Func<CompileService, IRootScopeService, object>((compileService, rootScopeService) => new CreateUIService(compileService, rootScopeService))})
                .Directive(FancyListDirective.Name, new object[] {new Func<object>(() => new FancyListDirective())})
                .Directive(FancyListIndexDirective.Name, new object[] {new Func<object>(() => new FancyListIndexDirective())})
                .Directive(FancyHorizontalListDirective.Name, new object[] {new Func<object>(() => new FancyHorizontalListDirective())})
                .Directive(FancyHorizontalListIndexDirective.Name, new object[] {new Func<object>(() => new FancyHorizontalListIndexDirective())})
                .Directive(CanvasAssetFrameDirective.Name, new object[] {new Func<object>(() => new CanvasAssetFrameDirective())})
                .Directive(DraggableDirective.Name, new object[] {new Func<object>(() => new DraggableDirective())})
                .Directive(FloatingWindowDirective.Name, new object[] {new Func<object>(() => new FloatingWindowDirective())})
                .Directive(ForNextDirective.Name, new object[] {new Func<object>(() => new ForNextDirective())})
                .Filter(RoundFilter.Name, new object[] {new Func<Func<object, object>>(() => new RoundFilter().Filter)})
                .Filter(SwitchFilter.Name, new object[] {new Func<Func<bool, object, object, object>>(() => new SwitchFilter().Filter)})
                .Run(new object[]
                     {
                         Http, TemplateCache, CreateUIService.Name, new Action<IHttpService, ITemplateCacheService, CreateUIService>(
                                                                        (http, templateCache, createUIService) =>
                                                                        {
                                                                            buildCache(http, templateCache);
                                                                            createUIService.Create(LevelSelectorController.View);
                                                                            createUIService.Create(TriangleGameController.View);
                                                                        })
                     });


            //            MinimizeController.Register(module);

            angular.Bootstrap(Window.Document, "MimeGame");
        }

        private static void buildCache(IHttpService http, ITemplateCacheService templateCache)
        {
            string[] uis =
            {
                LevelSelectorController.View,
            };
            for (int index = 0; index < uis.Length; index++)
            {
                var ui = string.Format("{1}partials/UIs/{0}.html", uis[index], Constants.ContentAddress);
                http.Get(ui, null).Success(a => templateCache.Put(ui, a));
            }
        }


        private static void buildHttpProvider(dynamic httpProvider)
        {
            httpProvider.defaults.useXDomain = true;
            Delete(httpProvider.defaults.headers.common["X-Requested-With"]);
        }

        [InlineCode("delete {o};")]
        private static void Delete(object o)
        {
        }
    }
}