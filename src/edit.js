/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
	BlockControls,
	RichText,
	AlignmentToolbar,
	useBlockProps,
} from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { select, useSelect } from "@wordpress/data";

/*
 * External dependencies
 */
import striptags from "striptags";

const {
	softMinifyCssStrings,
	generateDimensionsControlStyles,
	generateTypographyStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	duplicateBlockIdFix,
} = window.EBTOCControls;

const editorStoreForGettingPreivew =
	eb_conditional_localize.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

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

import classnames from "classnames";

import Inspector from "./inspector";
import {
	typoPrefix_content,
	typoPrefix_title,
} from "./constants/typographyPrefixConstants";

import {
	//
	WrpMarginConst,
	WrpPaddingConst,
	contentPaddingConst,
	titlePaddingConst,
} from "./constants/dimensionsConstants";

import {
	//
	WrpBdShadowConst,
} from "./constants/borderShadowConstants";

import { wrapMaxWidthPrefix } from "./constants/rangeNames";

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
	className,
}) {
	const {
		resOption,
		blockId,
		blockMeta,
		headers,
		title,
		collapsible,
		listType,
		titleBg = "#ff7d50",
		titleColor = "#fff",
		contentBg = "#fff6f3",
		contentColor = "#707070",
		mainBgc,
		contentHoverColor,
		displayTitle,
		titleAlign,
		seperator,
		seperatorSize,
		seperatorColor = "#000",
		seperatorStyle,
		scrollToTop,
		arrowHeight,
		arrowWidth,
		arrowBg,
		arrowColor,
		contentAlign,
		isSticky,
		topSpace,
		contentHeight,
		indent,
		hasUnderline,
		classHook,
	} = attributes;

	const [visible, setVisible] = useState(true);

	const headerList = useHeader();

	useEffect(() => {
		if (JSON.stringify(headerList) !== JSON.stringify(headers)) {
			setAttributes({ headers: headerList });
		}
	}, [headerList]);

	useEffect(() => {
		if (document.querySelector(".eb-toc-go-top")) return () => {};
		const goTop = document.createElement("span");
		goTop.innerHTML = ">";
		goTop.setAttribute("class", "eb-toc-go-top ");
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

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select(
				editorStoreForGettingPreivew
			).__experimentalGetPreviewDeviceType(),
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

	const blockProps = useBlockProps({
		className: classnames(className, `eb-guten-block-main-parent-wrapper`),
	});

	// // styles related to generateResponsiveRangeStyles start ⬇
	const {
		rangeStylesDesktop: wrapMaxWidthDesktop,
		rangeStylesTab: wrapMaxWidthTab,
		rangeStylesMobile: wrapMaxWidthMobile,
	} = generateResponsiveRangeStyles({
		controlName: wrapMaxWidthPrefix,
		property: "max-width",
		attributes,
	});

	// // styles related to generateTypographyStyles start ⬇
	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_title,
		defaultFontSize: 22,
	});

	const {
		typoStylesDesktop: contentTypoStylesDesktop,
		typoStylesTab: contentTypoStylesTab,
		typoStylesMobile: contentTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_content,
		defaultFontSize: 20,
	});
	// // styles related to generateTypographyStyles end

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

	const {
		dimensionStylesDesktop: titlePaddingDesktop,
		dimensionStylesTab: titlePaddingTab,
		dimensionStylesMobile: titlePaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: titlePaddingConst,
		styleFor: "padding",
	});

	const {
		dimensionStylesDesktop: contentPaddingDesktop,
		dimensionStylesTab: contentPaddingTab,
		dimensionStylesMobile: contentPaddingMobile,
	} = generateDimensionsControlStyles({
		attributes,
		controlName: contentPaddingConst,
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

	const desktopAllStylesCommon = `
		  ${
				isSticky
					? `
			  .eb-parent-${blockId}.eb__animated, .eb__animated.eb__flip {
				  -webkit-animation-fill-mode: none;
				  animation-fill-mode: none;
				  -webkit-animation-name: none;
				  animation-name: none !important;
			  }
		  `
					: ""
			}
  
		  .${blockId}.eb-toc-container{
			  ${wrapMaxWidthDesktop}
			  
			  ${mainBgc ? `background-color:${mainBgc};` : ""}
  
			  ${wrpMarginDesktop}
			  ${wrpPaddingDesktop}
			  ${wrpBdShdStyesDesktop}
			  ${isSticky ? "" : `transition:all 0.5s, ${wrpBdShdTransitionStyle}`};
		  }
  
		  .${blockId}.eb-toc-container:hover{
			  ${wrpBdShdStylesHoverDesktop}
		  }
		  
		  .${blockId}.eb-toc-container .eb-toc-title{
			  text-align: ${titleAlign};
			  cursor:${collapsible ? "pointer" : "default"};
			  color: ${titleColor};
			  background-color:${titleBg};
			  ${
					seperator
						? `border-bottom:${
								seperatorSize || 0
						  }px ${seperatorStyle} ${seperatorColor};`
						: ""
				}
			  ${titlePaddingDesktop}
			  ${titleTypoStylesDesktop}
  
		  }
		  
		  .${blockId}.eb-toc-container .eb-toc-wrapper{
			  background-color:${contentBg};
			  text-align: ${contentAlign};
			  ${contentPaddingDesktop}
		  }
  
		  .${blockId}.eb-toc-container .eb-toc-wrapper ul,
		  .${blockId}.eb-toc-container .eb-toc-wrapper ol
		  {
			  ${listType === "none" ? `list-style: none;` : ""}
			  ${indent ? `margin-left:${indent}px;` : ""} 
		  }
		  
		  .${blockId}.eb-toc-container .eb-toc-wrapper li {
			  color:${contentColor};
			  ${contentTypoStylesDesktop}
		  }
		  
		  .${blockId}.eb-toc-container .eb-toc-wrapper li:hover{
			  color:${contentHoverColor};
		  }
  
		  .${blockId}.eb-toc-container .eb-toc-wrapper li a{
			  color:inherit;
		  }
		  
		  
		  .${blockId}.eb-toc-container .eb-toc-wrapper li a,
		  .${blockId}.eb-toc-container .eb-toc-wrapper li a:focus{
			  ${!hasUnderline ? "text-decoration:none;" : "text-decoration:underline;"}
			  background:none;
		  }
  
		  ${
				scrollToTop
					? `
			  .eb-toc-go-top.show-scroll {
				  ${arrowHeight ? `height: ${arrowHeight}px;` : ""}	
				  ${arrowWidth ? `width: ${arrowWidth}px;` : ""}	
				  ${arrowBg ? `background-color: ${arrowBg};` : ""}
				  ${arrowColor ? `color: ${arrowColor};` : ""}
			  }
			  `
					: // Important N.B. : in the selector above we used ".eb-toc-go-top.show-scroll" this. It's very important to start the selector with ".eb-" if this css strings goes inside "softMinifyCssStrings" function. Always make sure to use a selector that starts with ".eb-" when using this string inside "softMinifyCssStrings" function
					  ""
			}
  
	  `;

	const tabAllStylesCommon = `
		  .${blockId}.eb-toc-container{
			  ${wrapMaxWidthTab}
  
			  ${wrpMarginTab}
			  ${wrpPaddingTab}
			  ${wrpBdShdStyesTab}
		  }
		  .${blockId}.eb-toc-container:hover{
			  ${wrpBdShdStylesHoverTab}
		  }
  
		  .${blockId}.eb-toc-container .eb-toc-title{
			  ${titlePaddingTab}
			  ${titleTypoStylesTab}
		  }
		  
		  .${blockId}.eb-toc-container .eb-toc-wrapper{
			  ${contentPaddingTab}
		  }
		  
		  .${blockId}.eb-toc-container .eb-toc-wrapper li{
			  ${contentTypoStylesTab}
		  }
  
	  `;

	const mobileAllStylesCommon = `
		  .${blockId}.eb-toc-container{
			  ${wrapMaxWidthMobile}
  
  
			  ${wrpMarginMobile}
			  ${wrpPaddingMobile}
			  ${wrpBdShdStyesMobile}
		  }
		  
		  .${blockId}.eb-toc-container:hover{
			  ${wrpBdShdStylesHoverMobile}
		  }
  
		  .${blockId}.eb-toc-container .eb-toc-title{
			  ${titlePaddingMobile}
			  ${titleTypoStylesMobile}
		  }
		  
		  .${blockId}.eb-toc-container .eb-toc-wrapper{
			  ${contentPaddingMobile}
		  }
		  
		  .${blockId}.eb-toc-container .eb-toc-wrapper li{
			  ${contentTypoStylesMobile}
		  }
  
	  `;

	//
	const desktopAllStylesEditor = `
		  ${desktopAllStylesCommon}
  
  
		  .${blockId}.eb-toc-container .eb-toc-wrapper{
			  display:${visible ? "block" : "none"};
		  }
		  `;

	const tabAllStylesEditor = `
		  ${tabAllStylesCommon}
		  `;

	const mobileAllStylesEditor = `
		  ${mobileAllStylesCommon}
	  `;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStylesFrontEnd = softMinifyCssStrings(`
		  ${desktopAllStylesCommon}
		  ${
				isSticky
					? `					
				  .${blockId}.eb-toc-container.eb-toc-is-sticky{
					  position:fixed;
					  top: ${topSpace === 0 || topSpace ? topSpace : 25}%;
					  left:0;
					  z-index:999;
				  }
			  
				  .${blockId}.eb-toc-container.eb-toc-is-sticky .eb-toc-wrapper{
					  ${contentHeight ? `min-height:${contentHeight}px;` : ""}
				  }
			  
				  .${blockId}.eb-toc-container.eb-toc-is-sticky button.eb-toc-button{
					  color:${titleColor};
					  background-color:${titleBg};
				  }
				  `
					: ""
			}
  
  
	  `);

	// all css styles for Tab in strings ⬇
	const tabAllStylesFrontEnd = softMinifyCssStrings(`
		  ${tabAllStylesCommon}
  
		  
	  `);

	// all css styles for Mobile in strings ⬇
	const mobileAllStylesFrontEnd = softMinifyCssStrings(`	
		  ${mobileAllStylesCommon}
  
	  `);

	//
	// styling codes End here
	//

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStylesFrontEnd,
			tab: tabAllStylesFrontEnd,
			mobile: mobileAllStylesFrontEnd,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

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
			</BlockControls>

			<div {...blockProps}>
				<style>
					{`
				  ${desktopAllStylesEditor}
  
				  /* mimmikcssStart */
  
				  ${resOption === "Tablet" ? tabAllStylesEditor : " "}
				  ${resOption === "Mobile" ? tabAllStylesEditor + mobileAllStylesEditor : " "}
  
				  /* mimmikcssEnd */
  
				  @media all and (max-width: 1024px) {	
  
					  /* tabcssStart */
					  ${softMinifyCssStrings(tabAllStylesEditor)}
					  /* tabcssEnd */			
  
				  }
  
				  @media all and (max-width: 767px) {
					  
					  /* mobcssStart */			
					  ${softMinifyCssStrings(mobileAllStylesEditor)}
					  /* mobcssEnd */			
  
				  }
				  `}
				</style>
				<div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
					<div className={`${blockId} eb-toc-container`}>
						<div onClick={() => collapsible && setVisible(!visible)}>
							{displayTitle && (
								<RichText
									className="eb-toc-title"
									placeholder="Table of content"
									value={title}
									onChange={(title) => setAttributes({ title })}
								/>
							)}
						</div>
						{headers.length > 0 ? (
							<div className="eb-toc-wrapper">
								<List attributes={attributes} />
							</div>
						) : (
							<p>Add header to generate table of contents</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
