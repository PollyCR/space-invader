const BASE_URL = "http://localhost:3000";
const BASE_WS_URL = "ws://localhost:3000/cable";
const CHATROOMS_URL = `${BASE_URL}/chatrooms`;
const MESSAGES_URL = `${BASE_URL}/messages`;
const LOGIN_URL = `${BASE_URL}/login`;
const SIGNUP_URL = `${BASE_URL}/signup`;
const VALIDATE_URL = `${BASE_URL}/validate`;

const headers = (more = {}) => ({
  "Content-Type": "application/json",
  'Accept': "application/json",
  ...more
});

const resToJSON = res => res.json();

const get = url => {
  return fetch(url).then(resToJSON);
};

const authHeader = (more = {}) => ({
  Authorisation: localStorage.getItem("token"),
  ...more
});

const handleError = () => {
  console.error("no can do");
};

const post = (url, data) => {
  const config = {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data)
  };
  return fetch(url, config);
};

const login = userDetails =>
  fetch(LOGIN_URL, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ user: userDetails })
  })
    .then(handleServerResponse)
    .then(userDetails => {
      if (userDetails.token) {
        localStorage.setItem('token', userDetails.token)
      }
      return userDetails.user
    })
    .catch(handleError)


const signup = userDetails =>
    fetch(SIGNUP_URL, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ user: userDetails })
    })
    .then(handleServerResponse)
    .then(userDetails => {
        if (userDetails.token) {
          localStorage.setItem('token', userDetails.token)
        }
        return userDetails.user
})
.catch(handleError)

const logout = () => {
    localStorage.removeItem('token')
  }

const validateUser = () =>
  fetch(VALIDATE_URL, {
    method: 'POST',
    headers: headers(authHeader())
  })
    .then(handleServerResponse)
    .then(userDetails => {
      if (!userDetails) {
        return { errors: ['nope '] }
      }
      if (userDetails.token) {
        localStorage.setItem('token', userDetails.token)
      }
      return userDetails.user || userDetails
    })
    .catch(handleError)

const handleServerResponse = res => {
    if (res.ok) {
      return res.text().then(text => {
        try {
          return JSON.parse(text)
        } catch (error) {
          return { staticPageContent: text }
        }
      })
    } else if (res.status === 503) {
      return { code: 503 }
    } else if (res.status === 500) {
      return { code: 500, error: 'IDEK what is going on ' }
    } else {
      return res.text().then(text => {
        try {
          return JSON.parse(text)
        } catch (error) {
          return res
        }
      })
    }
  }

const patch = (url, id, data) => {
  const config = {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify(data)
  };
  return fetch(`${url}/${id}`, config);
};

const destroy = (url, id) => {
  const config = {
    method: "DELETE",
    headers: {
      Accept: "application/json"
    }
  };
  return fetch(`${url}/${id}`, config).then(resToJSON);
};

const postMessage = data => {
  return post(MESSAGES_URL, data);
};
const postChatroom = data => {
  return post(CHATROOMS_URL, data);
};

export default {
  BASE_URL,
  BASE_WS_URL,
  CHATROOMS_URL,
  get,
  post,
  patch,
  destroy,
  postMessage,
  postChatroom,
  validateUser,
  login,
  logout,
  signup
};
