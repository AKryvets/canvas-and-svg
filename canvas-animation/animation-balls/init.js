import Shape from "./model.js";
import "./styles.less";
import {copyArray} from "less/lib/less/utils";

const shape = new Shape();
const canvas = document.getElementById("canvas");
const field = canvas.getContext("2d");

canvas.addEventListener("click", function (event) {
    let
        x = event.layerX,
        y = event.layerY;
    let imgd = field.getImageData(x, y, 1, 1);
    let pix = imgd.data;

    let isGoodX = Math.round(Math.random()*1);
    let isGoodY = Math.round(Math.random()*1);

    if(pix[0] == 246){
         let array = [[x,y,true,true],[x,y,false,false],[x,y,true,false]];
         setTimeout(function () {
             setInterval(function () {
                 for(let i = 0; i < 3; i++){
                     shape.draw_circle(field, 21, array[i][0], array[i][1], "bisque");
                 }
                 array[0] = moveThree(array[0][0],array[0][1],array[0][2],array[0][3]);
                 array[1] = moveThree(array[1][0],array[1][1],array[1][2],array[1][3]);
                 array[2] = moveThree(array[2][0],array[2][1],array[2][2],array[2][3]);
             },50)},500);
            return;
    }
    move(x,y,isGoodX,isGoodY);
});

function move(x,y,isGoodX, isGoodY) {
    setInterval(function () {
        shape.draw_circle(field, 21, x, y, "bisque");
        if (isGoodX && isGoodY) {
            if (x + 25 < 1000 && y - 25 > 0) {
                shape.draw_circle(field, 20, x += 5, y -= 5, "#f63b48");
            } else {
                x += 5;
                y -= 5;
                if (x + 25 >= 1000) {
                    isGoodX = false;
                    isGoodY = true;
                }
                if (y - 25 <= 0) {
                    isGoodX = true;
                    isGoodY = false;
                }
            }
        }
        if (!isGoodX && isGoodY) {
            if (y - 25 > 0 && x - 25 > 0) {
                shape.draw_circle(field, 20, x -= 5, y -= 5, "#f63b48");
            } else {
                x -= 5;
                y -= 5;
                if (y - 25 <= 0) {
                    isGoodX = false;
                    isGoodY = false;
                }
                if (x - 25 <= 0) {
                    isGoodX = true;
                    isGoodY = true;
                }
            }
        }
        if (!isGoodX && !isGoodY) {
            if (x - 25 > 0 && y + 25 < 700) {
                shape.draw_circle(field, 20, x -= 5, y += 5, "#f63b48");
            } else {
                x -= 5;
                y += 5;
                if (y + 25 >= 700) {
                    isGoodX = false;
                    isGoodY = true;
                }
                if (x - 25 <= 0) {
                    isGoodX = true;
                    isGoodY = false;
                }
            }
        }
        if (isGoodX && !isGoodY) {
            if (y + 25 < 700 && x + 25 < 1000) {
                shape.draw_circle(field, 20, x += 5, y += 5, "#f63b48");
            } else {
                x += 5;
                y += 5;
                if (y + 25 >= 700) {
                    isGoodX = true;
                    isGoodY = true;
                }
                if (x + 25 >= 1000) {
                    isGoodX = false;
                    isGoodY = false;
                }
            }
        }
    }, 50);
}

function moveThree(x,y,isGoodX, isGoodY) {
    if (isGoodX && isGoodY) {
        if (x + 25 < 1000 && y - 25 > 0) {
            shape.draw_circle(field, 20, x += 5, y -= 5, "#f63b48");
        } else {
            x += 5;
            y -= 5;
            if (x + 25 >= 1000) {
                isGoodX = false;
                isGoodY = true;
            }
            if (y - 25 <= 0) {
                isGoodX = true;
                isGoodY = false;
            }
        }
    }
    if (!isGoodX && isGoodY) {
        if (y - 25 > 0 && x - 25 > 0) {
            shape.draw_circle(field, 20, x -= 5, y -= 5, "#f63b48");
        } else {
            x -= 5;
            y -= 5;
            if (y - 25 <= 0) {
                isGoodX = false;
                isGoodY = false;
            }
            if (x - 25 <= 0) {
                isGoodX = true;
                isGoodY = true;
            }
        }
    }
    if (!isGoodX && !isGoodY) {
        if (x - 25 > 0 && y + 25 < 700) {
            shape.draw_circle(field, 20, x -= 5, y += 5, "#f63b48");
        } else {
            x -= 5;
            y += 5;
            if (y + 25 >= 700) {
                isGoodX = false;
                isGoodY = true;
            }
            if (x - 25 <= 0) {
                isGoodX = true;
                isGoodY = false;
            }
        }
    }
    if (isGoodX && !isGoodY) {
        if (y + 25 < 700 && x + 25 < 1000) {
            shape.draw_circle(field, 20, x += 5, y += 5, "#f63b48");
        } else {
            x += 5;
            y += 5;
            if (y + 25 >= 700) {
                isGoodX = true;
                isGoodY = true;
            }
            if (x + 25 >= 1000) {
                isGoodX = false;
                isGoodY = false;
            }
        }
    }
    return [x,y,isGoodX,isGoodY];
}