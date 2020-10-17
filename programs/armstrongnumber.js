function toCheckArmstrong(number)
{
    let copy_number, sum=0;
    copy_number=number;

    while(number!=0){
            let rem= number%10;
            sum= sum+(rem*rem*rem);
            number= parseInt(number/10);
    }
    if(copy_number==sum){
        console.log(copy_number+" Is a ArmstrongNumber");
    }
    else{
        console.log(copy_number+" Is not a ArmstrongNumber");
    }
}
toCheckArmstrong(370);
toCheckArmstrong(200);
toCheckArmstrong(542);
toCheckArmstrong(407);
toCheckArmstrong(153);