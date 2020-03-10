import { ProfileTeacherPageModule } from './pages/profileTeacher/profileTeacher.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
	{
	  path: 'login',
	  loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
	},
	{
	  path: 'sign-up',
	  loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
	},
	{
	  path: 'tipo-usuario',
	  loadChildren: () => import('./pages/tipo-usuario/tipo-usuario.module').then( m => m.TipoUsuarioPageModule)
	},
  {
    path: 'logged-in',
    loadChildren: () => import('./pages/logged-out/logged-in.module').then( m => m.LoggedInPageModule)
  },
  {
    path: 'profileStudent',
    loadChildren: () => import('./pages/profileStudent/profileStudent.module').then( m => m.ProfileStudentPageModule)
  },
  {
    path: 'profileTeacher',
    loadChildren: () => import('./pages/profileTeacher/profileTeacher.module').then( m => m.ProfileTeacherPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'create-oferta',
    loadChildren: () => import('./pages/create-oferta/create-oferta.module').then( m => m.CreateOfertaPageModule)
  },
  {
    path: 'create-demanda',
    loadChildren: () => import('./pages/create-demanda/create-demanda.module').then( m => m.CreateDemandaPageModule)
  },
  {
    path: 'menu-demanda',
    loadChildren: () => import('./pages/menu-demanda/menu-demanda.module').then( m => m.MenuDemandaPageModule)
  },
  {
    path: 'mostrar-demandas',
    loadChildren: () => import('./pages/mostrar-demandas/mostrar-demandas.module').then( m => m.MostrarDemandasPageModule)
  },
  {
    path: 'mostrar-ofertas',
    loadChildren: () => import('./pages/mostrar-ofertas/mostrar-ofertas.module').then( m => m.MostrarOfertasPageModule)
  },
  {
    path: 'buscador-oferta',
    loadChildren: () => import('./pages/buscador-oferta/buscador-oferta.module').then( m => m.BuscadorOfertaPageModule)
  },
  {
    path: 'edit-profile-teacher',
    loadChildren: () => import('./pages/edit-profile-teacher/edit-profile-teacher.module').then( m => m.EditProfileTeacherPageModule)
  },
  {
    path: 'edit-profile-student',
    loadChildren: () => import('./pages/edit-profile-student/edit-profile-student.module').then( m => m.EditProfileStudentPageModule)
  },

  









  ];

  @NgModule({
	imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }
  