using System.Collections.Generic;
using System.Html;
using System.Runtime.CompilerServices;
using MimeGame.Client.Utils;
using Triangles.Utility;

namespace MimeGame.Client
{
    public class TriangleGame
    {
        public static TriangleGame Instance;
        public static Point Offset = new Point(160, 70);
        public static Point Size = new Point(1100, 850);
        private int boardHeight = 6;
        private int boardWidth = 11;
        private int drawTick;
        private CanvasInformation myCanvas;
        private Triangle[][] myTriangleGrid;
        private List<Triangle> myTriangleList;

        public TriangleGame()
        {
            Instance = this;
            myCanvas = CanvasInformation.Create(Document.GetElementById("cnvGameBoard"), Size.X, Size.Y);
            myCanvas.Canvas.AddEvent("contextmenu", (evt) => { evt.PreventDefault(); });


            init();
            Window.SetInterval(drawBoard, 1000 / 60);
        }

        public void mouseOver(Triangle triangle)
        {

            for (var l = 0; l < myTriangleList.Count; l++)
            {
                myTriangleList[l].Glow = false;
                if (myTriangleList[l] == triangle) myTriangleList[l].Glow = true;
            }
        }

        public void mouseDown(Pointer pointer, Triangle triangle)
        {


            if (!pointer.Right)
            {
                for (int l = 0; l < myTriangleList.Count; l++)
                {
                    if (myTriangleList[l] == triangle)
                    {
                        if (myTriangleList[l].Selected == true)
                        {
                            myTriangleList[l].Selected = false;
                        }
                        else
                        {
                            myTriangleList[l].Selected = true;
                        }
                    }
                    else
                        myTriangleList[l].Selected = false;
                }
            }
        }

 
        private void dropTriangles()
        {
            if (drawTick % 3 != 0) return;

            bool didPointUp = false;
            bool bad = true;
            while (bad)
            {
                bad = false;
                bool noMoves = true;

                for (int y = boardHeight - 1; y >= 0; y--)
                {
                    bool poppedThisRow = false;
                    for (int x = boardWidth / 2; x >= 0; x--)
                    {
                        noMoves = popTris(x, y, didPointUp, noMoves, ref poppedThisRow, ref bad);
                    }

                    for (int x = boardWidth / 2; x < boardWidth; x++)
                    {
                        noMoves = popTris(x, y, didPointUp, noMoves, ref poppedThisRow, ref bad);
                    }
                    if (poppedThisRow && true)
                        return;
                }
                if (noMoves && didPointUp) break;
                didPointUp = true;
            }
        }

        private bool popTris(int x, int y, bool didPointUp, bool noMoves, ref bool poppedThisRow, ref bool bad)
        {
            var current = myTriangleGrid[x][y];
            if (current.Color == null && current.transitioning == 0)
            {
                if (!current.PointUp && didPointUp) return noMoves;

                if (y == 0 && !current.PointUp)
                {
                    current.TransitionTo(Help.GetRandomColor());

                    return noMoves;
                }

                var neighbors = current.GetNeighbors(myTriangleGrid);
                foreach (var neighbor in neighbors.TakeRandom())
                {
                    if (neighbor.Y == current.Y)
                    {
                        if (!neighbor.PointUp && current.PointUp)
                        {
                            current.TransitionTo(neighbor.Color);
                            neighbor.Color = null;
                            noMoves = false;
                            poppedThisRow = true;
                            break;
                        }
                    }
                    else if (neighbor.Y < current.Y)
                    {
                        current.TransitionTo(neighbor.Color);
                        neighbor.Color = null;
                        noMoves = false;
                        poppedThisRow = true;

                        break;
                    }
                }

                if (current.Color == null && current.transitioning == 0)
                {
                    if (y == 0)
                        current.TransitionTo(Help.GetRandomColor());
                    else
                        bad = true;
                }
            }
            return noMoves;
        }

        private void init()
        {
            myTriangleList = new List<Triangle>();

            myTriangleGrid = new Triangle[boardWidth][];

            for (var x = 0; x < boardWidth; x++)
            {
                myTriangleGrid[x] = new Triangle[boardHeight];
            }

            for (var y = 0; y < boardHeight; y++)
            {
                for (var x = 0; x < boardWidth; x++)
                {
                    var off = (((y % 2) == 0) ? 1 : 0);
                    var off2 = ((x + off) % 2) == 0;

                    var tri = new Triangle(x, y, off2, Help.GetRandomColor());

                    myTriangleGrid[x][y] = tri;

                    myTriangleList.Add(tri);
                }
            }
        }

        private void drawBoard()
        {
            drawTick++;
            dropTriangles();

            myCanvas.Canvas.Style.BackgroundColor = "#343434";

            for (int l = 0; l < myTriangleList.Count; l++)
            {
                myTriangleList[l].Draw(myCanvas.Context);
            }
        }
    }
    internal class TriangleMove
    {
        [IntrinsicProperty]
        public Point Location { get; set; }
        [IntrinsicProperty]
        public string Color { get; set; }

        public TriangleMove(Point location, string color)
        {
            Location = location;
            Color = color;
        }
    }
}