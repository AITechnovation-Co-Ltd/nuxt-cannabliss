import productname from '@/static/json/productname.json'
import product from '@/static/json/products.json'

export default ({ app }, inject) => {
    inject('model', {
        productname: productname,
        product: product,
    })
}
