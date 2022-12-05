"nodejs";
const {recommend} = require("./project/bXlGcmVlTVAz/liumingyeApi.node");
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

const recommendSong = [
    {
      id: 24260,
      lyric: 'b51576641729e',
      url: null,
      name: '心做し',
      pic: null,
      time: 273,
      quality: [ [Object], [Object], [Object], [Object] ],
      album: {
        id: 13674,
        name: 'Contrast',
        pic: 'https://i.biliimg.com/bfs/im/d56c5d237e860e96fd444af5f73ad902d5624855.jpg@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'b3f634HzOLrfMF9SfoAo9ZVLNR0QGkZ-CwmZ9KPECiqBxSW_2PQ'
    },
    {
      id: 22530,
      lyric: 'm4eedd78464c21ce789dea6928415b323-b440db8b74fc53b86106d61a80365e9e-7dd48b2645be6391f62a7d0f48c6c808f4d7',
      url: null,
      name: '我的世界因你而改变',
      pic: null,
      time: 225,
      quality: [ [Object], [Object], [Object], [Object] ],
      album: {
        id: 15574,
        name: '星火叁号',
        pic: 'https://i.biliimg.com/bfs/im/a5cfc73596370f53f3b3e41c3c5b040d35faeb71.jpg@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'm3f63OtUGNZoMDio1KvhSumQ4lJCdcPJ8LX3zj1E7dWSL06zZFeLha7ci0RXIdZo'
    },
    {
      id: 6283,
      lyric: 'b1601470848895',
      url: 'https://res.wx.qq.com/voice/getvoice?mediaid=MzI3NjYzODY0Nl8xMDAwMDUxNjY=',
      name: '痴情冢',
      pic: null,
      time: 307,
      quality: [ [Object], [Object], [Object], [Object] ],
      album: {
        id: 4801,
        name: '晴雅集 电影原声大碟',
        pic: 'https://i.biliimg.com/bfs/im/5eca0cf9f1b4f654547dea34aff8442afe559a08.jpg@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'b3f634HzOLrfMF9SfoF5qNAaaEBNSwZvXn2V_f_YGjaV3S27yNBE'
    },
    {
      id: 25944,
      lyric: 'd274716156746',
      url: null,
      name: 'Clavierbüchlein for Anna Magdalena Bach, Book 2, BWV Anh. 113-132: Minuet in G Major, BWV Anh 114',
      pic: null,
      time: 94,
      quality: [ [Object], [Object], [Object] ],
      album: {
        id: 17801,
        name: 'BACH (THE VERY BEST OF)',
        pic: 'https://i.biliimg.com/bfs/im/4ed2747b00e62b6beefc2b4f4464574e7c228957.jpg@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'd3f636iePH3nJMVUD1w_tTzOyfbY7u79oT9XzDp7YfUEMi3qfdw'
    },
    {
      id: 10244,
      lyric: 'b71007522b45e',
      url: 'https://res.wx.qq.com/voice/getvoice?mediaid=MzI3NjYzODY0Nl8yMjQ3NDg1MTkz',
      name: 'Robin Hood(Mokita Remix)',
      pic: null,
      time: 215,
      quality: [ [Object], [Object], [Object], [Object] ],
      album: {
        id: 7532,
        name: 'Robin Hood (Mokita Remix)',
        pic: 'https://i.biliimg.com/bfs/im/063f57cdc4ddb7b3522032ee5da2a3de62ccf78d.jpg@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'b3f634HzOLrfMF9SfoA5oZFfOGBZUx5_ZyGF8e_QAiqV2SGzwPg'
    },
    {
      id: 25314,
      lyric: 'd28302514e9b7',
      url: 'https://res.wx.qq.com/voice/getvoice?mediaid=MzI3NjYzODY0Nl8yMjQ3NDg3OTkz',
      name: '让我一次爱个够',
      pic: null,
      time: 265,
      quality: [ [Object], [Object], [Object] ],
      album: {
        id: 17423,
        name: '失物招领Lost & Found - 庾澄庆精选',
        pic: 'https://i.biliimg.com/bfs/im/706467cd0580680b77044e4bfd8ce7cf3e7ff247.png@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'd3f636iePH3nJMVUD1wfqSGHifrpnurg1E9H4D87YckYLiHmfdg'
    },
    {
      id: 3351,
      lyric: 'd13998209656d3d',
      url: null,
      name: 'For Her',
      pic: null,
      time: 165,
      quality: [ [Object], [Object], [Object] ],
      album: {
        id: 2674,
        name: 'Again',
        pic: 'https://i.biliimg.com/bfs/im/4c652c706f821205ca564a22191dbb68974ad045.jpg@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'd3f636iePH3nJMVUD1wLoHjOxKuRm6Ok0QdLxDprbeUwCgn6ee_On'
    },
    {
      id: 9426,
      lyric: 'b662834467de',
      url: 'https://res.wx.qq.com/voice/getvoice?mediaid=MzI3NjYzODY0Nl8yMjQ3NDg1NzA4',
      name: '四海',
      pic: null,
      time: 304,
      quality: [ [Object], [Object], [Object], [Object] ],
      album: {
        id: 7021,
        name: '四海',
        pic: 'https://i.biliimg.com/bfs/im/77ff234548137c1fad4088e4865c679ab5e4e84e.jpg@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object], [Object], [Object], [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'b3f634HzOLrfMF9SfoFs7MVCbEEQEk56Dn2h9efcBjad-TG32'
    },
    {
      id: 6557,
      lyric: 'd26305538a691',
      url: null,
      name: '杀手',
      pic: null,
      time: 295,
      quality: [ [Object], [Object], [Object] ],
      album: {
        id: 574,
        name: '他是…JJ林俊杰',
        pic: 'https://i.biliimg.com/bfs/im/be1f5a82c5d7c5c9ac15d4e7340bf1573184257c.jpg@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'd3f636iePH3nJMVUD1wPqHTLpfbE3vuQyFdP0BsnYfEYLj3mdeg'
    },
    {
      id: 36423,
      lyric: 'b6311069360f3',
      url: null,
      name: '醉太平',
      pic: null,
      time: 134,
      quality: [ 96, [Object], [Object], [Object] ],
      album: {
        id: 16606,
        name: '《国家宝藏》第二季 原声音乐关大洲作品',
        pic: 'https://i.biliimg.com/bfs/im/d91a11f1f98610926627c63054ef5a76787da81d.jpg@{size}w_{size}h_1c.webp'
      },
      artist: [ [Object] ],
      user: { uid: 9785, username: 'MFM编辑' },
      hash: 'b3f634HzOLrfMF9SfoA5sMlGSGUICzJTRw2cvevABiKR3T2_7Pw'
    }
  ] 