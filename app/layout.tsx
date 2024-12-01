import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Aditya Bayu Portofolio",
	description: "Temukan karya terbaik dan pengalaman profesional Aditya Bayu, seorang developer berbakat yang mengubah ide menjadi solusi inovatif melalui teknologi.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link
					rel="preconnect"
					href="https://stijndv.com"
				/>
				<link
					rel="stylesheet"
					href="https://stijndv.com/fonts/Eudoxus-Sans.css"
				/>
				<link
					rel="icon"
					href="/images/logo?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
			</head>
			<body className="antialiased w-full h-screen">{children}</body>
		</html>
	);
}
