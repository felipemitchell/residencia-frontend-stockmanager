import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {provideHttpClient,withInterceptors} from '@angular/common/http';
import {App,Login,Workspace,authInterceptor,authGuard,roleGuard} from './app/app';
bootstrapApplication(App,{providers:[provideHttpClient(withInterceptors([authInterceptor])),provideRouter([{path:'login',component:Login},{path:'',component:Workspace,canActivate:[authGuard],data:{section:'dashboard'}},...['products','categories','suppliers','stock-movements','reports','users'].map(section=>({path:section,component:Workspace,canActivate:section==='users'?[authGuard,roleGuard]:[authGuard],data:{section}})),{path:'**',redirectTo:''}])]});
