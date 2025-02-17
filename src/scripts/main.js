'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      resolve(
        `It was ${eventName} on the element: ${e.target.nodeName}, id: ${e.target.id}.`,
      );
    });
  });
}

const printMessage = (message) => {
  const pageMessage = document.createElement('div');

  pageMessage.textContent = message;
  pageMessage.className = 'message';
  document.body.appendChild(pageMessage);
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
