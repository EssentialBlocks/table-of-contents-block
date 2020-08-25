/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, BaseControl, ToggleControl } from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {
	const { visibleHeaders, hasNumber, collapsible } = attributes;

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

				<ToggleControl
					label={__("Ordered List")}
					checked={hasNumber}
					onChange={() => setAttributes({ hasNumber: !hasNumber })}
				/>

				<ToggleControl
					label={__("Collapsible")}
					checked={collapsible}
					onChange={() => setAttributes({ collapsible: !collapsible })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
