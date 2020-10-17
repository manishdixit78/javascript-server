function check_powerof_2(num)
{
    let copy_num, flag=0;
    copy_num=num;
    while(copy_num!=1){

        if(copy_num%2!=0)
        {
            flag=1;
            break;
        }
        copy_num=copy_num/2;
    }
  if(flag==0){
      console.log("The number is power of 2");
  }
  else{
      console.log("The number is not power of 2");
  }

}
check_powerof_2(16);
check_powerof_2(18);
check_powerof_2(256);
check_powerof_2(50);