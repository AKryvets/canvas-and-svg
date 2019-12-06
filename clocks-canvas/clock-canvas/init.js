import "./styles.less";
import Shape from "./model.js";

document.addEventListener("DOMContentLoaded", init)

function init() {
    const date = new Date();
    const shape = new Shape();
    const canvas = document.getElementById("canvas");
    const hoursNow = date.getHours();
    const minutesNow = date.getMinutes();
    const secondsNow = date.getSeconds();
    const clock = canvas.getContext('2d');

    shape.draw_circle(clock, 300);
    init_numbers(clock, shape);
    shape.draw_circle(clock, 3);

    let x = 300;
    let y = 70;
    let hours = 30 * hoursNow;
    let seconds = 6 * secondsNow;
    let minutes = 6 * minutesNow;

    setInterval(() => {
        clock.beginPath();
        shape.draw_circle(clock, 300);
        init_numbers(clock, shape);
        shape.draw_circle(clock, 3);
        shape.draw_line(clock, x + Math.sin(degToRad(seconds)) * 230, y + (230 - Math.cos(degToRad(seconds)) * 230), 1);
        clock.beginPath();
        shape.draw_line(clock, x + Math.sin(degToRad(minutes)) * 230, y + (230 - Math.cos(degToRad(minutes)) * 230), 2);
        clock.beginPath();
        shape.draw_line(clock, x + Math.sin(degToRad(hours)) * 230, y + (230 - Math.cos(degToRad(hours)) * 230), 4);
        seconds += 6;
        if (seconds % 360 == 0)
            minutes += 6;
        if (seconds % 360 == 0)
            hours += 0.5;
    }, 1000);
}

function degToRad(deg) {
    return (Math.PI * deg) / 180;
}

function init_numbers(clock, shape) {
    const draw_text = shape.draw_text;
    draw_text(clock, 12, 280, 60);
    draw_text(clock, 1, 420, 100);
    draw_text(clock, 2, 500, 180);
    draw_text(clock, 3, 540, 300);
    draw_text(clock, 4, 510, 420);
    draw_text(clock, 5, 420, 530);
    draw_text(clock, 6, 290, 570);
    draw_text(clock, 7, 150, 530);
    draw_text(clock, 8, 60, 420);
    draw_text(clock, 9, 40, 300);
    draw_text(clock, 10, 50, 180);
    draw_text(clock, 11, 140, 100);
}

