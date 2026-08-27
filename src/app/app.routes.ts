import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { adminAuthGuard } from './guards/admin-auth.guard';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'admin/login', component: AdminLoginComponent },
	{ path: 'admin', component: AdminComponent, canActivate: [adminAuthGuard] },
	{ path: '**', redirectTo: '' }
];
