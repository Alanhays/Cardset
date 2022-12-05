const fs = require("fs");
const { projectDir } = require("./config.node");
const myUtils = {};
myUtils.btoa = function (s) {
    return new Buffer(s, 'utf8').toString('base64');
}
myUtils.atob = function (s) {
    return new Buffer(s, 'base64').toString('utf8');
}
myUtils.buildCardList = function () {
    let cardList = [];;
    fs.readdir(projectDir, (err, folderList) => {
        if (err) {
            console.log(err);
        } else {
            folderList.forEach(folderName => {
                let dir = projectDir + folderName;
                cardList.push({
                    title: folderName,
                    image: `${dir}/icon.png`,
                    dir: dir,
                });
            });

        }
    })
    console.log(cardList);
    return cardList;
}
module.exports = myUtils;