using System;
using System.Runtime.CompilerServices;

namespace MimeGame.Client.Scope.Controller
{

    public class TriangleGameScope 
    {
        [IntrinsicProperty]
        public TriangleGameScopeModel Model { get; set; }
        [IntrinsicProperty]
        public TriangleGameScopeCallback Callback { get; set; }
    }

    [Serializable]
    public class TriangleGameScopeCallback
    {
    }
    [Serializable]
    public class TriangleGameScopeModel
    {
    }
 }