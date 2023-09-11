import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageViewComponent } from './image-view/image-view.component';

const routes: Routes = [
  {path: 'image/:id', component: ImageViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
