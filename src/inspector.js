/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	BaseControl,
	ToggleControl,
	RangeControl,
	ButtonGroup,
	Button,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { ALIGNS } from "./constants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		visibleHeaders,
		hasNumber,
		collapsible,
		titleBg,
		titleColor,
		contentBg,
		contentColor,
		indent,
		displayTitle,
		titleAlign,
	} = attributes;

	return (
		<InspectorControls key="controls">
			<PanelBody>
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
						label={__("Display title")}
						checked={displayTitle}
						onChange={() => setAttributes({ displayTitle: !displayTitle })}
					/>

					{displayTitle && (
						<ToggleControl
							label={__("Collapsible")}
							checked={collapsible}
							onChange={() => setAttributes({ collapsible: !collapsible })}
						/>
					)}

					<RangeControl
						label={__("Indent")}
						value={indent}
						onChange={(indent) => setAttributes({ indent })}
					/>
				</PanelBody>

				{displayTitle && (
					<PanelBody title={__("Title Settings")} initialOpen={false}>
						<BaseControl label={__("Align")} className="eb-base-control">
							<ButtonGroup>
								{ALIGNS.map((align, index) => (
									<Button
										isSmall
										isPrimary={titleAlign === align.value}
										isSecondary={titleAlign !== align.value}
										onClick={() => setAttributes({ titleAlign: align.value })}
									>
										{align.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>
					</PanelBody>
				)}

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
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
