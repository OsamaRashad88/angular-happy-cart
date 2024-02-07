import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
{path:'',redirectTo:'products',pathMatch:'full'},{ path:'productdetails/:id',component:ProductdetailsComponent},{ path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},{path:'products',component:ProductsComponent}


];
