using System;
using System.Collections.Generic;
using System.Html;
using System.Runtime.CompilerServices;
using MimeGame.Client.Utils;
using Triangles.Utility;

namespace MimeGame.Client
{
    [Serializable]
    public class TrianglePiece
    {
        public int X { get; set; }
        public int Y { get; set; }
        public bool PointUp { get; set; }

        public TrianglePiece(int x, int y, bool pointUp)
        {
            X = x;
            Y = y;
            PointUp = pointUp;
        }
    }
    public class Triangle
    {
        public const double muliplyer = 0.6;
        public const int TriangleLength = (int)(100 * muliplyer);
        private int spacing = (int)(32 * muliplyer);
        private string transitionToColor;
        public int transitioning;
        [IntrinsicProperty]
        public bool Selected { get; set; }
        [IntrinsicProperty]
        public bool Glow { get; set; }
        [IntrinsicProperty]
        public string Color { get; set; }
        [IntrinsicProperty]
        public bool PointUp { get; set; }
        [IntrinsicProperty]
        public int Y { get; set; }
        [IntrinsicProperty]
        public int X { get; set; }
        [IntrinsicProperty]
        public RaphaelElement Element { get; set; }

        public Triangle(int _x, int _y, bool pointUp, string _color)
        {
            X = _x;
            Y = _y;
            PointUp = pointUp;
            Color = _color;
            Selected = false;
            Glow = false;
        }

        public string GetCurrentColor()
        {
            var increase = 15;
            if (transitioning + increase >= 100)
            {
                Color = transitionToColor;
                transitioning = 0;
            }

            if (transitioning > 0) return Help.getColor(Color, transitionToColor, transitioning += increase);

            return Color;
        }


        public void TransitionTo(string _toColor)
        {
            transitionToColor = _toColor;
            transitioning = 1;
        }


        public void Draw(RaphaelPaper _context)
        {
            string strokeStyle = "";
            int lineWidth = 0;

            //worst code
                if (Selected) strokeStyle = "#FAFAFA";
                else
                {
                    if (Glow) strokeStyle = "gold";
                    else strokeStyle = "black";
                }
                if (Selected) lineWidth = 5;
                else
                {
                    if (Glow) lineWidth = 4;
                    else lineWidth = 3;
                }

            var currentColor = GetCurrentColor();
            if (currentColor == null)
            {
                if (Element != null) Element.Remove();

                Element = null;
                return;
            }
            //  _context.ShadowColor ="black";
            //  _context.ShadowBlur = 20;
            //  _context.ShadowOffsetX = ((mouseX - TriangleGame.Offset.X - TriangleGame.Size.X / 2.0) / TriangleLength / 2)*5;
            //  _context.ShadowOffsetY = ((mouseY - TriangleGame.Offset.Y - TriangleGame.Size.Y / 2.0) / TriangleLength)*5;

            string fillStyle = currentColor;

            if (Element == null)
            {
                if (PointUp)
                {
                    var x = (X) / 2.0f;
                    var y = Y;

                    var xxx = x * TriangleLength + x * spacing - spacing / 2.0f + TriangleGame.Offset.X;
                    var yyy = y * TriangleLength + y * spacing / 2 + TriangleGame.Offset.Y;

                    if (Selected)
                    {
                        //  ctx.rotate((cur+=3)*Math.PI/180); 
                    }
                    Element = _context.Path("M" + xxx + " " + yyy + "L" + (xxx + TriangleLength / 2) + " " + (yyy + TriangleLength) + "L" + (xxx - TriangleLength / 2) + " " + (yyy + TriangleLength) + "L" + (xxx) + " " + (yyy));
                }
                else
                {
                    var x = (X - 1) / 2.0f;
                    var y = Y;

                    var xxx = x * TriangleLength + x * spacing + TriangleGame.Offset.X;
                    var yyy = y * TriangleLength + y * spacing / 2 + TriangleGame.Offset.Y;

                    if (Selected)
                    {
                        //  ctx.rotate((cur+=3)*Math.PI/180); 
                    }
                    Element = _context.Path("M" + xxx + " " + yyy + "L" + (xxx + TriangleLength) + " " + (yyy) + "L" + (xxx + TriangleLength / 2) + " " + (yyy + TriangleLength) + "L" + (xxx) + " " + (yyy));
                }

                Element.Attribute(new RaphaelElementAttributes() { StrokeLineCap = RaphaelLineCap.Round, StrokeLineJoin = RaphaelLineJoin.Round });
                Element.MouseDown((e) =>
                {
                    var pointer = Help.GetCursorPosition(e);

                    TriangleGame.Instance.mouseDown(pointer, this);
                });
                Element.MouseOver((e) =>
                {
                    TriangleGame.Instance.mouseOver(this);
                });
                bool touched;
                Element.TouchStart((e) =>
                {
                    var pointer = Help.GetCursorPosition(e);
                    touched = true;

                    Window.SetTimeout(() =>
                    {
                        if (touched)
                        {
                            pointer.Right = true;
                            TriangleGame.Instance.mouseDown(pointer, this);

                        }
                    },
                                      500);//right click
                    TriangleGame.Instance.mouseDown(pointer, this);
                    e.PreventDefault();

                });
                Element.TouchEnd((e) =>
                {
                    touched = false;
                    e.PreventDefault();

                });

                Element.TouchMove((e) =>
                {
                    TriangleGame.Instance.mouseOver(this);
                    e.PreventDefault();
                });

            }

            lineWidth *= 2;
            Element.Attribute(new RaphaelElementAttributes() { Fill = fillStyle, StrokeWidth = lineWidth, Stroke = strokeStyle });

            /*

                        if (Glow) {
                            _context.LineWidth = 8;
                            if (transitioning > 0) _context.StrokeStyle = "white";
                            else _context.StrokeStyle = "black";
                            _context.Stroke();
                            _context.LineWidth = 4;
                            _context.StrokeStyle = "gold";
                            _context.Stroke();
                        } else if (Selected) {
                            _context.Stroke();
                            _context.LineWidth = 4;
                            _context.StrokeStyle = "black";
                            _context.Stroke();
                        } else
                            _context.Stroke();

                        if (( Neighbors || HighlightedNeighbors ) && !Glow) {
                            _context.LineWidth = 2;
                            _context.StrokeStyle = "#345782";
                            _context.Stroke();
                        }
                        if (Neighbors) {
                            _context.StrokeStyle = "black";
                            _context.LineWidth = 9;
                            _context.Stroke();

                            _context.StrokeStyle = "white";
                            _context.LineWidth = 4;
                            _context.Stroke();
                        }
            */

        }

        public void Pop()
        {
            Color = null;
        }
        private static readonly Point[] PointUpNeighbors = new Point[] {
                                                                               new Point(-1, +0),
                                                                               new Point(+1, +0),
                                                                               new Point(-2, +0),
                                                                               new Point(+2, +0),
                                                                               new Point(+0, -1),
                                                                               new Point(-1, -1),
                                                                               new Point(+1, -1),
                                                                               new Point(+0, +1),
                                                                               new Point(-1, +1),
                                                                               new Point(+1, +1),
                                                                               new Point(-2, +1),
                                                                               new Point(+2, +1)
                                                                       };
        private static Point[] PointDownNeighbors = new Point[] {
                                                                        new Point(-1, +0),
                                                                        new Point(+1, +0),
                                                                        new Point(-2, +0),
                                                                        new Point(+2, +0),
                                                                        new Point(+0, +1),
                                                                        new Point(-1, +1),
                                                                        new Point(+1, +1),
                                                                        new Point(+0, -1),
                                                                        new Point(-1, -1),
                                                                        new Point(+1, -1),
                                                                        new Point(-2, -1),
                                                                        new Point(+2, -1)
                                                                };

        public List<Triangle> GetNeighbors(Triangle[][] _board)
        {
            Point[] neighs;
            if (PointUp) neighs = PointUpNeighbors;
            else neighs = PointDownNeighbors;
            List<Triangle> result = new List<Triangle>();

            for (var i = 0; i < neighs.Length; i++)
            {
                var cX = X + neighs[i].X;
                var cY = Y + neighs[i].Y;

                if (cX >= 0 && cX < _board.Length && cY >= 0 && cY < _board[0].Length)
                {
                    if (_board[cX][cY].Color != null)
                        result.Add(_board[cX][cY]);
                }
            }
            return result;
        }
    }
}