const attributes = {
	headers: {
		type: "array",
		default: [],
	},
	visibleHeaders: {
		type: "array",
		default: Array(6).fill(true),
	},
	listType: {
		type: "string",
		default: "ul",
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
	contentGap: {
		type: "number",
	},
	contentGapUnit: {
		type: "string",
		default: "px",
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
	titleFontFamily: {
		type: "string",
	},
	titleSizeUnit: {
		type: "string",
		default: "px",
	},
	titleFontSize: {
		type: "number",
	},
	titleFontWeight: {
		type: "string",
		default: "normal",
	},
	titleTextTransform: {
		type: "string",
	},
	titleTextDecoration: {
		type: "string",
	},
	titleLetterSpacing: {
		type: "number",
	},
	titleLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightUnit: {
		type: "string",
		default: "px",
	},
	contentFontFamily: {
		type: "string",
	},
	contentSizeUnit: {
		type: "string",
		default: "px",
	},
	contentFontSize: {
		type: "number",
	},
	contentFontWeight: {
		type: "string",
		default: "normal",
	},
	contentTextTransform: {
		type: "string",
	},
	contentTextDecoration: {
		type: "string",
		default: "underline",
	},
	contentLetterSpacing: {
		type: "number",
	},
	contentLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	contentLineHeight: {
		type: "number",
	},
	contentLineHeightUnit: {
		type: "string",
		default: "px",
	},
	isSmooth: {
		type: "boolean",
		default: true,
	},
	seperator: {
		type: "boolean",
		default: false,
	},
	seperatorColor: {
		type: "string",
		default: "black",
	},
	seperatorSize: {
		type: "number",
	},
	seperatorStyle: {
		type: "string",
		default: "solid",
	},
	listColor: {
		type: "string",
	},
};

export default attributes;
