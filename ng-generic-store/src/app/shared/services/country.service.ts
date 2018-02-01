import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CountryService {
    constructor(private httpClient:HttpClient){

    }

    getCountries():any{
        this.httpClient.get("https://restcountries.eu/rest/v2/all?fields=name;flag").subscribe(
            )
    }
}