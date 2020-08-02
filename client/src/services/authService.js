export default {
  login: (user) => {
    return fetch("/auth/login", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  register: (user) => {
    return fetch("/auth/register", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  logout: () => {
    return fetch("/auth/logout")
      .then((res) => res.json())
      .then((data) => data);
  },

  isAuthenticated: async () => {
    return fetch("/auth/authenticate").then((res) => {
      if (res.status !== 401) return res.json().then((data) => data);
      else
        return {
          isAuthenticated: false,
          user: {
            username: "",
            role: "",
          },
        };
    });
  },

  sendEmail: (user) => {
    return fetch("/mail/forgotpassword", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
};
