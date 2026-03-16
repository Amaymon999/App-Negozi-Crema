import { MapPreview } from '@/components/map-preview';
import { shops } from '@/lib/demo-data';

export default function MapPage() {
  return <div className="space-y-4"><MapPreview /><div className="card"><h2 className="font-semibold">Filtri rapidi</h2><p className="text-sm text-slate-600">Categorie, promo attive, eventi e percorso missioni.</p><p className="mt-2 text-sm text-slate-600">Marker disponibili: {shops.length}</p></div></div>;
}
