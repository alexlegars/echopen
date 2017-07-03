import Share from './';

export default class Facebook extends Share {
    get shareUrl() {
        return window.location.protocol + "//www.facebook.com/share.php?u={url}";
    }

    /**
     * Override click handler
     * @param event
     */
    onClick(event) {
        event.preventDefault();
        Facebook.FB.ui({
            method: 'feed',
            display: 'popup',
            name: this.state.title,
            description: this.state.description,
            link: this.state.url,
            picture: this.state.picture
        });
    }

    /**
     * Setup facebook SDK
     * @param locale (default: fr_FR)
     * @return {Promise}
     */
    static setup(locale) {
        locale = locale || 'fr_FR';
        return new Promise((resolve, reject) => {
            // SDK Ready
            if (window.FB) {
                resolve(window.FB);
            }
            // Download SDK
            else {
                this.getScript('//connect.facebook.net/' + locale + '/sdk.js', function () {
                    resolve(Facebook.FB);
                });
            }
        });
    }

    static getScript(source, callback) {
        var script = document.createElement('script');
        var prior = document.getElementsByTagName('script')[0];
        script.async = 1;
        prior.parentNode.insertBefore(script, prior);

        script.onload = script.onreadystatechange = function( _, isAbort ) {
            if(isAbort || !script.readyState || /loaded|complete/.test(script.readyState) ) {
                script.onload = script.onreadystatechange = null;
                script = undefined;

                if(!isAbort) { if(callback) callback(); }
            }
        };

        script.src = source;
    }

    /**
     * Facebook SDK
     * @returns {Object}
     */
    static get FB() {
        return window.FB;
    }
}

export var FB = Facebook.FB;