import Link from 'next/link';

export function DashboardShell({ title, links, children }: { title: string; links: { href: string; label: string }[]; children: React.ReactNode; }) {
  return (
    <main className="container-page py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link href="/" className="text-sm text-crema-700">Landing</Link>
      </div>
      <nav className="mb-6 flex flex-wrap gap-2">{links.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">{link.label}</Link>)}</nav>
      {children}
    </main>
  );
}
