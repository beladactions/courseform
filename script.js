

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
  
    if (name == "" || email == "" || course == "") {
      alert("Please fill in all the required fields.");
      return false;
    }
  }

  