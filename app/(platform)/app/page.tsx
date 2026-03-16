import { missions, rewards, shops } from '@/lib/demo-data';
import { MapPreview } from '@/components/map-preview';

export default function UserHome() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card"><h2 className="font-semibold">Cosa succede oggi</h2><p className="mt-2 text-sm text-slate-600">2 eventi attivi e 3 missioni consigliate.</p></div>
      <div className="card"><h2 className="font-semibold">Reward più vicino</h2><p className="mt-2 text-sm text-slate-600">{rewards[0].title} a {rewards[0].pointsCost} punti.</p></div>
      <div className="card"><h2 className="font-semibold">Negozi evidenziati</h2>{shops.slice(0, 3).map((s) => <p className="text-sm text-slate-600" key={s.id}>• {s.name}</p>)}</div>
      <div className="card"><h2 className="font-semibold">Missioni della settimana</h2>{missions.map((m) => <p key={m.id} className="text-sm text-slate-600">• {m.title}</p>)}</div>
      <div className="md:col-span-2"><MapPreview /></div>
    </div>
  );
}
