// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let userName = "ashish123";
let userPass = "as101";

let user_name = "ashish123";
let user_pass = "as101";

if(userName == user_name)
{
  if(userPass == user_pass)
  {
    console.log("Login Succesfuly");
  }
}
if(userName == user_name)
{
  if(userPass !== user_pass)
  {
  console.log("Wrong Password");
  }
}
else
{
  console.log("Wrong UserName");
}