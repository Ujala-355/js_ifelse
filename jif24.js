var a=require("readline-sync").questionInt("enter a first number");
var b=require("readline-sync").questionInt("enter second number");
var c=require("readline-sync").questionInt("entre third number");
var d=require("readline-sync").questionInt("enter a four number");
var f=require("readline-sync").questionInt("enter a five number");
if (a>b && a>c && a>d && a>f)
{
    console.log("max a=",a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log("max b=",b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log("max c=",c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log("max d",d);
}
else
{
    console.log("max f=",f);
}