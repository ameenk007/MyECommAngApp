import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { MenComponent } from './men/men.component';
import { WomanComponent } from './woman/woman.component';
import { nikeComponent } from './nike/nike.component';
import { ProductComponent } from './nike/product/product.component';
import { ProductsubComponent } from './nike/productsub/productsub.component';
import { CounterComponent } from './nike/counter/counter.component';
import { CounterchildComponent } from './nike/counter/counterchild/counterchild.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { userregistrationComponent } from './userregistration/userregistration.component';
import { ProductdetailComponent } from './nike/productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    NavComponent,
    MenComponent,
    WomanComponent,
    nikeComponent,
    ProductComponent,
    ProductsubComponent,
    CounterComponent,
    CounterchildComponent,
    userregistrationComponent,
    ProductdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
