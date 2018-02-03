import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CountryService {
    constructor(private httpClient: HttpClient){

    }

    countryApi = "https://restcountries.eu/rest/v2/all"
    fields = "fields=name;flag"
    getCountries(func: (x: Array<any>) => void):any{
        this.httpClient.get(`${this.countryApi}?${this.fields}`)
          .subscribe(func)
    }
}