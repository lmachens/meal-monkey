/*
<form class="form">
    <h2>Reset Password</h2>
    <p>Please enter your email to receive a link to create a new password via email</p>
    <input placeholder="email" />
    <button>Register</button>
</form>
*/
export function createRegisterForm() {
  //   const title = document.createElement("h2");
  //   title.innerText = "Reset Password";
  const button = document.createElement("button");
  button.innerText = "Register";

  function register() {
    alert("Registered");
  }

  button.addEventListener("click", register);

  return button;
}
