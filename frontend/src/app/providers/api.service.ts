import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	
	apiUrl = 'http://localhost:8010/category/v1/api/';
	
    constructor(private http: HttpClient,
				private snackBar: MatSnackBar) {
	}
	
	getAllCategories(){
		return new Promise(resolve => {
			let headers = new HttpHeaders();
			headers.append("Content-Type", "application/json");
			
		    this.http.get(this.apiUrl +'allCategories', {headers: headers}).subscribe(data => {
				resolve(data);
		    }, err => {
				this.snackBar.open('503: Service Unavailable Error', 'close');
		    });
		});
	}
	
	
	getCategoryDetails(name){
		return new Promise(resolve => {
			this.http.get(this.apiUrl +'getCategoryDetails/'+ name).subscribe(data => {
				resolve(data);
			}, err => {
				this.snackBar.open('503: Service Unavailable Error', 'close');
			});
		});
	}
	
}
