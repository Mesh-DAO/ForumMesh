export interface IPost {
  id: string;
  title: string;
  creatorId: string;
  creatorName: string;
  message: string;
  type: string;
  image: string;
  numberComments: number;
  numberVotes: number;
  createdAt: string;
  updatedAt?: string;
}
