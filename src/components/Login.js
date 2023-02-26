import { useNavigate } from "react-router-dom";
export default function Login() {
  const Navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const phonePattern = /^\d{10}$/;
    const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (nameInput.value === "") {
      nameError.innerHTML = "Name is required";
    } else {
      nameError.innerHTML = "";
    }

    if (!phonePattern.test(phoneInput.value)) {
      phoneError.innerHTML = "Phone number must be 10 digits";
    } else {
      phoneError.innerHTML = "";
    }

    if (!emailPattern.test(emailInput.value)) {
      emailError.innerHTML = "Email is invalid";
    } else {
      emailError.innerHTML = "";
    }

    if (
      nameError.innerHTML === "" &&
      phoneError.innerHTML === "" &&
      emailError.innerHTML === ""
    ) {
   ;
      Navigate("/home");
    } else {
      alert("Please fill out the form correctly!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={validateForm} id="form">
        <h1 className="text-center">Login Form</h1>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
          <span id="nameError" className="error"></span>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" required />
          <span id="phoneError" className="error"></span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
          <span id="emailError" className="error"></span>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
