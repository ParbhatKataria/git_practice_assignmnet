let string = "aacdd";
let i = 0; j = string.length-1;
let value = "It is a palindrome"
while(i<=j){
    if(string[i]!=string[j]){
        console.log("It is not a palindrome");
        break;
    }
}
console.log(value);