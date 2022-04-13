import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  categories: any;
  title = "Categories"
  
  constructor(private api: ApiService,
				private snackBar: MatSnackBar){}

  ngOnInit(): void {
	this.api.getAllCategories()
		.subscribe(data => {
			this.categories = data;
		},
		error => {
			this.snackBar.open(error.statusText, 'close');
		});
  }
}
