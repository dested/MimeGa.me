using System.Collections.Generic;
using System.Html;
using MimeGame.Client.Scope.Controller;
using MimeGame.Client.Services;
using MimeGame.Client.Utils;

namespace MimeGame.Client.Controllers
{

    internal class TriangleGameController
    {
        public const string Name = "TriangleGameController";
        public const string View = "TriangleGame";
        private readonly TriangleGameScope scope;
        private readonly RaphaelPaperService paperService;

        public static Point Offset = new Point(160, 70);
        public static Point Size = new Point(1100, 850);
        private int boardHeight = 4;
        private int boardWidth = 7;
        private int drawTick;


        public TriangleGameController(TriangleGameScope scope, RaphaelPaperService paperService)
        {
            this.scope = scope;
            this.paperService = paperService;
            this.scope.Model = new TriangleGameScopeModel();
            this.scope.Callback = new TriangleGameScopeCallback();
            this.scope.Model.SelectedTriangles = new List<TriangleModel>();

            paperService.Create(Size.X, Size.Y);
            
            init();
            this.scope.Callback.OnMouseDown += OnMouseDown;
            this.scope.Callback.OnMouseOver += OnMouseOver;
            Window.SetInterval(drawBoard, 1000 / 60);
        }

        private void OnMouseDown(Pointer pointer, TriangleModel triangle)
        {
            if (!pointer.Right)
            {
                for (int l = 0; l < scope.Model.TriangleList.Count; l++)
                {
                    if (scope.Model.TriangleList[l] == triangle)
                    {
                        if (scope.Model.TriangleList[l].Selected == true)
                        {
                            this.scope.Model.SelectedTriangles.Remove(triangle);
                            scope.Model.TriangleList[l].Selected = false;
                        }
                        else
                        {
                            this.scope.Model.SelectedTriangles.Add(triangle);
                            scope.Model.TriangleList[l].Selected = true;
                        }
                    }
                }
            }
            else
            {
                foreach (var selectedTriangle in this.scope.Model.SelectedTriangles)
                {
                    selectedTriangle.Pop = true;
                }
                this.scope.Model.SelectedTriangles.Clear();
            }

            scope.Digest();
        }
        private void OnMouseOver(TriangleModel triangle)
        {
            for (var l = 0; l < scope.Model.TriangleList.Count; l++)
            {
                scope.Model.TriangleList[l].Glow = false;
                if (scope.Model.TriangleList[l] == triangle) scope.Model.TriangleList[l].Glow = true;
            }
            scope.Digest();
        }

        private void init()
        {
            this.scope.Model.TriangleList = new List<TriangleModel>();

            this.scope.Model.TriangleGrid = new TriangleModel[boardWidth][];

            for (var x = 0; x < boardWidth; x++)
            {
                this.scope.Model.TriangleGrid[x] = new TriangleModel[boardHeight];
            }
            for (var y = 0; y < boardHeight; y++)
            {
                for (var x = 0; x < boardWidth; x++)
                {
                    var off = (((y % 2) == 0) ? 1 : 0);
                    var off2 = ((x + off) % 2) == 0;
                    var tri = new TriangleModel() { X = x, Y = y, PointUp = off2, Color = Help.GetRandomColor() };
                    this.scope.Model.TriangleGrid[x][y] = tri;
                    this.scope.Model.TriangleList.Add(tri);
                }
            }
        }


        private void drawBoard()
        {
            drawTick++;
            bool update = dropTriangles();


            foreach (var triangleModel in scope.Model.TriangleList)
            {
                bool currentColor = TriangleModel.SetCurrentColor(triangleModel);
                update = update || currentColor;
            }
            if (update)
                scope.Digest();

        }

        private bool dropTriangles()
        {
            if (drawTick % 4 != 0) return false;
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

                        if (poppedThisRow)
                            return true;
                    }

                    for (int x = boardWidth / 2; x < boardWidth; x++)
                    {
                        noMoves = popTris(x, y, didPointUp, noMoves, ref poppedThisRow, ref bad);

                        if (poppedThisRow)
                            return true;
                    }
                    if (poppedThisRow)
                        return true;
                }
                if (noMoves && didPointUp) break;
                didPointUp = true;
            }
            return false;

        }

        private bool popTris(int x, int y, bool didPointUp, bool noMoves, ref bool poppedThisRow, ref bool bad)
        {
            var current = scope.Model.TriangleGrid[x][y];
            if (current.Color == null && current.Transitioning == 0)
            {
                if (!current.PointUp && didPointUp) return noMoves;

                if (y == 0 && !current.PointUp)
                {
                    TriangleModel.TransitionTo(current, Help.GetRandomColor());
                    poppedThisRow = true;
                    return noMoves;
                }

                var neighbors = TriangleModel.GetPopNeighbors(current, scope.Model.TriangleGrid);
                foreach (var neighbor in neighbors.TakeRandom())
                {
                    if (neighbor.Y == current.Y)
                    {
                        if (!neighbor.PointUp && current.PointUp)
                        {
                            current.Color = "#FFFFFF";
                            TriangleModel.TransitionTo(current, neighbor.Color);
                            neighbor.Pop = true;
                            noMoves = false;
                            poppedThisRow = true;
                            break;
                        }
                    }
                    else if (neighbor.Y < current.Y)
                    {
                        current.Color = "#FFFFFF";
                        TriangleModel.TransitionTo(current, neighbor.Color);
                        neighbor.Pop = true;
                        noMoves = false;
                        poppedThisRow = true;

                        break;
                    }
                }

                if (current.Color == null && current.Transitioning == 0)
                {
                    if (y == 0)
                        TriangleModel.TransitionTo(current, Help.GetRandomColor());
                    else
                        bad = true;
                }
            }
            return noMoves;
        }


    }
}
