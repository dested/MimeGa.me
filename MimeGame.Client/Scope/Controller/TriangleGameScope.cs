using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using MimeGame.Client;
using MimeGame.Client.Utils;

namespace MimeGame.Client.Scope.Controller
{

    public class TriangleGameScope:BaseScope
    {
        [IntrinsicProperty]
        public TriangleGameScopeModel Model { get; set; }
        [IntrinsicProperty]
        public TriangleGameScopeCallback Callback { get; set; }
    }

    [Serializable]
    public class TriangleGameScopeCallback
    {
        public Action<TriangleModel> OnMouseOver { get; set; }
        public Action<Pointer, TriangleModel> OnMouseDown { get; set; }
    }
    [Serializable]
    public class TriangleGameScopeModel
    {
         
        public TriangleModel[][] TriangleGrid { get; set; }
        public List<TriangleModel> TriangleList { get; set; }
        public List<TriangleModel> SelectedTriangles { get; set; }
    }
}

[Serializable]
public class TriangleModel
{
    public string TransitionToColor;
    [IntrinsicProperty]
    public int Transitioning { get; set; }
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
    public bool Pop { get; set; }

    public static void TransitionTo(TriangleModel current, string color)
    {
        current.TransitionToColor = color;
        current.Transitioning = 1;
    }


    private static readonly Point[] PointUpPopNeighbors = new Point[] {
                                                                               new Point(-1, +0),
                                                                               new Point(+1, +0),
                                                                       };
    private static readonly Point[] PointDownPopNeighbors = new Point[] {
                                                                        new Point(+0, -1),
                                                                };

    public static List<TriangleModel> GetPopNeighbors(TriangleModel current, TriangleModel[][] board)
    {
        Point[] neighs;
        if (current.PointUp) neighs = PointUpPopNeighbors;
        else neighs = PointDownPopNeighbors;
        List<TriangleModel> result = new List<TriangleModel>();

        for (var i = 0; i < neighs.Length; i++)
        {
            var cX = current.X + neighs[i].X;
            var cY = current.Y + neighs[i].Y;

            if (cX >= 0 && cX < board.Length && cY >= 0 && cY < board[0].Length)
            {
                if (board[cX][cY].Color != null)
                    result.Add(board[cX][cY]);
            }
        }
        return result;

    }
           public static bool SetCurrentColor(TriangleModel triangleModel)
           {
               var updated = false;
            var increase = 15;
               if (triangleModel.Color == null) return false;
            if (triangleModel.Transitioning + increase >= 100)
            {
                triangleModel.Color = triangleModel.TransitionToColor;
                triangleModel.Transitioning = 0;
                updated = true;
            }

               if (triangleModel.Transitioning > 0)
               {
                   triangleModel.Color= Help.getColor(triangleModel.Color, triangleModel.TransitionToColor, triangleModel.Transitioning += increase);
                   updated = true;

               }
               return updated;

           }

}