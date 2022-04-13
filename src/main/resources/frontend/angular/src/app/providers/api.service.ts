import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	
	apiUrl = 'http://localhost:8010/category/v1/api/';
	
    constructor(private http: HttpClient) {}
	
	getAllCategories(): Observable<any> {
		return this.http.get(this.apiUrl +'allCategories');
	}
	
	getCategoryDetails(name): Observable<any> {
		return this.http.get(this.apiUrl +'getCategoryDetails/'+ name);
	}
	
}
