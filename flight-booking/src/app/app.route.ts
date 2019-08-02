import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'search-flight',
        pathMatch: 'full'
      },
      {
        path: 'search-flight',
        component: SearchFlightComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'checkout-flight',
        component: CheckoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
