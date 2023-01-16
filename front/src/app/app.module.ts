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
import { HomeAdmComponent } from './admin/components/home-adm/home-adm.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OptionsAdmComponent } from './admin/components/options-adm/options-adm.component';
import { CreateEventComponent } from './admin/components/create-event/create-event.component';
import { ListEventsComponent } from './admin/components/list-events/list-events.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideNgxMask } from 'ngx-mask';

import {MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsListComponent } from './user/components/events-list/events-list.component';
import { MinhasReservasComponent } from './user/components/minhas-reservas/minhas-reservas.component';

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
    HomeAdmComponent,
    OptionsAdmComponent,
    CreateEventComponent,
    ListEventsComponent,
    EventsListComponent,
    MinhasReservasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    material,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
