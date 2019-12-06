export default class Shape {
    constructor() {
        this.draw_circle = (clock, radius) => {
            clock.beginPath();
            clock.arc(300, 300, radius, 0, Math.PI * 2, true);
            clock.fillStyle = '#f6d3c9';
            clock.fill();
            clock.lineWidth = 3;
            clock.strokeStyle = "#a89cf6";
            clock.stroke();
        };

        this.draw_text = (clock, text, x, y) => {
            clock.fillStyle = "#000000";
            clock.strokeStyle = "#F00";
            clock.font = "30pt Arial";
            clock.fillText(text, x, y);
        };

        this.draw_line = (clock, x, y,power) => {
            clock.lineWidth = power;
            clock.strokeStyle = "#5a5a5a"
            clock.moveTo(300, 300);
            clock.lineTo(x, y);
            clock.stroke();
        };
    }

}