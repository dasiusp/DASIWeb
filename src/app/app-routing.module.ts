import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CertificatesPage } from "./pages/certificates/certificates.page";
import { HomePage } from "./pages/home/home.page";
import { SectorsPage } from "./pages/sectors/sectors.page";

const routes: Routes = [
  { path: "home", component: HomePage },
  { path: "certificates", component: CertificatesPage },
  { path: "sectors", component: SectorsPage },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
