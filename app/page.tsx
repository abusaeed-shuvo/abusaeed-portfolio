//app/page.tsx
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/Projects";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function Home() {
	return (
		<main className="bg-[#0d1117] text-white">
			<div className="max-w-6xl mx-auto px-6 space-y-16 py-10">
				<Hero />
				<FeaturedWork />
				<Services />
				<Process />
				<CTA />
			</div>
		</main>
	);
}
