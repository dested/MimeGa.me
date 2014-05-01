using System;
using jQueryApi;
using MimeGame.Client.Utils;

namespace MimeGame.Client.Directives
{

    public class DraggableDirective
    {
        public const string Name = "draggable";
        public Action<dynamic, jQueryObject, dynamic> link;

        public DraggableDirective()
        {
            link = linkFn;
        }

        private void linkFn(dynamic scope, jQueryObject element, dynamic attrs)
        {
            element.Me().draggable(new { cancel = ".window .inner-window" });
        }
    }
}
