"use client";

export default function Hero() {
	return (
		<section className="relative text-center md:text-left space-y-8">
			{/* Glow background */}
			<div className="absolute inset-0 -z-10 flex justify-center">
				<div className="w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>
			</div>

			<div className="grid md:grid-cols-2 gap-10 items-center">
				{/* LEFT */}
				<div className="space-y-6">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
						<span>●</span>
						Available for freelance work
					</div>

					{/* Headline */}
					<h1 className="text-3xl md:text-5xl font-bold leading-tight">
						I build fast, modern websites
						<span className="block text-blue-400">
							that help businesses grow
						</span>
					</h1>

					{/* Subtext */}
					<p className="text-gray-400 max-w-xl">
						Custom websites using Next.js and PHP — optimized for speed,
						responsive design, and real-world results. Trusted by clients for
						clean and reliable work.
					</p>

					{/* CTA */}
					<div className="flex flex-wrap gap-4">
						<a
							href="mailto:abusaeed.shuvo1439@gmail.com"
							className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
						>
							Hire Me
						</a>

						<a
							href="#work"
							className="px-6 py-2 border border-gray-600 rounded hover:bg-[#161b22]"
						>
							View Work
						</a>
					</div>

					{/* Trust Signals */}
					<div className="flex flex-wrap gap-4 text-xs text-gray-500 pt-2">
						<span>✔ Real client projects</span>
						<span>✔ Returning clients</span>
						<span>✔ Responsive & fast</span>
					</div>
				</div>

				{/* RIGHT */}
				<div className="relative">
					<div className="p-4 border border-[#30363d] rounded-xl bg-[#161b22] shadow-lg">
						<p className="text-xs text-gray-500 mb-2">Live Preview</p>

						<div className="rounded-lg overflow-hidden border border-[#30363d]">
							<iframe
								src="https://spice-garden-smoky.vercel.app/"
								className="w-full h-62.5"
							/>
						</div>
					</div>

					{/* Floating badge */}
					<div className="absolute -bottom-4 -right-4 px-3 py-1 text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
						Returning Client Work
					</div>
				</div>
			</div>
		</section>
	);
}
