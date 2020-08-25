const attributes = {
	headers: {
		type: "array",
		default: [],
	},
	visibleHeaders: {
		type: "array",
		default: Array(6).fill(true),
	},
	hasNumber: {
		type: "boolean",
		default: false,
	},
	title: {
		type: "string",
		default: "",
	},
	collapsible: {
		type: "boolean",
		default: false,
	},
	titleBg: {
		type: "string",
	},
	titleColor: {
		type: "string",
	},
	contentBg: {
		type: "string",
	},
	contentColor: {
		type: "string",
	},
	indent: {
		type: "number",
	},
	displayTitle: {
		type: "boolean",
		default: true,
	},
	titleAlign: {
		type: "string",
		default: "left",
	},
};

export default attributes;
