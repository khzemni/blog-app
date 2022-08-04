import { Injectable } from '@angular/core';
import { Blog } from '../_fakedata/blog';
import { BLOGS } from '../_fakedata/mock-blogs';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogSericeService {
  constructor(private http: HttpClient) {}
  API_URL = `${environment.apiUrl}blogs/`;

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' }),
  };

  getBlogs(): Observable<any> {
    console.log(this.API_URL);
    return this.http.get(this.API_URL, this.httpOptions);
  }

  getBlogById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}${id}`, this.httpOptions);
  }

  addNewBlog(blog: any): Observable<any> {
    console.log('post request to add ' + JSON.stringify(blog));
    console.log(this.API_URL);
    // this.http.post(this.API_URL, null);
    return this.http.post<any>(
      this.API_URL,
      JSON.stringify(blog),
      this.httpOptions
    );
  }
}
