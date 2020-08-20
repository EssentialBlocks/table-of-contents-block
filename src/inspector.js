/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, BaseControl, ToggleControl } from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {
	const { visibleHeaders } = attributes;

	return (
		<InspectorControls key="controls">
			<PanelBody>
				<BaseControl label={__("Header Visibility")}>
					{visibleHeaders.map((header, index) => (
						<ToggleControl
							label={`H${index + 1}`}
							checked={header}
							onChange={() =>
								setAttributes({
									visibleHeaders: [
										...visibleHeaders.slice(0, index),
										!visibleHeaders[index],
										...visibleHeaders.slice(index + 1),
									],
								})
							}
						/>
					))}
				</BaseControl>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
