"ui nodejs";
const { Clear, Argot } = require('./modules/myUtils.node');
// const fs = require("fs");

// console.log()
// var str = Argot("开始运行")
// console.log(str)
// console.log("".fromCharCode("5f00".toString(10)))

// console.log("5f00".toString(10));
console.log()
JSON.parse('{"str": "\u5f00"}')['str']
//读取目录下所有文件
// fs.readdir('./project',(err,folderList) => {
//     if(err) {
//         console.log(err);
//     } else {
//         let cardList = [];
//         folderList.forEach(folderName => {
//             let dir = `./project/${folderName}`;
//             cardList.push({
//                 title: folderName,
//                 image: `${dir}/icon.png`,
//                 dir: dir,
//             });
//         });
//         console.log(cardList);
//     }
// })