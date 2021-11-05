/**
 * WordPress dependencies
 */

const { __ } = wp.i18n;
const { InspectorControls, MediaUpload } = wp.blockEditor;
const { useState, useEffect } = wp.element;
const { select } = wp.data;
const {
	PanelBody,
	BaseControl,
	ToggleControl,
	RangeControl,
	TabPanel,
	SelectControl,
	ButtonGroup,
	Button,
} = wp.components;

/**
 * Internal dependencies
 */

import Select from "react-select";

// import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
// import faIcons from "../util/faIcons.js";
import TypographyDropdown from "../util/typography-control-v2";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import ResponsiveRangeController from "../util/responsive-range-control";
// import ImageAvatar from "../util/image-avatar/";
// import GradientColorControl from "../util/gradient-color-controller";
import ColorControl from "../util/color-control";
import BorderShadowControl from "../util/border-shadow-control";
// import BackgroundControl from "../util/background-control";
import UnitControl from "../util/unit-control";
// import FontPicker from "../util/typography-control/FontPicker";
// import DimensionsControl from "../util/dimensions-control";
import ResetControl from "../util/reset-control";

import objAttributes from "./attributes";

import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

import {
	// typoPrefix_number,
	// typoPrefix_subTitle,
	// typoPrefix_buttonText,

	//
	typoPrefix_title,
	typoPrefix_content,
} from "./constants/typographyPrefixConstants";

import {
	// mediaIconSize,
	// mediaImageWidth,
	// mediaImageHeight,
	// mediaContentGap,

	wrapMaxWidthPrefix,
} from "./constants/rangeNames";

import {
	//
	WrpMarginConst,
	WrpPaddingConst,
	titlePaddingConst,
	contentPaddingConst,
} from "./constants/dimensionsConstants";

// import {
// 	//
// 	WrpBgConst,
// } from "./constants/backgroundsConstants";

import {
	//
	WrpBdShadowConst,
} from "./constants/borderShadowConstants";

import {
	//
	HEADERS,
	ALIGNS,
	BORDER_STYLES,
} from "./constants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		// responsive control attributes ⬇
		resOption,

		//
		visibleHeaders,
		collapsible,
		initialCollapse,
		mainBgc,
		titleBg,
		titleColor,
		contentBg,
		contentColor,
		contentHoverColor,
		indent,
		contentGap,
		contentGapUnit,
		displayTitle,
		titleAlign,
		isSmooth,
		seperator,
		seperatorSize,
		seperatorColor,
		seperatorStyle,
		scrollToTop,
		arrowHeight,
		arrowWidth,
		arrowBg,
		arrowColor,
		listSeperatorWidth,
		listSeperatorStyle,
		listSeperatorColor,
		hasUnderline,
		isSticky,
		contentHeight,
		topSpace,
		hideOnMobile,

		//
		showListSeparator,
	} = attributes;

	const [options, setOptions] = useState(HEADERS);
	const [defaultOptions, setDefaultOptions] = useState([]);

	useEffect(() => {
		// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});

		// this following code is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});

		// all cleanups inside the return
		return () => {
			cleanUp();
		};
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	//
	useEffect(() => {
		setDefaultVisible();
	}, [visibleHeaders]);

	//
	useEffect(() => {
		if (isSticky) {
			setAttributes({ displayTitle: true, collapsible: true });
		}
	}, [isSticky]);

	//
	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	const setDefaultVisible = () => {
		let defaultOptions = [];

		visibleHeaders.map((header, index) => {
			if (header) {
				defaultOptions.push({ label: `h${index + 1}`, value: index + 1 });
			}
		});

		setDefaultOptions(defaultOptions);
	};

	const CONTENT_GAP_STEP = contentGapUnit === "em" ? 0.1 : 1;
	const CONTENT_GAP_MAX = contentGapUnit === "em" ? 10 : 100;

	const onHeaderChange = (options) => {
		if (options) {
			let visibleHeaders = Array(6).fill(false);

			options.map((option) => (visibleHeaders[option.value - 1] = true));

			setAttributes({ visibleHeaders });
		} else {
			setAttributes({ visibleHeaders: [] });
		}
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						// {
						// 	name: "styles",
						// 	title: "Styles",
						// 	className: "eb-tab styles",
						// },
						{
							name: "advance",
							title: "Advance",
							className: "eb-tab advance",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name} key={tab.name}>
							{tab.name === "general" && (
								<>
									<style>
										{`
										.fix-select-over-lapping>div>div{
											z-index:999999 !important;
										}

										.wrap-width-range-fix-style .responsiveRangeControllerWrapper> .responsive-btn-wrapper > .responsive-btn > .responsive-btn-label{
											display:block;
											padding-bottom:5px;
										}


										.wrap-width-range-fix-style .responsiveRangeControllerWrapper{
											padding-top:15px;
										}

										.wrap-width-range-fix-style .responsiveRangeControllerWrapper> .components-button-group.eb-unit-control-btn-group{
											margin-bottom:-40px;
										}
										`}
									</style>

									<PanelBody title={__("Visible Headers")}>
										<div className="fix-select-over-lapping">
											<Select
												options={options}
												defaultValue={defaultOptions}
												isMulti
												onChange={onHeaderChange}
											/>
										</div>
									</PanelBody>

									<PanelBody>
										<div className="wrap-width-range-fix-style">
											<ResponsiveRangeController
												baseLabel={__(
													`${
														isSticky
															? "sticky content max width"
															: "Container max width"
													}`
												)}
												controlName={wrapMaxWidthPrefix}
												resRequiredProps={resRequiredProps}
												min={0}
												max={2000}
												step={1}
											/>
										</div>

										{displayTitle && !isSticky && (
											<ToggleControl
												label={__("Collapsible")}
												checked={collapsible}
												onChange={() =>
													setAttributes({ collapsible: !collapsible })
												}
											/>
										)}

										{displayTitle && collapsible && (
											<ToggleControl
												label={__("Collapsed initially")}
												checked={initialCollapse}
												onChange={() =>
													setAttributes({ initialCollapse: !initialCollapse })
												}
											/>
										)}

										<ToggleControl
											label={__("Sticky contents")}
											help={__(
												"Always show contents on sidebar (Visible on frontend only)"
											)}
											checked={isSticky}
											onChange={() => setAttributes({ isSticky: !isSticky })}
										/>

										{isSticky && (
											<PanelBody
												title={__("Sticky settings")}
												initialOpen={false}
											>
												<ToggleControl
													label={__("Hide on Mobile")}
													checked={hideOnMobile}
													onChange={() =>
														setAttributes({ hideOnMobile: !hideOnMobile })
													}
												/>

												<ResetControl
													onReset={() =>
														setAttributes({ contentHeight: undefined })
													}
												>
													<RangeControl
														label={__("Content min-height")}
														help={__("Visible on frontend only")}
														value={contentHeight}
														onChange={(contentHeight) =>
															setAttributes({ contentHeight })
														}
														min={0}
														max={1000}
													/>
												</ResetControl>

												<RangeControl
													label={__("Top Space")}
													help={__("Visible on frontend only")}
													value={topSpace}
													onChange={(topSpace) => setAttributes({ topSpace })}
													min={0}
													max={100}
												/>
											</PanelBody>
										)}

										{!isSticky && (
											<ToggleControl
												label={__("Display Title")}
												checked={displayTitle}
												onChange={() =>
													setAttributes({ displayTitle: !displayTitle })
												}
											/>
										)}

										{displayTitle && (
											<PanelBody
												title={__("Title Settings")}
												initialOpen={false}
											>
												<BaseControl
													label={__("Align")}
													className="eb-base-control"
												>
													<ButtonGroup>
														{ALIGNS.map((align, index) => (
															<Button
																isSmall
																isPrimary={titleAlign === align.value}
																isSecondary={titleAlign !== align.value}
																onClick={() =>
																	setAttributes({ titleAlign: align.value })
																}
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
													onChange={(titleColor) =>
														setAttributes({ titleColor })
													}
												/>

												<TypographyDropdown
													baseLabel="Typography"
													typographyPrefixConstant={typoPrefix_title}
													resRequiredProps={resRequiredProps}
													defaultFontSize={22}
												/>

												<ResponsiveDimensionsControl
													resRequiredProps={resRequiredProps}
													controlName={titlePaddingConst}
													baseLabel="Padding"
												/>
											</PanelBody>
										)}

										{displayTitle && (
											<ToggleControl
												label={__("Title Seperator")}
												checked={seperator}
												onChange={() =>
													setAttributes({ seperator: !seperator })
												}
											/>
										)}

										{displayTitle && seperator && (
											<PanelBody
												title={__("Title seperator settings")}
												initialOpen={false}
											>
												<RangeControl
													label={__("Seperator Size")}
													value={seperatorSize}
													onChange={(seperatorSize) =>
														setAttributes({ seperatorSize })
													}
													min={0}
													max={100}
												/>

												<ColorControl
													label={__("Seperator Color")}
													color={seperatorColor}
													onChange={(seperatorColor) =>
														setAttributes({ seperatorColor })
													}
												/>

												<SelectControl
													label={__("Seperator Style")}
													value={seperatorStyle}
													options={BORDER_STYLES}
													onChange={(seperatorStyle) =>
														setAttributes({ seperatorStyle })
													}
												/>
											</PanelBody>
										)}
									</PanelBody>

									<PanelBody title={__("Content Settings")} initialOpen={false}>
										<ToggleControl
											label={__("Display Underline")}
											checked={hasUnderline}
											onChange={() =>
												setAttributes({ hasUnderline: !hasUnderline })
											}
										/>

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
											onClick={(contentGapUnit) =>
												setAttributes({ contentGapUnit })
											}
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
											onChange={(contentColor) =>
												setAttributes({ contentColor })
											}
										/>

										<ColorControl
											label={__("Hover Color")}
											color={contentHoverColor}
											onChange={(contentHoverColor) =>
												setAttributes({ contentHoverColor })
											}
										/>

										<TypographyDropdown
											baseLabel="Typography"
											typographyPrefixConstant={typoPrefix_content}
											resRequiredProps={resRequiredProps}
											defaultFontSize={20}
										/>

										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={contentPaddingConst}
											baseLabel="Padding"
										/>

										<ToggleControl
											label={__("Show Separator")}
											checked={showListSeparator}
											onChange={() =>
												setAttributes({ showListSeparator: !showListSeparator })
											}
										/>

										{showListSeparator && (
											<>
												<SelectControl
													label={__("Seperator Style")}
													value={listSeperatorStyle}
													options={BORDER_STYLES}
													onChange={(listSeperatorStyle) =>
														setAttributes({ listSeperatorStyle })
													}
												/>

												<ColorControl
													label={__("Seperator Color")}
													color={listSeperatorColor}
													onChange={(listSeperatorColor) =>
														setAttributes({ listSeperatorColor })
													}
												/>

												<RangeControl
													label={__("Seperator Size")}
													value={listSeperatorWidth}
													onChange={(listSeperatorWidth) =>
														setAttributes({ listSeperatorWidth })
													}
													min={0}
													max={100}
												/>
											</>
										)}
									</PanelBody>

									<PanelBody title={__("Scroll")} initialOpen={false}>
										<ToggleControl
											label={__("Smooth Scroll")}
											checked={isSmooth}
											onChange={() => setAttributes({ isSmooth: !isSmooth })}
										/>

										<ToggleControl
											label={__("Scroll To Top")}
											checked={scrollToTop}
											onChange={() =>
												setAttributes({ scrollToTop: !scrollToTop })
											}
										/>

										{scrollToTop && (
											<>
												<RangeControl
													label={__("Arrow Height")}
													value={arrowHeight}
													onChange={(arrowHeight) =>
														setAttributes({ arrowHeight })
													}
													min={0}
													max={100}
												/>

												<RangeControl
													label={__("Arrow Width")}
													value={arrowWidth}
													onChange={(arrowWidth) =>
														setAttributes({ arrowWidth })
													}
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
													onChange={(arrowColor) =>
														setAttributes({ arrowColor })
													}
												/>
											</>
										)}
									</PanelBody>
								</>
							)}
							{/* {tab.name === "styles" && (
								<>
									<PanelBody
										title={__("Styles")}
										//  initialOpen={false}
									>
										<h3>Styles</h3>
									</PanelBody>
								</>
							)} */}
							{tab.name === "advance" && (
								<>
									<PanelBody
										title={__("Margin & Padding")}
										// initialOpen={true}
									>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WrpMarginConst}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WrpPaddingConst}
											baseLabel="Padding"
										/>
									</PanelBody>

									<PanelBody title={__("Background ")}>
										<ColorControl
											label={__("Background Color")}
											color={mainBgc}
											onChange={(mainBgc) => setAttributes({ mainBgc })}
										/>
									</PanelBody>

									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={WrpBdShadowConst}
											resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
										/>
									</PanelBody>
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
