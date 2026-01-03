import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "The Tools Hub – 50+ Free Online Tools to Work Smarter",
	description:
		"Use 50+ powerful free online tools for SEO, developers, marketers, and everyday users—all in one hub designed to boost speed and productivity.",
	keywords:
		"online tools, free tools, SEO tools, calculators, generators, text tools, image tools, developer tools, password generator, QR code generator",
	authors: [{ name: "The Tools Hub Team" }],
	creator: "The Tools Hub",
	publisher: "The Tools Hub",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://nba-playoff.com",
		title: "The Tools Hub – 50+ Free Online Tools to Work Smarter",
		description:
			"Use 50+ powerful free online tools for SEO, developers, marketers, and everyday users—all in one hub designed to boost speed and productivity.",
		siteName: "The Tools Hub",
	},
	twitter: {
		card: "summary_large_image",
		title: "The Tools Hub – 50+ Free Online Tools to Work Smarter",
		description:
			"Use 50+ powerful free online tools for SEO, developers, marketers, and everyday users—all in one hub designed to boost speed and productivity.",
		creator: "@thetoolshub",
		images: ["https://nba-playoff.com/og-image.png"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=XXXXXXXXXXXXX'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'XXXXXXXX');
					`,
					}}
				/>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXXX'
					crossOrigin='anonymous'
				/>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Header />
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
