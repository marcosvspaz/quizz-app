import { ReactChild } from 'react';

const FullSizeAppLayout = ({ children, title = '10Q' }: FullSizeAppLayoutProps) => (
  <>
    <header className="fixed top-0 h-14 w-full hidden">
      <h1 className="font-black text-center center py-3">{title}</h1>
    </header>
    <main className="container mx-auto">{children}</main>
    <footer className="hidden">Made by @diegod3v</footer>
  </>
);

interface FullSizeAppLayoutProps {
  children: ReactChild[] | ReactChild;
  title?: string;
}

export default FullSizeAppLayout;
