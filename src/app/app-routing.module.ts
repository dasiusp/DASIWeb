import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { SectorsPage } from './pages/sectors/sectors.page';

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'sectors', component: SectorsPage },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
