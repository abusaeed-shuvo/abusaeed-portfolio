export default function Experience() {
	return (
		<div className="p-6 border border-[#30363d] rounded-xl bg-[#161b22]">
			<h2 className="font-semibold mb-4">Experience</h2>

			<div className="space-y-4 text-sm">
				<div>
					<h3 className="font-medium">Android File Manager</h3>
					<p className="text-gray-400">
						Built a full-featured file manager using SAF + Shizuku
					</p>
				</div>

				<div>
					<h3 className="font-medium">Lufus-rs (Rust)</h3>
					<p className="text-gray-400">
						Developed a USB flashing tool with raw block writing
					</p>
				</div>
			</div>
		</div>
	);
}
