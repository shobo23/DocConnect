// Retrieve the users array from localStorage
const Users = JSON.parse(localStorage.getItem("user1"));

// Get the table body element
const RegisteredUserTableBody = document.getElementById(
  "registered-user-table-body"
);

// Iterate through each user and create table rows

for (let index = 0; index < Users.length; index++) {
  // console.log(index);
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${Users[index].SignUpFullname}</td>
    <td>${Users[index].SignUpEmail}</td>
    <td>${Users[index].SignUpPhone}</td>
  `;
  // Append the row to the table body
  RegisteredUserTableBody.appendChild(row);
}
/*
Users.forEach( (user) => {
    // Create a new table row
    const row = document.createElement('tr');

    // Add table data (columns) to the row
    row.innerHTML = `
    <td>${user.SignUpFullname}</td>
    <td>${user.SignUpEmail}</td>
    <td>${user.SignUpPhone}</td>
  `;

    // Append the row to the table body
    RegisteredUserTableBody.appendChild(row);
});*/


// Retrieve the users array from localStorage
const Appointment = JSON.parse(localStorage.getItem("appointments"));

// Get the table body element
const AppointmentTableBody = document.getElementById(
  "appointment-table-body"
);

// Iterate through each user and create table rows
for (let index = 0; index < Appointment.length; index++) {
  // console.log(index);
  const AppointmentRow = document.createElement("tr");
  AppointmentRow.innerHTML = `
    <td>${Appointment[index].AppointmentFullname}</td>
    <td>${Appointment[index].AppointmentEmail}</td>
    <td>${Appointment[index].AppointmentPhone}</td>
    <td>${Appointment[index].AppointmentDate}</td>
    <td>${Appointment[index].AppointmentDetail}</td>
  `;
  // Append the row to the table body
  AppointmentTableBody.appendChild(AppointmentRow);
}
