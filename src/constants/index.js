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
	{ label: __("Left", "table-of-contents-block"), value: "left" },
	{ label: __("Center", "table-of-contents-block"), value: "center" },
	{ label: __("Right", "table-of-contents-block"), value: "right" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None", "table-of-contents-block"), value: "none" },
	{ label: __("Lowercase", "table-of-contents-block"), value: "lowercase" },
	{ label: __("Capitalize", "table-of-contents-block"), value: "capitalize" },
	{ label: __("Uppercase", "table-of-contents-block"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter", "table-of-contents-block"), value: "lighter" },
	{ label: __("Normal", "table-of-contents-block"), value: "normal" },
	{ label: __("Bold", "table-of-contents-block"), value: "bold" },
	{ label: __("Bolder", "table-of-contents-block"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial", "table-of-contents-block"), value: "initial" },
	{ label: __("Overline", "table-of-contents-block"), value: "overline" },
	{ label: __("Line Through", "table-of-contents-block"), value: "line-through" },
	{ label: __("Underline", "table-of-contents-block"), value: "underline" },
	{
		label: __("Underline Oveline", "table-of-contents-block"),
		value: "underline overline",
	},
];

export const BORDER_STYLES = [
	{ label: __("None", "table-of-contents-block"), value: "none" },
	{ label: __("Dashed", "table-of-contents-block"), value: "dashed" },
	{ label: __("Solid", "table-of-contents-block"), value: "solid" },
	{ label: __("Dotted", "table-of-contents-block"), value: "dotted" },
	{ label: __("Double", "table-of-contents-block"), value: "double" },
	{ label: __("Groove", "table-of-contents-block"), value: "groove" },
	{ label: __("Inset", "table-of-contents-block"), value: "inset" },
	{ label: __("Outset", "table-of-contents-block"), value: "outset" },
	{ label: __("Ridge", "table-of-contents-block"), value: "ridge" },
];

export const LAYOUT_TYPES = [
	{ label: __("Preset 1", "table-of-contents-block"), value: "preset1" },
	{ label: __("Preset 2", "table-of-contents-block"), value: "preset2" },
	{ label: __("Preset 3", "table-of-contents-block"), value: "preset3" },
	{ label: __("Preset 4", "table-of-contents-block"), value: "preset4" },
];

export const MEDIA_TYPES = ["image", "icon", "number", "none"];

export const CONTENTS_ALIGNMENTS = [
	{ label: __("Left", "table-of-contents-block"), value: "left" },
	{ label: __("Center", "table-of-contents-block"), value: "center" },
	{ label: __("Right", "table-of-contents-block"), value: "right" },
];

export const MEDIA_ALIGNMENTS_ON_FLEX_COLUMN = [
	{ label: __("Left", "table-of-contents-block"), value: "flex-start" },
	{ label: __("Center", "table-of-contents-block"), value: "center" },
	{ label: __("Right", "table-of-contents-block"), value: "flex-end" },
];

export const MEDIA_ALIGNMENTS_ON_FLEX_ROW = [
	{ label: __("Top", "table-of-contents-block"), value: "flex-start" },
	{ label: __("Middle", "table-of-contents-block"), value: "center" },
	{ label: __("Bottom", "table-of-contents-block"), value: "flex-end" },
];

export const ICON_IMAGE_BG_TYPES = [
	{ label: "Fill", value: "fill" },
	{ label: "Gradient", value: "gradient" },
];

export const sizeUnitTypes = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const imgHeightUnits = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "vh", value: "vh" },
];

export const HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const BACKGROUND_TYPES = [
	{ label: __("Fill", "table-of-contents-block"), value: "fill" },
	{ label: __("Gradient", "table-of-contents-block"), value: "gradient" },
	{ label: __("Image", "table-of-contents-block"), value: "image" },
];

export const BACKGROUND_SIZES = [
	{ label: __("Auto", "table-of-contents-block"), value: "auto" },
	{ label: __("Cover", "table-of-contents-block"), value: "cover" },
	{ label: __("Contain", "table-of-contents-block"), value: "contain" },
];

export const SHADOW_HOVER_OPTIONS = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const LETTER_SPACING_LINE_HEIGHT_UNITS = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
];

export const HOVER_EFFECT = [
	{ label: __("Select Hover Effect", "table-of-contents-block"), value: "" },
	{ label: __("Grow", "table-of-contents-block"), value: "hvr-grow" },
	{ label: __("Shrink", "table-of-contents-block"), value: "hvr-shrink" },
	{ label: __("Pulse", "table-of-contents-block"), value: "hvr-pulse" },
	{ label: __("Pulse Grow", "table-of-contents-block"), value: "hvr-pulse-grow" },
	{ label: __("Pulse Shrink", "table-of-contents-block"), value: "hvr-pulse-shrink" },
	{ label: __("Push", "table-of-contents-block"), value: "hvr-push" },
	{ label: __("Pop", "table-of-contents-block"), value: "hvr-pop" },
	{ label: __("Bounce In", "table-of-contents-block"), value: "hvr-bounce-in" },
	{ label: __("Bounce Out", "table-of-contents-block"), value: "hvr-bounce-out" },
	{ label: __("Rotate", "table-of-contents-block"), value: "hvr-rotate" },
	{ label: __("Grow Rotate", "table-of-contents-block"), value: "hvr-grow-rotate" },
	{ label: __("Float", "table-of-contents-block"), value: "hvr-float" },
	{ label: __("Sink", "table-of-contents-block"), value: "hvr-sink" },
	{ label: __("Bob", "table-of-contents-block"), value: "hvr-bob" },
	{ label: __("Hang", "table-of-contents-block"), value: "hvr-hang" },
	{ label: __("Skew", "table-of-contents-block"), value: "hvr-skew" },
	{ label: __("Skew Forward", "table-of-contents-block"), value: "hvr-skew-forward" },
	{
		label: __("Skew Backward", "table-of-contents-block"),
		value: "hvr-skew-backward",
	},
	{
		label: __("Wobble Horizontal", "table-of-contents-block"),
		value: "hvr-wobble-horizontal",
	},
	{
		label: __("Wobble Vertical", "table-of-contents-block"),
		value: "hvr-wobble-vertical",
	},
	{
		label: __("Wobble To Bottom Right", "table-of-contents-block"),
		value: "hvr-wobble-to-bottom-right",
	},
	{
		label: __("Wobble To Top Right", "table-of-contents-block"),
		value: "hvr-wobble-to-top-right",
	},
	{ label: __("Wobble Top", "table-of-contents-block"), value: "hvr-wobble-top" },
	{
		label: __("Wobble Bottom", "table-of-contents-block"),
		value: "hvr-wobble-bottom",
	},
	{ label: __("Wobble Skew", "table-of-contents-block"), value: "hvr-wobble-skew" },
	{ label: __("Buzz", "table-of-contents-block"), value: "hvr-buzz" },
	{ label: __("Buzz Out", "table-of-contents-block"), value: "hvr-buzz-out" },
	{ label: __("Forward", "table-of-contents-block"), value: "hvr-forward" },
	{ label: __("Fade", "table-of-contents-block"), value: "hvr-fade" },
	{ label: __("Back Pulse", "table-of-contents-block"), value: "hvr-back-pulse" },
	{
		label: __("Sweep To Right", "table-of-contents-block"),
		value: "hvr-sweep-to-right",
	},
	{
		label: __("Sweep To Left", "table-of-contents-block"),
		value: "hvr-sweep-to-left",
	},
	{
		label: __("Sweep To Bottom", "table-of-contents-block"),
		value: "hvr-sweep-to-bottom",
	},
	{ label: __("Sweep To Top", "table-of-contents-block"), value: "hvr-sweep-to-top" },
	{
		label: __("Bounce To Right", "table-of-contents-block"),
		value: "hvr-bounce-to-right",
	},
	{
		label: __("Bounce To Left", "table-of-contents-block"),
		value: "hvr-bounce-to-left",
	},
	{
		label: __("Bounce To Bottom", "table-of-contents-block"),
		value: "hvr-bounce-to-bottom",
	},
	{
		label: __("Bounce To Top", "table-of-contents-block"),
		value: "hvr-bounce-to-top",
	},
	{ label: __("Radial Out", "table-of-contents-block"), value: "hvr-radial-out" },
	{ label: __("Radial In", "table-of-contents-block"), value: "hvr-radial-in" },
	{ label: __("Rectangle In", "table-of-contents-block"), value: "hvr-rectangle-in" },
	{
		label: __("Rectangle Out", "table-of-contents-block"),
		value: "hvr-rectangle-out",
	},
	{
		label: __("Shutter In Horizontal", "table-of-contents-block"),
		value: "hvr-shutter-in-horizontal",
	},
	{
		label: __("Shutter Out Horizontal", "table-of-contents-block"),
		value: "hvr-shutter-out-horizontal",
	},
	{
		label: __("Shutter In Vertical", "table-of-contents-block"),
		value: "hvr-shutter-in-vertical",
	},
	{
		label: __("Shutter Out Vertical", "table-of-contents-block"),
		value: "hvr-shutter-out-vertical",
	},
	{
		label: __("Curl Top Left", "table-of-contents-block"),
		value: "hvr-curl-top-left",
	},
	{
		label: __("Curl Top Right", "table-of-contents-block"),
		value: "hvr-curl-top-right",
	},
	{
		label: __("Curl Bottom Right", "table-of-contents-block"),
		value: "hvr-curl-bottom-right",
	},
	{
		label: __("Curl Bottom Left", "table-of-contents-block"),
		value: "hvr-curl-bottom-left",
	},
];

export const SCROLL_OPTIONS = [
	{
		label: __("Scroll to the top of page", "table-of-contents-block"),
		value: "scroll_to_page",
	},
	{
		label: __("Scroll to the TOC", "table-of-contents-block"),
		value: "scroll_to_toc",
	},
];

export const STICKY_POSITION = [
	{
		label: __("Left", "table-of-contents-block"),
		value: "left",
	},
	{
		label: __("Right", "table-of-contents-block"),
		value: "right",
	},
];
