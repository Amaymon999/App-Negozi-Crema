import { DashboardShell } from '@/components/dashboards/shell';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: '/shop', label: 'Overview' },
    { href: '/shop/promos', label: 'Promo' },
    { href: '/shop/checkins', label: 'Check-in' },
    { href: '/shop/stats', label: 'Statistiche' }
  ];
  return <DashboardShell title="Dashboard Negozio" links={links}>{children}</DashboardShell>;
}
