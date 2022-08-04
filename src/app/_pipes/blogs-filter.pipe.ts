import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../_fakedata/blog';

@Pipe({
  name: 'blogsFilter',
})
export class BlogsFilterPipe implements PipeTransform {
  transform(blogs: Blog[], searchTerm: string, field: string): Blog[] {
    if (!blogs) return [];
    if (!searchTerm) return blogs;

    const match = (title: string, src: string) => {
      return title.toLowerCase().includes(src.toLowerCase());
    };

    let filtredBlogs: Blog[] = [];
    blogs.forEach((blog) => {
      if (
        match(blog.title, searchTerm) ||
        match(blog.author, searchTerm) ||
        match(blog.content, searchTerm)
      )
        filtredBlogs.push(blog);
    });
    return filtredBlogs;
  }
}
