import { rewards } from '@/lib/demo-data';

export default function RewardsPage(){return <div className="grid gap-3">{rewards.map((r)=><div key={r.id} className="card"><p className="font-semibold">{r.title}</p><p className="text-sm text-slate-600">{r.benefit}</p><p className="mt-2 text-sm">Costo: {r.pointsCost} punti</p></div>)}</div>}
