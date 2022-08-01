import productname from '@/static/json/productname.json'

export default ({ app }, inject) => {
    inject('model', {
        productname: productname,
    })
}
