export interface IComment {
  id: string;
  userId: string;
  message: string;
  postId: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}
