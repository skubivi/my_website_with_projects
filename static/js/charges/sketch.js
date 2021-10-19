let cnv;

let positive = false;
let stat = false;

let charges = []
let index = 0;

let size = 20;

function keyPressed() {
    if (key == 's') {
        stat = !stat;
    } else if (key == 'p') {
        positive = !positive;
    }
    if (key == 'c') {
        index = 0;
    }
    if (keyCode == BACKSPACE) {
        if (index != 0) {
            index--;
        }
    }
}

function mouseClicked() {
    charges[index] = new Charge(mouseX, mouseY, positive, abs(size), stat);
    index++;
}

function mouseWheel(event) {
    size -= event.delta / 20;
}

$(window).resize(function() {
    cnv.resize(windowWidth - 80, windowHeight)
    cnv.position(80, 0);
});



function move() {
    for (let i = 0; i < index; i++) {
        charges[i].clearA();
        for (let j = 0; j < index; j++) {
            if (i != j) {
                charges[i].force(charges[j])
            }
        }
    }

    for (let i = 0; i < index; i++) {
        charges[i].accelerate();
    }

    for (let i = 0; i < index; i++) {
        charges[i].clearA();
        for (let j = 0; j < index; j++) {
            if (i != j) {
                charges[i].hit(charges[j]);
            }
        }
    }

    for (let i = 0; i < index; i++) {
        charges[i].move();
    }
}




function setup() {
    cnv = createCanvas(windowWidth - 80, windowHeight);
    cnv.position(80, 0);
}



function draw() {
    background(0);
    fill(255);
    ellipse(windowWidth - size / 2 - 80, size / 2, size);
    move();
    for (let i = 0; i < index; i++) {
        charges[i].draw();
    }
}