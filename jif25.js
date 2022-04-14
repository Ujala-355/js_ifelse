var c=require("readline-sync").questionInt("enter a operator");
switch(c%2){
    case 0:
        console.log(c,"even number");
        break
    default:
        console.log(c,"odd number");

}