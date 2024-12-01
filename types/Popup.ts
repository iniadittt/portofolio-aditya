export interface PopupType {
	safari: Action;
	note: Action;
	setting: Action;
}

interface Action {
	open: boolean;
	maximize: boolean;
}
