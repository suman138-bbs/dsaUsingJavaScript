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

let arr1 = [20, 30, 40, 50, 60];
let arr2 = [60, 70, 80, 90];

function findMatch(a,b) {
    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < b.length; j++){
            if (a[i] === b[j]) {
                return true
            }
        }
    }
    return false
}


console.log(findMatch(arr1,arr2))