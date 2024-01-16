import { PostService } from './../../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {
  searchId ='';
  list:Array<any>=[]

  constructor(private postService:PostService) {}
  loadData(){
    this.postService.find(this.searchId)
    .subscribe(response =>{
      console.log(response); 
      this.list=response;
      console.log(this.list);
    })
  }
}
 