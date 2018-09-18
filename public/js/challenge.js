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


class Street extends Element{
    constructor(name, buildyear, length, size = 3){
        super(name, buildyear);
            this.length = length;
            this.size = size;
    }
}

const arrParks =[new Parks('Aluna Park', 1987, 0.2, 808),
new Parks('Seiloor Park ', 1887, 1.2, 3888), new Parks('Mnellano Park', 1836, 2.1, 9299)];

const arrStreet = [new Street('Loucard Avenue', 1902, 1.2), new Street('Quiinta Avenida', 1967, 1.9, 4), new Street('QLinda Co ', 1997, 1.9, 2), new Street('Paulo Costa Mother Fucker ', 1888, 1.3, 3)];

function calc(ages){
    let sum = ages.reduce((prev, curr, index) => prev + curr, 0);
    return [sum, sum / ages.length];
}


function reportParks(p){
    p.forEach(curr => curr.density());

    const ages = p.map(curr=> new Date().getFullYear() - curr.buildyearname);
    const [total, totalAverage] = calc(ages);
    console.log(`The total age of the parks is ${p.length}, and the average age is ${Math.round(totalAverage)})`);

    const i = p.map(el=>el.trees).findIndex(el=>el >= 1000);
    console.log(`The park with with morer than 1000 trees is ${p[i.name]}`);


}

const reportStreets =s=>{
    const [totalLength, averagelength] = calc(s.map(el=>{el.length}));
    console.log(`our ${s.length} streets have the total length of ${totalLength}, and the average length is ${averagelength}`);
};

reportParks(arrParks);
reportStreets(arrStreet);