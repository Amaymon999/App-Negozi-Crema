-- Demo users should exist in auth.users, use matching UUIDs in profiles for local pilot.
insert into profiles (id,email,full_name,role) values
('11111111-1111-1111-1111-111111111111','admin@cremacentro.it','Admin Crema','admin'),
('22222222-2222-2222-2222-222222222222','negozio@cremacentro.it','Negozio Demo','shop'),
('33333333-3333-3333-3333-333333333333','utente@cremacentro.it','Utente Demo','user')
on conflict (id) do nothing;

insert into zones (id,name) values ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa','Centro Storico') on conflict do nothing;
insert into streets (id,name,zone_id) values
('a1a1a1a1-aaaa-aaaa-aaaa-aaaaaaaaaaaa','Piazza Duomo','aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
('a2a2a2a2-aaaa-aaaa-aaaa-aaaaaaaaaaaa','Via XX Settembre','aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'),
('a3a3a3a3-aaaa-aaaa-aaaa-aaaaaaaaaaaa','Via Giuseppe Mazzini','aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa')
on conflict do nothing;

insert into shop_categories (id,name) values
('c1c1c1c1-cccc-cccc-cccc-cccccccccccc','Fashion'),
('c2c2c2c2-cccc-cccc-cccc-cccccccccccc','Food'),
('c3c3c3c3-cccc-cccc-cccc-cccccccccccc','Cultura')
on conflict do nothing;

insert into shops (id,owner_id,category_id,street_id,name,description,address,lat,lng,qr_code,opening_hours) values
('s1111111-1111-1111-1111-111111111111','22222222-2222-2222-2222-222222222222','c1c1c1c1-cccc-cccc-cccc-cccccccccccc','a2a2a2a2-aaaa-aaaa-aaaa-aaaaaaaaaaaa','Boutique Duomo','Moda contemporanea','Via XX Settembre 12',45.3606,9.6862,'SHOP-S1-CREMA','{"mon":"09-19"}'::jsonb)
on conflict do nothing;

insert into campaigns (title,description,starts_at,ends_at,status) values ('Primavera in Centro','Campagna commerciale primavera','2026-04-01','2026-05-30','active') on conflict do nothing;
insert into events (title,description,street_id,starts_at,ends_at) values
('Notte Bianca in Centro','Musica e shopping','a1a1a1a1-aaaa-aaaa-aaaa-aaaaaaaaaaaa','2026-06-12 18:00+01','2026-06-12 23:30+01'),
('Percorso Sapori Cremaschi','Degustazioni diffuse','a3a3a3a3-aaaa-aaaa-aaaa-aaaaaaaaaaaa','2026-04-21 10:00+01','2026-04-21 19:00+01')
on conflict do nothing;

insert into missions (id,title,description,points,active) values
('m1111111-1111-1111-1111-111111111111','Visit 3 fashion shops','Completa 3 check-in fashion',120,true),
('m2222222-2222-2222-2222-222222222222','Route centro storico','Passa da tutte le vie centrali',200,true),
('m3333333-3333-3333-3333-333333333333','Weekend multi-categoria','Check-in in 3 categorie',160,true)
on conflict do nothing;

insert into mission_steps (mission_id,shop_id,target_count,sort_order) values
('m1111111-1111-1111-1111-111111111111','s1111111-1111-1111-1111-111111111111',1,1)
on conflict do nothing;

insert into rewards (title,description,points_cost,stock,active) values
('Coupon Centro 10€','Sconto diffuso nei negozi aderenti',250,300,true),
('Pass Evento Speciale','Accesso priorità evento cittadino',400,120,true)
on conflict do nothing;

insert into points_wallet (user_id,points) values ('33333333-3333-3333-3333-333333333333',180) on conflict do nothing;
