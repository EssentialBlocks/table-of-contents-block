/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */

import "./style.scss";

import { TOC_Icon } from "./icon";
import Edit from "./edit";
import save from "./save";
import attributes from "./attributes";
import metadata from "../block.json";

import example from "./example";

const { name, category } = metadata;

registerBlockType(name, {
	title: __("Table Of Contents", "table-of-contents-block"),
	description: __(
		"Insert Table of Contents on your posts/pages and enhance user experience on your WordPress website",
		"table-of-contents-block"
	),
	apiVersion: 2,
	supports: {
		// inserter: false,
		// reusable: false,
		// html: false,
		// anchor: true,
		// Declare support for specific alignment options.
		// align: ["wide", "full"],
		align: ["wide", "full"],
	},
	keywords: [
		__("TOC", "essential-blocks"),
		__("Table Of Contents", "essential-blocks"),
		__("eb table of contents", "essential-blocks"),
	],
	category,
	icon: TOC_Icon,
	attributes,
	edit: Edit,
	save,
	example,
});
