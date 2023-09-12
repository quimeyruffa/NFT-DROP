interface Image {
  asset: {
    url: string;
  };
}

export interface Author {
  _id: string;
  name: string;
  address: string;
  slug: {
    current: string;
  };
  image: Image;
  bio: string;
}

export interface Post {
  _id: string;
  title: string;
  address: string;
  description: string;
  nftCollectionName: string;
  mainImage:any;
  previewImage: Image;
  author: Author;
  slug: {
    current: string;
  };
}
