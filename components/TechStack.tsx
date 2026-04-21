const stack = [
	"Kotlin",
	"Rust",
	"Jetpack Compose",
	"Android",
	"Linux",
	"MVVM",
	"Room",
	"Tailwind",
	"PHP",
];

export default function TechStack() {
	return (
		<div className="p-6 border border-[#30363d] rounded-xl bg-[#161b22]">
			<h2 className="font-semibold mb-3">Tech Stack</h2>

			<div className="flex flex-wrap gap-2">
				{stack.map((tech) => (
					<span key={tech} className="px-2 py-1 text-sm bg-[#21262b] rounded">
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}
