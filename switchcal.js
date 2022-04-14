var a=require("readline-sync").questionInt("enter a number");
var b=require("readline-sync").questionInt("enter a number");
var c=require("readline-sync").question("enter a operator");
switch (c){
    case ("+"):
        console.log(a+b)
        break
    case ("-"):
        console.log(a-b)
        break
    case ("/"):
        console.log(a/b)
        break
    case ("%"):
        console.log(a%b)
        break
    case ("*"):
        console.log(a*b)
}
