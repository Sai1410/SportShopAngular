import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BagComponent } from './Components/bag/bag.component';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './Components/products/products.component';
import { BagService } from './services/bag.service';
import { HttpModule } from '@angular/http';
import { FinalizeOrderComponent } from './Components/finalize-order/finalize-order.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EndingMessageComponent } from './Components/ending-message/ending-message.component';
import { AdministrationPanelComponent } from './Components/administration-panel/administration-panel.component';
import { AdminPanelAuthenticateComponent } from './Components/administration-panel/admin-panel-authenticate/admin-panel-authenticate.component';
import { AdminProductsViewComponent } from './Components/administration-panel/admin-products-view/admin-products-view.component';
import { AdminUsersViewComponent } from './Components/administration-panel/admin-users-view/admin-users-view.component';
import { UserPanelComponent } from './Components/user-panel/user-panel.component';
import { RegisterPanelComponent } from './Components/register-panel/register-panel.component';
import { AdminPanelService } from './services/admin-panel.service';
import { AuthService } from './services/auth.service';
import { EnsureAuthenticatedAdminService } from './services/ensure-authenticated-admin.service';
import { RouterModule } from '@angular/router';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { UserPanelViewComponent } from './Components/user-panel/user-panel-view/user-panel-view.component';
import { RealizedFilterPipe } from './pipes/realized-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BagComponent,
    CategoryFilterPipe,
    PriceFilterPipe,
    ProductsComponent,
    NameFilterPipe,
    FinalizeOrderComponent,
    EndingMessageComponent,
    AdministrationPanelComponent,
    AdminPanelAuthenticateComponent,
    AdminProductsViewComponent,
    AdminUsersViewComponent,
    UserPanelComponent,
    RegisterPanelComponent,
    UserPanelViewComponent,
    RealizedFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ShowHidePasswordModule.forRoot()
  ],
  providers: [BagService, AuthService, EnsureAuthenticatedAdminService, AdminPanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
