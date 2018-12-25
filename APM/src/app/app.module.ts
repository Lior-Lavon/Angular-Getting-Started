import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, // single time import only at app module
    HttpClientModule,
    // define routing
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent}, // welcome
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}, // default route
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'} // wild card not found route, 404 not found
    ]),
    ProductModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
