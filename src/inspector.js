/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
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
	BORDER_STYLES,
} from "./constants";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control/index";
import DimensionsControl from "../util/dimensions-control";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		visibleHeaders,
		collapsible,
		initialCollapse,
		listType,
		listColor,
		titleBg,
		titleColor,
		contentBg,
		contentColor,
		indent,
		contentGap,
		contentGapUnit,
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
		borderWidth,
		borderColor,
		borderStyle,
		titlePaddingTop,
		titlePaddingRight,
		titlePaddingBottom,
		titlePaddingLeft,
		titlePaddingUnit,
		scrollToTop,
		arrowHeight,
		arrowWidth,
		arrowBg,
		arrowColor,
		shadowColor,
		hOffset,
		vOffset,
		blur,
		spread,
		contentPaddingTop,
		contentPaddingRight,
		contentPaddingBottom,
		contentPaddingLeft,
		contentPaddingUnit,
		radius,
		radiusUnit,
	} = attributes;

	const TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;
	const TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;

	const TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
	const TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;

	const TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
	const TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;

	const CONTENT_GAP_STEP = contentGapUnit === "em" ? 0.1 : 1;
	const CONTENT_GAP_MAX = contentGapUnit === "em" ? 10 : 100;

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
									/>,
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

				{displayTitle && collapsible && (
					<ToggleControl
						label={__("Initial Collapse")}
						checked={initialCollapse}
						onChange={() =>
							setAttributes({ initialCollapse: !initialCollapse })
						}
					/>
				)}

				{displayTitle && (
					<ToggleControl
						label={__("Title Seperator")}
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

					<UnitControl
						selectedUnit={titlePaddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "%", value: "%" },
							{ label: "em", value: "em" },
						]}
						onClick={(titlePaddingUnit) => setAttributes({ titlePaddingUnit })}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={titlePaddingTop}
						right={titlePaddingRight}
						bottom={titlePaddingBottom}
						left={titlePaddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								titlePaddingTop: top,
								titlePaddingRight: right,
								titlePaddingBottom: bottom,
								titlePaddingLeft: left,
							})
						}
					/>
				</PanelBody>
			)}

			<PanelBody title={__("Content Settings")} initialOpen={false}>
				<RangeControl
					label={__("Indent")}
					value={indent}
					onChange={(indent) => setAttributes({ indent })}
				/>

				<UnitControl
					selectedUnit={contentGapUnit}
					unitTypes={[
						{ label: "px", value: "px" },
						{ label: "%", value: "%" },
						{ label: "em", value: "em" },
					]}
					onClick={(contentGapUnit) => setAttributes({ contentGapUnit })}
				/>

				<RangeControl
					label={__("Content Gap")}
					value={contentGap}
					onChange={(contentGap) => setAttributes({ contentGap })}
					min={0}
					max={CONTENT_GAP_MAX}
					step={CONTENT_GAP_STEP}
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

				{listType !== "none" && (
					<ColorControl
						label={__("Bullet Points Color")}
						color={listColor}
						onChange={(listColor) => setAttributes({ listColor })}
					/>
				)}

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

				<UnitControl
					selectedUnit={contentPaddingUnit}
					unitTypes={[
						{ label: "px", value: "px" },
						{ label: "%", value: "%" },
						{ label: "em", value: "em" },
					]}
					onClick={(contentPaddingUnit) =>
						setAttributes({ contentPaddingUnit })
					}
				/>

				<DimensionsControl
					label={__("Padding")}
					top={contentPaddingTop}
					right={contentPaddingRight}
					bottom={contentPaddingBottom}
					left={contentPaddingLeft}
					onChange={({ top, right, bottom, left }) =>
						setAttributes({
							contentPaddingTop: top,
							contentPaddingRight: right,
							contentPaddingBottom: bottom,
							contentPaddingLeft: left,
						})
					}
				/>
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
						options={BORDER_STYLES}
						onChange={(seperatorStyle) => setAttributes({ seperatorStyle })}
					/>
				</PanelBody>
			)}

			<PanelBody title={__("Scroll")} initialOpen={false}>
				<ToggleControl
					label={__("Smooth Scroll")}
					checked={isSmooth}
					onChange={() => setAttributes({ isSmooth: !isSmooth })}
				/>

				<ToggleControl
					label={__("Scroll To Top")}
					checked={scrollToTop}
					onChange={() => setAttributes({ scrollToTop: !scrollToTop })}
				/>

				<RangeControl
					label={__("Arrow Height")}
					value={arrowHeight}
					onChange={(arrowHeight) => setAttributes({ arrowHeight })}
					min={0}
					max={100}
				/>

				<RangeControl
					label={__("Arrow Width")}
					value={arrowWidth}
					onChange={(arrowWidth) => setAttributes({ arrowWidth })}
					min={0}
					max={100}
				/>

				<ColorControl
					label={__("Arrow Background")}
					color={arrowBg}
					onChange={(arrowBg) => setAttributes({ arrowBg })}
				/>

				<ColorControl
					label={__("Arrow Color")}
					color={arrowColor}
					onChange={(arrowColor) => setAttributes({ arrowColor })}
				/>
			</PanelBody>

			<PanelBody title={__("Border")} initialOpen={false}>
				<RangeControl
					label={__("Border Width")}
					value={borderWidth}
					onChange={(borderWidth) => setAttributes({ borderWidth })}
					min={0}
					max={100}
				/>

				<SelectControl
					label={__("Border Style")}
					value={borderStyle}
					options={BORDER_STYLES}
					onChange={(borderStyle) => setAttributes({ borderStyle })}
				/>

				<ColorControl
					label={__("Border Color")}
					color={borderColor}
					onChange={(borderColor) => setAttributes({ borderColor })}
				/>

				<UnitControl
					selectedUnit={radiusUnit}
					unitTypes={[
						{ label: "px", value: "px" },
						{ label: "%", value: "%" },
					]}
					onClick={(radiusUnit) => setAttributes({ radiusUnit })}
				/>

				<RangeControl
					label={__("Border Radius")}
					value={radius}
					onChange={(radius) => setAttributes({ radius })}
					min={0}
					max={100}
				/>
			</PanelBody>

			<PanelBody title={__("Shadow")} initialOpen={false}>
				<ColorControl
					label={__("Shadow Color")}
					color={shadowColor}
					onChange={(shadowColor) => setAttributes({ shadowColor })}
				/>

				<RangeControl
					label={__("Horizontal Offset")}
					value={hOffset}
					onChange={(hOffset) => setAttributes({ hOffset })}
					min={0}
					max={30}
				/>

				<RangeControl
					label={__("Vertical Offset")}
					value={vOffset}
					onChange={(vOffset) => setAttributes({ vOffset })}
					min={0}
					max={30}
				/>

				<RangeControl
					label={__("Blur")}
					value={blur}
					onChange={(blur) => setAttributes({ blur })}
					min={0}
					max={30}
				/>

				<RangeControl
					label={__("Spread")}
					value={spread}
					onChange={(spread) => setAttributes({ spread })}
					min={0}
					max={30}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
