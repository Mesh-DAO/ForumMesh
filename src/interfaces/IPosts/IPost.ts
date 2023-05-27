export interface IPost {
  id: string;
  title: string;
  creatorId: string;
  creatorName: string;
  message: string;
  type: string;
  image: string;
  createdAt: string;
  updatedAt?: string;
}
