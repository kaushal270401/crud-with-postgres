export const fetchUsers = async () => {
  const response = await fetch("http://localhost:8001/users");
  return await response.json();
};

export const fetchUser=async(id)=>{
  const response = await fetch(`http://localhost:8001/users/${id}`);
  return response.json()
}


export async function postUser(newUser) {
  const response = await fetch(`http://localhost:8001/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser)
  });
  return response.json();
}


export async function deleteUser(id) {
  const response = await fetch(`http://localhost:8001/users/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

export async function updateUser(updatedUser) {
  const response = await fetch(`http://localhost:8001/users/${updatedUser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedUser)
  });
  return response.json()
}

export async function updateBookmark(updatedUser) {
  const response = await fetch(`http://localhost:8001/users/${updatedUser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedUser)
  });
  return response.json()
}

