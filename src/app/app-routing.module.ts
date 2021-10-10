import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ConfiguratorComponent } from './order/configurator/configurator.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderHistoryComponent } from './order/order-history/order-history.component';
import { OrderSuccessComponent } from './order/order-success/order-success.component';
import { ErrorComponent } from './shared/error/error.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'log_in', component: LoginComponent },
  { path: 'order_history', component: OrderHistoryComponent, canActivate: [AuthGuard] },
  { path: 'order_details', component: OrderDetailsComponent, canActivate: [AuthGuard] },
  { path: 'order_success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'configurator', component: ConfiguratorComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
