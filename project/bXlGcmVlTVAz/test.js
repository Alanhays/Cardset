const {recommend} = require("./liumingyeApi.node");
const {getToken} = require("./getToken.node");
var data = {
    "type": "YQM",
    "text": "十二月的奇迹",
    "page": 1,
    "v": "beta",
    "_t": 1669951659231
}
console.log(getToken(data))


recommend.then(async function (response) {
    console.log(response.data.data.recommendSong)
});
