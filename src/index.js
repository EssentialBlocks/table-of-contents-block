import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import icon from "./icon";

registerBlockType("table-of-contents-block/table-of-contents-block", {
	title: __("Table Of Contents", "table-of-contents-block"),
	description: __(
		"Insert Table of Contents on your posts/pages and enhance user experience on your WordPress website",
		"table-of-contents-block"
	),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
});
