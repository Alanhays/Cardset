const axios = require('axios');
const { device } = require("device");
const { randomUA } = require('./randomData.node');
axios.defaults.baseURL = ' https://5jq3rzz3023vk.cfc-execute.bj.baidubce.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['User-Agent'] = randomUA();
const axiosApi = {};
axiosApi.getCardListData = axios({
    method: 'get',
    url: '/getCardListData?',
    params: {
        token: device.androidId
    }
});
module.exports = axiosApi;