import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  
  reactiveForm : FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null,Validators.required),
      lastname: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null,Validators.required)
    });
  }

  onSubmit(){
    console.log(this.reactiveForm);
    alert("Your Data Has been Stored...!!!");
  }

}
