export interface propertyListItem {
    id: number,
    square: number,
    amountBed: number,
    title: string, 
    price: number,
    mainImage: string, 
    location: string,
    views: number,
    images: string[],
    description: string,
    facillity: { [key: string]: boolean }
}

export interface PropertyCardItem {
    id: number,
    square: number,
    amountBed: number,
    title: string, 
    price: number,
    mainImage: string,  
    location: string,
  }
  
export interface PropertyCardProps {
    data: PropertyCardItem
    opt?: string,
  }

export interface User {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    name: string | null;
  }
  
export interface AuthResponse {
    jwt: string;
    user: User;
  }
export interface UserState {
  user: User | null;
  isLogin: boolean;
  token: string | null,
  error: null | QueryError
  setUser: (user: User) => void;
  logout: () => void;
  setToken: (token: string | null) => void;
  setError: (error: null | QueryError) => void;
}

export interface LoginForm {
  identifier: string;
  password: string;
  name?: string;
  username?: string;
}

export interface RegisterForm {
  name: string;
  username: string;
  email: string;
  password: string;
}
export interface QueryError {
  status?: number
  message?: string;
  code?: string
}