import { Injectable } from '@angular/core';
import { Blog } from './_fakedata/blog';
import { BLOGS } from './_fakedata/mock-blogs';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}
  API_URL = `${environment.apiUrl}/blogs`;

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  getBlogs(): Observable<Blog[]> {
    const blogs = of(BLOGS);
    return blogs;
  }

  getBlogById(id: number): Observable<Blog> {
    let blogs = BLOGS.filter((blog) => blog.id === id);
    return of(blogs[0]);
  }

  addNewBlog(blog: Blog): Observable<Blog> {
    BLOGS.push(blog);
    return of(blog);
  }
}
