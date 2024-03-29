/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

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
import deprecated from "./deprecated";
const { ebConditionalRegisterBlockType } = EBTOCControls;

ebConditionalRegisterBlockType(metadata, {
	keywords: [
		__("TOC", "essential-blocks"),
		__("Table Of Contents", "essential-blocks"),
		__("eb table of contents", "essential-blocks"),
	],
	icon: TOC_Icon,
	attributes,
	edit: Edit,
	save,
	example,
	deprecated
});
