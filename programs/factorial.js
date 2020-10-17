function factorial(number)
{
   let fact=1;
   if(number==0){
       //console.log("1");
   }
   if(number<0){
       console.log("Factorial of negative number is not possible");
   }
   else{
       for(let i=1;i<=number;i++){
           fact=fact*i;
       }
       console.log(fact);
   }

}
factorial(-2);
factorial(0);
factorial(5);
factorial(7);
factorial(10);
//factorial(25);