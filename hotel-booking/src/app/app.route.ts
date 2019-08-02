import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'search-hotel',
        pathMatch: 'full'
      },
      {
        path: 'search-hotel',
        component: SearchHotelComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: 'checkout',
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
