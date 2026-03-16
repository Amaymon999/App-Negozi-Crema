import { DashboardShell } from '@/components/dashboards/shell';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: '/admin', label: 'Overview' },
    { href: '/admin/shops', label: 'Negozi' },
    { href: '/admin/users', label: 'Utenti' },
    { href: '/admin/events', label: 'Eventi' },
    { href: '/admin/campaigns', label: 'Campagne' },
    { href: '/admin/missions', label: 'Missioni' },
    { href: '/admin/rewards', label: 'Reward' },
    { href: '/admin/applications', label: 'Application' },
    { href: '/admin/reports', label: 'Report' }
  ];
  return <DashboardShell title="Dashboard Comune / Admin" links={links}>{children}</DashboardShell>;
}
