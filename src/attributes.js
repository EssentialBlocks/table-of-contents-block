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
	initialCollape: {
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
	borderWidth: {
		type: "number",
	},
	borderColor: {
		type: "string",
		default: "black",
	},
	borderStyle: {
		type: "string",
		default: "solid",
	},
	titlePaddingTop: {
		type: "number",
		default: 0,
	},
	titlePaddingRight: {
		type: "number",
		default: 0,
	},
	titlePaddingBottom: {
		type: "number",
		default: 0,
	},
	titlePaddingLeft: {
		type: "number",
		default: 0,
	},
	titlePaddingUnit: {
		type: "string",
		default: "px",
	},
	scrollToTop: {
		type: "boolean",
		default: false,
	},
	arrowHeight: {
		type: "number",
	},
	arrowWidth: {
		type: "number",
	},
	arrowBg: {
		type: "string",
	},
	arrowColor: {
		type: "string",
	},
	hOffset: {
		type: "number",
	},
	vOffset: {
		type: "number",
	},
	blur: {
		type: "number",
	},
	spread: {
		type: "number",
	},
	shadowColor: {
		type: "string",
		default: "black",
	},
	contentPaddingTop: {
		type: "number",
		default: 0,
	},
	contentPaddingRight: {
		type: "number",
		default: 0,
	},
	contentPaddingBottom: {
		type: "number",
		default: 0,
	},
	contentPaddingLeft: {
		type: "number",
		default: 0,
	},
	contentPaddingUnit: {
		type: "string",
		default: "px",
	},
	radius: {
		type: "number",
	},
	radiusUnit: {
		type: "string",
		default: "px",
	},
	listSeperatorWidth: {
		type: "number",
	},
	listSeperatorStyle: {
		type: "string",
		default: "none",
	},
	listSeperatorColor: {
		type: "string",
	},
	hasUnderline: {
		type: "boolean",
		default: false,
	},
	topSpace: {
		type: "number",
		default: 25,
	},
	contentHeight: {
		type: "number",
		default: 200,
	},
	contentHeightUnit: {
		type: "string",
		default: "px",
	},
	contentWidth: {
		type: "number",
		default: 200,
	},
	contentWidthUnit: {
		type: "string",
		default: "px",
	},
	isSticky: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
