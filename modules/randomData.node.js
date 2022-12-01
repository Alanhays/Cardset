const randomData = {};
const os_type = [
    '(Windows NT 6.1; WOW64)', '(Windows NT 10.0; WOW64)', '(X11; Linux x86_64)',
    '(Macintosh; Intel Mac OS X 10_12_6)'
];
const os_type_phone = [
    '(Linux; Android 6.0; Nexus 5 Build/MRA58N)', '(Linux; Android 11; Pixel 5)'
];
/**
 * 随机生成版本信息
 */
const randomConfig = function () {
    let first_num = randomData.randomInt(75, 99);
    let third_num = randomData.randomInt(0, 3200);
    let fourth_num = randomData.randomInt(0, 140);
    return `Chrome/${first_num}.0.${third_num}.${fourth_num}`;
}
/**
 * 范围内随机取值
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
randomData.randomInt = function (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
/**
 * 生成 uuid
 * @returns uuid
 */
randomData.uuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
/**
 * 获取 UserAgent
 * systemType 0 : PC | 1 : phone | unknown : 随机获取 UserAgent
 * @param {Number} systemType 
 * @returns UserAgent String
 */
randomData.randomUA = function (systemType) {
    try {
        systemType = systemType || this.randomInt(0, 1);
        let chrome_version = randomConfig();
        let _os_type = os_type[this.randomInt(0, os_type.length - 1)];
        if (systemType) {
            _os_type = os_type_phone[this.randomInt(0, os_type_phone.length - 1)];
        }
        return `Mozilla/5.0 ${_os_type} AppleWebKit/537.36 (KHTML, like Gecko) ${chrome_version} Safari/537.36`
    } catch (error) {
        return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.56"
    }
}
module.exports = randomData;