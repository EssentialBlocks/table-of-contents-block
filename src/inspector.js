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
	SEPERATOR_STYLES,
} from "./constants";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control/index";

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
		contentFontFamily,
		contentSizeUnit,
		contentFontSize,
		contentFontWeight,
		contentTextTransform,
		contentTextDecoration,
		contentLetterSpacing,
		contentLetterSpacingUnit,
		contentLineHeight,
		contentLineHeightUnit,
		isSmooth,
		seperator,
		seperatorSize,
		seperatorColor,
		seperatorStyle,
	} = attributes;

	const TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;
	const TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;

	const TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
	const TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;

	const TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
	const TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;

	const CONTENT_SIZE_STEP = contentSizeUnit === "em" ? 0.1 : 1;
	const CONTENT_SIZE_MAX = contentSizeUnit === "em" ? 10 : 100;

	const CONTENT_LINE_HEIGHT_STEP = contentLineHeightUnit === "em" ? 0.1 : 1;
	const CONTENT_LINE_HEIGHT_MAX = contentLineHeightUnit === "em" ? 10 : 100;

	const CONTENT_SPACING_STEP = contentLetterSpacingUnit === "em" ? 0.1 : 1;
	const CONTENT_SPACING_MAX = contentLetterSpacingUnit === "em" ? 10 : 100;

	return (
		<InspectorControls key="controls">
			<PanelBody title={__("Visible Headers")}>
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
			</PanelBody>

			<PanelBody>
				<ToggleControl
					label={__("Display Title")}
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

				<ToggleControl
					label={__("Smooth Scroll")}
					checked={isSmooth}
					onChange={() => setAttributes({ isSmooth: !isSmooth })}
				/>

				{displayTitle && (
					<ToggleControl
						label={__("Seperator")}
						checked={seperator}
						onChange={() => setAttributes({ seperator: !seperator })}
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

					<ColorControl
						label={__("Background Color")}
						color={titleBg}
						onChange={(titleBg) => setAttributes({ titleBg })}
					/>

					<ColorControl
						label={__("Text Color")}
						color={titleColor}
						onChange={(titleColor) => setAttributes({ titleColor })}
					/>

					<BaseControl label={__("Typography")} className="eb-typography-base">
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

				<ColorControl
					label={__("Background Color")}
					color={contentBg}
					onChange={(contentBg) => setAttributes({ contentBg })}
				/>

				<ColorControl
					label={__("Text Color")}
					color={contentColor}
					onChange={(contentColor) => setAttributes({ contentColor })}
				/>

				<BaseControl label={__("Typography")} className="eb-typography-base">
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
									value={contentFontFamily}
									onChange={(contentFontFamily) =>
										setAttributes({ contentFontFamily })
									}
								/>

								<UnitControl
									selectedUnit={contentSizeUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "%", value: "%" },
										{ label: "em", value: "em" },
									]}
									onClick={(contentSizeUnit) =>
										setAttributes({ contentSizeUnit })
									}
								/>

								<RangeControl
									label={__("Font Size")}
									value={contentFontSize}
									onChange={(contentFontSize) =>
										setAttributes({ contentFontSize })
									}
									step={CONTENT_SIZE_STEP}
									min={0}
									max={CONTENT_SIZE_MAX}
								/>

								<SelectControl
									label={__("Font Weight")}
									value={contentFontWeight}
									options={FONT_WEIGHTS}
									onChange={(contentFontWeight) =>
										setAttributes({ contentFontWeight })
									}
								/>

								<SelectControl
									label={__("Text Transform")}
									value={contentTextTransform}
									options={TEXT_TRANSFORM}
									onChange={(contentTextTransform) =>
										setAttributes({ contentTextTransform })
									}
								/>

								<SelectControl
									label={__("Text Decoration")}
									value={contentTextDecoration}
									options={TEXT_DECORATION}
									onChange={(contentTextDecoration) =>
										setAttributes({ contentTextDecoration })
									}
								/>

								<UnitControl
									selectedUnit={contentLetterSpacingUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(contentLetterSpacingUnit) =>
										setAttributes({ contentLetterSpacingUnit })
									}
								/>

								<RangeControl
									label={__("Letter Spacing")}
									value={contentLetterSpacing}
									onChange={(contentLetterSpacing) =>
										setAttributes({ contentLetterSpacing })
									}
									min={0}
									max={CONTENT_SPACING_MAX}
									step={CONTENT_SPACING_STEP}
								/>

								<UnitControl
									selectedUnit={contentLineHeightUnit}
									unitTypes={[
										{ label: "px", value: "px" },
										{ label: "em", value: "em" },
									]}
									onClick={(contentLineHeightUnit) =>
										setAttributes({ contentLineHeightUnit })
									}
								/>

								<RangeControl
									label={__("Line Height")}
									value={contentLineHeight}
									onChange={(contentLineHeight) =>
										setAttributes({ contentLineHeight })
									}
									min={0}
									max={CONTENT_LINE_HEIGHT_MAX}
									step={CONTENT_LINE_HEIGHT_STEP}
								/>
							</div>
						)}
					/>
				</BaseControl>
			</PanelBody>

			{seperator && (
				<PanelBody title={__("Seperator")}>
					<RangeControl
						label={__("Seperator Size")}
						value={seperatorSize}
						onChange={(seperatorSize) => setAttributes({ seperatorSize })}
						min={0}
						max={100}
					/>

					<ColorControl
						label={__("Seperator Color")}
						color={seperatorColor}
						onChange={(seperatorColor) => setAttributes({ seperatorColor })}
					/>

					<SelectControl
						label={__("Seperator Style")}
						value={seperatorStyle}
						options={SEPERATOR_STYLES}
						onChange={(seperatorStyle) => setAttributes({ seperatorStyle })}
					/>
				</PanelBody>
			)}
		</InspectorControls>
	);
};

export default Inspector;
