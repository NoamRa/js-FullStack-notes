import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryBasic } from '../models/countryBasic.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {
    constructor(private httpClient: HttpClient){}

    countryApi = "https://restcountries.eu/rest/v2/all"
    qParams = "fields=name;flag"

    getCountriesAndFlags():Observable<CountryBasic[]> {
        // console.log(`sent request to: ${this.countryApi}?${this.qParams}`);
        return this.httpClient.get<CountryBasic[]>(`${this.countryApi}?${this.qParams}`);
    }
}