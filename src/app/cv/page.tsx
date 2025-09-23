"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ExperienceItem = {
    year: string;
    title: string;
    company?: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    project?: { categoryId: string; projectId: string };
};

const experiences: ExperienceItem[] = [
    {
        year: "2024 — Present",
        title: "Web Developer (Freelance)",
        company: "Self-Employed",
        description:
            "Providing web development services to clients, focusing on creating responsive and modern web applications.",
    },
    {
        year: "2023 — Present",
        title: "Game Developer",
        company: "KatrGames",
        description:
            "Developing engaging games with a focus on gameplay mechanics and user experience.",
        imageSrc: "/images/tinychaos.png",
        imageAlt: "KatrGames Thumbnail",
        project: { categoryId: "game-dev", projectId: "tiny-chaos" },
    },
    {
        year: "2022 — 2024",
        title: "Freelance Product Designer & 3D Specialist",
        company: "Self-Employed",
        description:
            "Specializing in video production, 3D design, and product visualization for various clients.",
        imageSrc: "/images/3d_rendering.jpg",
        imageAlt: "3D Rendering",
        project: { categoryId: "other-projects", projectId: "visual-design" },
    },
    {
        year: "2020 — 2022",
        title: "Web Designer & Developer",
        company: "Tokka.id",
        description:
            "Contributed as a web designer, graphic designer, and video editor. Responsibilities included product design, visual content creation, and development support for the Tokka web platform and campaigns.",
        imageSrc: "/images/tokka_cs.png",
        imageAlt: "Tokka.id Platform",
        project: { categoryId: "web-dev", projectId: "tokka" },
    },
    {
        year: "2019 — 2020",
        title: "Marketing & Designer",
        company: "Cocrea",
        description:
            "Created marketing materials and visual designs, focusing on brand consistency and visual communication.",
        imageSrc: "/images/cocrea_editing_602.jpg",
        imageAlt: "Cocrea Web Development",
        project: { categoryId: "social-media", projectId: "cocrea" },
    },
];

export default function CvPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24 font-sans">
            {/* Hero */}
            <section className="pt-16 sm:pt-20 md:pt-24">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10">
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 shrink-0 rounded-full overflow-hidden ring-2 ring-[var(--color-secondary)]/40">
                        <Image
                            src="/images/portrait.png"
                            alt="Jose Katriel portrait"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 128px, 144px"
                            priority
                        />
                    </div>
                    <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)] leading-tight font-manrope">
                                    Jose Katriel
                                </h1>
                                <p className="mt-1 text-base sm:text-lg text-[var(--color-text)]/80 font-open-sans">
                                    Game Developer • Fullstack Web Developer
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-secondary)]/40 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/10 transition-colors font-manrope"
                                >
                                    <ArrowLeft size={16} /> Back to Home
                                </Link>
                                <a
                                    href="/cv/jose-cv.pdf"
                                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-tertiary)] px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity font-manrope"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="mt-10 md:mt-14">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] font-manrope">About</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-[var(--color-text)]/85 font-open-sans">
                    I craft playful interactive experiences and clean, modern interfaces. My work spans game design and development, web UI, and
                    visual content production. I enjoy building from concept to polished result, focusing on feel, clarity, and memorable details.
                </p>
            </section>

            {/* Work Experience */}
            <section className="mt-12 md:mt-16">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] font-manrope">Work Experience</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-16 gap-y-12">
                    {experiences.map((exp, idx) => {
                        const content = (
                            <div className="flex flex-col sm:flex-row gap-8">
                                {exp.imageSrc && (
                                    <div className="relative h-28 w-full sm:w-40 shrink-0 overflow-hidden rounded-lg">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={exp.imageSrc}
                                            alt={exp.imageAlt || exp.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="min-w-0">
                                    <h3 className="text-lg font-semibold text-[var(--color-primary)] font-manrope">
                                        {exp.title}
                                        {exp.company && (
                                            <span className="text-[var(--color-text)]/70 font-normal font-open-sans"> · {exp.company}</span>
                                        )}
                                    </h3>
                                    <p className="mt-2 text-[var(--color-text)]/85 leading-relaxed font-open-sans">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                        );

                        const card = exp.project ? (
                            <Link
                                href={`/project/${exp.project.categoryId}/${exp.project.projectId}`}
                                className="block no-underline group"
                            >
                                {content}
                            </Link>
                        ) : (
                            <div className="group">
                                {content}
                            </div>
                        );

                        return (
                            <div key={`${exp.year}-${idx}`} className="contents ">
                                {/* Year (left on md+, top on mobile) */}
                                <div className="text-sm sm:text-base font-semibold text-[var(--color-text)]/70 md:pt-1 font-manrope">
                                    {exp.year}
                                </div>
                                {/* Card (right) */}
                                {card}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Skills & Tech Stack */}
            <section className="mt-12 md:mt-16">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] font-manrope mb-6">Skills & Tech Stack</h2>

                <div className="space-y-8">
                    {/* Game Development */}
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3 font-manrope">Game Development</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {['C#', 'Unity', 'Game Design', '3D Modeling', 'Blender 3D', 'Game Mechanics'].map((skill, index) => (
                                <div
                                    key={`game-${index}`}
                                    className="bg-[var(--color-tertiary)]/70 border border-[var(--color-secondary)]/40 rounded-lg px-4 py-2 text-center text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-secondary)]/10 transition-colors"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Web Development */}
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3 font-manrope">Web Development</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'HTML5', 'Tailwind CSS', 'Responsive Design'].map((skill, index) => (
                                <div
                                    key={`web-${index}`}
                                    className="bg-[var(--color-tertiary)]/70 border border-[var(--color-secondary)]/40 rounded-lg px-4 py-2 text-center text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-secondary)]/10 transition-colors"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Design */}
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3 font-manrope">Design</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {['UI/UX Design', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Motion Graphics', 'Product Design'].map((skill, index) => (
                                <div
                                    key={`design-${index}`}
                                    className="bg-[var(--color-tertiary)]/70 border border-[var(--color-secondary)]/40 rounded-lg px-4 py-2 text-center text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-secondary)]/10 transition-colors"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other */}
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3 font-manrope">Other</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {['Git', 'Adobe Premiere Pro', 'Video Editing', '3D Animation'].map((skill, index) => (
                                <div
                                    key={`other-${index}`}
                                    className="bg-[var(--color-tertiary)]/70 border border-[var(--color-secondary)]/40 rounded-lg px-4 py-2 text-center text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-secondary)]/10 transition-colors"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education */}
        </main>
    );
}
