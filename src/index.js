import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import icon from "./icon";

registerBlockType("block/table-of-contents-block", {
	title: __("Table Of Contents", "create-block"),
	description: __(
		"Example block written with ESNext standard and JSX support – build step required.",
		"table-of-contents-block"
	),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
});
