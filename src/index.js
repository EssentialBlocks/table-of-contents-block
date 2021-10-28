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
	category,
	icon: TOC_Icon,
	attributes,
	edit: Edit,
	save,
	example,
});
