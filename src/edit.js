/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import "./editor.scss";

function isCoreHeading(block) {
	return block.name === "core/heading";
}

function isEbHeading(block) {
	return (
		block.name === "essential-blocks/heading" || block.name === "block/heading"
	);
}

function getHeaders(block) {
	let headers = {};

	if (isCoreHeading(block)) {
		headers.level = parseInt(block.attributes.level);
		headers.content = block.attributes.content;
	} else if (isEbHeading(block)) {
		headers.level = parseInt(block.attributes.tagName[1]);
		headers.content = block.attributes.content;
	}

	return headers;
}

function getTextFromBlocks(headerBlocks) {
	let texts = [];

	if (headerBlocks.length > 0) {
		headerBlocks.map((block) => {
			if (isEbHeading(block) || isCoreHeading(block)) {
				const headers = getHeaders(block);
				texts.push(headers);
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

export default function Edit({ isSelected, attributes, setAttributes }) {
	const { headers, visibleHeaders } = attributes;

	const headerTexts = useHeader();

	useEffect(() => {
		if (JSON.stringify(headerTexts) !== JSON.stringify(headers)) {
			setAttributes({ headers: headerTexts });
		}
	}, [headerTexts]);

	// Decides whether header should be visible or not
	const isVisible = (header) => visibleHeaders[header.level - 1];

	if (headers.length === 0) {
		return <div>No header found</div>;
	}

	if (headers.length > 0) {
		return [
			isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			),
			<div>
				<ul>
					{headers.map(
						(header, index) =>
							isVisible(header) && <li key={index}>{header.content}</li>
					)}
				</ul>
			</div>,
		];
	}
}
