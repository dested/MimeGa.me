using System;
using System.Html;
using System.Html.Media.Graphics;
using jQueryApi;
using MimeGame.Client.Scope.Directive.Canvas;
using MimeGame.Client.Utils;

namespace MimeGame.Client.Directives.Canvas
{
    public class CanvasAssetFrameDirective
    {
        public const string Name = "canvasAssetFrame";
        public Action<CanvasAssetFrameScope, jQueryObject, dynamic> link;
        public bool replace;
        public string restrict;
        public dynamic scope;
        public string template;
        public bool transclude;

        public CanvasAssetFrameDirective()
        {
            restrict = "EA";
            template= "<canvas></canvas>";
            replace = true;
            transclude = true;
            scope = new
            {
                frame = "=", 
                width = "=",
                height = "=",
                inline = "=",
            };
            link = LinkFn;
        }

        private void LinkFn(CanvasAssetFrameScope scope, jQueryObject element, dynamic attr)
        {
            element.Width(scope.Width);
            element.Height(scope.Height);
            
            element[0].Style.Display = scope.Inline ? "inline-block" : "block";

            var context = (CanvasRenderingContext2D)((CanvasElement)element[0]).GetContext(CanvasContextId.Render2D);

            Action updateFrame = () =>
                                 {
                                     context.Canvas.Width = context.Canvas.Width;
                                     context.Me().webkitImageSmoothingEnabled = false;
                                     context.Me().mozImageSmoothingEnabled = false;
                                     context.Me().imageSmoothingEnabled = false;
                                 };
            scope.Watch("frame", updateFrame);
            scope.Watch("frame.width", updateFrame);
            scope.Watch("frame.height", updateFrame);

        }
    }
}
