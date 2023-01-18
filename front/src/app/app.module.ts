import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideNgxMask } from 'ngx-mask';

import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './core/interceptors/token.interceptor';


const material = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    material,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
