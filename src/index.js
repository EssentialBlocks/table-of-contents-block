/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */

import "./style.scss";

import { TOC_Icon } from "../util/icons";
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
		__("countdown", "essential-blocks"),
		__("eb counter", "essential-blocks"),
		__("eb countdown", "essential-blocks"),
	],
	category,
	icon: TOC_Icon,
	attributes,
	edit: Edit,
	save,
	example,
});
