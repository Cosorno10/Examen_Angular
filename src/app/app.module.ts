import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListadoComponent } from './components/listado/listado.component';
import { RouterModule, Routes } from '@angular/router';
import { MadridComponent } from './components/madrid/madrid.component';
import { ToledoComponent } from './components/toledo/toledo.component';

const appRoutes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'employee', component: ConsultaComponent },
  { path: 'madrid', component: MadridComponent },
  { path: 'toledo', component: ToledoComponent },
];

@NgModule({
  declarations: [AppComponent, ConsultaComponent, ListadoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
