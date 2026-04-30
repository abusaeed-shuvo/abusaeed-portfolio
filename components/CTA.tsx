import Image from "next/image";

export default function CTA() {
	return (
		<section className="text-center p-8 border border-[#30363d] rounded-xl bg-[#161b22] space-y-5">
			<h2 className="text-xl font-semibold">Let’s build your website</h2>

			<p className="text-gray-400 max-w-md mx-auto">
				Need a modern, fast, and responsive website? I’m available for freelance
				work and quick to respond.
			</p>

			<div className="flex justify-center gap-3 flex-wrap">
				{/* Email */}
				<a
					href="mailto:abusaeed.shuvo1439@gmail.com"
					className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition"
				>
					<Image src="/img/mail.svg" alt="email" width={16} height={16} />
					Start a Project
				</a>

				{/* WhatsApp */}
				<a
					href="https://wa.me/8801751364327"
					target="_blank"
					className="flex items-center gap-2 px-6 py-2 border border-gray-600 rounded hover:border-green-500 hover:text-green-400 transition"
				>
					<Image
						src="/img/whatsapp.svg"
						alt="whatsapp"
						width={16}
						height={16}
					/>
					WhatsApp
				</a>
			</div>

			<p className="text-xs text-gray-500">
				Usually responds within a few hours
			</p>
		</section>
	);
}
