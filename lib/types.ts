export type Role = 'admin' | 'shop' | 'user';

export type Shop = {
  id: string;
  name: string;
  category: string;
  street: string;
  description: string;
  lat: number;
  lng: number;
  promo: string;
};

export type Mission = {
  id: string;
  title: string;
  description: string;
  points: number;
  target: number;
  progress?: number;
};

export type Reward = {
  id: string;
  title: string;
  pointsCost: number;
  benefit: string;
  unlocked?: boolean;
};
