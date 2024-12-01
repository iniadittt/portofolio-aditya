export interface PopupType {
	finder: Action;
	github: Action;
	linkedin: Action;
	instagram: Action;
	safari: Action;
	note: Action;
	spotify: Action;
	setting: Action;
	trash: Action;
}

interface Action {
	open: boolean;
	maximize: boolean;
}
