document.getElementById('signup-btn').addEventListener('click', redirectToSignUp);
document.getElementById('login-btn').addEventListener('click', redirectToLogin);

function redirectToSignUp() {
  // Redirect to sign-up page
  window.location.href = 'signup.html';
}

function redirectToLogin() {
  // Redirect to login page
  window.location.href = 'login.html';
}
