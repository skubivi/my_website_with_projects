class Charge {
    constructor(x, y, positive, size, stat) {
        this.x = x
        this.y = y
        this.positive = positive;
        this.size = size / 2;
        this.stat = stat;
        this.aX = 0;
        this.aY = 0;
        this.vX = 0;
        this.vY = 0;
        this.k = 0.01;
        this.m = size * size * size * 3.14 / 3;
    }

    accelerate() {
        this.vX += this.aX;
        this.vY += this.aY;
    }

    move() {
        let vX1 = this.vX / 100;
        let vY1 = this.vY / 100;
        this.x += vX1;
        this.y += vY1;
        if (this.x - this.size <= 0 && this.vX < 0) {
            this.vX = abs(this.vX);
        } else if (this.x + this.size >= 1600 && this.vX > 0) {
            this.vX = -abs(this.vX);
        }
        if (this.y - this.size <= 0 && this.vY < 0) {
            this.vY = abs(this.vY);
        } else if (this.y + this.size >= 900 && this.vY > 0) {
            this.vY = -abs(this.vY);
        }
    }

    force(other) {
        if (!this.stat) {
            let c = 0;
            if (this.positive && other.positive) {
                c = -1;
            } else if (!this.positive && !other.positive) {
                c = -1;
            } else {
                c = 1;
            }
            let rX = other.x - this.x;
            let rY = other.y - this.y;
            let r = sqrt(rX * rX + rY * rY);
            let rXN = rX / r;
            let rYN = rY / r;
            let a = this.k * other.m / (r * r);
            this.aX += a * rXN * c;
            this.aY += a * rYN * c;
        }
    }

    hit(other) {
        if (!this.stat) {
            let rX = other.x - this.x;
            let rY = other.y - this.y;
            let r = sqrt(rX * rX + rY * rY);
            if (r <= this.size + other.size) {
                let v1 = sqrt(this.vX * this.vX + this.vY * this.vY);
                let v2 = sqrt(other.vX * other.vX + other.vY * other.vY);
                let v = (2 * other.m * v2 + abs(this.m - other.m) * v1) / (this.m + other.m);
                let rXN = -rX / r;
                let rYN = -rY / r;
                this.vX = rXN * v;
                this.vY = rYN * v;
            }
        }
    }

    clearA() {
        this.aX = 0.0;
        this.aY = 0.0;
    }

    draw() {
        if (this.positive) {
            fill(color(255, 0, 0));
        } else {
            fill(color(0, 0, 255));
        }
        ellipse(this.x, this.y, 2 * this.size);
    }
}