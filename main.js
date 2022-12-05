"nodejs";
const {recommend} = require("./project/bXlGcmVlTVAz/liumingyeApi.node");
recommend.then(async function (response) {
    console.log(response.data.data.recommendSong)
});