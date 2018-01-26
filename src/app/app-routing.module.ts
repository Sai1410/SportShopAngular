import { AdminPanelAuthenticateComponent } from './Components/administration-panel/admin-panel-authenticate/admin-panel-authenticate.component';
import { AdminProductsViewComponent } from './Components/administration-panel/admin-products-view/admin-products-view.component';
import { AdminUsersViewComponent } from './Components/administration-panel/admin-users-view/admin-users-view.component';
import { AdministrationPanelComponent } from './Components/administration-panel/administration-panel.component';
import { BagComponent } from './Components/bag/bag.component';
import { EndingMessageComponent } from './Components/ending-message/ending-message.component';
import { FinalizeOrderComponent } from './Components/finalize-order/finalize-order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterPanelComponent } from './Components/register-panel/register-panel.component';
import { UserPanelViewComponent } from './Components/user-panel/user-panel-view/user-panel-view.component';
import { UserPanelComponent } from './Components/user-panel/user-panel.component';
import { EnsureAuthenticatedAdminService } from './services/ensure-authenticated-admin.service';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';

const routes: Routes = [
  { path: '', redirectTo: '/Products', pathMatch: 'full' },
  { path: 'Products', component: ProductsComponent },
  { path: 'Bag', component: BagComponent },
  { path: 'AddressForm', component: FinalizeOrderComponent },
  { path: 'EndingMessage', component: EndingMessageComponent },
  { path: 'AdministrationPanel', component: AdministrationPanelComponent, canActivate: [EnsureAuthenticatedAdminService] },
  { path: 'AdminPanelAuthenticate', component: AdminPanelAuthenticateComponent  },
  { path: 'AdministrationPanel/Products', component: AdminProductsViewComponent, canActivate: [EnsureAuthenticatedAdminService]  },
  { path: 'AdministrationPanel/Users', component: AdminUsersViewComponent, canActivate: [EnsureAuthenticatedAdminService] },
  { path: 'UserPanel', component: UserPanelComponent },
  { path: 'RegisterPanel', component: RegisterPanelComponent },
  { path: 'UserPanelView', component: UserPanelViewComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
