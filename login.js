const Login = (event) => {
    event.preventDefault();
    const LoginEmail = document.getElementById("email").value.trim();
    const LoginPassword = document.getElementById("password").value.trim();

    if (LoginEmail !== "" && LoginPassword !== "") {
      // Check if user data exists in localStorage
      if (localStorage.getItem("user")) {
        const user_list = JSON.parse(localStorage.getItem("user"));

        // Find the user with matching email and password
        const user = user_list.find(
          (user) => user.SignUpEmail === LoginEmail && user.SignUpPassword === LoginPassword
        );

        if (user) {
          Swal.fire({
            title: "Login Successful",
            text: `Welcome, ${user.SignUpFullname}`,
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            // Redirect to dashboard
            window.location.href = "success.html";
          });
        } else {
          Swal.fire({
            title: "Login Failed",
            text: "Invalid email or password!",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else {
        Swal.fire({
          title: "Login Failed",
          text: "No user data found. Please sign up first!",
          icon: "error",
          confirmButtonText: "Sign Up",
        }).then(() => {
            // redirect to sign up page
            window.location.href = "signUp.html";
        })
      }
    } else {
      Swal.fire({
        title: "Login Failed",
        text: "Fill in all fields!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };