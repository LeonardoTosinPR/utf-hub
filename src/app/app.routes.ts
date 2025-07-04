import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CursoComponent } from './pages/curso/curso.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', redirectTo: '', pathMatch: 'full' },
  { path: 'curso', component: CursoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'materias', component: MateriasComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: ProfileComponent },
];
