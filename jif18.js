var n=require("readline-sync").questionInt("enter a number");
if (n%5==0 && n%15==0){
    console.log("both divisible");
}
else{
    console.log("not divisible");
}