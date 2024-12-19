const loginForm = document.getElementById('loginForm');
const alertMessage = document.getElementById('alertMessage');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'miffy' && password === 'miffy') {
    // Login successful
    console.log('Login successful!');
    alert('Login successful!');
    window.location.href = 'miffy.html'; 
  } else {
    // Login failed
    console.log('Incorrect username or password.');
    alertMessage.textContent = 'Incorrect username or password.'; // Update the div content
  }
});