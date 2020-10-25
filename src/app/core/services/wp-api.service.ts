import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class WpApiService {
	constructor(
		private _http: HttpClient,
	) { }

	home_page_content() {
		return this._http.get(`${environment.api}pages/9`);
	}
}
