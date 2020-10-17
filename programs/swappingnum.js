
//function for swapping two numbers without using 3rd variable
function swap_two_numbers(num1,num2)
{

     if(num1==num2){
    console.log("Number is equal,Swapping not required");
      }
      else{
        num1=num1+num2;
        num2=num1-num2;
        num1=num1-num2;
        console.log(num1,num2);
       }

}
swap_two_numbers(4,6);
swap_two_numbers(10,70);
swap_two_numbers(63,97);
swap_two_numbers(10,10);
swap_two_numbers(-2,4);
swap_two_numbers(-45,-23);
swap_two_numbers(35,-73);