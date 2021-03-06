/**
 * Created by alanglad on 12/04/2016.
 */

export default class FetchUtil {
    static checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}