import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'acciones', loadChildren: './registros/acciones/acciones.module#AccionesPageModule' },
  { path: 'registros', loadChildren: './registros/registros/registros.module#RegistrosPageModule' },
  { path: 'home-registros', loadChildren: './registros/home-registros/home-registros.module#HomeRegistrosPageModule' },
  { path: 'eventos', loadChildren: './registros/eventos/eventos.module#EventosPageModule' },
  { path: 'reportes', loadChildren: './reportes/reportes.module#ReportesPageModule' },
  { path: 'consulta-eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'mostrar-datos', loadChildren: './mostrar-datos/mostrar-datos.module#MostrarDatosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
