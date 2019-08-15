///<reference types="../../Core/Build/Fudge"/>
var EditorScene;
///<reference types="../../Core/Build/Fudge"/>
(function (EditorScene) {
    var ƒ = Fudge;
    const { dialog } = require("electron").remote;
    window.addEventListener("DOMContentLoaded", initWindow);
    let myLayout;
    let savedState;
    let branch;
    let canvas;
    let viewPort = new ƒ.Viewport();
    let camera;
    function initWindow() {
        let config = {
            content: [{
                    type: "row",
                    content: [{
                            type: "component",
                            componentName: "Inspector",
                            title: "Inspector"
                        },
                        {
                            type: "component",
                            componentName: "Viewport",
                            title: "Viewport",
                        }
                    ]
                }]
        };
        createScene();
        myLayout = new GoldenLayout(config);
        myLayout.registerComponent("Viewport", createViewportComponent);
        myLayout.registerComponent("Inspector", createInspectorComponent);
        myLayout.init();
    }
    function createViewportComponent(container, state) {
        container.getElement().append(canvas);
    }
    function createInspectorComponent(container, state) {
        console.log(branch.getChildren()[0].name);
        let lblName = document.createElement("label");
        lblName.innerHTML = "Node Name";
        let txtName = document.createElement("input");
        txtName.value = branch.getChildren()[0].name;
        container.getElement().append(lblName);
        container.getElement().append(txtName);
    }
    function createScene() {
        // create asset
        branch = Scenes.createAxisCross();
        // initialize RenderManager and transmit content
        ƒ.RenderManager.initialize();
        ƒ.RenderManager.addBranch(branch);
        ƒ.RenderManager.update();
        // initialize viewport
        camera = Scenes.createCamera(new ƒ.Vector3(3, 3, 5));
        let cmpCamera = camera.getComponent(ƒ.ComponentCamera);
        cmpCamera.projectCentral(1, 45);
        canvas = Scenes.createCanvas();
        document.body.appendChild(canvas);
        viewPort = new ƒ.Viewport();
        viewPort.initialize("TestViewport", branch, cmpCamera, canvas);
        viewPort.draw();
    }
})(EditorScene || (EditorScene = {}));
//# sourceMappingURL=Window.js.map