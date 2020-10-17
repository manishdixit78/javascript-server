function checkPrime(num)
{
let flag=0,i=2;

do
    {
        if((num!=2) && (num%i==0))
        {
            flag=1;
            break;
        }
        i++;
    }while(i<=Math.sqrt(num));
    if(flag==0){
        console.log("Is a prime Number");
    }
    if(flag==1){
        console.log("Not a prime number");
    }
}
checkPrime(17);
checkPrime(20);
checkPrime(9);
checkPrime(23);