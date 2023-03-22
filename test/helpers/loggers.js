const logger = require('logplease');
const fs = require('fs');
fs.mkdir("./logger-report",{recursive: true}, function(err) {

})
function getDateString(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const seconds = date.getSeconds();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2,'0');
    const day = `${date.getDate()}`.padStart(2,'0');
    return `${year}` + '_' +`${month}` + '_' +`${day}` + '_'+ `${hour}` + '_' + `${min}` + '_' + `${seconds}`;
}
const loggerInitialization = logger.create("UI Mobile Automation",{filename: `./logger-report/test-report-${getDateString()}.log`,  color: logger.Colors.Blue});

class Logger{
    static info(message= message){
          loggerInitialization.info(`${message}`);
    }
    static debug(message = msg){
        loggerInitialization.debug(`${message}`);
    }
    static warn(message = msg){
        loggerInitialization.warn(`${message}`);
    }
    static error(message = msg){
        loggerInitialization.error(`${message}`);
    }
}
module.exports = Logger; 