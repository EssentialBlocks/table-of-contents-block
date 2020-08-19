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

function getLinks(headers) {
	let links = [];

	if (headers.length > 0) {
		headers.map((header) => {
			if (isEbHeading(header) || isCoreHeading(header)) {
				links.push(header.attributes.content);
			}
		});
	}

	return links;
}

export default function Edit() {
	function getBlocks() {
		const blocks = useSelect((select) => {
			return select("core/block-editor").getBlocks();
		}, []);

		return blocks;
	}

	const headers = getBlocks().filter(
		(block) => isCoreHeading(block) || isEbHeading(block)
	);

	const headerLinks = getLinks(headers);

	if (headerLinks.length === 0) {
		return <div>No header found</div>;
	}

	if (headerLinks.length > 0)
		return (
			<div>
				<ul>
					{headerLinks.map((header, index) => (
						<li key={index}>{header}</li>
					))}
				</ul>
			</div>
		);
}
