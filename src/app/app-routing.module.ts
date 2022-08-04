import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'blogs', component: BlogsListComponent },
  { path: 'blogs/:blogId', component: BlogDetailsComponent },
  { path: 'new-blog', component: NewBlogComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
