//task1
// function polindrom(num) {
//     let cnt = ""
//     for(let i=num; i>=1; i=Math.floor(i/10))
//    { cnt += i % 10;}
//   if (num == cnt) {
//     return true
//   }
//   else{
//    return false
//   }
// }
// console.log(polindrom(121))

//task2`
// function isPower(n) {
//     if (n <= 0) {
//         return false;
//     }
//     while (n > 1) {
//         if (n % 2 != 0) {
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }
// console.log(isPower(16));  

//task3


//hometasks ---
// task1
// function kassa(a,b,c,d){
//     let res =  ((a * 100) + b) / 100;
//     let res2 = ((c * 100) + d) / 100;
//     return res2 - res
// }
// console.log(kassa(5,55,10,0));


// task2
// function cutlet(k,m,n){
//     let res = n * 2;
//     let res2 = Math.ceil(res / k)
//     return res * m;
// }
// console.log(cutlet(2,5,2));

// task3
// function repeat(a,b,c){
//     let cnt = 0;
//     if(a == b && a == c && c == b){
//         return 3;
//     }
//     else if(a == b || a == c ){
//         return 2
//     }
//     else if(b == c || c == a){
//         return 2
//     }
//     else{
//         return 0
//     }
// }
// console.log(repeat(2,1,2));


// task4
// function roman(a){
//     let res = a == 1 ? console.log("I") : a == 2 ? console.log("II") : a == 3 ? console.log("III") : a == 4 ? console.log("IV") : a == 5 ? console.log("V") : a==6 ? console.log("VI") : a == 7 ? console.log("VII") : a == 8 ? console.log("VIII") : a == 9 ? console.log("IX") : a == 10 ? console.log("X") : console.log("it's no a number");

//      }
//      roman(2)
   

// task5'
// function areaOfCircle(a){
//     let s = 3.14  * (a * a)
//     return s
// }
// console.log(areaOfCircle(3));


//classtasks
//task1
// function matchHouses(num){
//     let res = 0;
//     if(num == 1){
//         return 6
//     }
//     else if(num > 1){
//             res += Math.floor(num * 5)
//         res++
//     }
//     return res
// }
// console.log(matchHouses(4));

//task2
// function polindrom(num) {
//     cnt=""
//     for(let i=num; i>=1; i=Math.floor(i/10))
//    { cnt+=i % 10;}
//   return cnt
// }
// console.log(polindrom(5121))

//task3
// function equal(a,b,c) {
//     let res = a == b & b == c ? console.log(3) : a == c ? console.log(2) : console.log(0);
    
// }
// console.log(equal(1,1,1));

//task4
// function maxxDigit(num) {
//     let  cnt=0
//     let maxx = 0
    
//     for(let i=num; i>=1; i=Math.floor(i/10)) { 
//         if (i > maxx) {
//         maxx = i % 10
//     }

//    }
//   return maxx
// }
// console.log(maxxDigit(5121))

//task5
// function mean(num){
//     let res = 0;
//     for (let i = num; i >= 1; i = Math.floor(i / 10)) {
//         res += i % 10
        
//     }
//     return Math.floor(res / 2) 
// }
// console.log(mean(43));

//task6
// let num = 112233445566778899;
// let res = 0;
// let cnt = 0;

// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     res += i % 10;
//     switch (i % 10) {
//         case 0:
//             cnt++
//             break;
//             case 1:
//                 cnt++
//             break;
//             cnt++
//             case 2:
//                 cnt++
//             break;
//             case 3:
//                 cnt++
//             break;
//             case 4:
//                 cnt++
//             break;
//             case 5:
//                 cnt++
//             break;
//             case 6:
//                 cnt++
//             break;
//             case 7:
//                 cnt++
//             break;
//             case 8:
//                 cnt++
//             break;
//             case 9:
//                 cnt++
//             break;
    
        
//     }
    
// }
// console.log(cnt > 9);



//task7
// function fib(n) {
//     let a = 0;
//     let b = 1;
//     let temp = null;
//     for (let i = 2; i <= n; i++) {
//         temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return n ? b : a;
// }
// console.log(fib(3)); 
// console.log(fib(7));  
// console.log(fib(77)); 


//task8
// function doubleFactorial(n) {    
//     if (n <= 1) {
//         return 1;
//     } else {
//         return n * doubleFactorial(n - 2);
//     }
// }
// console.log(doubleFactorial(9));  
// console.log(doubleFactorial(3));  
// console.log(doubleFactorial(6)); 

//task9
// function is_Natural(a){
//     if(a < 0 || a > 9){
//         return false
//     }
//     else{
//         return true
//     }
// }
// console.log(is_Natural(1));

//task10
// function leapYear(num){
//     if(num % 4 == 0 || num % 100 == 0 || num % 400 == 0){
//         return true
//     }
//     else{
//         return false
//     }   
// }
// console.log(leapYear(300));



//hometasks
// function rep(a,b){
//    return a.slice(0, -1) + a.slice(-1).repeat(b)
// }
// console.log(rep("Hello", 3))
// console.log(rep("hey", 6));    
// console.log(rep("excuse me what?", 5));  

//task2
// function sl(a){
//     return a.at(0) + a.at(-1)
// }
// console.log(sl("ganesh"));

//task3
// let num = Number("77");
// console.log(num); 

// let str1 = num.toString();
// console.log(str1); 

// let str2 = (532).toString();
// console.log(str2); 


//task4
// function isPlural(a){
//     if(a.at(-1) == 's'){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isPlural("changes"));


//task5
// function reverseCapitalize(a) {
//     let res = '';
//     for (let i = a.length -1; i >= 0; i--) {
//         res += a[i];
//     }
//     return res.toUpperCase();
// }

// console.log(reverseCapitalize("abc")); 
// console.log(reverseCapitalize("hellothere")); 
// console.log(reverseCapitalize("input")); 

//task6
// function checkEnding(a, ending) {
//     return a.slice(-ending.length) == ending;
// }

// console.log(checkEnding("abc", "bc")); 


//task7
// function checkPalindrome(a){
//     let res = ''
//     for (let i = a.length -1; i >= 0; i--) {
//                 res += a[i];
//             }
//    return a == res
// }
// console.log(checkPalindrome("reviver"));

//task8
// function charCount(a, b){
//     let cnt  = 0;
//     for (let i = b.length -1; i >= 0; i--) {
//        if (b[i] == a) {
//         cnt++
//        }
//   }
//   return cnt;
// }
// console.log(charCount('a',"edabit"));

//task9
// function capToFront(str) {
//     let upperCase = '';
//     let lowerCase = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char === char.toUpperCase()) {
//             upperCase += char;
//         } else {
//             lowerCase += char;
//         }
//     }
    
//     return upperCase + lowerCase;
// }

// console.log(capToFront("hApPy")); 
// console.log(capToFront("moveMENT")); 


//task10
// function reverseAndNot(a) {
//         let res = ''
//         for (let i = a; i > 0; i = Math.floor(i/10)) {
//             res += i % 10
//         }
//         return res + a
// }
// console.log(reverseAndNot(123));


//classtasks---------------------------------------------------------------------------------------------------------

//task1
// function multiplyNums(a){
//     let res = ''
//     let res2 = 1;
//     for (let i = 0; i < a.length; i++) {
//         if(a[i] == ','){
//             res++
//         }
//         else{
//             res2 *= Number(a[i]) 
//         }
        
//     }
//     return res2 
// }
// console.log(multiplyNums("2,3"));
// console.log(multiplyNums('1,2,3,4'));

//task2
// function numberSyllables(a){
//     let res = 1;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i]=='-') {
//             res++
//         }
//     }
//     return res
// }
// console.log(numberSyllables('beau-ti-ful'));


//task3
// is done

//task4
// function hasSpace(a){
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == " ") {
//             return true
//         }
//         else{
//             return false
//         }
        
//     }
// }
// console.log(hasSpace(" "));

//task5
// function helloName(a){
//     return "Haloo " + a
// }
// console.log(helloName("Myke"));

//task6
// function getMiddle(a){
//     let cnt = 0;
//     for (let i = 0; i < a.length; i++) {
//             cnt++;
//     }
//     cnt = Math.floor(cnt / 2);
//     return a.at(cnt)
// }
// console.log(getMiddle("teast"));

//task7
// function doubleLetter(a){
//     let cnt = ''
//     for (let i = a.length -1; i >= 0; i--) {
//         if(a[i] == cnt){
//             return true
//         }cnt = a[i];
//     }
//     return false
// }
// console.log(doubleLetter("loop"));

//task8
// function findNemo(a){
//    a = a.split(" ");
//    return a[0] == "Nemo" ? console.log("I found Nemo at 1!") : a[1] == "Nemo" ? console.log("I found Nemo at 2!") : a[2] == " Nemo" ? console.log("I found Nemo at 3!") : console.log("I found Nemo at 4!");
// }
// console.log(findNemo("Nemo is me"));

//task9
// function reverseLongWords(str) {
//     let result = '';
//     let word = '';

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == ' ') {
//             if (word.length >= 5) {
//                 word = reverseString(word);
//             }
//             result += word + ' ';
//             word = '';
//         } else {
//             word += str[i];
//         }
//     }
//     if (word.length >= 5) {
//         word = reverseString(word);
//     }
//     result += word;
//     return result;
// }
// function reverseString(s) {
//     let reversed = '';
//     for (let i = s.length - 1; i >= 0; i--) {
//         reversed += s[i];
//     }
//     return reversed;
// }
// console.log(reverseLongWords("Reverse")); 
// console.log(reverseLongWords("The dog is big")); 

//task10
// function dashed(a) {
//     let res = '';
//     let vowels = 'AEIOUaeiou';
//     for (let i = 0; i < a.length; i++) {
//         if (vowels.includes(a[i])) {
//             res += '-' + a[i] + '-';
//         } else {
//             res += a[i];
//         }
//     }
//     return res;
// }
// console.log(dashed("Edabit")); 

//task11
// function joinDigit(a){
//     let res = ''
//     for (let i = 0; i <= a; i++) {
//         res += i+'-'
//     }
//     return res.slice(0,-1)
// }
// console.log(joinDigit(11));

//task12
// IS done

//task13
//done

//task14 done

//task15 done

//home tasks ///////----------------------------------------------------\

//task1
// function doubleChar(a){
//     let res = ''
//     for (let i = 0; i < a.length; i++) {
//         res+=a[i]+a[i]
        
        
//     }
//     return res
// }
// console.log(doubleChar("String"));

//task2
// function sevenBoom(a){
//     for (let i = 0; i < a.length; i++) {
//         if(a[i] == 7){
//             return "Booom"
//         }
//     }
// }
// console.log(sevenBoom(',77,7,777'));

// //task3
// function removesNumbers(a){
//     let soxrnum = ''
//     let res = ''
//     for (let i = 0; i < a.length; i++) {
//        if(a[i] == "1" || a[i] == "2" || a[i] == "3" || a[i] == "4" || a[i] == "5" || a[i] == "6" || a[i] == "7" || a[i] == "8" || a[i] == "9" || a[i] == "0"){
//         soxrnum += a[i]
//        }
//        else{
//         res += a[i]
//        }
//     }
//     return res
// }
// console.log(removesNumbers("mubas21321345678901141hir1"));

//task4
// function reverse(a){
//     let res = ''
//     for (let i = a.length -1; i >= 0; i--) {
//         res += a[i]
//     }
//     return res
// }
// console.log(reverse("Hello"));

//task5
// function unrepeated(a) {
//     let result = "";
//     for (let i = 0; i < a.length; i++) {
//         if (!result.includes(a[i])) {
//             result += a[i];
//         }
//     }
//     return result;
// }
// console.log(unrepeated("hellllllllllllllllllllllllllllllllllllllllllllllllllo"));  


//task6
// let cnt =0
// function counter(){
//     cnt++
//     return cnt
// }
// console.log(counter());
// console.log(counter());



//task7
// function getSumOfDigit(a){
//     let res = 0
//     for (let i = a; i > 0; i = Math.floor(i / 10))  {
//         res += i % 10
//     }
//     return res
// }
// console.log(getSumOfDigit(12345));


//task8
// function sumCubes(a){
//     let res = 0;
//     for (let i = 1; i <= a; i++) {
//         res += i ** 3
//     }
//     return res
// }
// console.log(sumCubes(3));

//task9


//task10
// function longestWord(a) {
//     a = a.split(" ");
//     let res = '';
//     for (let i = 0; i < a.length; i++) { 
//         if (a[i].length > res.length) { 
//             res = a[i];
//         }
//     }
//     return res;
// }
// console.log(longestWord("salom Bachacho")); 
