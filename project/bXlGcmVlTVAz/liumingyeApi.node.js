const axios = require('axios');
const { randomUA } = require('../../modules/randomData.node');
const { getToken } = require("./getToken.node");
const liumingye = axios.create({
    baseURL: 'https://test.quanjian.com.cn',
    timeout: 1000,
    headers: {
        'User-Agent': randomUA(false),
        'Content-Type': 'application/json; charset=utf-8'
    }
})
liumingye.interceptors.request.use(function (config) {
    config.data.token = getToken(config.data);
    return config;
}, function (error) {
    // return Promise.reject(error);
});
const liumingyeApi = {};
liumingyeApi.liumingye = liumingye;
liumingyeApi.recommend = liumingye({
    method: 'post',
    url: '/m/api/home/recommend',
    data: {
        _t: new Date().getTime()
    }
});
module.exports = liumingyeApi;