"nodejs";
import { recommend } from "./project/bXlGcmVlTVAz/getToken.node"
recommend.then(async function (response) {
    console.log(response.data.data.recommendSong)
});