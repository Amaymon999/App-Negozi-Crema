import { DashboardShell } from '@/components/dashboards/shell';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: '/app', label: 'Home' },
    { href: '/app/map', label: 'Mappa' },
    { href: '/app/shops', label: 'Negozi' },
    { href: '/app/events', label: 'Eventi' },
    { href: '/app/missions', label: 'Missioni' },
    { href: '/app/pass', label: 'Pass' },
    { href: '/app/rewards', label: 'Reward' },
    { href: '/app/profile', label: 'Profilo' }
  ];
  return <DashboardShell title="App Cittadino" links={links}>{children}</DashboardShell>;
}
