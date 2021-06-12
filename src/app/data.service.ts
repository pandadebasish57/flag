import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  API_URL = "https://restcountries.eu/rest/v2";
  result: any;

  constructor(private http: HttpClient) {}

  // function to get info for all countries
  getCountries() {
    return this.http
      .get(`${this.API_URL}/all`)
      .pipe(map((result) => (this.result = result)));
  }
}