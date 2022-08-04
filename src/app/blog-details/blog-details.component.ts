import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../_fakedata/blog';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogsService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const blogId = Number(routeParams.get('blogId'));
    this.getBlog(blogId);
    // this.product = products.find(
    //   (product) => product.id === productIdFromRoute
    // );
  }

  getBlog(id: number): void {
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
