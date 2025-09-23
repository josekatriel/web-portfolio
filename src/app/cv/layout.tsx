import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CV | Jose Katriel",
    description: "Curriculum Vitae of Jose Katriel: background, experiences, and selected work.",
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="min-h-screen bg-[var(--color-tertiary)] text-[var(--color-text)]">
            {children}
        </section>
    );
}
