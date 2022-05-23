import axios from 'axios';
axios.defaults.baseURL = 'http://api.w0824.com/api';

// 轮播图
export async function getSwipeData() {
    await axios.get('/getlunbo')
}

// 首页商品列表
export function getGoodsData(page = 1, limit = 10) {
    return axios.get(`/recommend?pageindex=${page}&limit=${limit}`)
}

// 京东超市商品列表
export function fetchGoodsList(page = 1, pagesize = 10) {
    return axios.get(`/getgoods?pageindex=${page}&pagesize=${pagesize}`)
}

// 商品详情
export function getGoodsDetail(id) {
    return axios.get(`/getgoodsinfo/${id}`)
}
// 商品详情图片
export function getGoodsDetailImg(id) {
    return axios.get(`/getthumbimages/${id}`)
}