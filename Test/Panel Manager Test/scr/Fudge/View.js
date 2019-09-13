///<reference types="../../../../Core/Build/FudgeCore"/>
//<reference types="../../Examples/Code/Scenes"/>
var Fudge;
(function (Fudge) {
    var ƒ = FudgeCore;
    let VIEW;
    (function (VIEW) {
        // PROJECT = ViewProject,
        VIEW["NODE"] = "ViewNode";
        // ANIMATION = ViewAnimation,
        // SKETCH = ViewSketch,
        // MESH = ViewMesh,
        VIEW["PORT"] = "ViewPort";
        VIEW["DATA"] = "ViewData";
    })(VIEW = Fudge.VIEW || (Fudge.VIEW = {}));
    /**
     * Base class for all Views to support generic functionality and communication between
     * TODO: examine, if this should/could be derived from some GoldenLayout "class"
     */
    // Code by Monika Galkewitsch with a whole lot of Help by Lukas Scheuerle
    class View {
        constructor(_parent) {
            ƒ.Debug.info("Create view " + this.constructor.name);
            this.content = document.createElement("div");
            this.config = this.getLayout();
            this.parentPanel = _parent;
        }
        getLayout() {
            /* TODO: fix the golden-layout.d.ts to include componentName in ContentItem*/
            const config = {
                type: "component",
                title: this.type,
                componentName: "View",
                componentState: { content: this.content }
            };
            return config;
        }
    }
    Fudge.View = View;
})(Fudge || (Fudge = {}));
//# sourceMappingURL=View.js.map