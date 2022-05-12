import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { nikeComponent } from './nike/nike.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomanComponent } from './woman/woman.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { userregistrationComponent } from './userregistration/userregistration.component';
import { ProductdetailComponent } from './nike/productdetail/productdetail.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'men',component:MenComponent },
  {path:'women',component:WomanComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path: 'login',component:LoginComponent},
  {path:'nike',component:nikeComponent},
  {path: 'userregistration',component:userregistrationComponent},
  {path:'productdetail', component:ProductdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
