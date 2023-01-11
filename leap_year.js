// Javascript to check leap year
//Arun Subedi
const prompt=require("prompt-sync")({sigint:true}); 
const alert=require("prompt-sync")({sigint:true}); 

console.log("leap year!!!!!!!")

let a= prompt("enter the year:")
a=Number.parseInt(a)

if(a%4==0)
    {
        if(a%100==0)
        {
            if(a%400==0)
            {
                alert("yes it is a leap year")
                
            }
            else {alert("no it is not a leap year")}
            
        }
        else {alert("it is a leap year")}
       
    }
else{ alert("it is not leap year")}