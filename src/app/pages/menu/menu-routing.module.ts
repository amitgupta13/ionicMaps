import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "menu",
    component: MenuPage,
    children: [
      {
        path: "first",
        loadChildren: () =>
          import("../first/first.module").then(m => m.FirstPageModule)
      },
      {
        path: "second",
        loadChildren: () =>
          import("../second/second.module").then(m => m.SecondPageModule)
      }
    ]
  },
  {
    path: "",
    redirectTo: "/menu/first"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPageRoutingModule {}
