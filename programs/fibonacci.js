function fibonacciSeries(noOfTerms)
{
  let first_iter=0, second_iter=1,next,i;
  //print first two iterations
  console.log(first_iter);
  console.log(second_iter);
  for(i=2;i<=noOfTerms-1;i++){
      if(i<=1){
          next=i;
      }
      else{
      next=first_iter+second_iter;
      first_iter=second_iter;
      second_iter=next;
      }
      //print next iterations of the series
      console.log(next);
  }

}
//fibonacciSeries(8);
//fibonacciSeries(4);
fibonacciSeries(10);