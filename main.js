"ui nodejs";

const fs = require("fs");


//读取目录下所有文件
fs.readdir('./project',(err,folderList) => {
    if(err) {
        console.log(err);
    } else {
        let cardList = [];
        folderList.forEach(folderName => {
            let dir = `./project/${folderName}`;
            cardList.push({
                title: folderName,
                image: `${dir}/icon.png`,
                dir: dir,
            });
        });
        console.log(cardList);
    }
})