import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BlogSericeService } from '../_services/blog-serice.service';

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
    private blogsService: BlogSericeService
  ) {
    this.newBlogForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    let blog;
    if (this.newBlogForm.valid) {
      let blog = {
        id: 55555,
        title: this.newBlogForm.value.title,
        author: this.newBlogForm.value.author,
        content: this.newBlogForm.value.content,
        upvotes: 0,
        downvotes: 0,
      };

      console.log('submitted : ' + JSON.stringify(blog));

      this.blogsService.addNewBlog(blog).subscribe({
        next: (value) => {
          console.log(value);
          alert('new blog added successfully');
          this.router.navigate(['blogs']);
        },
        error: (err) => console.error(err),
        complete: () => console.log('done'),
      });
    } else {
      alert('all fields are required');
    }
  }
}
