import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../providers/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  categorydetails = null;
  title = ''
  
  constructor(private api: ApiService, private route: ActivatedRoute,
				private router: Router,
				private snackBar: MatSnackBar){}

  ngOnInit(): void {
	let name = this.route.snapshot.paramMap.get('name');
	this.title = name;
	
	this.api.getCategoryDetails(this.title)
		.subscribe(data => {
			this.categorydetails = data;
		},
		error => {
			this.snackBar.open(error.statusText, 'close');
		});
		
		
  }
  
  back(){
	  this.router.navigate(["./"]);
  }
}
