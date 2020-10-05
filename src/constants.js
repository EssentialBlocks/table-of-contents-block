import { __ } from "@wordpress/i18n";

export const HEADERS = [
	{ label: "h1", value: 1 },
	{ label: "h2", value: 2 },
	{ label: "h3", value: 3 },
	{ label: "h4", value: 4 },
	{ label: "h5", value: 5 },
	{ label: "h6", value: 6 },
];

export const ALIGNS = [
	{ label: __("Left"), value: "left" },
	{ label: __("Center"), value: "center" },
	{ label: __("Right"), value: "right" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];

export const BORDER_STYLES = [
	{ label: __("None"), value: "none" },
	{ label: __("Dashed"), value: "dashed" },
	{ label: __("Solid"), value: "solid" },
	{ label: __("Dotted"), value: "dotted" },
	{ label: __("Double"), value: "double" },
	{ label: __("Groove"), value: "groove" },
	{ label: __("Inset"), value: "inset" },
	{ label: __("Outset"), value: "outset" },
	{ label: __("Ridge"), value: "ridge" },
];
