// // // // // Hoisting
// // // // // var
// // // // console.log(a);

// // // // var a = 10
// // // // var b = 20
// // // // var a = 20
// // // // a=60
// // // // console.log(a+b);

// // // // // let
// // // // // console.log(c);

// // // // let c = 40

// // // // c=50
// // // // console.log(c);

// // // //const
// // // const d = 60
// // // // d=70
// // // // console.log(d);
// // // // let num1 = 10
// // // // scope variable && //local variable
// // // { 
// // //     let num1 = 10
// // //     // console.log(num1);
// // // }
// // // console.log(num1);


// // // // global variable

// // // opertors
// //     // Arithmetic
// //         // +,-,*,/,%,++,--
// //         // let num1 = 60
// //         let num2 = 80
// //         // console.log(num1+num2);
// //         // console.log(num2-num1);
// //         // console.log(num2/num1);
// //         // console.log(num1*num2);
// //         // console.log(5%2);
// //         // increment
// //         // num1 = num1+1
// //     //    console.log(num1++);
// //     //    console.log(num1);
// //     //    console.log(--num1);
// //     // //    console.log(num1);
       
       
        
// //     // // Comparsion
// //     //     // >,<,>=,<=,!=,==,===
// //     //     console.log(num1>num2);
// //     //     console.log(num1<num2);
// //         let num1 = "60"
// //         num2 = 60
// //         console.log(num1<=num2);
// //         console.log(num1>=num2);
// //         console.log(num1==num2);
// //         console.log(num1===num2);
        
        
// //     // Logical
// //         // &&,||,!
// //         // console.log(10<15 && 15>20 && 20<25);
// //         // console.log(10>15 || 15>20 || 20<25);
// //         console.log(10!=20);
        
        
// //     // Ternary Opeartor
// //     let age = 17
// //     console.log(age>=18?"Eligible to Vote":"Not Eligilble");
    
// // // Data types
// // // Primitive Data Types
// // // number
// // let names = "Angesh"
// // // string
// // // Boolean
// // // undefined
// // inClass = false

// // let x
// // console.log(typeof(inClass));
// // console.log(typeof(names));
// // console.log(typeof(age));
// // console.log(typeof(x));


// // functions
// function add(num1,num2){
//         return num1+num2        
// }
// // add(50,60)
// // add(80,90)
// console.log(add(88,92));
// Stud1_math1 = 80
// Stud2_math = 60
// Stud3_math1 = 90
// console.log(Stud1_math1+Stud2_math+Stud3_math1);


// console.log();

// // arrow function
// const arrow = ()=>console.log("Arrow is working");


// arrow()
// // ananoums function
// const ana = function(){

// }
// ana()
// // IFFI Function

// const IFFi = (function(){

// })

// IFFi()

// // Statements
// // if 
// let age = 19
// let loction = "KA"
// // if(age>18){
// //     console.log("He is Eligible to vote");    
// // }

// // if else
// if(age>18){
//     console.log("He is Eligible to vote");    

// // }if(loction=="TN"){
// //     console.log("He is from TN Only");
    
// // }
// }
// else{
//     console.log("Not Eligible");
    
// }

// // else if
// if(age>18 && loction=="TN"){
//     console.log("He is Eligible to Vote");
    
// }
// else if(age>18 || loction!="TN"){
//     console.log("Age is 18 but Not from TN");    
// }
// else{
//     console.log("Not Eligle");
    
// }

// day = "Saturday"
// switch(day){
//     case "Monday":
//         console.log("Today is Monday");
//         break
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break
//     case "Thursday":
//         console.log("Today is Thursday");
//         break
//     case "Friday":
//         console.log("Today is Friday");
//         break
//     case "Saturday":
//         console.log("Today is Saturday");
//         break
//     default:
//         console.log("Today is Sunday");
        
// }


// loops
    // while

    // let arr = [10,50,70,80,90]
    
    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);
    // console.log(arr[3]);
    // console.log(arr[4]);

    // let a=200000
    // let b=10000
    // while(b<a){
    //     console.log("While is working");
    //     ++b
    // }

    
    let arr = [10,50,70,80,90]
    // let a =0
    // while(a<arr.length){
    //     console.log(arr[a]); // a=0 arr[a]=10 //a=1 arr[2] = 50 //a=2 arr[2] = 70 //a=3 arr[3]=80 //a=4 arr[4] = 90
    //     ++a //a=1
    // }
    // do while
    // do{
    //     console.log("Do while is working");
        
    // }while(10>15)
    // for

    // for(let a=0;a<arr.length;a++){
    //     console.log(arr[a]);
    // }

    // type of for loop
        // for of
        // for(let x of arr){
        //     console.log(x);            
        // }
        // // for in
        // for(let x in arr){
        //     console.log(arr[x]);            
        // }
        // foreach
        // arr.forEach((item)=>console.log(item))


        // let names = "anandh"
        // temp =""
        // for(let x of names){
        //     temp = temp+x
        //     console.log(temp);            
        // }


// array methods
// map
// arr.map((item)=>console.log(item))
// filter
// let arr1 = [55,13,8,17,16,20]
// console.log(arr1.filter((x)=>x%2!=0));

// let total = 0
// for (let x of arr1){
//     total+=x
// }
// console.log(total);

// reduce
// let sum = arr1.reduce((x,y)=>x+y)
// console.log(sum);


// push
// arr1.push(101)
// console.log(arr1);
// pop
// arr1.pop()
// console.log(arr1);
// shift
// arr1.shift()
// console.log(arr1);
// unshift
// arr1.unshift(66)
// console.log(arr1);

// indexOf
// console.log(arr1.indexOf(8));
// includes
// console.log(arr1.includes(18));
// sort
// let fruits = ["Banana","Apple","orange","Kiwi","Avacado"]
// console.log(fruits.sort());
// console.log(arr1.sort());


// let upper = fruits.map((x)=>x.toLowerCase())
// console.log(upper);

// splice
// fruits[2]="Watermelon"
// console.log(fruits);
// fruits.splice(2,0,"Watermelon")
// console.log(fruits);
// slice
// console.log(fruits.slice(0,4));

//split
// let userName = "Angesh/A"

// console.log(userName.split("/"));

// settimeout
    // setTimeout(()=>{
    //     console.log("Hello");
        
    // },5000)
// setInterval
    // setInterval(()=>{
    //     console.log("Hello");        
    // },5000)


// Async
    // promise
        // const newPromise = new Promise((resolved,reject)=>{
        //     let coming = true
        //     if(!coming){
        //         reject("Still he is not came")
        //     }
        //     else{
        //         resolved("He is Arrived")
        //     }
        // })

        // newPromise.then((res)=>console.log(res)).catch((e)=>console.log(e))

        // let friend1 = new Promise((resolved,reject)=>{
        //     let reached = false
        //     if(reached){
        //         resolved("Friend1 Reached")
        //     }
        //     else{
        //         reject("Not yet reached friend1")
        //     }
        // })
        // let friend2 = new Promise((resolved,reject)=>{
        //     let reached = true
        //     if(reached){
        //         resolved("Friend2 Reached")
        //     }
        //     else{
        //         reject("Not yet reached friend2")
        //     }
        // })
        // let friend3 = new Promise((resolved,reject)=>{
        //     setTimeout(()=>{
        //         let reached = true
        //         if(reached){
        //             resolved("Friend3 Reached")
        //         }
        //         else{
        //             reject("Not yet reached friend3")
        //         }
        //     },5000)
        // })
        // let friend4 = new Promise((resolved,reject)=>{
        //     let reached = false
        //     if(reached){
        //         resolved("Friend4 Reached")
        //     }
        //     else{
        //         reject("Not yet reached friend4")
        //     }
        // })

        // Promise.race([friend1,friend2,friend3,friend4]).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
        // Promise.any([friend1,friend2,friend3,friend4]).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
        // Promise.all([friend1,friend2,friend3,friend4]).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
        // Promise.allSettled([friend1,friend2,friend3,friend4]).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})


// const fetchData = new Promise((resolved,reject)=>{
//     fetch(`https://fakestoreapi.com/products`).then((response)=>{
//         if(!response.ok){
//             reject("Unable to connect")
//         }else{
//             resolved(response.json())
//         }
//     })
// })
// fetchData.then((result)=>{
//     console.log(result)    
// }).catch((err)=>{
//     console.log(err)    
// })

// async
// const fetchData = async()=>{
//     try {
//         const response = await fetch('https://fakestoreapi.com/products')
//         if(!response.ok){
//             throw Error("Unable to connect")
//         }else{
//             const data = await response.json()
//             console.log(data);            
//         }
//     } catch (error) {
//         console.log(error)   
//     }
// }

// fetchData()

// DOM
    // Document Object Module

    let btn = document.createElement("button")
    // innerHTML
    // innerText
    // textContent
    btn.innerText="click"
    btn.style.padding="5px 40px"
    btn.style.backgroundColor="purple"
    btn.style.color="white"
    btn.style.borderRadius="15px"
    btn.style.border="none"
    document.body.append(btn)


    let button = document.getElementById('btn')

    button.addEventListener('click',()=>{
        setTimeout(()=>{
            button.innerText="Edited"
        },5000)
    })
