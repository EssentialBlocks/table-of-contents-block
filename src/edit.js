import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
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

const useHeader = () => {
	const allBlocks = useSelect((select) =>
		select("core/block-editor").getBlocks()
	);
	const headerBlocks = allBlocks.filter(
		(block) => isCoreHeading(block) || isEbHeading(block)
	);
	const headerTexts = getTextFromBlocks(headerBlocks);
	return headerTexts;
};

export default function Edit({ attributes, setAttributes }) {
	const { headers } = attributes;
	const headerTexts = useHeader();

	useEffect(() => {
		if (JSON.stringify(headerTexts) !== JSON.stringify(headers)) {
			setAttributes({ headers: headerTexts });
		}
	}, [headerTexts]);

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
