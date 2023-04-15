import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test';
  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null, Validators.required),
    });

    //observable
    this.myObservable.subscribe((val) => {
      console.log(val);
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    alert('Your Data Has been Stored...!!!');
  }


  //observable
  myObservable = new Observable((observer) => {
    console.log('Observable starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    observer.next('5');
    setTimeout(() => {
      observer.next('A');
    }, 1000);
    setTimeout(() => {
      observer.next('B');
    }, 2000);
    setTimeout(() => {
      observer.next('C');
    }, 3000);
    setTimeout(() => {
      observer.next('D');
    }, 4000);
    setTimeout(() => {
      observer.next('E');
    }, 5000);
  });
}
