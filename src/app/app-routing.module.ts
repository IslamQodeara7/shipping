import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { ChatComponent } from './chat/chat.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FollowUpOnOrdersComponent } from './follow-up-on-orders/follow-up-on-orders.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'order',component:OrderComponent},
  {path:'follow-up-on-orders',component:FollowUpOnOrdersComponent},
  {path:'order-details',component:OrderDetailsComponent},
  {path:'chat',component:ChatComponent},
  {path:'chat-details',component:ChatDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
