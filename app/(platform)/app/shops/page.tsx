import Link from 'next/link';
import { shops } from '@/lib/demo-data';

export default function ShopsPage() {
  return <div className="grid gap-3 md:grid-cols-2">{shops.map((shop)=><Link key={shop.id} href={`/app/shops/${shop.id}`} className="card block"><p className="font-semibold">{shop.name}</p><p className="text-sm text-slate-600">{shop.category} · {shop.street}</p><p className="mt-2 text-sm text-crema-700">{shop.promo}</p></Link>)}</div>;
}
