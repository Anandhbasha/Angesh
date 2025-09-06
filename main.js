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
        arr.forEach((item)=>console.log(item))


        let names = "anandh"
        temp =""
        for(let x of names){
            temp = temp+x
            console.log(temp);            
        }