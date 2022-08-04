import { Component, OnInit } from '@angular/core';
import { Blog } from '../_fakedata/blog';
import { BlogsService } from '../blogs.service';
import { BLOGS } from '../_fakedata/mock-blogs';
import { BlogsFilterPipe } from '../_pipes/blogs-filter.pipe';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit {
  blogs: Blog[] = [];
  searchText = '';
  constructor(private blogsService: BlogsService) {}
  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.blogsService.getBlogs().subscribe({
      next: (blogs) => (this.blogs = blogs),
      error: (err) => console.error(err),
      complete: () => console.log('done'),
    });
  }
}
