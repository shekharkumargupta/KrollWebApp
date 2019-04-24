import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from  '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UiModule } from './ui/ui.module';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'app', component: AppComponent},
  {path: '', redirectTo: '/app', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
