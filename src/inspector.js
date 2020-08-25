/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import { PanelBody, BaseControl, ToggleControl } from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		visibleHeaders,
		hasNumber,
		collapsible,
		titleBg,
		titleColor,
		contentBg,
		contentColor,
	} = attributes;

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

			<PanelColorSettings
				title={__("Colors ")}
				initialOpen={false}
				colorSettings={[
					{
						value: titleBg,
						onChange: (titleBg) => setAttributes({ titleBg }),
						label: __("Title Background"),
					},
					{
						value: titleColor,
						onChange: (titleColor) => setAttributes({ titleColor }),
						label: __("Title Color"),
					},
					{
						value: contentBg,
						onChange: (contentBg) => setAttributes({ contentBg }),
						label: __("Content Background"),
					},
					{
						value: contentColor,
						onChange: (contentColor) => setAttributes({ contentColor }),
						label: __("Content Color"),
					},
				]}
			/>
		</InspectorControls>
	);
};

export default Inspector;
