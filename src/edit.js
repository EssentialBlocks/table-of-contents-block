import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

function isCoreHeading(block) {
	return block.name === "core/heading";
}

function isEbHeading(block) {
	return (
		block.name === "essential-blocks/heading" || block.name === "block/heading"
	);
}

export default function Edit() {
	function getBlocks() {
		const blocks = useSelect((select) => {
			return select("core/block-editor").getBlocks();
		}, []);

		return blocks;
	}

	const allBlocks = getBlocks();

	const headers = allBlocks.filter(
		(block) => isCoreHeading(block) || isEbHeading(block)
	);

	return <h1>Done</h1>;
}
