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
const arrParks = [
    new Parks("Park One", 1981, 3456, 2.3),
    new Parks("Park two", 1911, 999, 0.3),
    new Parks("Park Tree", 1834, 400, 1.2)
];


const arrStreets = [
    new Streets("1th Avenue", 1987, 4, 3),   
    new Streets("2th Avenue", 1887, 2, 3),   
    new Streets("3th Avenue", 1907, 6, 3),   
    new Streets("4th Avenue", 1888, 2, 3)
];

const calc = (arr)=>{
    const sum = arr.reduce((prev, curr, index)=>prev + curr, 0);
    return [sum, sum / arr.length];
};
const reportParks = (p)=>{
    p.forEach(el=>el.treeDensity());
    const ages = p.map(el => new Date().getFullYear() - el.builtYear);
    const [totalAges, avages ] = calc(ages);
    console.log(`Our park ${p.length} has the average age of ${avages} `);

    const i = p.map(el=>el.trees).findIndex(el=>el >= 1000);
    console.log(`${p[i].name} is the park with more than 1000 trees`);

};
const reportStreets = (s)=>{
    const i = s.map(el=>el.length);
    const [totalLength, averageAges ] = calc(i);
    console.log(`The total lenght of streets is ${totalLength} and the average length is ${averageAges}`);
};
reportParks(arrParks);
reportStreets(arrStreets);
/*  in charge of two (2) town elements: Parks ans Streets.
3 parks and 4 streets

all parks and streets must have a name and a built year
at the end oth the year BOSS wants a final report of the folowing data:

1 - Know the tree density of each park in the town . by dividing by the total number of threes by the park area
2 - the average age of each town;s park. Calculated by adding columniated by adding up all park ages and dividing by the number of parks.
3 -  The name of the park park which have more then 1000 trees.
4 - Total and the average lemght of the totlas streets
5 - Size classification of each of the streets: tiny normal, big and huge. 
if the size is unknow the site is alwasy normal;

7  -  All this reposrt data shoul;d be printed to the console
 */