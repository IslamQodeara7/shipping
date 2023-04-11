import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { FollowUpOnOrdersComponent } from './follow-up-on-orders/follow-up-on-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailsComponent } from './chat-details/chat-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    OrderComponent,
    FollowUpOnOrdersComponent,
    OrderDetailsComponent,
    ChatComponent,
    ChatDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
