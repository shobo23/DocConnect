const SignUpForm = (event) => {
  event.preventDefault();
  const SignUpFullname = document.getElementById("fullname").value.trim();
  const SignUpEmail = document.getElementById("email").value.trim();
  const SignUpPhone = document.getElementById("phone").value.trim();
  const SignUpPassword = document.getElementById("password").value.trim();

  if (
    SignUpFullname !== "" &&
    SignUpEmail !== "" &&
    SignUpPhone !== "" &&
    SignUpPassword !== ""
  ) {
    //check if input has data

    if (localStorage.getItem("user")) {  // chech if data exist already in the local storage
      var user_list = JSON.parse(localStorage.getItem("user"));
    } else {
      var user_list = [];
      localStorage.setItem("user", JSON.stringify(user_list));
    }

    const UserId = { SignUpFullname, SignUpEmail, SignUpPhone, SignUpPassword };
    user_list.push(UserId);

    // store to local storage
    localStorage.setItem("user", JSON.stringify(user_list));

    Swal.fire({
      title: "Registration Successful",
      text: "You can now Login In",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.href = "login.html";
    });
  } else {
    Swal.fire({
      title: "Registration Failed",
      text: "Fill in all fields!",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
