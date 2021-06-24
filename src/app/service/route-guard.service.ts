import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

	constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
      private route: Router) { }

  	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
      if(this.hardcodedAuthenticationService.isUserLoggedIn()) {
         return true;
      }
      else {
         this.route.navigate(['login']);
         return false;
      }
	}

}
