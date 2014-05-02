using System;
using System.Html;
using System.Runtime.CompilerServices;
using jQueryApi;
using MimeGame.Client.Controllers;
using MimeGame.Client.Scope.Directive;
using MimeGame.Client.Services;
using MimeGame.Client.Utils;

namespace MimeGame.Client.Directives
{

    public class TriangleDirective
    {
        private readonly RaphaelPaperService paperService;
        public const string Name = "triangle";
        public Action<TriangleDirectiveScope, jQueryObject, dynamic> link;
        public string restrict;
        public object scope;
        public string template;
        private int transitioning;
        private TriangleDirectiveScope myScope;

        public TriangleDirective(RaphaelPaperService paperService)
        {
            this.paperService = paperService;
            restrict = "E";
            template = "";
            link = linkFn;
            scope = new
                    {
                        triangleModel = "=",
                        onMouseDown = "&",
                        onMouseOver = "&",
                    };
        }



        private const int TriangleLength = 150;
        private const int spacing = 35;

        private void linkFn(TriangleDirectiveScope scope, jQueryObject element, dynamic attrs)
        {
            myScope = scope;
            scope.Watch("triangleModel", () =>
                                         {
                                             if (scope.TriangleModel.Pop)
                                             {
                                                 scope.TriangleModel.Color = null;
                                                 scope.TriangleModel.Selected = false;
                                                 scope.TriangleModel.Glow = false;
                                                 scope.Element.Remove();
                                                 scope.Element = null;

                                                 scope.TriangleModel.Pop = false;
                                             }
                                             update(scope);
                                         },true);
           
        }

        private void update(TriangleDirectiveScope scope)
        {
            var triangleModel = scope.TriangleModel;
            if (triangleModel == null) return;
            string strokeStyle = triangleModel.Selected ? "#FAFAFA" : (triangleModel.Glow ? "gold" : "black");
            int lineWidth = triangleModel.Selected ? 18 : (triangleModel.Glow ? 16 : 14);
            var currentColor =triangleModel.Color;


            if (currentColor == null)
            {
                return;
            }
            string fillStyle = currentColor;

            if (scope.Element == null)
            {
                if (triangleModel.PointUp)
                {
                    var x = (triangleModel.X) / 2.0f;
                    var y = triangleModel.Y;

                    var xxx = x * TriangleLength + x * spacing - spacing / 2.0f + TriangleGameController.Offset.X;
                    var yyy = y * TriangleLength + y * (spacing - 3) / 2 + TriangleGameController.Offset.Y;


                    scope.Element = paperService.GetCanvas().Context.Path("M" + xxx + " " + yyy + "L" + (xxx + TriangleLength / 2) + " " + (yyy + TriangleLength) + "L" + (xxx - TriangleLength / 2) + " " + (yyy + TriangleLength) + "L" + (xxx) + " " + (yyy));
                }
                else
                {
                    var x = (triangleModel.X - 1) / 2.0f;
                    var y = triangleModel.Y;

                    var xxx = x * TriangleLength + x * spacing + TriangleGameController.Offset.X;
                    var yyy = y * TriangleLength + y * (spacing - 3) / 2 + TriangleGameController.Offset.Y;


                    scope.Element = paperService.GetCanvas().Context.Path("M" + xxx + " " + yyy + "L" + (xxx + TriangleLength) + " " + (yyy) + "L" + (xxx + TriangleLength / 2) + " " + (yyy + TriangleLength) + "L" + (xxx) + " " + (yyy));
                }

                scope.Element.Attribute(new RaphaelElementAttributes() { StrokeLineCap = RaphaelLineCap.Round, StrokeLineJoin = RaphaelLineJoin.Round });
                scope.Element.MouseDown((e) =>
                {
                    var pointer = Help.GetCursorPosition(e);
                    scope.OnMouseDown(new {pointer, triangle = scope.TriangleModel});
                });
                scope.Element.MouseOver((e) =>
                {
                    scope.OnMouseOver(new { triangle = scope.TriangleModel });
                });
                bool touched;
                scope.Element.TouchStart((e) =>
                {
                    var pointer = Help.GetCursorPosition(e);
                    touched = true;

                    Window.SetTimeout(() =>
                    {
                        if (touched)
                        {
                            pointer.Right = true;
                            scope.OnMouseDown(new { pointer, triangle = scope.TriangleModel });

                        }
                    },
                                      500);//right click
                    scope.OnMouseDown(new { pointer, triangle = scope.TriangleModel });
                    e.PreventDefault();

                });
                scope.Element.TouchEnd((e) =>
                {
                    touched = false;
                    e.PreventDefault();

                });

                scope.Element.TouchMove((e) =>
                {
                    scope.OnMouseOver(new {triangle = scope.TriangleModel });
                    e.PreventDefault();
                });

            }

            scope.Element.Attribute(new RaphaelElementAttributes() { Fill = fillStyle, StrokeWidth = lineWidth, Stroke = strokeStyle });

        }  
    }
}
