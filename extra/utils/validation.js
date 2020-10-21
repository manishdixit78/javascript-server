let users=
[
{
traineeEmail: "manish.dixit@successive.tech",
reviewerEmail: "faiyaz.ahmad@successive.tech"
},
{
 traineeEmail: "manish.dixit@successive.tech*1",
reviewerEmail: "faiyaz.ahmad@successive.tech"
},
{
 traineeEmail: "manish.dixit@successive.tech",
reviewerEmail: "faiyaz.ahmad@successive.tech"
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
    },
    {
        traineeEmail: "manish.dixit@successive.tech98",
       reviewerEmail: "faiyaz.ahmad@successive.tech"
       }
];
let checkemail = /^[a-zA-Z0-9._-]+@[successive]+\.[tech]{2,4}$/;

let valid_users=[],invalid_users=[];

// function for validate the email.
function validateEmail(email)
{
return checkemail.test(String(email).toLowerCase());
}
//console.log(validateEmail("manish.dixit@successive.tech"));

//function for validate the userSS
function validateUsers(users)
{   
    users.forEach((users)=>{
    const {traineeEmail,reviewerEmail} = users;
    if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
        valid_users.push("("+traineeEmail+", "+reviewerEmail+") ");
      }
      else{
          invalid_users.push("("+traineeEmail+", "+reviewerEmail+") ");
      }
});
let validlen=valid_users.length;
console.log("Total valid users:",validlen);
console.log("The users are: ",valid_users);
let invalidlen=invalid_users.length;
console.log('Total invalid users',invalidlen);
console.log('The users is: ',invalid_users);
}
validateUsers(users);
