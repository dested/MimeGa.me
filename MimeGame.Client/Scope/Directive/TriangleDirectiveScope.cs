using System;
using System.Runtime.CompilerServices;

namespace MimeGame.Client.Scope.Directive
{
    public class TriangleDirectiveScope : BaseScope
    {
        [IntrinsicProperty]
        public TriangleModel TriangleModel { get; set; }
        [IntrinsicProperty]
        public Action<dynamic> OnMouseDown { get; set; }
        [IntrinsicProperty]
        public Action<dynamic> OnMouseOver { get; set; }

        [IntrinsicProperty]
        public RaphaelElement Element { get; set; } 
    }
}