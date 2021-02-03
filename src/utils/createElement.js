export function createElement(tagName, props) {
  const element = document.createElement(tagName);
  Object.assign(element, props);
  /*
  props is a completely freely assignable name, it could also be named fische
  
  Object.assign(element, props) replaces this chunk of code:
  element.placeholder = placeholder;
  element.type = type;
  element.innerText = innerText;
  element.className = className;
  element.href = href;
  */

  return element;
}
