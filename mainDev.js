"nodejs";
const { projectDir } = require('./modules/config.node');
const { execScriptFile } = require('engines')
const projectName = "bXlGcmVlTVAz";
const workingDirectory = `${projectDir}/${projectName}`;
const mainFile = `${workingDirectory}/main.js`;
execScriptFile(mainFile,{
    arguments:{},
    path: [],
    workingDirectory: workingDirectory
})