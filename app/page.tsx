import ProfileCard from "@/components/ProfileCard";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#0d1117] text-white p-6">
			<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
				{/* LEFT */}
				<div className="md:col-span-1 space-y-6">
					<ProfileCard />
					<TechStack />
				</div>

				{/* RIGHT */}
				<div className="md:col-span-2 space-y-6">
					<Experience />
					<Projects />
				</div>
			</div>
		</main>
	);
}
