const form = document.querySelector(".login-form");

function handleSubmit(e) {
  e.preventDefault();

  const formData = {};

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Wszystkie pola powinny zostać uzupełnione!");
  } else {
    formData.email = email.value;
    formData.password = password.value;

    e.currentTarget.reset();

    console.log(formData);
  }
}

form.addEventListener("submit", handleSubmit);
