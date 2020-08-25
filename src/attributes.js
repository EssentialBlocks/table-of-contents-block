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
};

export default attributes;
