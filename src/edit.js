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
import {
	isCoreHeading,
	getFromCoreHeading,
	isEbHeading,
	getFromEbHeading,
} from "./helper";
import "./editor.scss";

function getArrayFromBlocks(headerBlocks) {
	let headerArray = [];

	if (headerBlocks.length > 0) {
		headerBlocks.map((block) => {
			let header = {};

			if (isCoreHeading(block)) {
				header = getFromCoreHeading(block);
			} else if (isEbHeading(block)) {
				header = getFromEbHeading(block);
			}
			headerArray.push(header);
		});
	}

	return headerArray;
}

const useHeader = () => {
	const allBlocks = useSelect((select) =>
		select("core/block-editor").getBlocks()
	);
	const headerBlocks = allBlocks.filter(
		(block) => isCoreHeading(block) || isEbHeading(block)
	);
	const headerArray = getArrayFromBlocks(headerBlocks);

	return headerArray;
};

export default function Edit({ isSelected, attributes, setAttributes }) {
	const { headers, visibleHeaders } = attributes;

	const headerArray = useHeader();

	useEffect(() => {
		if (JSON.stringify(headerArray) !== JSON.stringify(headers)) {
			setAttributes({ headers: headerArray });
		}
	}, [headerArray]);

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
