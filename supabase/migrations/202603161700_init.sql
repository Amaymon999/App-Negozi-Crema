create extension if not exists "uuid-ossp";

create type app_role as enum ('admin','shop','user');

create table if not exists profiles (
  id uuid primary key,
  email text unique not null,
  full_name text,
  role app_role not null default 'user',
  created_at timestamptz default now()
);

create table if not exists zones (id uuid primary key default uuid_generate_v4(), name text not null);
create table if not exists streets (id uuid primary key default uuid_generate_v4(), name text not null, zone_id uuid references zones(id));
create table if not exists shop_categories (id uuid primary key default uuid_generate_v4(), name text not null unique);

create table if not exists shops (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid references profiles(id),
  category_id uuid references shop_categories(id),
  street_id uuid references streets(id),
  name text not null,
  description text,
  address text,
  lat numeric,
  lng numeric,
  qr_code text unique,
  opening_hours jsonb,
  participation_status text default 'active',
  created_at timestamptz default now()
);

create table if not exists shop_images (id uuid primary key default uuid_generate_v4(), shop_id uuid references shops(id) on delete cascade, image_url text not null);
create table if not exists promos (id uuid primary key default uuid_generate_v4(), shop_id uuid references shops(id), title text not null, details text, starts_at date, ends_at date, active boolean default true);
create table if not exists campaigns (id uuid primary key default uuid_generate_v4(), title text not null, description text, starts_at date, ends_at date, status text default 'draft');
create table if not exists events (id uuid primary key default uuid_generate_v4(), campaign_id uuid references campaigns(id), street_id uuid references streets(id), title text not null, description text, starts_at timestamptz, ends_at timestamptz);

create table if not exists missions (id uuid primary key default uuid_generate_v4(), title text not null, description text, points int not null default 0, starts_at date, ends_at date, active boolean default true);
create table if not exists mission_steps (id uuid primary key default uuid_generate_v4(), mission_id uuid references missions(id) on delete cascade, shop_id uuid references shops(id), target_count int default 1, sort_order int default 1);
create table if not exists user_missions (id uuid primary key default uuid_generate_v4(), user_id uuid references profiles(id), mission_id uuid references missions(id), progress int default 0, completed boolean default false, updated_at timestamptz default now());

create table if not exists checkins (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id),
  shop_id uuid references shops(id),
  checkin_at timestamptz default now(),
  points_awarded int default 10,
  unique(user_id, shop_id, checkin_at)
);

create table if not exists points_wallet (user_id uuid primary key references profiles(id), points int not null default 0, updated_at timestamptz default now());
create table if not exists rewards (id uuid primary key default uuid_generate_v4(), title text not null, description text, points_cost int not null, stock int default 0, active boolean default true);
create table if not exists reward_redemptions (id uuid primary key default uuid_generate_v4(), reward_id uuid references rewards(id), user_id uuid references profiles(id), shop_id uuid references shops(id), status text default 'requested', redeemed_at timestamptz);

create table if not exists landing_content (id uuid primary key default uuid_generate_v4(), section text unique not null, content jsonb not null default '{}'::jsonb);
create table if not exists shop_applications (id uuid primary key default uuid_generate_v4(), business_name text not null, email text not null, street text, category text, description text, status text default 'pending', reviewed_by uuid references profiles(id), reviewed_at timestamptz, created_at timestamptz default now());
create table if not exists notifications (id uuid primary key default uuid_generate_v4(), user_id uuid references profiles(id), title text not null, body text not null, read boolean default false, created_at timestamptz default now());
create table if not exists admin_logs (id uuid primary key default uuid_generate_v4(), admin_id uuid references profiles(id), action text not null, meta jsonb default '{}'::jsonb, created_at timestamptz default now());

alter table profiles enable row level security;
alter table shops enable row level security;
alter table checkins enable row level security;

create policy "public read shops" on shops for select using (true);
create policy "owner manage shop" on shops for all using (auth.uid() = owner_id);
create policy "users read self" on profiles for select using (auth.uid() = id);
create policy "users checkin self" on checkins for insert with check (auth.uid() = user_id);
