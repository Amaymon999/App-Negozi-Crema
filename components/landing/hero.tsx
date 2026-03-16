import { ButtonLink } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="container-page py-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-crema-700">Crema Centro Pass</p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">Il pass digitale del centro di Crema per collegare negozi, eventi e premi.</h1>
      <p className="mt-5 max-w-2xl text-slate-600">Muovi persone tra Piazza Duomo, Via XX Settembre e Via Giuseppe Mazzini con missioni, check-in e reward condivisi tra cittadini, negozi e Comune.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/app">Esplora il centro</ButtonLink>
        <ButtonLink href="/auth/sign-in" variant="outline">Registrati</ButtonLink>
        <ButtonLink href="/apply-shop" variant="outline">Sei un negozio? Aderisci</ButtonLink>
        <ButtonLink href="/app/events" variant="outline">Scopri le iniziative</ButtonLink>
      </div>
    </section>
  );
}
