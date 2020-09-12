/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { BlockControls, RichText } from "@wordpress/block-editor";
import { Toolbar, ToolbarButton } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

/*
 * External dependencies
 */
import striptags from "striptags";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
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
	parseTocSlug,
} from "./helper";
import "./editor.scss";
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

export default function Edit({ isSelected, attributes, setAttributes }) {
	const {
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
		radius,
		radiusUnit,
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
		border: `${borderWidth}px ${borderStyle} ${borderColor}`,
		background: contentBg,
		boxShadow: `${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${
			spread || 0
		}px ${shadowColor || "black"}`,
		borderRadius: radius + radiusUnit,
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
		color: contentColor,
		display: visible ? "block" : "none",
		background: contentBg,
		padding: `${contentPaddingTop || 0}${contentPaddingUnit} ${
			contentPaddingRight || 0
		}${contentPaddingUnit} ${contentPaddingBottom || 0}${contentPaddingUnit} ${
			contentPaddingLeft || 0
		}${contentPaddingUnit}`,
	};

	if (headers.length === 0) {
		return <div>No header found</div>;
	}

	if (headers.length > 0) {
		return [
			isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			),
			<BlockControls>
				<Toolbar>
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
				</Toolbar>
			</BlockControls>,

			<div style={wrapperStyle}>
				<div onClick={() => collapsible && setVisible(!visible)}>
					<RichText
						className="eb-toc-title"
						style={titleStyle}
						placeholder="Table of content"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
				</div>
				<div style={contentStyle}>
					<List attributes={attributes} />
				</div>
			</div>,
		];
	}
}
