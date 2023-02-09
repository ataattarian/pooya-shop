export interface ProductProps {
  id: number;
  name: string;
  price: string;
  description: string;
  dimensions: string;
  size: string;
  image: string;
  category: {
    id: number;
    name: string;
  };
}

export interface CategoryProps {
  id: number;
  name: string;
  image: string;
}

export interface LoginProps {
  username: string;
  password: string;
}

export interface RegisterProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface CartProps extends ProductProps {
  qty: number;
}
