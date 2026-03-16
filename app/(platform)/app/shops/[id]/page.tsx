import { notFound } from 'next/navigation';
import { shops, missions } from '@/lib/demo-data';

export default function ShopDetail({ params }: { params: { id: string } }) {
  const shop = shops.find((s) => s.id === params.id);
  if (!shop) return notFound();
  return (
    <div className="space-y-4">
      <div className="card"><h1 className="text-2xl font-bold">{shop.name}</h1><p className="text-sm text-slate-600">{shop.category} · {shop.street}</p><p className="mt-3 text-slate-700">{shop.description}</p><p className="mt-3 text-sm text-crema-700">Promo: {shop.promo}</p></div>
      <div className="card"><h2 className="font-semibold">Missioni collegate</h2>{missions.map((m)=><p key={m.id} className="text-sm text-slate-600">• {m.title}</p>)}</div>
      <div className="card"><button className="rounded-xl bg-crema-500 px-4 py-2 text-sm font-medium text-white">Check-in in negozio</button></div>
    </div>
  );
}
