import { registerBlockType } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/table-of-content", {
	title: __("Table Of Content", "create-block"),

	description: __(
		"Example block written with ESNext standard and JSX support – build step required.",
		"create-block"
	),

	category: "widgets",

	icon: "smiley",

	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	edit: Edit,

	save,
});
