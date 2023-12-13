import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServices } from '../shared/layouts/servises/services';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { Material } from '../shared/classes/material.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;
  aSub: Subscription;

  constructor(private auth: AuthServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.route.queryParams.subscribe((params:Params) => {
      //  this.router.navigate(['/login'], {
      //   queryParams: {
      //     registered: true
      //   }
      // }),
      console.log(params['registered']);

      if (params['registered']) {
        console.log(params);
        Material.mat('Created. Now you can login');
        // alert('Created. Now you can login');

      } else if (params['accessDenied']) {
        Material.mat('first log in to the system');
        // alert('first log in to the system ');

      }
    })
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }

  }

  public onSubmit() {

    this.form.disable()

    this.aSub = this.auth.register(this.form.value).subscribe(
      (data) => {
        this.auth.login(this.form.value).subscribe(()=>{
          this.router.navigate(['/main'], {
            queryParams: {
              registered: true
            }
          })
        })
      },
      error => {
        console.log(error.error.Message),
        alert(error.error.Message)
        Material.mat(error.error.Message)
        this.form.enable()
      }

    )
  }

}
