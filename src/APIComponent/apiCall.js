var userAPI = "https://api.github.com/users";

export function getUsers() {
  return fetch(userAPI).then((data) => data.json());
}

export function setUsers(users) {
  return fetch(userAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ users }),
  });
}
