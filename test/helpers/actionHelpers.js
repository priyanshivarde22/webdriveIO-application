const { config } = require('../../config/wdio.conf')
class ActionHelper{

static isPlatformAndroid() {
    try {
        if (config.capabilities[0].platformName == 'android') {
            return true;
        }
        return false;
    } catch (err) {
        //logger.error(err)
        throw new Error(`not able to find the platform: ${err}`)
    }
}

}

module.exports = ActionHelper