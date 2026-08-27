import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mural dos Aliados | Encontre o que você precisa',
  description: 'Um mural digital de oportunidades, pedidos, serviços, produtos e conexões da comunidade.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

