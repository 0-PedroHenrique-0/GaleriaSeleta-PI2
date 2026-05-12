import { Routes } from '@angular/router';
<<<<<<< HEAD
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '',        component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
=======
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '',         component: HomeComponent     },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login',    component: LoginComponent    },
  { path: '**',       redirectTo: ''               }
>>>>>>> affb5e0360b658844bfe9b6a46c23c9ade112186
];