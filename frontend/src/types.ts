export type User = {
  id: number;
  name: number;
  avatar_url: string;
  position: string;
  service_ids: number[];
};

export type Service = {
  id: number;
  name: string;
  logo_url: string;
  website_url: string;
  price: {
    cost_per_user: 5;
    flat_cost: 5;
    nb_users_included: 5;
  };
};
