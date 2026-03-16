export default function ApplyShopPage() {
  return (
    <main className="container-page py-12">
      <h1 className="text-3xl font-bold">Aderisci come negozio</h1>
      <p className="mt-2 text-sm text-slate-600">Onboarding rapido per il pilot Crema Centro Pass.</p>
      <form className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-2">
        <input className="rounded-xl border border-slate-300 p-2" placeholder="Nome attività" />
        <input className="rounded-xl border border-slate-300 p-2" placeholder="Email" />
        <input className="rounded-xl border border-slate-300 p-2" placeholder="Via" />
        <input className="rounded-xl border border-slate-300 p-2" placeholder="Categoria" />
        <textarea className="md:col-span-2 rounded-xl border border-slate-300 p-2" placeholder="Descrizione breve" />
        <button className="md:col-span-2 rounded-xl bg-crema-500 px-4 py-2 text-white">Invia candidatura</button>
      </form>
    </main>
  );
}
