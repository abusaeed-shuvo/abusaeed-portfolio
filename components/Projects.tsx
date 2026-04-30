"use client";

import ProjectCard from "./ProjectCard";

type Project = {
	type: "client" | "demo";
	title: string;
	desc: string;
	tech: string[];
	link: string;
	isReturning?: boolean;
};

export default function FeaturedWork() {
	const projects: Project[] = [
		{
			type: "client",
			title: "Weflo • Business Website",
			desc: "Designed and developed a fully responsive business website focused on performance, clean UI, and user experience.",
			tech: ["PHP", "JavaScript", "HTML", "CSS"],
			link: "https://weflo.art",
		},
		{
			type: "client",
			title: "Weflo • Product Page",
			desc: "Extended the website with a product page, improving layout, usability, and maintaining consistent design.",
			tech: ["PHP", "JavaScript", "Responsive Design"],
			link: "https://weflo.art/products/body-spray/",
			isReturning: true,
		},
		{
			type: "demo",
			title: "Spice Garden • Restaurant Website",
			desc: "Modern restaurant website with smooth UI, responsive layout, and engaging design.",
			tech: ["Next.js", "Tailwind CSS"],
			link: "https://spice-garden-smoky.vercel.app/",
		},
	];

	const clientProjects = projects.filter((p) => p.type === "client");
	const demoProjects = projects.filter((p) => p.type === "demo");

	return (
		<div className="p-6 border border-[#30363d] rounded-xl bg-[#161b22] space-y-8">
			<h2 className="font-semibold">Featured Work</h2>

			{/* 💼 Client Work */}
			<div>
				<h3 className="text-sm font-medium text-gray-400 mb-3">
					Live Client Work
				</h3>

				<div className="space-y-4">
					{clientProjects.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>
			</div>

			{/* 🚀 Demo Projects */}
			<div>
				<h3 className="text-sm font-medium text-gray-400 mb-3">
					Demo Projects
				</h3>

				<p className="text-sm text-gray-400 mb-3">
					Custom-built websites designed for real-world use. More demos coming
					soon.
				</p>

				<div className="space-y-4">
					{demoProjects.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>
			</div>
		</div>
	);
}
