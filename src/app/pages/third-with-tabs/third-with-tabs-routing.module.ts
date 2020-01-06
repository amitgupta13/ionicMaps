import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ThirdWithTabsPage } from "./third-with-tabs.page";

const routes: Routes = [
  {
    path: "",
    component: ThirdWithTabsPage,
    // redirectTo: "tab1",
    // pathMatch: "full",
    children: [
      {
        path: "",
        redirectTo: "tab1",
        pathMatch: "full"
      },
      {
        path: "tab1",
        loadChildren: () =>
          import("../tab1/tab1.module").then(m => m.Tab1PageModule)
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab2/tab2.module").then(m => m.Tab2PageModule)
      }
    ]
  }
  // {
  //   path: "",
  //   redirectTo: "third/tab1",
  //   pathMatch: "full"
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdWithTabsPageRoutingModule {}
