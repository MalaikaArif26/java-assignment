function evt(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var display = document.getElementById('displayData');
       display.innerHTML=`
       <h2>Form Data:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
       `;

}   
function showDetails() {
    var details = document.getElementById("details");
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }


  
  const studentForm = document.getElementById("studentForm");
  const studentTable = document.getElementById("studentTable");
  const editForm = document.getElementById("editForm");
  const updateBtn = document.getElementById("updateBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  
  let currentRowId = null; // To store the ID of the row being edited
  
  // Function to add a new student row to the table
  function addStudentRow(name, age, grade) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>${name}</td>
          <td>${age}</td>
          <td>${grade}</td>
          <td>
              <button class="editBtn">Edit</button>
              <button class="deleteBtn">Delete</button>
          </td>
      `;
      studentTable.querySelector("tbody").appendChild(newRow);
  
      // Attach event listeners to the edit and delete buttons of the new row
      const editBtn = newRow.querySelector(".editBtn");
      const deleteBtn = newRow.querySelector(".deleteBtn");
  
      editBtn.addEventListener("click", function () {
          showEditForm(newRow);
      });
  
      deleteBtn.addEventListener("click", function () {
          deleteStudentRow(newRow);
      });
  }
  
  // Function to show the edit form with the data of the selected row
  function showEditForm(row) {
      const cells = row.children;
      editForm.style.display = "block";
      currentRowId = row.rowIndex; // Store the row index for updating later
  
      // Set values in the edit form
      document.getElementById("editName").value = cells[0].innerText;
      document.getElementById("editAge").value = cells[1].innerText;
      document.getElementById("editGrade").value = cells[2].innerText;
  }
  
  // Function to update the student details on the table
  function updateStudentRow() {
      const name = document.getElementById("editName").value;
      const age = document.getElementById("editAge").value;
      const grade = document.getElementById("editGrade").value;
  
      // Update the table row with the new values
      const updatedRow = studentTable.rows[currentRowId];
      updatedRow.cells[0].innerText = name;
      updatedRow.cells[1].innerText = age;
      updatedRow.cells[2].innerText = grade;
  
      // Hide the edit form and reset the currentRowId
      editForm.style.display = "none";
      currentRowId = null;
  }
  
  // Function to delete a student row from the table
  function deleteStudentRow(row) {
      row.remove();
  }
  
  // Event listener for form submission
  studentForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const grade = document.getElementById("grade").value;
  
      // Add the student row to the table
      addStudentRow(name, age, grade);
  
      // Clear form fields
      studentForm.reset();
  });
  
  // Event listener for the cancel button in the edit form
  cancelBtn.addEventListener("click", function () {
      editForm.style.display = "none";
      currentRowId = null;
  });
  
  // Event listener for the update button in the edit form
  updateBtn.addEventListener("click", function () {
      updateStudentRow();
  });
  