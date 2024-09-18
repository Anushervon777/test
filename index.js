// //task1
// function sumTwoNumber(a, b){
//     return a + b
// }
// console.log(sumTwoNumber(5, 6));

//task2
// function checkNumber(a){
//     if(a > 0){
//         return "Positive"
//     }
//     else if(a < 0){
//         return "Negative"
//     }
//     else{
//         return 0
//     }
// }
// console.log(checkNumber(1));

//tas3
// function generateMultiplicationTable(a){
//     for (let i = 1; i <= 10; i++) {
//         console.log((a + " * " + i)  +" = " + (a * i));
        
//     }
// }
// console.log(generateMultiplicationTable(5));

//task4
// function endNine(num){
//     let res = num.toString()
//     if (res[res.length - 1] == "9") {
//         return "Yes"
//     }
//     else{
//         return "no"
//     }
// }
// console.log(endNine(999));

//task5
// function century(a){
//     let res = Math.ceil(a / 100)
//     return res;
// }
// console.log(century(1705));

// Vazifai 2

// // task1
// function longestTime(h, m, s){
//     let h2 = h * 60 * 60;
//     let m2 = m * 60;
//     if (h2 > m2 && h2 > s) {
//         return h;
//     }
//     else if(m2 > h2 && m2 > s){
//         return m
//     }
//     else{
//         return s;
//     }
// }
// console.log(longestTime(1, 59, 3598));

//task2
// function same(number) {
//     let  res = number.toString();
//     return res[0] == res[1] || res[0] == res[2] || res[1] == res[2];
// }
// console.log(same(122));

//task3
// function largestSwap(a){
//     let toStr = a.toString()
//     let res1 = toStr[1]
//     let res2 = toStr[0];
//     const res3 = res1+''+res2;
//     if(a > res3){
//         return true
//     }
//     else{
//         return false
//     }

// }
// console.log(largestSwap(53));


//task4
// function addUp(a) {
//     let res = 0;
//     for (let i = 0; i <= a; i++) {
//         res += i;
//     }
//     return res
// }
// console.log(addUp(4));

//task5
// function different(a, b, c){
//     if(a != b && a != c){
//         return 1;
//     }
//     else if(b != a && b != c){
//         return 2
//     }
//     else{
//         return 3
//     }


// }
// console.log(different(1, 2, 1));

//task6
// function addUp(a, a1) {
//     let res = 0;
//     for (let i = a; i <= a1; i++) {
//         if (i % 2 == 0) {
//             res += i;
//         }
        
//     }
//     return res
// }
// console.log(addUp(-5,-3));

//task7
// function maxNum(number) {
//     let numStr = number.toString();
//     let maxx = '0';
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] > maxx) {
//             maxx = numStr[i];
//         }
//     }

//     return maxx;
// }

// console.log(maxNum(7132)); 
// console.log(maxNum(897));  
// console.log(maxNum(811));  

//task8
// function maxNum(number) {
//     let numStr = number.toString();
//     let maxx = '0';
//     let min = '0'
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] > maxx) {
//             maxx = numStr[i];
//         }
//         else{
//             min = numStr[i]
//         }
//     }

//     return maxx + " " + min;
// }

// console.log(maxNum(5732)); 

//task9
// function sumOfDigit(a) {
//     let res = 0;
//     for (let i = 0; i <= a; i++) {
//         res += i;
//     }
//     return res
// }
// console.log(sumOfDigit(12));

//task10
// function productOfDigits(n) {
//     let product = 0;
//     while (n > 0) {
//         let digit = n % 10;  
//              n = Math.floor(n / 10);
//               product += digit;
   
// } 
// return product;
// }
// console.log(productOfDigits(23));  

//task11
// function polindrom(num) {
//     cnt=""
//     for(let i=num;i>=1;i=Math.floor(i/10))
//    { cnt+=i % 10;}
//   if(cnt==num){
//     return true
//   }
//   return false
// }
// console.log(polindrom(55))

//task12


//task13
// function isPrime(num) {
//     cnt1=0
//     for(let i=0;i<=num;i++)
//     {
//         if(num%i==0)
//             cnt1++
//     }
//   if(cnt1 == 2){
//     return true
//   }
//   return false
// }
// console.log(isPrime(6))

//task14
// function factorial(a){
//     let res = 1;
//     for (let i = 0; i <= a; i++) {
//         res *= 
        
//     }
// }


//task15
// function polindrom(num) {
//     cnt=""
//     for(let i=num; i>=1; i=Math.floor(i/10))
//    { cnt+=i % 10;}
//   return cnt
// }
// console.log(polindrom(51241))
// 
// function maxNum(num){
//     let max = num % 10
//     let min = num % 10
//     for(let i = num;i > 1;i = Math.floor(i / 10)){
//       if(i % 10 >= max){
//         max = i % 10
//       }
//       if(i % 10 <= min){
//         min = i % 10
//       }
//     }
//     return min  + " " +  max
  
//   }
//   console.log(maxNum(5645));

//---------------------------------------

//task1
// function counts(num){
//     let cnt = 0;
//     for(let i = num; i > 0; i=Math.floor(i / 10)){
//         if(i % 10 % 2 == 0){
//             cnt ++;
//         }
//     }
//     return cnt;
// }
// console.log(counts(123456));

//task2
// function sevenbum(num){
//     let cnt = 0;
//     for(let i = num; i > 0; Math.floor(i /10)){
//         if(i % 10 && i == 7){
//             return "boom"
//         }
//         else{
//             return "There is no 7 in the arguments"
//         }
//     }
// }
// console.log(sevenbum(7));

//task3
// function addDigits(num){
//     let cnt = 0;
//     while(num >= 10){
//         for(let i = num; i > 0; i = Math.floor(i / 10)){
//             cnt += i % 10;
//         }
//         num = cnt;
//         cnt = 0;
//     }
//     return num;
// }
// console.log(addDigits(38));

//task4
// function sumcubes(num){
//     let cnt = 0;
//     for(let i = 0; i <= num; i++){
//         cnt += i ** 3;
//     }
//     return cnt;
// }
// console.log(sumcubes(3));

//task5
// function Issymetrical(num) {
//     cnt=""
//     for(let i=num; i>=1; i=Math.floor(i/10))
//    { cnt+=i % 10;}
//     if(num == cnt){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(Issymetrical(7227))

//task6
// function maxNum(number) {
//     let numStr = number.toString();
//     let maxx = '0';
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] > maxx) {
//             maxx = numStr[i];
//         }
//     }

//     return maxx;
// }

// console.log(maxNum(7132)); 


//task7


//task8
// function hasDoubleDigit(number) {
//     const numStr = number.toString();
//     for (let i = 0; i < numStr.length - 1; i++) {
//         if (numStr[i] == numStr[i + 1]) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(hasDoubleDigit(123445)); 
// console.log(hasDoubleDigit(112233)); 
// console.log(hasDoubleDigit(123789)); 


//task9
// function sumofevendigits(num){
//     let cnt = 0;
//     for(let i = num; i > 0; i= Math.floor(i / 10)){
//         if( i % 2 == 0){
//             cnt += i % 10;
            
//         }
        
//     }
//    return cnt;
// }
// console.log(sumofevendigits(1234));

//task10
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); 





//task1
