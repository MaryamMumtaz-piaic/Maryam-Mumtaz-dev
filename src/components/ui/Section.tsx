import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
    return (
        <section id={id} className={cn("py-12 md:py-20 relative scroll-mt-16", className)}>
            {/* Background gradient blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/10 blur-[80px] rounded-full -z-10" />
            <div className="container mx-auto px-5">
                {children}
            </div>
        </section>
    );
}
