// import { drawTypes } from "./canvastypes";

import Line = DrawTypes.DrawLine;
import Vector2 = DrawTypes.Vector2;
import Path = DrawTypes.DrawPath;
import Point = DrawTypes.DrawPoint;

window.addEventListener("load", init);

let crc: CanvasRenderingContext2D;
// let l1: Line = new Line(new Vector2(100, 100), new Vector2(200, 200), new Vector2(100, 100), new Vector2(100, 200));
// let l2: Line = new Line(new Vector2(200, 200), new Vector2(300, 100), new Vector2(200, 200), new Vector2(300, 200));
// let l3: Line = new Line(new Vector2(300, 100), new Vector2(200, 0));
// let l4: Line = new Line(new Vector2(200, 0), new Vector2(100, 100));
// let exPath: Path = new Path([l1, l2, l3, l4], "yellow", "test");

// let l5: Line = new Line(new Vector2(0, 0), new Vector2(200, 200), new Vector2(100, 100), new Vector2(100, 200));
// let l6: Line = new Line(new Vector2(100, 100), new Vector2(200, 200), new Vector2(100, 100), new Vector2(100, 200));
// let exPath2: Path = new Path([l5,l6], "hotpink", "test");

let paths: Path[] = [];

let currentlySelectedPath: Path;

let points: Point[] = [];

let currentlySelectedPoint: Point;

let originalPos: Vector2;

function init() {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
    canvas.addEventListener("mousedown", mousedown);
    canvas.addEventListener("mousemove", mousemove);
    canvas.addEventListener("mouseup", mouseup);

    crc = canvas.getContext("2d");

    // console.log("init");

    // crc.beginPath();
    // crc.moveTo(0, 0);
    // crc.lineTo(100, 100);
    // crc.stroke();

    // exPath.draw(crc);
    // exPath2.draw(crc);

    for (let i: number = 0; i < 3; i++) {
        let previousEnd: Point = new Point(Utils.RandomRange(0, 500), Utils.RandomRange(0, 500), null);
        let path: Path = new Path([previousEnd], "black", Utils.RandomColor(), "path" + i, i);
        for (let k: number = 0; k < 2; k++) {
            let newEnd: Point = new Point(Utils.RandomRange(0, 500), Utils.RandomRange(0, 500), null);
            path.addLineToEnd(previousEnd, newEnd, newEnd);
            previousEnd = newEnd;
        }
        path.addLineToEnd(previousEnd, path.points[0], path.points[0]);
        paths.push(path);
    }

    redrawAll();

}



function redrawAll() {
    crc.clearRect(0, 0, 500, 500);
    paths.sort(Path.sort);

    for (let path of paths) {
        path.draw(crc);
    }
}

function mousedown(_event: MouseEvent) {
    let foundPath: Path;
    for (let path of paths) {
        if (crc.isPointInPath(path.getPath2D(), _event.clientX, _event.clientY)) {
            foundPath = path;
        }
    }
    if (foundPath) {
        console.debug("clicked on " + foundPath.name);
        selectPath(foundPath, _event);

    }
}

function selectPath(pathToSelect: Path, _event: MouseEvent): void {
    if (!pathToSelect) return;
    currentlySelectedPath = pathToSelect;
    originalPos = new Vector2(_event.clientX, _event.clientY);
}

function mouseup(){
    currentlySelectedPath = null;
}

function mousemove(_event: MouseEvent){
    if(!currentlySelectedPath) return;
    currentlySelectedPath.move(_event.clientX - originalPos.x, _event.clientY - originalPos.y);
    redrawAll();
    originalPos = new Vector2(_event.clientX, _event.clientY);
}

/*
function mousedown(_event: MouseEvent) {
    let selPoint: Point;
    for (let point of points) {
        if (crc.isPointInPath(point.getPath2D(), _event.clientX, _event.clientY)) {
            selPoint = point;
        }
    }
    if (selPoint) {
        selectPoint(selPoint);
    } else {
        let foundPath: Path;
        for (let path of paths) {
            if (crc.isPointInPath(path.getPath2D(), _event.clientX, _event.clientY)) {
                foundPath = path;
            }
        }
        if (foundPath) {
            console.debug("clicked on " + foundPath.name);
            selectPath(foundPath);

        }
    }
}

   

    function selectPath(pathToSelect: Path): void {
        if (!pathToSelect) return;
        currentlySelectedPath = pathToSelect;
        redrawAll();
        points = currentlySelectedPath.returnAndDrawCornerPoints(crc);
    }

    function selectPoint(pointToSelect: Point) {
        if (!pointToSelect) return;
        currentlySelectedPoint = pointToSelect;
    }

    function mousemove(_event: MouseEvent) {
        if (!currentlySelectedPoint) return;
        currentlySelectedPoint.parent.changePoint(currentlySelectedPoint.point, new Vector2(_event.clientX, _event.clientY));
        redrawAll();
        currentlySelectedPoint.point = new Vector2(_event.clientX, _event.clientY);
        console.log(currentlySelectedPath);
        currentlySelectedPath.returnAndDrawCornerPoints(crc);
    }

    function mouseup() {
        if (!currentlySelectedPoint) return;
        currentlySelectedPoint = null;
    }
    */