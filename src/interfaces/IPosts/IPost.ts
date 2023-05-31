export interface IPost {
  id: string;
  title: string;
  userId: string;
  creatorName: string;
  message: string;
  type: string;
  image: string;
  numberComments: number;
  numberVotes: number;
  createdAt: string;
  updatedAt?: string;
}
