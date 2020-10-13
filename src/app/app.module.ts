import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import {DatabaseService} from './database.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
