// script.js
function fetchUserData() {
  const container = document.getElementById("user-container");
  container.innerHTML = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) throw new Error("Network error!");
      return response.json();
    })
    .then(users => {
      container.innerHTML = "";
      users.forEach(user => {
        const div = document.createElement("div");
        div.className = "user-card";
        div.innerHTML = `
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

// Fetch when page loads
window.onload = fetchUserData;
