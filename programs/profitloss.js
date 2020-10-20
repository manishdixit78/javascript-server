function forcalculateProfitLoss(acctual_price,sales_price)
{
     let ammount;
     if(acctual_price>sales_price){
           ammount=acctual_price - sales_price;
           console.log("In Loss,The ammount of loss is: ",ammount);
           
     }
     if(acctual_price==sales_price){
        console.log("There is No profit and No loss");
}
     if(sales_price>acctual_price){
         ammount=sales_price - acctual_price;
         console.log("In Profit, The ammount of profit is: ",ammount);
         
     }
     
}
forcalculateProfitLoss(6400,9800);
forcalculateProfitLoss(3700,3700);
forcalculateProfitLoss(1800,400);