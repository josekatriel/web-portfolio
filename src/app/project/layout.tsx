import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Details | José Katriel Portfolio',
  description: 'Detailed view of projects by José Katriel',
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {children}
    </div>
  );
}
