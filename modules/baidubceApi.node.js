const axios = require('axios');
const { device } = require("device");
const baidubce = axios.create({
    baseURL: 'https://5jq3rzz3023vk.cfc-execute.bj.baidubce.com',
    timeout: 1000,
    headers: { 'User-Agent': 'axios 0.6.17' }
});
baidubce.interceptors.request.use(function (config) {
    config.params.token = device.androidId
    return config;
}, function (error) {
    // return Promise.reject(error);
});
const baidubceApi = {};
baidubceApi.baidubce = baidubce;
baidubceApi.getCardListData = baidubce({
    method: 'get',
    url: '/getCardListData?',
    params: new Object
});
module.exports = baidubceApi;