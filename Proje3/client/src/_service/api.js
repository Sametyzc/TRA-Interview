function logout() {
  localStorage.removeItem('currentUser');
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if ([401, 403].indexOf(response.status) !== -1) {
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export async function login(mail, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mail, password }),
  };
  const response = await fetch(
    'http://localhost:4000/users/authenticate',
    requestOptions,
  );
  const user = await handleResponse(response);
  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
}
