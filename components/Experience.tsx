//components/Experience.tsx
export default function Experience() {
	return (
		<div className="p-6 border border-[#30363d] rounded-xl bg-[#161b22]">
			<h2 className="font-semibold mb-4">Experience</h2>

			<div className="space-y-5 text-sm text-gray-400">
				<div>
					<h3 className="font-medium text-white">Freelance Web Developer</h3>
					<p>
						Working with clients to design and develop modern, responsive
						websites tailored to their business needs.
					</p>
				</div>

				<div>
					<h3 className="font-medium text-white">Client Project • Weflo</h3>
					<p>
						Built and deployed a complete business website focusing on
						performance, usability, and clean design.
					</p>
				</div>

				<div>
					<h3 className="font-medium text-white">Open Source Contributor</h3>
					<p>
						Contributed to technical projects, improving functionality and
						gaining experience with real-world development workflows.
					</p>
				</div>
			</div>
		</div>
	);
}
