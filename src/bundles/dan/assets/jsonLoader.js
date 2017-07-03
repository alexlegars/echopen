import {AbstractLoader} from './';
import {FetchUtil} from 'dan';
export class JSONLoader extends AbstractLoader {
	/**
	 * Constructor
	 * @param  {Object} params
	 */
	constructor(params) {
		super(params);
		this.asset = this.value;
	}
	
	/**
	 * Load callback
	 * @param  {Function} onComplete callback
	 * @param  {Function} onError callback   
	 */
	load(onComplete, onError) {
		super.load(onComplete, onError);
		
        fetch(this.value, {dataType: 'json'})
			.then(FetchUtil.checkStatus)
			.then((response) => {
				response.json().then((content) => {
					this.asset = content;
					this.onComplete(this.asset);
				});
			})
			.catch(function(error) {
				console.log('request failed', error)
			});
	}
}
