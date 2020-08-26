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
	SelectControl,
	ButtonGroup,
	Button,
	Dropdown,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import {
	ALIGNS,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "./constants";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";

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
		titleFontFamily,
		titleSizeUnit,
		titleFontSize,
		titleFontWeight,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnit,
		titleLineHeight,
		titleLineHeightUnit,
	} = attributes;

	const TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;
	const TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;

	const TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
	const TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;

	const TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
	const TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;

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

						<BaseControl
							label={__("Typography")}
							className="eb-typography-base"
						>
							<Dropdown
								className="eb-typography-dropdown"
								contentClassName="my-popover-content-classname"
								position="bottom right"
								renderToggle={({ isOpen, onToggle }) => (
									<Button
										isSmall
										onClick={onToggle}
										aria-expanded={isOpen}
										icon="edit"
									></Button>
								)}
								renderContent={() => (
									<div style={{ padding: "1rem" }}>
										<FontPicker
											label={__("Font Family")}
											value={titleFontFamily}
											onChange={(titleFontFamily) =>
												setAttributes({ titleFontFamily })
											}
										/>

										<UnitControl
											selectedUnit={titleSizeUnit}
											unitTypes={[
												{ label: "px", value: "px" },
												{ label: "%", value: "%" },
												{ label: "em", value: "em" },
											]}
											onClick={(titleSizeUnit) =>
												setAttributes({ titleSizeUnit })
											}
										/>

										<RangeControl
											label={__("Font Size")}
											value={titleFontSize}
											onChange={(titleFontSize) =>
												setAttributes({ titleFontSize })
											}
											step={TITLE_SIZE_STEP}
											min={0}
											max={TITLE_SIZE_MAX}
										/>

										<SelectControl
											label={__("Font Weight")}
											value={titleFontWeight}
											options={FONT_WEIGHTS}
											onChange={(titleFontWeight) =>
												setAttributes({ titleFontWeight })
											}
										/>

										<SelectControl
											label={__("Text Transform")}
											value={titleTextTransform}
											options={TEXT_TRANSFORM}
											onChange={(titleTextTransform) =>
												setAttributes({ titleTextTransform })
											}
										/>

										<SelectControl
											label={__("Text Decoration")}
											value={titleTextDecoration}
											options={TEXT_DECORATION}
											onChange={(titleTextDecoration) =>
												setAttributes({ titleTextDecoration })
											}
										/>

										<UnitControl
											selectedUnit={titleLetterSpacingUnit}
											unitTypes={[
												{ label: "px", value: "px" },
												{ label: "em", value: "em" },
											]}
											onClick={(titleLetterSpacingUnit) =>
												setAttributes({ titleLetterSpacingUnit })
											}
										/>

										<RangeControl
											label={__("Letter Spacing")}
											value={titleLetterSpacing}
											onChange={(titleLetterSpacing) =>
												setAttributes({ titleLetterSpacing })
											}
											min={0}
											max={TITLE_SPACING_MAX}
											step={TITLE_SPACING_STEP}
										/>

										<UnitControl
											selectedUnit={titleLineHeightUnit}
											unitTypes={[
												{ label: "px", value: "px" },
												{ label: "em", value: "em" },
											]}
											onClick={(titleLineHeightUnit) =>
												setAttributes({ titleLineHeightUnit })
											}
										/>

										<RangeControl
											label={__("Line Height")}
											value={titleLineHeight}
											onChange={(titleLineHeight) =>
												setAttributes({ titleLineHeight })
											}
											min={0}
											max={TITLE_LINE_HEIGHT_MAX}
											step={TITLE_LINE_HEIGHT_STEP}
										/>
									</div>
								)}
							/>
						</BaseControl>
					</PanelBody>
				)}

				<PanelBody title={__("Content Settings")} initialOpen={false}>
					<ToggleControl
						label={__("Ordered List")}
						checked={hasNumber}
						onChange={() => setAttributes({ hasNumber: !hasNumber })}
					/>

					<RangeControl
						label={__("Indent")}
						value={indent}
						onChange={(indent) => setAttributes({ indent })}
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
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
