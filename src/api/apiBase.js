import axios from 'axios';

export default axios.create({
    baseURL:`https://stockx.com/api/products/`
})
