import { PostService } from './../../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',  
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  constructor(private _snackBar: SnackBarService, private postService:PostService){
  }

  form= new FormGroup({
    id: new FormControl('',
    [Validators.required,
    Validators.maxLength(5)]),
    userId: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required)
  })


  createData(){
    this.postService.create(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value
    )
    .subscribe(response =>{
      if(response){
        this._snackBar.trigger('saved', 'close')
      }
    })
  }
}
