let cnv;

let w;
let h;

let nW = 0;
let nH = 0;

let nodes = []

let mode = 'none';

let locked = false;

let generator;
let working = false;
let started = false;


$(window).resize(function() {
    w = windowWidth * 0.85;
    h = windowHeight;
    cnv.resize(w, h);
});

$('#clear-btn').click(function() {
    for (let i = 0; i < nW; i++) {
        for (let j = 0; j < nH; j++) {
            nodes[i][j].state = 'none';
        }
    }
});

$('#none').click(function() {
    mode = 'none';
});

$('#start').click(function() {
    mode = 'start';
});

$('#finish').click(function() {
    mode = 'finish';
});

$('#wall').click(function() {
    mode = 'wall';
});

$('#find').click(function() {
    let start = false;
    let goal = false;

    for (let i = 0; i < nW; i++) {
        for (let j = 0; j < nH; j++) {
            if (nodes[i][j].state === 'start') {
                start = nodes[i][j];
            }
        }
    }
    for (let i = 0; i < nW; i++) {
        for (let j = 0; j < nH; j++) {
            if (nodes[i][j].state === 'finish') {
                goal = nodes[i][j];
            }
        }
    }

    if (goal && start) {
        generator = aStar(start, goal);
        working = true;
        for (let i = 0; i < nW; i++) {
            for (let j = 0; j < nH; j++) {
                if (nodes[i][j].state === 'check' || nodes[i][j].state === 'checked' || nodes[i][j].state === 'path') {
                    nodes[i][j].state = 'none';
                }
            }
        }
    }
});

$('#continue').click(function() {
    working = true;
});

$('#clear-path').click(function() {
    for (let i = 0; i < nW; i++) {
        for (let j = 0; j < nH; j++) {
            if (nodes[i][j].state === 'check' || nodes[i][j].state === 'checked' || nodes[i][j].state === 'path') {
                nodes[i][j].state = 'none';
            }
        }
    }
})

$('#stop').click(function() {
    working = false;
});

function mousePressed(event) {
    let x = Math.floor(mouseX / 20);
    let y = Math.floor(mouseY / 20);
    if (mouseX < w) {
        if (mode === 'start') {
            for (let i = 0; i < nW; i++) {
                for (let j = 0; j < nH; j++) {
                    if (nodes[i][j].state === 'start') {
                        nodes[i][j].state = 'none';
                    }
                }
            }
        } else if (mode === 'finish') {
            for (let i = 0; i < nW; i++) {
                for (let j = 0; j < nH; j++) {
                    if (nodes[i][j].state === 'finish') {
                        nodes[i][j].state = 'none';
                    }
                }
            }
        }
    }
    nodes[x][y].state = mode;
    locked = true;
}

function mouseDragged(event) {
    if (locked && (mode === 'wall' || mode === 'none')) {
        let x = Math.floor(mouseX / 20);
        let y = Math.floor(mouseY / 20);
        nodes[x][y].state = mode;
    }
}

function mouseReleased(event) {
    locked = false;
}


function drawField() {
    for (let i = 0; i < nW; i++) {
        for (let j = 0; j < nH; j++) {
            nodes[i][j].draw();
        }
    }
}

function setupNodes() {
    for (let i = 0; i < w; i += 20) {
        nH = 0;
        nodes[nW] = [];
        for (let j = 0; j < h; j += 20) {
            nodes[nW][nH] = new Node(nW, nH);
            nH++;
        }
        nW++;
    }
}

function* aStar(start, goal) {
    u = new List();
    q = new List();
    q.push(start);
    start.g = 0;
    start.f = start.g + start.h(goal);
    while (q.index !== 0) {
        let current = q.findMinimal();
        if (current === goal) {
            while (true) {
                if (current.parent.state === 'start') {
                    break;
                }
                current.parent.state = 'path';
                current = current.parent;
            }

            return true;
        }
        q.remove(current);
        u.push(current);

        let x = current.x;
        let y = current.y;
        let vList = [];
        let vI = 0;
        if (x > 0) {
            if (nodes[x - 1][y].state !== 'wall') {
                vList[vI] = nodes[x - 1][y];
                vI++;
            }
        }
        if (y > 0) {
            if (nodes[x][y - 1].state !== 'wall') {
                vList[vI] = nodes[x][y - 1];
                vI++;
            }
        }
        if (x < nW - 1) {
            if (nodes[x + 1][y].state !== 'wall') {
                vList[vI] = nodes[x + 1][y];
                vI++;
            }
        }
        if (y < nH - 1) {
            if (nodes[x][y + 1].state !== 'wall') {
                vList[vI] = nodes[x][y + 1];
                vI++;
            }
        }

        for (let i = 0; i < vI; i++) {
            let score = current.g + 1;
            if (u.find(vList[i]) !== -1 && score >= vList[i].g) {
                continue;
            }
            if (u.find(vList[i]) === -1 || score < vList[i].g) {
                vList[i].parent = current;
                vList[i].g = score;
                vList[i].f = vList[i].g + vList[i].h(goal);
                if (q.find(vList[i]) === -1) {
                    q.push(vList[i]);
                }
            }
        }

        for (let i = 0; i < q.index; i++) {
            if (q.list[i].state !== 'start' && q.list[i].state !== 'finish') {
                q.list[i].state = 'check';
            }
        }
        for (let i = 0; i < u.index; i++) {
            if (u.list[i].state !== 'start' && u.list[i].state !== 'finish') {
                u.list[i].state = 'checked';
            }
        }
        console.log(q.list);
        yield false;
    }
    return true;
}

function setup() {
    w = windowWidth * 0.85;
    h = windowHeight;
    background(255);
    cnv = createCanvas(w, h);
    cnv.position(0, 0);
    setupNodes();
}

function draw() {
    background(255);

    if (working) {
        v = generator.next().done;
        if (v) {
            working = false;
        }
    }

    drawField();
}