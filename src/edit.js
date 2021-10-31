/**
 * WordPress dependencies
 */

const { __ } = wp.i18n;
const {
	BlockControls,
	RichText,
	BlockAlignmentToolbar,
	AlignmentToolbar,
	useBlockProps,
} = wp.blockEditor;
const { useState, useEffect } = wp.element;
const { select, useSelect } = wp.data;
const {
	PanelBody,
	BaseControl,
	ToggleControl,
	RangeControl,
	TextControl,
	TabPanel,
	SelectControl,
	ButtonGroup,
	Button,
	Dropdown,

	//
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
} = wp.components;

/*
 * External dependencies
 */
import striptags from "striptags";

/**
 * Internal dependencies
 *
 *
 *
 */

import "./editor.scss";

import {
	softMinifyCssStrings,
	generateBackgroundControlStyles,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

import {
	supportedHeaders,
	isCoreHeading,
	isEbHeading,
	isUaHeading,
	isKadenceHeading,
	isQubelyHeading,
	isQubelyText,
	isStackableHeader,
	isStackableHeading,
	isOtterHeading,
	isGetwidHeader,
	isGenerateBlocksHeader,
	isCreativeBlockHeading,
	isEasyBlocksHeading,
	isDiHeading,
	isElegantHeading,
	parseTocSlug,
} from "./helper";

import Inspector from "./inspector";
import {
	typoPrefix_content,
	typoPrefix_title,
	typoPrefix_subTitle,
	typoPrefix_number,
	typoPrefix_buttonText,
} from "./constants/typographyPrefixConstants";

import {
	//
	WrpMarginConst,
	WrpPaddingConst,
} from "./constants/dimensionsConstants";

import {
	//
	WrpBgConst,
} from "./constants/backgroundsConstants";
import {
	//
	WrpBdShadowConst,
} from "./constants/borderShadowConstants";

import {
	mediaIconSize,
	mediaImageWidth,
	mediaImageHeight,
	mediaContentGap,
} from "./constants/rangeNames";

import List from "./list";

function getArrayFromBlocks(headerBlocks) {
	let headerList = [];

	if (headerBlocks.length > 0) {
		headerBlocks.map((block) => {
			let header = {};

			if (
				isCoreHeading(block) ||
				isKadenceHeading(block) ||
				isQubelyHeading(block)
			) {
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
			} else if (isUaHeading(block)) {
				header = {
					level: parseInt(block.attributes.level),
					content: block.attributes.headingTitle,
					text: striptags(block.attributes.headingTitle),
					link: parseTocSlug(striptags(block.attributes.headingTitle)),
				};
			} else if (isQubelyText(block)) {
				if (block.attributes.enableTitle) {
					header = {
						level: parseInt(block.attributes.titleLevel),
						content: block.attributes.title,
						text: striptags(block.attributes.title),
						link: parseTocSlug(striptags(block.attributes.title)),
					};
				}
			} else if (isStackableHeader(block)) {
				if (block.attributes.showTitle) {
					header = {
						level: parseInt(block.attributes.titleTag[1]),
						content: block.attributes.title,
						text: striptags(block.attributes.title),
						link: parseTocSlug(striptags(block.attributes.title)),
					};
				}
			} else if (isStackableHeading(block)) {
				header = {
					level: parseInt(block.attributes.titleTag[1]),
					content: block.attributes.title,
					text: striptags(block.attributes.title),
					link: parseTocSlug(striptags(block.attributes.title)),
				};
			} else if (isOtterHeading(block)) {
				header = {
					level: parseInt(block.attributes.tag[1]),
					content: block.attributes.content,
					text: striptags(block.attributes.content),
					link: parseTocSlug(striptags(block.attributes.content)),
				};
			} else if (isGetwidHeader(block)) {
				// Ignore getwid span and p tag
				if (block.attributes.titleTag[0] === "h") {
					header = {
						level: parseInt(block.attributes.titleTag[1]),
						content: block.attributes.content,
						text: striptags(block.attributes.content),
						link: parseTocSlug(striptags(block.attributes.content)),
					};
				}
			} else if (isGenerateBlocksHeader(block)) {
				// Ignore tags other than heading, check empty content
				if (
					block.attributes.element[0] === "h" &&
					block.attributes.content.length > 0
				) {
					let content = block.attributes.content.find(
						(item) => typeof item === "string"
					);

					if (content) {
						header = {
							level: parseInt(block.attributes.element[1]),
							conetnt: content,
							text: striptags(content),
							link: parseTocSlug(striptags(content)),
						};
					}
				}
			} else if (isCreativeBlockHeading(block)) {
				header = {
					level: parseInt(block.attributes.tag[1]),
					content: block.attributes.headingText,
					text: striptags(block.attributes.headingText),
					link: parseTocSlug(striptags(block.attributes.headingText)),
				};
			} else if (isEasyBlocksHeading(block)) {
				header = {
					level: 2, // Only suports h2
					content: block.attributes.title,
					text: striptags(block.attributes.title),
					link: parseTocSlug(striptags(block.attributes.title)),
				};
			} else if (isDiHeading(block)) {
				header = {
					level: parseInt(block.attributes.HeadTag[1]),
					content: block.attributes.HeadContent,
					text: striptags(block.attributes.HeadContent),
					link: parseTocSlug(striptags(block.attributes.HeadContent)),
				};
			} else if (isElegantHeading(block)) {
				header = {
					level: parseInt(block.attributes.headingTag[1]),
					content: block.attributes.title,
					text: striptags(block.attributes.title),
					link: parseTocSlug(striptags(block.attributes.title)),
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

	// console.log(allBlocks);

	const headerBlocks = allBlocks.filter((block) =>
		supportedHeaders.includes(block.name)
	);

	const headerList = getArrayFromBlocks(headerBlocks);

	return headerList;
};

export default function Edit({
	isSelected,
	attributes,
	setAttributes,
	clientId,
}) {
	const {
		resOption,
		blockId,
		blockMeta,

		//  deadline Date timestamp
		headers,
		title,
		collapsible,
		listType,
		titleBg,
		titleColor,
		contentBg,
		contentColor,
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
		contentAlign,
		containerWidth,
	} = attributes;

	const [visible, setVisible] = useState(true);

	const headerList = useHeader();

	useEffect(() => {
		if (JSON.stringify(headerList) !== JSON.stringify(headers)) {
			setAttributes({ headers: headerList });
		}
	}, [headerList]);

	useEffect(() => {
		const goTop = document.createElement("div");
		goTop.setAttribute(
			"class",
			"eb-toc-go-top dashicons dashicons-arrow-up-alt2"
		);
		goTop.style.right = "300px";
		document.body.insertBefore(goTop, document.body.lastChild);
	}, []);

	useEffect(() => {
		const scrollElement = document.querySelector(".eb-toc-go-top");

		if (scrollToTop) {
			scrollElement.classList.add("show-scroll");
			scrollElement.classList.remove("hide-scroll");
		} else {
			scrollElement.classList.add("hide-scroll");
			scrollElement.classList.remove("show-scroll");
		}
	}, [scrollToTop]);

	useEffect(() => {
		const scrollElement = document.querySelector(".eb-toc-go-top");

		if (scrollElement) {
			if (arrowHeight) scrollElement.style.height = arrowHeight + "px";

			if (arrowWidth) scrollElement.style.width = arrowWidth + "px";

			if (arrowBg) scrollElement.style.background = arrowBg;

			if (arrowColor) scrollElement.style.color = arrowColor;
		}
	}, [arrowHeight, arrowWidth, arrowBg, arrowColor]);

	const wrapperStyle = {
		width: containerWidth + "%",
		border: `${borderWidth}px ${borderStyle} ${borderColor}`,
		background: contentBg,
		boxShadow: `${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${
			spread || 0
		}px ${shadowColor || "black"}`,
	};

	const titleStyle = {
		display: displayTitle ? "block" : "none",
		fontFamily: titleFontFamily,
		fontSize: titleFontSize + titleSizeUnit,
		fontWeight: titleFontWeight,
		textTransform: titleTextTransform,
		textDecoration: titleTextDecoration,
		letterSpacing: titleLetterSpacing + titleLetterSpacingUnit,
		lineHeight: titleLineHeight + titleLineHeightUnit,
		textAlign: titleAlign,
		cursor: collapsible ? "pointer" : "default",
		color: titleColor,
		background: titleBg,
		borderBottom: seperator
			? `${seperatorSize || 0}px ${seperatorStyle} ${seperatorColor}`
			: "none",
		padding: `${titlePaddingTop || 0}${titlePaddingUnit} ${
			titlePaddingRight || 0
		}${titlePaddingUnit} ${titlePaddingBottom || 0}${titlePaddingUnit} ${
			titlePaddingLeft || 0
		}${titlePaddingUnit}`,
	};

	const contentStyle = {
		textAlign: contentAlign,
		color: contentColor,
		display: visible ? "block" : "none",
		background: contentBg,
		padding: `${contentPaddingTop || 0}${contentPaddingUnit} ${
			contentPaddingRight || 0
		}${contentPaddingUnit} ${contentPaddingBottom || 0}${contentPaddingUnit} ${
			contentPaddingLeft || 0
		}${contentPaddingUnit}`,
	};

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating a unique blockId for each block's unique className
	useEffect(() => {
		const BLOCK_PREFIX = "eb-toc";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// styling codes start from here
	//

	// // styles related to generateResponsiveRangeStyles start ⬇
	// const {
	// 	rangeStylesDesktop: wrapWidthDesktop,
	// 	rangeStylesTab: wrapWidthTab,
	// 	rangeStylesMobile: wrapWidthMobile,
	// } = generateResponsiveRangeStyles({
	// 	controlName: wrapperWidth,
	// 	customUnit: "px",
	// 	property: "max-width",
	// 	attributes,
	// });

	// const {
	// 	rangeStylesDesktop: BoxsSpaceBetweenDesktop,
	// 	rangeStylesTab: BoxsSpaceBetweenTab,
	// 	rangeStylesMobile: BoxsSpaceBetweenMobile,
	// } = generateResponsiveRangeStyles({
	// 	controlName: boxsSpaceConst,
	// 	customUnit: "px",
	// 	property: flexDirection === "row" ? "margin-left" : "margin-top",
	// 	attributes,
	// });

	// const {
	// 	rangeStylesDesktop: SeparatorTopDesktop,
	// 	rangeStylesTab: SeparatorTopTab,
	// 	rangeStylesMobile: SeparatorTopMobile,
	// } = generateResponsiveRangeStyles({
	// 	controlName: separatorPosTop,
	// 	property: "top",
	// 	attributes,
	// });

	// const {
	// 	rangeStylesDesktop: SeparatorRightDesktop,
	// 	rangeStylesTab: SeparatorRightTab,
	// 	rangeStylesMobile: SeparatorRightMobile,
	// } = generateResponsiveRangeStyles({
	// 	controlName: separatorPosRight,
	// 	property: "padding-right",
	// 	attributes,
	// });
	// // styles related to generateResponsiveRangeStyles end

	// // styles related to generateTypographyStyles start ⬇
	// const {
	// 	typoStylesDesktop: digitsTypoStylesDesktop,
	// 	typoStylesTab: digitsTypoStylesTab,
	// 	typoStylesMobile: digitsTypoStylesMobile,
	// } = generateTypographyStyles({
	// 	attributes,
	// 	prefixConstant: typoPrefix_digits,
	// 	defaultFontSize: 40,
	// });

	// const {
	// 	typoStylesDesktop: labelsTypoStylesDesktop,
	// 	typoStylesTab: labelsTypoStylesTab,
	// 	typoStylesMobile: labelsTypoStylesMobile,
	// } = generateTypographyStyles({
	// 	attributes,
	// 	prefixConstant: typoPrefix_labels,
	// 	defaultFontSize: 18,
	// });

	// const {
	// 	typoStylesDesktop: separatorTypoStylesDesktop,
	// 	typoStylesTab: separatorTypoStylesTab,
	// 	typoStylesMobile: separatorTypoStylesMobile,
	// } = generateTypographyStyles({
	// 	attributes,
	// 	prefixConstant: typoPrefix_separator,
	// 	defaultFontSize: 44,
	// });
	// // styles related to generateTypographyStyles end

	// // styles related to generateBackgroundControlStyles start ⬇

	const {
		backgroundStylesDesktop: wrpBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
		backgroundStylesTab: wrpBackgroundStylesTab,
		hoverBackgroundStylesTab: wrpHoverBackgroundStylesTab,
		backgroundStylesMobile: wrpBackgroundStylesMobile,
		hoverBackgroundStylesMobile: wrpHoverBackgroundStylesMobile,
		overlayStylesDesktop: wrpOverlayStylesDesktop,
		hoverOverlayStylesDesktop: wrpHoverOverlayStylesDesktop,
		overlayStylesTab: wrpOverlayStylesTab,
		hoverOverlayStylesTab: wrpHoverOverlayStylesTab,
		overlayStylesMobile: wrpOverlayStylesMobile,
		hoverOverlayStylesMobile: wrpHoverOverlayStylesMobile,
		bgTransitionStyle: wrpBgTransitionStyle,
		ovlTransitionStyle: wrpOvlTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: WrpBgConst,
		// noOverlay: true,
		// noMainBgi: true,
		// noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
	});

	// // styles related to generateBackgroundControlStyles end

	// // styles related to generateDimensionsControlStyles start ⬇
	const {
		dimensionStylesDesktop: wrpMarginDesktop,
		dimensionStylesTab: wrpMarginTab,
		dimensionStylesMobile: wrpMarginMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: WrpMarginConst,
		styleFor: "margin",
	});

	const {
		dimensionStylesDesktop: wrpPaddingDesktop,
		dimensionStylesTab: wrpPaddingTab,
		dimensionStylesMobile: wrpPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: WrpPaddingConst,
		styleFor: "padding",
	});

	// // styles related to generateDimensionsControlStyles end

	// // styles related to generateBorderShadowStyles start ⬇
	const {
		styesDesktop: wrpBdShdStyesDesktop,
		styesTab: wrpBdShdStyesTab,
		styesMobile: wrpBdShdStyesMobile,
		stylesHoverDesktop: wrpBdShdStylesHoverDesktop,
		stylesHoverTab: wrpBdShdStylesHoverTab,
		stylesHoverMobile: wrpBdShdStylesHoverMobile,
		transitionStyle: wrpBdShdTransitionStyle,
	} = generateBorderShadowStyles({
		controlName: WrpBdShadowConst,
		attributes,
		// noShadow: true,
		// noBorder: true,
	});

	// // styles related to generateBorderShadowStyles end

	const wrapperStylesDesktop = `
		.${blockId}.eb-toc-container{
			${wrpBackgroundStylesDesktop}
			${wrpMarginDesktop}
			${wrpPaddingDesktop}
			${wrpBdShdStyesDesktop}
			transition:all 0.5s, ${wrpBgTransitionStyle}, ${wrpBdShdTransitionStyle};
		}
		.${blockId}.eb-toc-container:hover{
			${wrpHoverBackgroundStylesDesktop}
			${wrpBdShdStylesHoverDesktop}
			
			
		}
		.${blockId}.eb-toc-container:before{
			${wrpOverlayStylesDesktop}
			transition:all 0.5s, ${wrpOvlTransitionStyle};
			
		}
		.${blockId}.eb-toc-container:hover:before{
			${wrpHoverOverlayStylesDesktop}
			
		}
	`;

	const wrapperStylesTab = `
		.${blockId}.eb-toc-container{
			${wrpBackgroundStylesTab}
			${wrpMarginTab}
			${wrpPaddingTab}
			${wrpBdShdStyesTab}
		}
		.${blockId}.eb-toc-container:hover{
			${wrpHoverBackgroundStylesTab}
			${wrpBdShdStylesHoverTab}
			
			
		}
		.${blockId}.eb-toc-container:before{
			${wrpOverlayStylesTab}
			
		}
		.${blockId}.eb-toc-container:hover:before{
			${wrpHoverOverlayStylesTab}
			
		}
		
	`;

	const wrapperStylesMobile = `
		.${blockId}.eb-toc-container{
			${wrpBackgroundStylesMobile}
			${wrpMarginMobile}
			${wrpPaddingMobile}
			${wrpBdShdStyesMobile}
		}
		.${blockId}.eb-toc-container:hover{
			${wrpHoverBackgroundStylesMobile}
			${wrpBdShdStylesHoverMobile}
			

		}
		.${blockId}.eb-toc-container:before{
			${wrpOverlayStylesMobile}
			
		}
		.${blockId}.eb-toc-container:hover:before{
			${wrpHoverOverlayStylesMobile}
			
		}
		
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`		
		${wrapperStylesDesktop}


	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}


	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}


	`);

	//
	// styling codes End here
	//

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),

		<BlockControls>
			<AlignmentToolbar
				value={contentAlign}
				onChange={(contentAlign) => setAttributes({ contentAlign })}
				controls={["left", "center", "right"]}
			/>
			<ToolbarGroup>
				<ToolbarButton
					title="Unordered"
					icon="editor-ul"
					isActive={listType === "ul"}
					onClick={() => setAttributes({ listType: "ul" })}
				/>

				<ToolbarButton
					title="Ordered"
					icon="editor-ol"
					isActive={listType === "ol"}
					onClick={() => setAttributes({ listType: "ol" })}
				/>

				<ToolbarButton
					title="None"
					icon="minus"
					isActive={listType === "none"}
					onClick={() => setAttributes({ listType: "none" })}
				/>
			</ToolbarGroup>
		</BlockControls>,

		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>
			<div className={`${blockId} eb-toc-container`} style={wrapperStyle}>
				<div onClick={() => collapsible && setVisible(!visible)}>
					<RichText
						className="eb-toc-title"
						style={titleStyle}
						placeholder="Table of content"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
				</div>
				{headers.length > 0 ? (
					<div className="eb-toc-wrapper" style={contentStyle}>
						<List attributes={attributes} />
					</div>
				) : (
					<p>Add header to generate table of contents</p>
				)}
			</div>
		</div>,
	];
}
