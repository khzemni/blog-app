import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../_fakedata/blog';
import { BlogSericeService } from '../_services/blog-serice.service';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogSericeService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const blogId = String(routeParams.get('blogId'));
    this.getBlog(blogId);
  }

  getBlog(id: string): void {
    this.blogService.getBlogById(id).subscribe({
      next: (blog) => (this.blog = blog),
      error(err) {
        console.error(err);
      },
      complete() {
        console.log('done');
      },
    });
  }

  upvote(): void {
    if (this.blog) this.blog.upvotes += 1;
  }

  downvote(): void {
    if (this.blog) this.blog.downvotes += 1;
  }
}
