import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthServices } from '../layouts/servises/services';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private auth: AuthServices, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.auth.isAuthenticated()) {
            // console.log(this.auth.isAuthenticated());
            
            return of(true)

        } else {
            // console.log(this.auth.isAuthenticated());

           return this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            })
            // return of(false)
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(route, state)
    }
}