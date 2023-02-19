import { Component, OnInit } from '@angular/core';
import { AuthServices } from '../servises/services';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  constructor(private service: AuthServices) { }

  ngOnInit(): void {
  }


}
