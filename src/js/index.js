import '../css/index.css';
import {getCapitals} from '../api/getCapitals'


getCapitals().then(result => {
let countryBody ="";

result.forEach(country => {
    countryBody += `<tr>
        <td><a href="#" data-id="${country.id}" class="deleteUser">Click for Details</a></td>
        <td>${country.id}</td>
        <td>${country.country}</td>
        <td>${country.capital}</td>
        </tr>`
}, this);
    global.document.getElementById('tblcountry').innerHTML = countryBody;
}
);

console.log('I ran');
