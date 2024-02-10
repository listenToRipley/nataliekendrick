export interface Quote {
  id: number;
  quote : string;
  author: string;
  source?:{
    type: string;
    title: string;
  },
  bio?: string; 
};