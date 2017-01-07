"use strict"
var my_array = ['ADA', 'palindrome','level' ,'no' ,'problems' ,'LOL'];
for(let str of my_array){
    if(str == str.split('').reverse().join('')){
        console.log(str);
    }
}