import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LoginformComponent} from './loginform/loginform.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {AuthGuard} from './auth.guard';

export const ROUTES:Routes = [
	{path:"",component:HomeComponent},
	{path:"about",component:AboutComponent},
	{path:"home",component:HomeComponent},
	{path:"login",component:LoginformComponent},
	{path:"configuration",component:ConfigurationComponent]}
];
