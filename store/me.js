
export const state = () => {
  return {
    user: {},
    token: '',
    refresh_token: '',
    breadcrumb: '',
    products: [],
    productname: '',
    count: 0,
    fake_count: null,
    type: '',
    liked: [],
    toggle: true,
    role: 0,
  }
}
export const getters = {
  getToken: (state) => {
    const t = localStorage.getItem('token') || state.token
    return t
  },
  getRefreshToken: (state) => {
    const rt = localStorage.getItem('refresh_token') || state.refresh_token
    return rt
  },
  getUser: (state) => {
    const user = localStorage.getItem('user') || state.user
    let u = JSON.parse(user)
    return u
  },
  getRole: (state) => {
    const role = localStorage.getItem('role') || state.role
    let r = JSON.parse(role)
    return r
  },
  getToggle: (state) => {
    const toggle = state.toggle
    return toggle
  },
  getBreadcrumb: (state) => {
    const breadcrumb = state.breadcrumb
    return breadcrumb
  },
  getProducts: (state) => {
    const products = localStorage.getItem('products') || state.products
    let p = JSON.parse(products)
    return p
  },
  getProductName: (state) => {
    const productname = state.productname
    return productname
  },
  getCount: (state) => {
    const count = localStorage.getItem('count') || state.count
    return count
  },
  getFakeCount: (state) => {
    const fake_count = state.fake_count
    return fake_count
  },
  getType: (state) => {
    const type = state.type
    return type
  },
  getSome: (state) => {
    console.log(state.liked)
    const liked = localStorage.getItem('liked') || state.liked
    return liked
  },
}
export const mutations = {
  SET_TOKEN(state, token) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token)
    }
    state.token = token
  },
  SET_REFRESH_TOKEN(state, refresh_token) {
    localStorage.setItem('refresh_token', refresh_token)
    state.refresh_token = refresh_token
  },
  SET_USER(state, user) {
    const u = JSON.stringify(user)
    localStorage.setItem('user', u)
    state.user = user
  },
  SET_ROLE(state, role) {
    const u = JSON.stringify(role)
    localStorage.setItem('role', u)
    state.role = role
  },
  CLEAR_USER(state) {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    state.user = {}
    state.token = ''
    state.refresh_token = ''
  },
  SET_TOGGLE(state) {
    state.toggle = !state.toggle
  },
  SET_BREADCRUMB(state, breadcrumb) {
    state.breadcrumb = breadcrumb
  },
  SET_PRODUCTS(state, products) {
    let like_count = 0
    products.forEach(product => {
      if (product["islike"]) {
        like_count++
      }
    })
    state.products = products
    state.count = like_count
    state.fake_count = like_count
    const p = JSON.stringify(products)
    localStorage.setItem('count', like_count)
    localStorage.setItem('products', p)
  },
  SET_PRODUCTNAME(state, productname) {
    state.productname = productname
  },
  SET_COUNT(state, count) {
    state.count = state.count + count
    localStorage.setItem('count', state.count)
  },
  SET_FAKE_COUNT(state, count) {
    state.fake_count = state.fake_count + count
  },
  SET_TYPE(state, type) {
    console.log(type)
    state.type = type
  },
  SET_SOME(state, data) {
    state.liked[data.index] = { index: data.index, liked: data.islike }
    localStorage.setItem('liked', state.liked)
    console.log(state.liked)
  },
}
export const actions = {
  async userLogin({ commit, dispatch }, data) {
    const self = this
    return await self.$api
      .userLogin(data)
      .then(async (response) => {
        await commit('SET_TOKEN', response.data.token)
        await commit('SET_REFRESH_TOKEN', response.data.refresh_token)

        await dispatch('me')
        return undefined
      })
      .catch((error) => {
        return error
      })
  },
  async me({ commit }) {
    const self = this
    return await self.$api.userGetMe().then(async (response) => {
      await commit('SET_USER', response.data)
      await commit('SET_ROLE', response.data.roles[0].role)
    })
  },
  async logout({ commit }) {
    const self = this
    return await self.$api
      .userLogout()
      .then(async () => {
        await commit('CLEAR_USER')
        return undefined
      })
      .catch(async (error) => {
        return error
      })
  },
  setToggle({ commit }) {
    commit('SET_TOGGLE')
  },
  setBreadcrumb({ commit }, breadcrumb) {
    commit('SET_BREADCRUMB', breadcrumb)
  },
  setProducts({ commit }, products) {
    let product = []
    products.forEach(p => {
      product.push({
        detail: p.detail,
        imgUrl: p.imgUrl,
        islike: p.islike,
        link: p.link,
        name: p.name,
        no: p.no,
        quantity: p.quantity,
        type: p.type,
      })
    })
    commit('SET_PRODUCTS', product)
  },
  async setProductName({ commit }, productname) {
    await commit('SET_PRODUCTNAME', productname)
  },
  setCount({ commit }, count) {
    commit('SET_COUNT', count)
  },
  setFakeCount({ commit }, count) {
    commit('SET_FAKE_COUNT', count)
  },
  setSome({ commit }, data) {
    commit('SET_SOME', data)
  },
  setType({ commit }, data) {
    // console.log(data)
    commit('SET_TYPE', data)
  },
}
