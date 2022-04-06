import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryDetails } from '../../model/categorydetails.model';
import { Category } from '../../model/category.model';
import { ApiService } from '../../providers/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  categorydetails:any;
  title:''
  
  constructor(private api: ApiService, private route: ActivatedRoute,
				private router: Router){}

  ngOnInit(): void {
	let name = this.route.snapshot.params["name"];
	this.title = name;
	
	this.api.getCategoryDetails(this.title).then(res => {
		if(res != null){
			this.categorydetails = res;
		}
	});
  }
  
  back(){
	  this.router.navigate(["./"]);
  }
}
