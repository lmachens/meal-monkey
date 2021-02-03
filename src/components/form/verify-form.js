function createOTPInputElement() {
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "*";
  input.className = "input";

  return input;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const text = document.createElement("p");
  text.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const otpOne = createOTPInputElement();
  const otpTwo = createOTPInputElement();
  const otpThree = createOTPInputElement();
  const otpFour = createOTPInputElement();

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
