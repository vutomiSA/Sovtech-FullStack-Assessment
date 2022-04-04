import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryDetails } from '../model/categorydetails.model';
import { Category } from '../model/category.model';
import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  categories: any;
  title = "Categories"
  
  constructor(private api: ApiService, private route: ActivatedRoute,
				private router: Router){
					
  }

  ngOnInit(): void {
	this.api.getAllCategories().then(res => {
		if(res != null){
			this.categories = res;
		}
	});
  }
}
