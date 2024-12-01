"use client";

import React from "react";

const formatDate = () => {
	const date = new Date();
	const days = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
	const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	const dayName = days[date.getDay()];
	const day = String(date.getDate()).padStart(2, "0");
	const month = months[date.getMonth()];
	const year = String(date.getFullYear());
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	return {
		tanggal: `${dayName}, ${day} ${month} ${year}`,
		waktu: `${hours}:${minutes} WIB`,
	};
};

export default function Jam() {
	const [tanggal, setTanggal] = React.useState<string>("");
	const [waktu, setWaktu] = React.useState<string>("");

	React.useEffect(() => {
		const updateDateTime = () => {
			const { tanggal, waktu } = formatDate();
			setTanggal(tanggal);
			setWaktu(waktu);
		};
		updateDateTime();
		const intervalId = setInterval(updateDateTime, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="flex gap-2.5">
			<p className="font-medium text-white">{tanggal}</p>
			<p className="font-medium text-white">{waktu}</p>
		</div>
	);
}
