let basePath = '/api/v1'

let headerJson = {
  'Content-Type': 'application/json',
}
let headerAuth = {
  Authorization: true,
}
let headerAuthJson = {
  Authorization: true,
  'Content-Type': 'application/json',
  'Accept-Language': 'th'
}
let headerAuthForm = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: true,
}

// /c | Cutomer / user
// /a | admin

export default ({ app }, inject) => {
    inject('api', {
        // ================= AUTHERIZATION =================
        userLogin: (data) => {
            return app.$axios.post(`${basePath}/c/guest/login`, data, {
              headers: headerJson,
            })
          },
          userRegister: (data) => {
            return app.$axios.post(`${basePath}/c/guest/register`, data, {
              headers: headerJson,
            })
          },
          userGetMe: () => {
            return app.$axios.get(`${basePath}/c/me`, {
              headers: headerAuthJson,
            })
          },
          userResetPassword: (data) => {
            return app.$axios.post(`${basePath}/c/guest/reset_password`, data, {
              headers: headerJson,
            })
          },
          userLogout: () => {
            return app.$axios.post(
              `${basePath}/c/me/logout`,
              {},
              {
                headers: headerAuthJson,
              }
            )
          },
    })
}