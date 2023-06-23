import { Router } from "express";

import PostController from './post.controller';
import { createPostSchema, postIdSchema, 
  postTitleSchema, updatePostSchema } from "./post.schema";
import requestValidator from "../../validator/request.validator";

class PostRoute {
  public path = "/v1/post";
  public router = Router();
  public controller: PostController;

  constructor() {
    this.controller = new PostController();
    this.initRoute();
  }

  public initRoute(): void {
    this.router.post(
      this.path,
      requestValidator(createPostSchema),
      this.controller.createPost
    );
    this.router.get(
      this.path,
      requestValidator(postTitleSchema),
      this.controller.getPosts
    );
    this.router.get(
      `${this.path}/:id`,
      requestValidator(postIdSchema),
      this.controller.getPostById
    );
    this.router.put(
      `${this.path}/:id`,
      requestValidator(updatePostSchema),
      this.controller.updatePost
    );
    this.router.delete(
      `${this.path}/:id`,
      requestValidator(postIdSchema),
      this.controller.deletePost
    );
  }

}
export default PostRoute;