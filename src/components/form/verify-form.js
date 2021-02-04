import { createElement } from "../../utils/createElement";

function createOTPInputElement() {
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
    maxLength: 1,
  });
  return input;
}

export function createVerifyForm() {
  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const text = document.createElement("p");
  text.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const otpOne = createOTPInputElement();
  const otpTwo = createOTPInputElement();
  const otpThree = createOTPInputElement();
  const otpFour = createOTPInputElement();
  const passwordContainer = createElement("div", {
    className: "form__otp",
    children: [otpOne, otpTwo, otpThree, otpFour],
  });

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  const hint = document.createElement("p");
  hint.innerText = "Didn't Receive?";
  hint.className = "form__hint";

  const resendLink = document.createElement("a");
  resendLink.innerText = "Click Here";
  resendLink.href = "#";

  const form = createElement("form", {
    className: "form",
    onsubmit: function (event) {
      event.preventDefault();

      const secretPassword = "3217";
      const password =
        otpOne.value + otpTwo.value + otpThree.value + otpFour.value;

      if (password === secretPassword) {
        alert("Password is correct");
      } else {
        alert("Password is NOT correct");
      }
    },
  });

  hint.append(resendLink);

  form.append(title, text, passwordContainer, button, hint);
  return form;
}
