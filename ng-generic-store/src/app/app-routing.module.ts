import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
  import { LoginFormComponent } from "./login-form/login-form.component";
  import { RegisterFormComponent } from "./register-form/register-form.component";

import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductsComponent } from "./products/products.component";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  
  { path: "account", component: AccountComponent, 
    children: [
      { path: "", redirectTo: "login", pathMatch: "full"} ,
      { path: "login", component: LoginFormComponent} ,
      { path: "register", component: RegisterFormComponent} ,
    ] 
  },

  { path: "products", component: ProductsComponent },
  { path: "products/:pid", component: ProductDetailsComponent },
  
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [appRouter]
})
export class AppRoutingModule {}