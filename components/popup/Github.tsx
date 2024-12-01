import React from "react";
import { PopupType } from "@/types/Popup";

interface GithubProps {
	handlerSetPopup: (event: React.MouseEvent, key: keyof PopupType, action: "open" | "maximize") => void;
}

export default function Github({ handlerSetPopup, maximize }: { handlerSetPopup: GithubProps["handlerSetPopup"]; maximize: boolean }) {
	return (
		<div className={`h-screen ${maximize ? "w-full" : "w-5/6 mx-auto py-8"}`}>
			<div className={`relative w-full h-full bg-white shadow-xl ${!maximize && "rounded-lg"}`}>
				<div className={`absolute border-b bg-white w-full flex items-center gap-2 py-2 px-3 ${!maximize && "rounded-t-lg"}`}>
					<button
						className="cursor-pointer w-3 h-3 bg-red-600 rounded-full"
						onClick={(event: React.MouseEvent) => handlerSetPopup(event, "github", "open")}
					>
						&nbsp;
					</button>
					<button
						className={`cursor-pointer w-3 h-3 rounded-full ${maximize ? "bg-yellow-500" : "bg-orange-500"}`}
						onClick={(event: React.MouseEvent) => handlerSetPopup(event, "github", "maximize")}
					>
						&nbsp;
					</button>
				</div>
				<div className={`bg-white w-full h-full pt-10 ${!maximize && "rounded-lg"} p-3`}>
					<div className="bg-blue-200">GITHUB.</div>
				</div>
			</div>
		</div>
	);
}
