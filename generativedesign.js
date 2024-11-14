"use strict";
import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 100;


draw();

function draw() {
    context.fillRect(0, 0, width, height)
    drawRandomCircle();
}

function drawRandomCircle() {
    for (let i = 0; i < 900; i++) {
        let x = Utils.randomNumber(margin, width - margin);
        let y = Utils.randomNumber(margin, height - margin);
        let size = Utils.randomNumber(90, 200);
        context.fillStyle = Utils.hsla(Utils.randomNumber(0, 120), 175, 50, 50);
        Utils.fillCircle(x, y, size);
        console.log("test", y);

    }
}
