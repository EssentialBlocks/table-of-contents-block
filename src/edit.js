/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

/*
 * External dependencies
 */
import striptags from "striptags";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import {
	supportedHeaders,
	isCoreHeading,
	isEbHeading,
	parseTocSlug,
} from "./helper";
import "./editor.scss";
import List from "./list";

function getArrayFromBlocks(headerBlocks) {
	let headerList = [];

	if (headerBlocks.length > 0) {
		headerBlocks.map((block) => {
			let header = {};

			if (isCoreHeading(block)) {
				header = {
					level: parseInt(block.attributes.level),
					content: block.attributes.content,
					text: striptags(block.attributes.content),
					link: parseTocSlug(striptags(block.attributes.content)),
				};
			} else if (isEbHeading(block)) {
				header = {
					level: parseInt(block.attributes.tagName[1]),
					content: block.attributes.content,
					text: striptags(block.attributes.content),
					link: parseTocSlug(striptags(block.attributes.content)),
				};
			}

			headerList.push(header);
		});
	}

	return headerList;
}

// Custom hook for dynamic header list
const useHeader = () => {
	const allBlocks = useSelect((select) =>
		select("core/block-editor").getBlocks()
	);
	const headerBlocks = allBlocks.filter((block) =>
		supportedHeaders.includes(block.name)
	);
	const headerList = getArrayFromBlocks(headerBlocks);

	return headerList;
};

export default function Edit({ isSelected, attributes, setAttributes }) {
	const { headers, visibleHeaders } = attributes;

	const headerList = useHeader();

	useEffect(() => {
		if (JSON.stringify(headerList) !== JSON.stringify(headers)) {
			setAttributes({ headers: headerList });
		}
	}, [headerList]);

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
				<List mappingHeaders={visibleHeaders} headers={headers} />
			</div>,
		];
	}
}
