import Image from "next/image";
export default function ProfileCard() {
	return (
		<div className="p-6 border border-[#30363d] rounded-xl bg-[#161b22]">
			<Image
				src="/img/avatar.png"
				className="w-24 h-24 rounded-full mx-auto"
				width={500}
				height={500}
				alt="abusaeed"
			/>

			<h1 className="text-xl font-bold text-center mt-4">Abusaeed</h1>

			<p className="text-gray-400 text-center text-sm">
				Android & Systems Developer
			</p>

			<div className="mt-4 flex justify-center gap-3 text-sm">
				<a href="https://github.com/abusaeed-shuvo" target="_blank">
					GitHub
				</a>
				<a href="mailto:abusaeed.shuvo1439@gmail.com">Email</a>
			</div>

			<div className="mt-4 text-sm text-gray-300 space-y-1 text-center">
				<p>📱 Kotlin / Android</p>
				<p>🦀 Rust</p>
				<p>🐧 Linux</p>
			</div>
		</div>
	);
}
