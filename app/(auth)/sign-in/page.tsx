import { ButtonLink } from '@/components/ui/button';

export default function SignInPage() {
  return (
    <main className="container-page py-12">
      <h1 className="text-3xl font-bold">Accesso demo</h1>
      <p className="mt-2 text-sm text-slate-600">Usa gli account seed Supabase o accesso rapido demo.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <a href="/api/demo-login?role=admin" className="card block"><p className="font-semibold">Admin</p><p className="text-sm text-slate-600">admin@cremacentro.it</p></a>
        <a href="/api/demo-login?role=shop" className="card block"><p className="font-semibold">Shop</p><p className="text-sm text-slate-600">negozio@cremacentro.it</p></a>
        <a href="/api/demo-login?role=user" className="card block"><p className="font-semibold">User</p><p className="text-sm text-slate-600">utente@cremacentro.it</p></a>
      </div>
      <div className="mt-6"><ButtonLink href="/">Torna alla landing</ButtonLink></div>
    </main>
  );
}
