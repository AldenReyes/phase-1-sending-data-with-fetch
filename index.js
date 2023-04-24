function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
  .then (resp => resp.json())
  .then (data => appendIDToDOM(data))
  .catch(data => sendErrorToDOM(data))
};

function appendIDToDOM(obj) {
  const body = document.querySelector('body');
  body.innerHTML = JSON.stringify(obj.id);
}

function sendErrorToDOM(obj) {
  const body = document.querySelector('body');
  body.innerHTML = JSON.stringify(obj.message);
}
