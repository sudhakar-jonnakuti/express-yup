import { Request, Response } from "express";

class PostController {

  public createPost = (request: Request, response: Response) => {
    const postData = request.body;
    response.status(200).json({ statusCode: 200, payload: postData})
  }

  public getPosts = (request: Request, response: Response) => {
    const title = request.query.title;
    response.status(200).json({ statusCode: 200, payload: { title: title } })
  }

  public getPostById = (request: Request, response: Response) => {
    const id = request.params.id;
    response.status(200).json({ statusCode: 200, payload: {id : id}})
  }

  public updatePost = (request: Request, response: Response) => {
    const id = request.params.id;
    const postData = request.body;
    response.status(200).json({ statusCode: 200, payload: {id : id, postData: postData}});
  }

  public deletePost = (request: Request, response: Response) => {
    const id = request.params.id;
    response.status(200).json({ statusCode: 200, payload: {id : id}});
  }

}

export default PostController;