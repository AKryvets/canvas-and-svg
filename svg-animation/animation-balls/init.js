import "./styles.less";

let svgns = "http://www.w3.org/2000/svg",
    container = document.getElementById('cont');

container.addEventListener("click", function (event) {
    let
        x = event.layerX,
        y = event.layerY;
    let isGoodX = Math.round(Math.random() * 1);
    let isGoodY = Math.round(Math.random() * 1);

    const circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'cx', `${x}`);
    circle.setAttributeNS(null, 'cy', `${y}`);
    circle.setAttributeNS(null, 'r', `${20}`);
    circle.setAttributeNS(null, 'style', 'fill: #f63b48; stroke: #f63b48; stroke-width: 0px;');
    container.appendChild(circle);

    circle.addEventListener("click", function (event) {
        let
            x = event.layerX,
            y = event.layerY;
        const childFirst = document.createElementNS(svgns, 'circle');
        const childSecond = document.createElementNS(svgns, 'circle');
        let arr = [childFirst,childSecond];
        for(let i = 0; i < 2; i++){
            arr[i].setAttributeNS(null, 'cx', `${x}`);
            arr[i].setAttributeNS(null, 'cy', `${y}`);
            arr[i].setAttributeNS(null, 'r', `${20}`);
            arr[i].setAttributeNS(null, 'style', 'fill: #f63b48; stroke: #f63b48; stroke-width: 0px;');
            container.appendChild(arr[i]);
        }

        let array = [[x,y,true,true],[x,y,false,false]];
        setTimeout(function () {
            setInterval(function () {
                array[0] = moveThree(array[0][0],array[0][1],array[0][2],array[0][3],childFirst);
                array[1] = moveThree(array[1][0],array[1][1],array[1][2],array[1][3],childSecond);
            },50)},500);
    });

    move(x, y, isGoodX, isGoodY, circle);
});

function move(x, y, isGoodX, isGoodY, circle) {
    setInterval(function () {
        if (isGoodX && isGoodY) {
            if (x + 25 < 1000 && y - 25 > 0) {
                circle.setAttributeNS(null, 'cx', x += 5);
                circle.setAttributeNS(null, 'cy', y -= 5);
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
                circle.setAttributeNS(null, 'cx', x -= 5);
                circle.setAttributeNS(null, 'cy', y -= 5);
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
                circle.setAttributeNS(null, 'cx', x -= 5);
                circle.setAttributeNS(null, 'cy', y += 5);
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
                circle.setAttributeNS(null, 'cx', x += 5);
                circle.setAttributeNS(null, 'cy', y += 5);
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

function moveThree(x,y,isGoodX, isGoodY, circle) {
    if (isGoodX && isGoodY) {
        if (x + 25 < 1000 && y - 25 > 0) {
            circle.setAttributeNS(null, 'cx', x += 5);
            circle.setAttributeNS(null, 'cy', y -= 5);
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
            circle.setAttributeNS(null, 'cx', x -= 5);
            circle.setAttributeNS(null, 'cy', y -= 5);
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
            circle.setAttributeNS(null, 'cx', x -= 5);
            circle.setAttributeNS(null, 'cy', y += 5);
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
            circle.setAttributeNS(null, 'cx', x += 5);
            circle.setAttributeNS(null, 'cy', y += 5);
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
