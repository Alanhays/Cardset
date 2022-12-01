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
module.exports = myUtils;