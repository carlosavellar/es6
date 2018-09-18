class Element {
    constructor(name, buildyear){
        this.name = name;
        this.buildyearname = buildyear;
    }
}

class Parks extends Element{
    constructor(name, buildyear, area, trees){
        super(name, buildyear);
        this.area = area;
        this.trees = trees;
    }
    density(){
        this.density = this.area / this.trees;
        console.log(`This is the park ${this.name}, this area is: ${this.area}`);
    }
}


class Streets extends Element{
    constructor(name, buildyear, length, size){
        super(name, buildyear);
            this.length = length;
            this.size = size;
    }
}