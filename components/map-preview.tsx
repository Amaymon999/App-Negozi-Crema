import Image from 'next/image';
import { shops } from '@/lib/demo-data';

export function MapPreview() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token) {
    return (
      <div className="card">
        <p className="mb-2 font-semibold">Mappa centro storico</p>
        <p className="text-sm text-slate-600">Configura NEXT_PUBLIC_MAPBOX_TOKEN per attivare la mappa interattiva. Anteprima negozi: {shops.length}.</p>
      </div>
    );
  }

  const markers = shops.map((s) => `pin-s+3057d5(${s.lng},${s.lat})`).join(',');
  const src = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${markers}/9.6865,45.3609,16/900x420?access_token=${token}`;

  return (
    <div className="card overflow-hidden p-0">
      <Image src={src} alt="Mappa del centro di Crema" width={900} height={420} className="h-64 w-full object-cover" unoptimized />
    </div>
  );
}
