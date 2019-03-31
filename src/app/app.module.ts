import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.modules'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/* should have XX-routing.module.ts */

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './pages/pages.modules#PagesModule'
  },
];


@NgModule({
  imports: [BrowserModule, PagesModule,
    RouterModule.forRoot(appRoutes), 
    HttpClientModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
