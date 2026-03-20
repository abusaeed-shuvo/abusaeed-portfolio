import ProjectCard from "./ProjectCard";

export default function Projects() {
	return (
		<div className="p-6 border border-[#30363d] rounded-xl bg-[#161b22]">
			<h2 className="font-semibold mb-4">Projects</h2>

			<div className="space-y-4">
				<ProjectCard
					title="Android File Manager"
					desc="Advanced file manager with SAF + Shizuku support"
					tech={["Kotlin", "MVVM", "SAF"]}
					link="https://github.com/abusaeed-shuvo/File-Manager"
				/>
				<ProjectCard
					title="Lufus-rs"
					desc="Rufus-like USB flashing tool written in Rust"
					tech={["Rust", "Linux", "Block Devices"]}
					link="https://github.com/abusaeed-shuvo/lufus-rs"
				/>
				<ProjectCard
					title="FGO NP Calculator"
					desc="Damage calculator with dynamic scaling system"
					tech={["Kotlin", "Room", "Flows"]}
					link=""
				/>
			</div>
		</div>
	);
}
