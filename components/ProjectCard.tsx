"use client";

type Props = {
	type: "client" | "demo";
	title: string;
	desc: string;
	tech: string[];
	link: string;
	isReturning?: boolean;
};

export default function ProjectCard({
	type,
	title,
	desc,
	tech,
	link,
	isReturning,
}: Props) {
	const badgeStyles =
		type === "client"
			? "bg-green-500/10 text-green-400 border border-green-500/20"
			: "bg-blue-500/10 text-blue-400 border border-blue-500/20";

	return (
		<a
			href={link}
			target="_blank"
			className="block p-4 border border-[#30363d] rounded-xl bg-[#161b22] hover:bg-[#1c2128] hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200"
		>
			{/* Top */}
			<div className="flex justify-between items-start gap-2">
				<h3 className="font-semibold leading-snug">{title}</h3>

				<div className="flex gap-2 flex-shrink-0">
					<span
						className={`px-2 py-0.5 text-[10px] rounded-full ${badgeStyles}`}
					>
						{type === "client" ? "Client" : "Demo"}
					</span>

					{isReturning && (
						<span className="px-2 py-0.5 text-[10px] rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
							Returning
						</span>
					)}
				</div>
			</div>

			{/* Description */}
			<p className="text-sm text-gray-400 mt-2">{desc}</p>

			{/* Tech */}
			<div className="flex flex-wrap gap-2 mt-3">
				{tech.map((t) => (
					<span key={t} className="px-2 py-1 text-xs bg-[#21262d] rounded">
						{t}
					</span>
				))}
			</div>

			{/* Footer */}
			<div className="mt-3 text-xs text-gray-500 flex justify-between items-center">
				<span>View Project</span>
				<span>↗</span>
			</div>
		</a>
	);
}
