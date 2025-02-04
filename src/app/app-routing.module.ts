import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionComponent } from './features/under-construction/under-construction.component';

const routes: Routes = [
  { 
    path: '', 
    component: UnderConstructionComponent 
  },
  // Gelecekte eklenecek rotalar için hazırlık
  { 
    path: 'blog', 
    loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule) 
  },
  { 
    path: 'portfolio', 
    loadChildren: () => import('./features/portfolio/portfolio.module').then(m => m.PortfolioModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 