import React from "react";
import Image from "next/image";
import ErrorPage from "@/components/ErrorPage";
import Screen from "@/components/Screen";

export default function Home() {
	return (
		<div>
			<div className="2xl:hidden bg-white w-full h-screen flex justify-center items-center">
				<ErrorPage />
			</div>
			<div className="hidden 2xl:block relative">
				<Screen />
				<Image
					src="/images/background/1.jpg"
					alt="Background"
					width={1920}
					height={1080}
					className="w-full h-screen"
				/>
			</div>
		</div>
	);
}
