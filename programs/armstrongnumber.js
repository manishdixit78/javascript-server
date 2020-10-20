function toCheckArmstrong(number){
    let temp;
    let sum=0;
    let len=number.toString().length;
  
    let copy_number=number;
   while(number!=0){
        temp=number%10;
        find_power=Math.pow(temp,len);
        sum=sum+find_power;
        number=parseInt(number/10);
   }
   
   if(copy_number==sum){
       console.log(copy_number+" Is a ArmstrongNumber");
   }
   else{
       console.log(copy_number+" Is not a ArmstrongNumber");
   }

}
toCheckArmstrong(153);
toCheckArmstrong(407);
toCheckArmstrong(1634); 
toCheckArmstrong(8208); 
toCheckArmstrong(9474);
toCheckArmstrong(93084);
toCheckArmstrong(548834);
toCheckArmstrong(9926315);
toCheckArmstrong(99);
toCheckArmstrong(9926318);
toCheckArmstrong(9);
toCheckArmstrong(223);