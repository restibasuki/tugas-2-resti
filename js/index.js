const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const showPasswordIcon = document.getElementById('showPassword');

showPasswordIcon.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors" viewBox="0 0 20 20" fill="currentColor"><path d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414L11.414 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 010-1.414z"/></svg>';
  } else {
    passwordInput.type = 'password';
    showPasswordIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-gray-800 transition-colors" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path d="M15.364 4.636a9.5 9.5 0 01-2.828 2.828l-1.293-1.293a7.5 7.5 0 101.415-1.414l-1.293-1.293a9.5 9.5 0 012.828 2.828l1.293 1.293a7.5 7.5 0 00-1.414 1.415l1.293 1.293a9.5 9.5 0 01-2.828-2.828l-1.293-1.293a7.5 7.5 0 001.415-1.414l-1.293-1.293z"/></svg>';
  }
});

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

const statuses = [
  'Welcome to our website!',
  'Stay connected with us.',
  'Explore our latest products.',
  'Join our community today.',
];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const isValidUser = users.find(user => user.username === username && user.password === password);

  if (isValidUser) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Login successful!');

    loginForm.reset();

    window.location.href = './isi.html';
  } else {
    alert('Login failed. Please check your username and password.');
  }
});
