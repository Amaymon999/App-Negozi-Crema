import { Mission, Reward, Shop } from './types';

export const streets = ['Piazza Duomo', 'Via XX Settembre', 'Via Giuseppe Mazzini'];

export const shops: Shop[] = [
  { id: 's1', name: 'Boutique Duomo', category: 'Fashion', street: 'Via XX Settembre', description: 'Moda contemporanea made in Italy.', lat: 45.3606, lng: 9.6862, promo: '-10% nuova collezione' },
  { id: 's2', name: 'Libreria Mazzini', category: 'Cultura', street: 'Via Giuseppe Mazzini', description: 'Libri, eventi e firmacopie.', lat: 45.3611, lng: 9.6871, promo: 'Segnalibro gratuito con check-in' },
  { id: 's3', name: 'Gusto Crema', category: 'Food', street: 'Piazza Duomo', description: 'Specialità locali e degustazioni.', lat: 45.3614, lng: 9.6857, promo: 'Assaggio omaggio weekend' },
  { id: 's4', name: 'Casa & Design', category: 'Casa', street: 'Via XX Settembre', description: 'Decorazioni e artigianato urbano.', lat: 45.3602, lng: 9.6868, promo: '5 punti extra il venerdì' },
  { id: 's5', name: 'Ottica Centro', category: 'Servizi', street: 'Via Giuseppe Mazzini', description: 'Ottica e consulenza visiva.', lat: 45.3612, lng: 9.6875, promo: 'Screening gratuito in evento salute' },
  { id: 's6', name: 'Sport City Crema', category: 'Sport', street: 'Via XX Settembre', description: 'Abbigliamento tecnico e sneakers.', lat: 45.3604, lng: 9.6864, promo: 'Doppio timbro missione weekend' },
  { id: 's7', name: 'Profumeria Iris', category: 'Beauty', street: 'Piazza Duomo', description: 'Fragranze e skincare premium.', lat: 45.3613, lng: 9.6854, promo: 'Mini-size omaggio sopra 30€' },
  { id: 's8', name: 'Bottega Verde Blu', category: 'Regali', street: 'Via Giuseppe Mazzini', description: 'Oggettistica e idee regalo.', lat: 45.361, lng: 9.6873, promo: 'Coupon 5€ su seconda visita' }
];

export const missions: Mission[] = [
  { id: 'm1', title: 'Fashion Crawl', description: 'Visita 3 negozi fashion', points: 120, target: 3, progress: 1 },
  { id: 'm2', title: 'Circuito Centro Storico', description: 'Completa il percorso tra le vie principali', points: 200, target: 5, progress: 2 },
  { id: 'm3', title: 'Weekend Multi-Categoria', description: 'Acquista in 3 categorie diverse', points: 160, target: 3, progress: 0 }
];

export const rewards: Reward[] = [
  { id: 'r1', title: 'Coupon Centro 10€', pointsCost: 250, benefit: 'Sconto cumulabile nei negozi aderenti', unlocked: false },
  { id: 'r2', title: 'Pass Evento Speciale', pointsCost: 400, benefit: 'Ingresso prioritario evento cittadino', unlocked: false }
];

export const events = [
  { id: 'e1', title: 'Notte Bianca in Centro', date: '2026-06-12', street: 'Piazza Duomo' },
  { id: 'e2', title: 'Settimana del Commercio Locale', date: '2026-05-05', street: 'Via XX Settembre' },
  { id: 'e3', title: 'Percorso Sapori Cremaschi', date: '2026-04-21', street: 'Via Giuseppe Mazzini' }
];
