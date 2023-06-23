import { object, string } from "yup";
import mongoose from 'mongoose';

export const postTitleSchema = object({
  query: object({
    title: string().nullable().optional()
      .matches(/^[a-zA-Z ]*$/, "Please enter a valid title")
  })
});

export const postIdSchema = object({
  params: object({
    id: string()
      .test(
        "The postId is required",
        "Please enter a valid ObjectId",
        value => value === undefined || mongoose.isValidObjectId(value)
      )
  })
});

export const createPostSchema = object({
  body: object({
    title:
      string().required('The title is required')
        .matches(/^[a-zA-Z ]*$/, 'Please enter a valid title, must be string'),
    author:
      string().required('The author is required')
        .matches(/^[a-zA-Z ]*$/, 'Please enter a valid author, must be string'),
    url:
      string().required('The url is required')
        .matches(/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)+$/, 'Please enter a valid url'),
    content: string().required('The content is required')
  })
});

export const updatePostSchema = object({
  params: object({
    id: string()
      .test(
        "The postId is required",
        "Please enter a valid ObjectId",
        value => value === undefined || mongoose.isValidObjectId(value)
      )
  }),
  body: object({
    title:
      string().nullable().optional()
        .matches(/^[a-zA-Z ]*$/, 'Please enter a valid title, must be string'),
    author:
      string().nullable().optional()
        .matches(/^[a-zA-Z ]*$/, 'Please enter a valid author, must be string'),
    url:
      string().nullable().optional()
        .matches(/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)+$/, 'Please enter a valid url, must be string'),
    content: string().nullable().optional()
  })
});
