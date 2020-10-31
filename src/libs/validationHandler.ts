import hCon from '../controllers/trainee/validation';
export default (config) =>( req, res, next )=> {
     console.log('config: ',config);

     let a=Object.values(hCon.get);

     console.log(typeof(req.query.limit));
    // console.log(a);
   /* const isObject= function(val){
        if(val===null){
            return false;
        }
        return (typeof val=== 'object');
    };
     const objPro= function(obj){
       for(let val in obj){
           if(isObject(obj[val])){
               objPro(obj[val]);       
           }else{
               
               console.log(val, obj[val]);
           }
       };
   };
   objPro(config);*/
   
   console.log(req.query);
  
     next();
}

const error=[
    {
    key: "skip",
    location: "query",
    errorMessage: "Skip is invalid"
    },
    {
    key: "limit",
    location: "query",
    errorMessage: "Limit is invalid"
    }
    ]