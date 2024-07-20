import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../Services/apis.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {

  restData:any={}

  constructor(private ar:ActivatedRoute, private service:ApisService){}

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      console.log(data.id);

      this.service.getAllRecipes().subscribe((result:any)=>{
        // console.log(result.recipes.find((i:any)=>i.id==data.id));
        this.restData=result.recipes.find((i:any)=>i.id==data.id)
        console.log(this.restData);
        
      })

    })
  }

}
