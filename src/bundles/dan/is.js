var userAgent = navigator.userAgent,
    match = function(regex) {
        return userAgent.search(regex) !== -1;
    },
    IS = {
        ie: match('MSIE'),
        ie7: match('MSIE 7.0'),
        ie8: match('MSIE 8.0'),
        ie9: match('MSIE 9.0'),
        ie10: match('MSIE 10.'),
        ios: match(/(iPhone|iPad|iPod)/),
        android: match('Android'),
        windowsPhone: match('IEMobile'),
        tablet: match(/iPad/i) || (match(/Android/i) && !match(/Mobile/i))
    };

// Ie
IS.ltie9 = IS.ie8 || IS.ie7;
IS.lteie9 = IS.ie9 || IS.ltie9;

// Mobile
IS.mobile = (IS.ios || IS.android || IS.windowsPhone) && !IS.tablet;

export default IS;
export var Is = IS;