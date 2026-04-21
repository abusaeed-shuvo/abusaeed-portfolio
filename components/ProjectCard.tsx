type Props = {
	title: string;
	desc: string;
	tech: string[];
	link: string;
};

export default function ProjectCard({ title, desc, tech, link }: Props) {
	return (
		<a
			href={link}
			target="_blank"
			className="block p-4 border border-[#30363d] rounded-xl bg-[#161b22] hover:bg-[#1c2128] hover:scale-[1.01] transition-all duration-200"
		>
			<div className="flex justify-between items-center">
				<h3 className="font-semibold">{title}</h3>
				<span className="text-xs text-gray-500">↗</span>
			</div>
			<p className="text-sm text-gray-400 mt-1">{desc}</p>
			<div className="flex flex-wrap gap-2 mt-3">
				{tech.map((t) => (
					<span key={t} className="px-2 py-1 text-xs bg-[#21262d] rounded">
						{t}
					</span>
				))}
			</div>
		</a>
	);
}
