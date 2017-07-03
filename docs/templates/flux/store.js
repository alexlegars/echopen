import {alt, AjaxStore} from 'dan';
import config from 'config';
import SampleActions from 'actions/sample';

@AjaxStore({
    actions: SampleActions,
    url: config.path+'locales/fr/main.json'
})
class SampleStore {

}

export default alt.createStore(SampleStore, 'SampleStore');