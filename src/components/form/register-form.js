/*
<form class="form">
    <h2>Reset Password</h2>
    <p>Please enter your email to receive a link to create a new password via email</p>
    <input placeholder="email" />
    <button>Register</button>
</form>
*/
export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "Register";

  function register() {
    alert("Registered");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "Reset Password";

  form.append(title, button);

  return form;
}
