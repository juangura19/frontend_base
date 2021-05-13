import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form = new FormGroup({
    'usuario': new FormControl('', [
      Validators.required
    ]),
    'contrasena': new FormControl('', [
      Validators.required
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
