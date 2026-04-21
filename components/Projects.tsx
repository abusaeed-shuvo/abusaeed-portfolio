"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
	const [showMorePersonal, setShowMorePersonal] = useState(false);

	return (
		<div className="p-6 border border-[#30363d] rounded-xl bg-[#161b22] space-y-8">
			<h2 className="font-semibold">Projects</h2>

			{/* 💼 Client Work */}
			<div>
				<h3 className="text-sm font-medium text-gray-400 mb-3">Client Work</h3>

				<ProjectCard
					title="Weflo • Client Project"
					desc="Developed and deployed a production website using PHP with focus on performance, responsive design, and usability"
					tech={["PHP", "HTML", "CSS", "JavaScript"]}
					link="https://weflo.art"
				/>
			</div>

			{/* 🌍 Open Source */}
			<div>
				<h3 className="text-sm font-medium text-gray-400 mb-3">Open Source</h3>

				<ProjectCard
					title="Lufus (Open Source Contributor)"
					desc="Contributing to a Rust-based USB flashing tool with work on device detection, block-level operations, and CLI improvements"
					tech={["Rust", "Linux", "Block I/O", "CLI"]}
					link="https://github.com/Hog185/Lufus"
				/>
			</div>

			{/* 🧠 Personal Projects */}
			<div>
				<h3 className="text-sm font-medium text-gray-400 mb-3">
					Personal Projects
				</h3>

				<div className="space-y-4">
					<ProjectCard
						title="Android File Manager"
						desc="Android file manager with SAF + Shizuku support enabling advanced file access beyond scoped storage"
						tech={["Kotlin", "MVVM", "SAF", "Shizuku"]}
						link="https://github.com/abusaeed-shuvo/File-Manager"
					/>

					<ProjectCard
						title="Lufus-rs"
						desc="Personal implementation of a USB flashing tool exploring raw block device writing and Linux device handling"
						tech={["Rust", "CLI", "Linux"]}
						link="https://github.com/abusaeed-shuvo/lufus-rs"
					/>

					{showMorePersonal && (
						<ProjectCard
							title="SM Discord Bot"
							desc="Framework for building Discord bots with simplified command handling and async events"
							tech={["Python", "Discord API", "AsyncIO"]}
							link="https://github.com/abusaeed-shuvo/sm-bot"
						/>
					)}
				</div>

				<button
					onClick={() => setShowMorePersonal(!showMorePersonal)}
					className="mt-3 text-sm text-blue-400 hover:underline"
				>
					{showMorePersonal ? "Show less" : "Show more"}
				</button>
			</div>
		</div>
	);
}
