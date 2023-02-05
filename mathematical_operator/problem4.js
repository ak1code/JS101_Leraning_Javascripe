// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "Akshay";
let stored_password = "Jay Hind"

let input_username = "Akshay";
let input_password = "Jay Hind";

if (input_username == stored_username) {

  if (input_password == stored_password) {
    console.log("I am Login")
  }
  else {
    console.log("Your password is not matching")
  }
}

else {
  console.log("Your username is not matching")
}
