import { missions } from '@/lib/demo-data';

export default function MissionsPage(){return <div className="grid gap-3">{missions.map((m)=><div key={m.id} className="card"><p className="font-semibold">{m.title}</p><p className="text-sm text-slate-600">{m.description}</p><p className="mt-2 text-sm">Progress: {m.progress}/{m.target} · +{m.points} punti</p></div>)}</div>}
