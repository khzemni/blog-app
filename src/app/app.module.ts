import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogsFilterPipe } from './_pipes/blogs-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BlogsService } from './blogs.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogsListComponent,
    BlogDetailsComponent,
    NewBlogComponent,
    BlogPreviewComponent,
    PageNotFoundComponent,
    BlogsFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
