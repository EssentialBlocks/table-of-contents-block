import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

function isCoreHeading(block) {
	if (!block) return false;
	return block.name === "core/heading";
}

function isEbHeading(block) {
	if (!block) return false;
	return (
		block.name === "essential-blocks/heading" || block.name === "block/heading"
	);
}

function getTextFromBlocks(headerBlocks) {
	let texts = [];

	if (headerBlocks.length > 0) {
		headerBlocks.map((block) => {
			if (isEbHeading(block) || isCoreHeading(block)) {
				texts.push(block.attributes.content);
			}
		});
	}

	return texts;
}

export default function Edit({ attributes, setAttributes }) {
	const { headers } = attributes;
	// console.log("attribute headers", headers);

	useSelect((select) => {
		const allBlocks = select("core/block-editor").getBlocks();
		const headerBlocks = allBlocks.filter(
			(block) => isCoreHeading(block) || isEbHeading(block)
		);
		const headerTexts = getTextFromBlocks(headerBlocks);

		if (JSON.stringify(headerTexts) !== JSON.stringify(headers)) {
			// console.log(JSON.stringify(headerTexts));
			// console.log(JSON.stringify(headers));
			// setAttributes({ headers: headerTexts });
		}
	}, []);

	if (headers.length === 0) {
		return <div>No header found</div>;
	}

	if (headers.length > 0)
		return (
			<div>
				<ul>
					{headers.map((header, index) => (
						<li key={index}>{header}</li>
					))}
				</ul>
			</div>
		);
}
