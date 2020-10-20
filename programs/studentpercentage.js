function studentsmarks(hindi,english,maths,bio,arts)
{
let percentage,sum;
   sum=hindi+english+maths+bio+arts;
   // let total marks of all the subjects is 500
   percentage=(sum*100)/500;
   console.log(percentage);
   if(percentage>=90){
       console.log("Grade A");
   }
   if(percentage>=80 && percentage<90){    
     console.log("Grade B");    
   }
   if(percentage>=70 && percentage<80){
       console.log("Grade C");
   }
   if(percentage>=60 && percentage<70){
      console.log("Grade D");
   }
   if(percentage>=40 && percentage<60){
    console.log("Grade E");
 }
    if(percentage<40){
     console.log("Fail");
 }
}
studentsmarks(80,55,76,63,89);
studentsmarks(79,80,98,46,35);
studentsmarks(89,90,53,23,65);
studentsmarks(10,22,71,23,21);