export default class Shape {
    constructor() {
        this.draw_circle = (field, radius, x, y, color) => {
            field.beginPath();
            field.arc(x, y, radius, 0, Math.PI * 2, true);
            field.fillStyle = color;
            field.fill();
            field.lineWidth = 0;
            field.strokeStyle = color;
            field.stroke();
            field.closePath();
        };

        this.draw_text = (field, text, x, y) => {
            field.beginPath();
            field.fillStyle = "#000000";
            field.strokeStyle = "#F00";
            field.font = "30pt Arial";
            field.fillText(text, x, y);
            field.closePath();
        };

        this.draw_line = (field, x, y, power) => {
            field.beginPath();
            field.lineWidth = power;
            field.strokeStyle = "#5a5a5a"
            field.moveTo(300, 300);
            field.lineTo(x, y);
            field.stroke();
            field.closePath();
        };
        this.move = (isGoodX, isGoodY, x, y, field) => {
            this.draw_circle(field, 21, x, y, "bisque");
            if (isGoodX && isGoodY) {
                if (x + 25 < 1000 && y - 25 > 0) {
                    this.draw_circle(field, 20, x += 5, y -= 5, "#f63b48");
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
                    this.draw_circle(field, 20, x -= 5, y -= 5, "#f63b48");
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
                    this.draw_circle(field, 20, x -= 5, y += 5, "#f63b48");
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
                    this.draw_circle(field, 20, x += 5, y += 5, "#f63b48");
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
        }
    }

}