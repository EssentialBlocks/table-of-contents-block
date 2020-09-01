import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import icon from "./icon";

registerBlockType("create-block/table-of-content", {
	title: __("Table Of Content", "create-block"),
	description: __(
		"Example block written with ESNext standard and JSX support – build step required.",
		"create-block"
	),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
});
