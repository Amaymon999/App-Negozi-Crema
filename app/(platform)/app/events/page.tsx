import { events } from '@/lib/demo-data';

export default function EventsPage(){return <div className="grid gap-3">{events.map((e)=><div key={e.id} className="card"><p className="font-semibold">{e.title}</p><p className="text-sm text-slate-600">{e.date} · {e.street}</p></div>)}</div>}
