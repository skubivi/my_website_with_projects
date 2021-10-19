class List {
    constructor() {
        this.list = [];
        this.index = 0;
    }
    push(node) {
        this.list.push(node);
        this.index++;
    }
    find(node) {
        for (let i = 0; i < this.index; i++) {
            if (this.list[i] === node) {
                return i;
            }
        }
        return -1;
    }
    findMinimal() {
        let min = 100000;
        let indexOfNode = -1;
        for (let i = 0; i < this.index; i++) {
            if (this.list[i].f < min) {
                min = this.list[i].f;
                indexOfNode = i;
            }
        }
        return this.list[indexOfNode];
    }
    remove(node) {
        let indexOfNode = this.find(node);
        this.list.splice(indexOfNode, 1);
        this.index--;
    }
}