import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import { SITE } from "@/constants/site";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE.url),
	title: {
		default: `${SITE.fullName} — ${SITE.role}`,
		template: `%s — ${SITE.fullName}`,
	},
	description: SITE.description,
	keywords: [
		"Abusaeed Shuvo",
		"Software Engineer",
		"AI Engineer",
		"AI Agents",
		"Agentic Workflows",
		"MCP",
		"RAG",
		"Local LLMs",
		"Ollama",
		"Automation",
		"Next.js",
		"TypeScript",
		"Full-stack",
		"E-commerce",
		"Developer Tools",
	],
	authors: [{ name: SITE.fullName, url: SITE.url }],
	creator: SITE.fullName,
	publisher: SITE.fullName,
	alternates: {
		canonical: SITE.url,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE.url,
		siteName: `${SITE.fullName} — Portfolio`,
		title: `${SITE.fullName} — ${SITE.role}`,
		description: SITE.description,
	},
	twitter: {
		card: "summary_large_image",
		title: `${SITE.fullName} — ${SITE.role}`,
		description: SITE.description,
		creator: "@abusaeed_shuvo",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
		{ media: "(prefers-color-scheme: light)", color: "#fafafa" },
	],
	width: "device-width",
	initialScale: 1,
};

/** JSON-LD structured data — Person schema. */
const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: SITE.fullName,
	url: SITE.url,
	email: `mailto:${SITE.email}`,
	jobTitle: SITE.role,
	description: SITE.description,
	sameAs: [
		"https://github.com/abusaeed-shuvo",
		"https://www.linkedin.com/in/abusaeed-shuvo-a25b51375",
	],
	knowsAbout: [
		"AI Agents",
		"Agentic Workflows",
		"MCP",
		"RAG",
		"Vector Databases",
		"Local LLMs",
		"Ollama",
		"LM Studio",
		"Claude Code",
		"Cline",
		"Gemini CLI",
		"OpenRouter",
		"HuggingFace",
		"Prompt Engineering",
		"Next.js",
		"React",
		"TypeScript",
		"Tailwind CSS",
		"Node.js",
		"PHP",
		"Laravel",
		"Prisma",
		"PostgreSQL",
		"MySQL",
		"Docker",
		"Python",
		"Automation",
		"Full-stack Development",
		"E-commerce Infrastructure",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${geistSans.variable} ${geistMono.variable}`}
		>
			<body className="min-h-screen bg-background font-sans text-foreground antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<a
						href="#main"
						className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
					>
						Skip to content
					</a>
					<div className="flex min-h-screen flex-col">
						<SiteHeader />
						<main id="main" className="flex-1">
							{children}
						</main>
						<SiteFooter />
					</div>
					<Toaster />
				</ThemeProvider>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
			</body>
		</html>
	);
}
