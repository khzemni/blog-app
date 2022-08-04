import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
})
export class NewBlogComponent implements OnInit {
  newBlogForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private blogsService: BlogsService
  ) {
    this.newBlogForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.newBlogForm.valid) {
      let blog = {
        id: 55555,
        title: this.newBlogForm.value.title,
        author: this.newBlogForm.value.author,
        content: this.newBlogForm.value.content,
        upvotes: 0,
        downvotes: 0,
      };

      this.blogsService.addNewBlog(blog);
      this.router.navigate(['/blogs']);
    } else {
      alert('all fields are required');
    }
  }
}
