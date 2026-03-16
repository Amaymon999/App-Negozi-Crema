export const dynamic = 'force-dynamic';

import { Hero } from '@/components/landing/hero';
import { Badge } from '@/components/ui/badge';
import { shops, missions, rewards, events } from '@/lib/demo-data';
import { MapPreview } from '@/components/map-preview';

export default function LandingPage() {
  return (
    <main className="pb-16">
      <Hero />
      <section className="container-page grid gap-4 md:grid-cols-3">
        <div className="card"><h3 className="font-semibold">Per cittadini</h3><p className="mt-2 text-sm text-slate-600">Missioni, check-in e premi nel centro storico.</p></div>
        <div className="card"><h3 className="font-semibold">Per negozi</h3><p className="mt-2 text-sm text-slate-600">Promo semplici, dashboard mobile e QR univoco.</p></div>
        <div className="card"><h3 className="font-semibold">Per Comune/DUC</h3><p className="mt-2 text-sm text-slate-600">Controllo campagne, analytics e report export.</p></div>
      </section>

      <section className="container-page mt-10 grid gap-6 md:grid-cols-2">
        <div className="card"><h3 className="font-semibold">Come funziona in 3 step</h3><ol className="mt-3 space-y-2 text-sm text-slate-600"><li>1) Registrati e attiva il pass.</li><li>2) Visita i negozi e completa missioni.</li><li>3) Sblocca reward e riscattali in città.</li></ol></div>
        <MapPreview />
      </section>

      <section className="container-page mt-10">
        <h2 className="text-2xl font-bold">Negozi in evidenza</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">{shops.slice(0, 6).map((shop) => <div key={shop.id} className="card"><Badge>{shop.category}</Badge><p className="mt-2 font-semibold">{shop.name}</p><p className="text-sm text-slate-600">{shop.street}</p></div>)}</div>
      </section>

      <section className="container-page mt-10 grid gap-4 md:grid-cols-3">
        <div className="card"><h3 className="font-semibold">Missioni attive</h3>{missions.map((m) => <p key={m.id} className="mt-2 text-sm text-slate-600">• {m.title}</p>)}</div>
        <div className="card"><h3 className="font-semibold">Eventi</h3>{events.map((e) => <p key={e.id} className="mt-2 text-sm text-slate-600">• {e.title}</p>)}</div>
        <div className="card"><h3 className="font-semibold">Reward</h3>{rewards.map((r) => <p key={r.id} className="mt-2 text-sm text-slate-600">• {r.title}</p>)}</div>
      </section>

      <section className="container-page mt-10 card">
        <h3 className="font-semibold">FAQ</h3>
        <p className="mt-2 text-sm text-slate-600">D: Posso usare il pass senza app? R: Sì, è web app mobile-first.</p>
      </section>
      <footer className="container-page mt-10 text-sm text-slate-500">© 2026 Crema Centro Pass · Piazza Duomo, Crema</footer>
    </main>
  );
}
