import { Component, OnInit } from '@angular/core';
import { Blog } from './_fakedata/blog';
import { BLOGS } from './_fakedata/mock-blogs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // blogs: Blog[] | undefined;
  constructor() {}
  ngOnInit(): void {}
}
