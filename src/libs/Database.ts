import * as mongoose from 'mongoose'

class Database {
    static open(MONGO_URL){
      
        return new Promise((resolve, reject)=>{
        console.log('Inside open Method');
        mongoose.connect(MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true} ,(err)=>{
           if(err){
          
               console.log(err);
               reject(err);
               return;
           } 
            
           resolve(null);
         
        }) 
    });
    }
    static disconnect(){
           console.log('Inside disconnect Method');
    }
    }
export default Database;