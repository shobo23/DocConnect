const AppointmentForm = (event) => {
  event.preventDefault();
  const AppointmentFullname = document.getElementById("fullname").value.trim();
  const AppointmentEmail = document.getElementById("email").value.trim();
  const AppointmentPhone = document.getElementById("phone").value.trim();
  const AppointmentDate = document.getElementById("date").value.trim();
  const AppointmentDetail = document.getElementById("detail").value.trim();

  if (
    AppointmentFullname !== "" &&
    AppointmentEmail !== "" &&
    AppointmentPhone !== "" &&
    AppointmentDate !== "" &&
    AppointmentDetail !== ""
  ) {
    //check if input has data

    if (localStorage.getItem("appointments")) {
      // chech if data exist already in the local storage
      var appointment_list = JSON.parse(localStorage.getItem("appointments"));
    } else {
      var appointment_list = [];
      localStorage.setItem("appointments", JSON.stringify(appointment_list));
    }

    const AppointmentId = { AppointmentFullname, AppointmentEmail, AppointmentPhone, AppointmentDate, AppointmentDetail };
    appointment_list.push(AppointmentId);

    // store to local storage
    localStorage.setItem("appointments", JSON.stringify(appointment_list));

    Swal.fire({
      title: "Appointment Request Sent",
      text: "A request has been sent successfully",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.href = "dashboard.html";
    });
  } else {
    Swal.fire({
      title: "Appointment Failed",
      text: "Fill in all fields!",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};
