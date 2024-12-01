import React from "react";
import { PopupType } from "@/types/Popup";

interface InstagramProps {
	handlerSetPopup: (event: React.MouseEvent, key: keyof PopupType, action: "open" | "maximize") => void;
}

export default function Instagram({ handlerSetPopup, maximize }: { handlerSetPopup: InstagramProps["handlerSetPopup"]; maximize: boolean }) {
	return (
		<div className={`h-screen ${maximize ? "w-full" : "w-5/6 mx-auto py-8"}`}>
			<div className={`relative w-full h-full bg-white shadow-xl ${!maximize && "rounded-lg"}`}>
				<div className={`absolute border-b bg-white w-full flex items-center gap-2 py-2 px-3 ${!maximize && "rounded-t-lg"}`}>
					<button
						className="cursor-pointer w-3 h-3 bg-red-600 rounded-full"
						onClick={(event: React.MouseEvent) => handlerSetPopup(event, "instagram", "open")}
					>
						&nbsp;
					</button>
					<button
						className={`cursor-pointer w-3 h-3 rounded-full ${maximize ? "bg-yellow-500" : "bg-orange-500"}`}
						onClick={(event: React.MouseEvent) => handlerSetPopup(event, "instagram", "maximize")}
					>
						&nbsp;
					</button>
				</div>
				<div className={`bg-white w-full h-full pt-10 ${!maximize && "rounded-lg"} p-3`}>
					<div className="bg-blue-200">INSTAGRAM.</div>
				</div>
			</div>
		</div>
	);
}
