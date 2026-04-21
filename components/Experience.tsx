export default function Experience() {
	return (
		<div className="p-6 border border-[#30363d] rounded-xl bg-[#161b22]">
			<h2 className="font-semibold mb-4">Experience & Contributions</h2>

			<div className="space-y-5 text-sm">
				<div>
					<h3 className="font-medium">Lufus (Open Source Contributor)</h3>
					<p className="text-gray-400">
						Contributing to a Rust-based USB flashing tool
					</p>
					<ul className="list-disc list-inside text-gray-400 mt-1 space-y-1">
						<li>Worked on Linux device detection</li>
						<li>Explored block-level read/write operations</li>
						<li>Improved CLI structure and usability</li>
					</ul>
				</div>

				<div>
					<h3 className="font-medium">Android File Manager</h3>
					<p className="text-gray-400">
						Developed a modern Android file manager
					</p>
					<ul className="list-disc list-inside text-gray-400 mt-1 space-y-1">
						<li>Implemented SAF + DocumentFile for storage access</li>
						<li>Integrated Shizuku for extended file operations</li>
						<li>Designed MVVM architecture with reactive data flow</li>
					</ul>
				</div>

				<div>
					<h3 className="font-medium">Lufus-rs (Personal Project)</h3>
					<p className="text-gray-400">
						Experimented with low-level USB flashing concepts
					</p>
					<ul className="list-disc list-inside text-gray-400 mt-1 space-y-1">
						<li>Implemented raw block device writing</li>
						<li>Worked with Linux system interfaces</li>
						<li>Explored safe vs unsafe Rust for I/O</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
