using System.Html;
using System.Runtime.CompilerServices;
using jQueryApi;

namespace MimeGame.Client.Utils
{
    public class CanvasInformation
    {
        private static CanvasElement blackPixel;
        [IntrinsicProperty]
        public RaphaelPaper Context { get; set; }
        [IntrinsicProperty]
        public jQueryObject JCanvas { get; set; }
        [IntrinsicProperty]
        public Element Canvas { get; set; }

        public CanvasInformation(RaphaelPaper context, jQueryObject domCanvas)
        {
            Context = context;
            JCanvas = domCanvas;
            Canvas = domCanvas[0];
        }
         

        public static CanvasInformation Create(Element canvas, int w, int h)
        {
            if (w == 0) w = 1;
            if (h == 0) h = 1;

            return new CanvasInformation(Raphael.CreatePaper(canvas, w, h), jQuery.FromElement(canvas));
        }
    }
}