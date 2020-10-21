let users=
[
{
traineeEmail: "manish.dixit@successive.tech",
reviewerEmail: "faiyaz.ahmad@successive.tech"
},
{
 traineeEmail: "manish.dixit@successive.tech*//",
reviewerEmail: "faiyaz.ahmad@successive.tech"
},
{
 traineeEmail: "manish.dixit@successive.tech",
reviewerEmail: "faiyaz.ahmad@successive.tec*/*h"
   },
{
traineeEmail: "manish.dixit@successive.tech",
reviewerEmail: "faiyaz.ahmad@successive.tech"
},
{
traineeEmail: "manish.dixit@successive.te/",
reviewerEmail: "faiyaz.ahmad@successive.tech//*"
},
{
traineeEmail: "manish.dixit@successive.te/*",
reviewerEmail: "faiyaz.ahmad@successive.t"
},
{
    traineeEmail: "manish.dixit@successive.tech",
    reviewerEmail: "faiyaz.ahmad@successive.tech"
    }
];
let checkemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let valid=0,invalid=0,valid_users="",invalid_users="";

// function for validate the email.
function validateEmail(email)
{
return checkemail.test(String(email).toLowerCase());
}
//console.log(validateEmail("manish.dixit@successive.tech"));

//function for validate the user
function validateUsers(users)
{   
    for(let i=0;i<users.length;i++){
    const {traineeEmail,reviewerEmail} = users[i];
    if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
        valid++;
        valid_users+="("+traineeEmail+" , "+reviewerEmail+") ";
      }
      else{
          invalid++;
          invalid_users+="("+traineeEmail+" , "+reviewerEmail+") ";
      }
}
console.log("Total valid users:",valid);
console.log("The users are: ",valid_users);
console.log('Total invalid users',invalid);
console.log('The users is: ',invalid_users);
}
validateUsers(users);
