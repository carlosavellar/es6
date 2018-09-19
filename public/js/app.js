class Element{
    constructor(name, builtYear){
        this.name = name;
        this.builtYear = builtYear;
    }
}

class Parks extends Element{
    constructor(name, builtYear, trees, area){
        super(name, builtYear);
        this.trees = trees;
        this.area = area;
    }
    treeDensity(){
        this.density = this.trees /this.area;
        console.log(`${this.name} has a density of trees of ${this.density}`);
    }
}

class Streets extends Element{
    constructor(name, builtYear, length, size){
        super(name, builtYear);
        this.length = length;
        this.size = size;
    }
    classiFyingStreets(){
        const classification = new Map();
        classification.set(1, 'Tiny');
        classification.set(2, 'Small');
        classification.set(3, 'Normal');
        classification.set(4, 'Big');
        classification.set(5, 'Huge');
        console.log(`${this.name} has a ${classification.get(this.size)} size`);
    }
}