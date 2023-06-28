// Find the targeted Sum
// two pointer approach ==> Time Complextiy of following code is O(n)
// function find_target(arr,i,j,target){
//     while(i<=j){
//         if(arr[i]+arr[j] == target)
//     return [i,j];
//     else if (arr[i]+arr[j]>target){
//         j=j-1;
        
//     }
//     else
//         {
//             i=i+1
//         }
//     }
// }

// // arr = [20,40,60,80,90,120,240];
// // let res=find_target(arr,0,6,210);
// // console.log(res)

// let arr = new Array(1000).fill("nemo")

// function fun(a) {
//     let t0 = performance.now()
//     for (let i = 0; i < a.length; i++){
//         if (a[i] === "nemo") {
//             console.log("found nemo")
//         }
//     }

//     let t1 = performance.now()
//     console.log("Time", t1 - t0);

// }

// fun(arr)



// if commona in both array return True Otherwise false

// let arr1 = [20, 30, 40, 50, 60];
// let arr2 = [60, 70, 80, 90];

// function findMatch(a,b) {
//     for (let i = 0; i < a.length; i++){
//         for (let j = 0; j < b.length; j++){
//             if (a[i] === b[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }


// console.log(findMatch(arr1,arr2))

// let map = {
//     a:"abc"
// }

// console.log(map['a'])

// let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// function pushA(a,ele) {
//     a.push(0)
//     for (let i = 0; i <a.length; i++) {
//         temp = a[i];
//         a[i] = ele;
//         ele = temp;
//     }
//     return a;
// }

// console.log(pushA(arr,10))


//////////////////////////////////


// let arr = [2, 3, 4, 5];

// arr.splice(2, 0, "hello4") // (where,how many element we want to delete,what we insert)

// console.log(arr)
// var a = 5;
// console.log(a)

// {
//     var a = 10;
//     console.log(a)
// }
// {
//     var a = 20
//     console.log(a)

// }

// console.log(a)

// ////////////////////////////////

// const gob = {
//     a:"Suman",
//     b: function () {
//         console.log(this)
//     },

    
// }

// gob.b()


class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    introduce() {
        console.log(`MY name is ${this.name} and Age ${this.age} `)
    }
}

class Engineer extends Player{
    constructor(name ,age) {
        super(name,age)
    }
    play() {
        console.log(`${this.name} is playing`)
    }
}

const pl1 = new Engineer("Suman", 23)
pl1.play()