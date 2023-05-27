export interface IComment {
  id: string;
  author: string;
  userId: string;
  message: string;
  postId: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}
