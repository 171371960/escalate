// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// var user = new Student("Jane", "M.", "User");
// console.log(user)

// console.log(greeter(user));



class Lo {
    firstName: string
    constructor(public firstNames: string, public nestName: string) {

        this.firstName = nestName
    }
}
var lo = new Lo('ww', '第二')
console.log(lo);

console.log(lo.firstName);

// ! 类 接口 调用
// function padLeft(value: string, padding: any) {
//     if (typeof padding === "number") {
//    console.log(Array(padding + 1) );

//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }

// console.log(padLeft("Hello world", 4)); //? returns "  Hello world"
// ! 类型判断分支 传入不同类型的情况

// interface Padder {
//     getPaddingString(): string
// }

// class SpaceRepeatingPadder implements Padder {
//     constructor(private numSpaces: number) { }
//     getPaddingString() {
//         return Array(this.numSpaces + 1).join(" ");
//     }
// }

// class StringPadder implements Padder {
//     constructor(private value: string) { }
//     getPaddingString() {
//         return this.value;
//     }
// }

// function getRandomPadder() {
//     return Math.random() < 0.5 ?
//         new SpaceRepeatingPadder(4) :
//         new StringPadder("  ");
// }

// // Type is 'SpaceRepeatingPadder | StringPadder'
// let padder: Padder = getRandomPadder();
// console.log(padder);

// if (padder instanceof SpaceRepeatingPadder) {
//     padder; // type narrowed to 'SpaceRepeatingPadder'

//     console.log(1);

// }
// if (padder instanceof StringPadder) {
//     padder; // type narrowed to 'StringPadder'
//     console.log(2);

// }


//! 泛型
// function identity<T>(arg: T): T { //!传入T类型返回 T类型
//     return arg;
// }
// console.log(identity('11'));
//! try/catch有范围规则
// try {
//     throw "oh no!";
// }
// catch (e) {
//     console.log(e);

//     console.log("Oh well.");
// }

// // Error: 'e' doesn't exist here 
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () { console.log(i); }, 1);
// }

//! 枚举
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }
// console.log(JSON.stringify(Direction));//  {"0":"Up","1":"Down","2":"Left","3":"Right",  "Up":0,"Down":1,"Left":2,"Right":3}

//! 返回定义接口
// interface Hero { // Hero 接口
//     id: number;
//     name: string;
// }

// function getHeroes(): Hero[]{
//     return new Array(
//         { id: 1, name: 'Windstorm' },
//         { id: 13, name: 'Bombasto' },
//         { id: 15, name: 'Magneta' },
//         { id: 20, name: 'Tornado' }
//     );
// }
// console.log(getHeroes());

// ! 类的调用
// class Car {
//     // 字段 
//     engine: string;

//     // 构造函数 
//     constructor(engine: string) {
//         this.engine = engine
//     }

//     // 方法 
//     disp(): void {
//         console.log("发动机为 :   " + this.engine)
//     }
// }
// new Car('E@00').disp()

