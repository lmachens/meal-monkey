export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const text = document.createElement("p");
  text.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const otpOne = document.createElement("input");
  otpOne.type = "password";
  otpOne.placeholder = "*";
  otpOne.className = "input";
  const otpTwo = document.createElement("input");
  otpTwo.type = "password";
  otpTwo.placeholder = "*";
  otpTwo.className = "input";
  const otpThree = document.createElement("input");
  otpThree.type = "password";
  otpThree.placeholder = "*";
  otpThree.className = "input";
  const otpFour = document.createElement("input");
  otpFour.type = "password";
  otpFour.placeholder = "*";
  otpFour.className = "input";

  const passwordContainer = document.createElement("div");
  passwordContainer.className = "form__otp";
  passwordContainer.append(otpOne, otpTwo, otpThree, otpFour);

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  const hint = document.createElement("p");
  hint.innerText = "Didn't Receive?";
  hint.className = "form__hint";

  const resendLink = document.createElement("a");
  resendLink.innerText = "Click Here";
  resendLink.href = "#";

  hint.append(resendLink);

  form.append(title, text, passwordContainer, button, hint);
  return form;
}
