class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.state = "none";
        this.parent = 'none';
        this.f = 0;
        this.g = 0;
    }
    h(other) {
        return abs(this.x - other.x) + abs(this.y - other.y);
    }
    draw() {
        if (this.state === 'wall') {
            fill(0);
        } else if (this.state === 'none') {
            fill(255);
        } else if (this.state === 'start') {
            fill(0, 255, 0);
        } else if (this.state === 'finish') {
            fill(255, 255, 0);
        } else if (this.state === 'checked') {
            fill(50);
        } else if (this.state === 'path') {
            fill(255, 0, 0);
        } else if (this.state === 'check') {
            fill(150);
        }
        stroke(0);
        strokeWeight(2);
        rect(this.x * 20, this.y * 20, 20, 20);
    }
}