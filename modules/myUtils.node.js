const myUtils = {};
const _ = function (item) {
    let str = item.charCodeAt().toString(16), num = 0;
    if (str.length < 4) num = 4 - str.length;
    return "0".repeat(num) + str;
};
myUtils.Argot = function (params) {
    let string = "";
    switch (typeof params) {
        case "number":
            return params.charCodeAt();
        case "string":
            params.split("").forEach((item) => {
                string += _(item);
            });
            return string;
        case "array":
            params.forEach((item) => {
                string += _(item);
            });
            return string;
        default:
            console.error("type error !");
            break;
    }
}
myUtils.Clear = function (params) {
    params.split(".").forEach((item) => {
        string += item.charCodeAt() + str;
    });
    "".fromCharCode
};

// const fs = require("fs");

// console.log()
// var str = Argot("开始运行")
// console.log(str)
// console.log("".fromCharCode("5f00".toString(10)))

// console.log("5f00".toString(10));
// console.log()
// JSON.parse('{"str": "\u5f00"}')['str']
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
module.exports = myUtils;