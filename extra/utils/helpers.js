let checkemail = /^[a-zA-Z0-9._-]+@[successive]+\.[tech]{2,4}$/;
function validateEmail(email)
{
return checkemail.test(String(email).toLowerCase());
}

export {validateEmail};