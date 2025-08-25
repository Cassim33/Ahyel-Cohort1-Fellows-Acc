const users = [
  {
    username: "fellow1",
    password: "12345",
    name: "Kasimu Muhammad",
    pic: "https://avatars.githubusercontent.com/u/92431715?v=4&size=64"
  }
];

function login() {
  const userInput = document.getElementById("username").value;
  const passInput = document.getElementById("password").value;
  const error = document.getElementById("error");

  const user = users.find(u => u.username === userInput && u.password === passInput);

  if (user) {
    document.querySelector(".login-container .profile-pic").src = user.pic;
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("dashboard-pic").src = user.pic;
  } else {
    error.style.display = "block";
  }
}

function logout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.querySelectorAll('.section-page').forEach(p => p.classList.add('hidden'));
  document.getElementById("login-page").classList.remove("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("error").style.display = "none";
  document.querySelector(".login-container .profile-pic").src = "https://avatars.githubusercontent.com/u/92431715?v=4&size=64";
}

function openSection(id) {
  document.getElementById('dashboard').classList.add('hidden');
  document.querySelectorAll('.section-page').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function backToDashboard() {
  document.querySelectorAll('.section-page').forEach(p => p.classList.add('hidden'));
  document.getElementById('dashboard').classList.remove('hidden');
}
