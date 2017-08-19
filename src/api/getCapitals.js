import 'whatwg-fetch';
import getApiUrl from './getApiUrl';

const apiUrl = getApiUrl();

export function getCapitals(){
    return get('Countries');
}

function get(url){
    return fetch(apiUrl + url).then(onSuccess, onError);
}

function onSuccess(response){
    return response.json();
}

function onError(error){
    console.log(error);
}