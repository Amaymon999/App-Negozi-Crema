import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
};

export function Button({ className, variant = 'default', ...props }: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition',
        variant === 'default' && 'bg-crema-500 text-white hover:bg-crema-700',
        variant === 'outline' && 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({ href, children, className, variant = 'default' }: { href: string; children: React.ReactNode; className?: string; variant?: 'default' | 'outline'; }) {
  return (
    <Link href={href} className={cn('inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition', variant === 'default' ? 'bg-crema-500 text-white hover:bg-crema-700' : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50', className)}>
      {children}
    </Link>
  );
}
