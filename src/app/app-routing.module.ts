import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PanelComponent } from './components/panel/panel.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: "", component: PanelComponent, canActivate: [AuthGuard] },
  { path: "users", component: PanelComponent, canActivate: [AuthGuard] },
  { path: "account", component: PanelComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
