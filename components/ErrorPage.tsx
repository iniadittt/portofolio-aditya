import React from "react";
import Image from "next/image";

export default function ErrorPage() {
	return (
		<div className="flex flex-col gap-2 items-center">
			<Image
				src="/images/error.png"
				alt="Error Page"
				width={1000}
				height={1000}
				className="aspect-square w-64 md:w-72 h-auto"
			/>
			<h1 className="font-bold text-lg md:text-2xl">ERROR!</h1>
			<p className="text-center font-medium text-xs w-2/3">Terjadi kesalahan dalam membuka website, silakan buka pada layar besar (komputer/laptop)!</p>
		</div>
	);
}
