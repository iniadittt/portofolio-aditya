"use client";

import React from "react";
import Image from "next/image";
import { IconsData, IconsDataType } from "@/constant/IconsData";
import { PopupType } from "@/types/Popup";
import Jam from "@/components/Jam";
import Finder from "./popup/Finder";
import Github from "./popup/Github";
import Linkedin from "./popup/Linkedin";
import Instagram from "./popup/Instagram";
import Safari from "@/components/popup/Safari";
import Note from "@/components/popup/Note";
import Spotify from "./popup/Spotify";
import Setting from "@/components/popup/Setting";
import Trash from "./popup/Trash";

export default function Screen() {
	const [popup, setPopup] = React.useState<PopupType>({
		finder: {
			open: false,
			maximize: false,
		},
		github: {
			open: false,
			maximize: false,
		},
		linkedin: {
			open: false,
			maximize: false,
		},
		instagram: {
			open: false,
			maximize: false,
		},
		safari: {
			open: false,
			maximize: false,
		},
		note: {
			open: false,
			maximize: false,
		},
		spotify: {
			open: false,
			maximize: false,
		},
		setting: {
			open: false,
			maximize: false,
		},
		trash: {
			open: false,
			maximize: false,
		},
	});

	const handlerSetPopup = (event: React.MouseEvent, key: keyof PopupType, action: "open" | "maximize") => {
		event.preventDefault();
		setPopup((prevState) => {
			if (action === "open") {
				const updatedState = Object.keys(prevState).reduce((acc, currKey) => {
					acc[currKey as keyof PopupType] = {
						...prevState[currKey as keyof PopupType],
						open: false,
					};
					return acc;
				}, {} as PopupType);
				return {
					...updatedState,
					[key]: {
						...updatedState[key],
						open: !prevState[key].open,
					},
				};
			}
			return {
				...prevState,
				[key]: {
					...prevState[key],
					[action]: !prevState[key][action],
				},
			};
		});
	};

	React.useEffect(() => {
		const resetZoom = () => {
			if (window.devicePixelRatio !== 1) {
				document.body.style.zoom = "100%";
			}
		};

		const disableZoom = (event: KeyboardEvent) => {
			if (event.ctrlKey || event.metaKey || event.key === "+" || event.key === "-" || event.key === "0") {
				event.preventDefault();
				resetZoom();
			}
		};

		const preventWheelZoom = (event: WheelEvent) => {
			if (event.ctrlKey || event.metaKey) {
				event.preventDefault();
				resetZoom();
			}
		};

		const preventGestureZoom = (event: Event) => {
			event.preventDefault();
			resetZoom();
		};

		resetZoom();

		window.addEventListener("wheel", preventWheelZoom, { passive: false });
		window.addEventListener("keydown", disableZoom);
		window.addEventListener("gesturestart", preventGestureZoom);

		const enterFullscreen = () => {
			const docElement = document.documentElement as HTMLElement & {
				webkitRequestFullscreen?: () => void;
				msRequestFullscreen?: () => void;
			};

			document.addEventListener("click", () => {
				try {
					if (docElement.requestFullscreen) {
						docElement.requestFullscreen();
					} else if (docElement.webkitRequestFullscreen) {
						docElement.webkitRequestFullscreen();
					} else if (docElement.msRequestFullscreen) {
						docElement.msRequestFullscreen();
					} else {
						console.warn("Fullscreen API is not supported by this browser.");
					}
				} catch (err) {
					if (err instanceof Error) {
						console.error("Fullscreen failed:", err.message);
					} else {
						console.error("Fullscreen failed with an unknown error");
					}
				}
			});
		};

		enterFullscreen();

		return () => {
			window.removeEventListener("wheel", preventWheelZoom);
			window.removeEventListener("keydown", disableZoom);
			window.removeEventListener("gesturestart", preventGestureZoom);
		};
	}, []);

	return (
		<div className="absolute w-full h-screen flex flex-col justify-between">
			<div className="bg-white/20 flex justify-between px-2 py-[0.24rem] text-[0.6rem]">
				<div className="flex justify-start gap-2.5">
					<div className="font-medium cursor-pointer text-white/80">File</div>
					<div className="font-medium cursor-pointer text-white/80">Edit</div>
					<div className="font-medium cursor-pointer text-white/80">View</div>
					<div className="font-medium cursor-pointer text-white/80">Go</div>
					<div className="font-medium cursor-pointer text-white/80">Window</div>
					<div className="font-medium cursor-pointer text-white/80">Help</div>
				</div>
				<div className="flex justify-end gap-2.5">
					<Image
						src="/images/icons/battery.png"
						alt="Battery"
						width={100}
						height={100}
						className="w-3 h-3 aspect-square"
					/>
					<Image
						src="/images/icons/wifi.png"
						alt="Wifi"
						width={100}
						height={100}
						className="w-3 h-3 aspect-square"
					/>
					<Image
						src="/images/icons/search.png"
						alt="Search"
						width={100}
						height={100}
						className="w-3 h-3 aspect-square"
					/>
					<Jam />
				</div>
			</div>

			{popup.finder.open && (
				<Finder
					handlerSetPopup={handlerSetPopup}
					maximize={popup.finder.maximize}
				/>
			)}
			{popup.github.open && (
				<Github
					handlerSetPopup={handlerSetPopup}
					maximize={popup.github.maximize}
				/>
			)}
			{popup.linkedin.open && (
				<Linkedin
					handlerSetPopup={handlerSetPopup}
					maximize={popup.linkedin.maximize}
				/>
			)}
			{popup.instagram.open && (
				<Instagram
					handlerSetPopup={handlerSetPopup}
					maximize={popup.instagram.maximize}
				/>
			)}
			{popup.safari.open && (
				<Safari
					handlerSetPopup={handlerSetPopup}
					maximize={popup.safari.maximize}
				/>
			)}
			{popup.note.open && (
				<Note
					handlerSetPopup={handlerSetPopup}
					maximize={popup.note.maximize}
				/>
			)}
			{popup.spotify.open && (
				<Spotify
					handlerSetPopup={handlerSetPopup}
					maximize={popup.spotify.maximize}
				/>
			)}
			{popup.setting.open && (
				<Setting
					handlerSetPopup={handlerSetPopup}
					maximize={popup.setting.maximize}
				/>
			)}
			{popup.trash.open && (
				<Trash
					handlerSetPopup={handlerSetPopup}
					maximize={popup.trash.maximize}
				/>
			)}

			<div className="bg-transparent">
				<div className="max-w-fit mx-auto flex justify-center gap-1 p-1.5 mb-1 bg-glass rounded-xl">
					{IconsData.map((item: IconsDataType, index: number) => (
						<div
							key={index}
							className="w-9 h-9 relative group rounded-lg bg-transparent"
						>
							<Image
								src={item.src}
								alt={item.alt}
								width={500}
								height={500}
								className="w-9 h-9 aspect-square cursor-pointer transition-transform duration-200 group-hover:scale-[1.2] rounded-lg"
								onClick={(event: React.MouseEvent) => handlerSetPopup(event, item.alt as keyof PopupType, "open")}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
