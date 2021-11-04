/*
 * WordPress dependencies
 */

const { RichText, useBlockProps } = wp.blockEditor;

/*
 * Internal dependencies
 */
import List from "./list";

export default function save({ attributes }) {
	const {
		blockId,

		//
		displayTitle,
		title,
		titleFontFamily,
		titleFontSize,
		titleSizeUnit,
		titleFontWeight,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnit,
		titleLineHeight,
		titleLineHeightUnit,
		titleAlign,
		titleBg = "#ff7d50",
		titleColor = "#fff",
		contentColor = "#707070",
		contentHoverColor,
		collapsible,
		initialCollapse,
		seperator,
		seperatorSize,
		seperatorStyle,
		seperatorColor = "#000",
		visibleHeaders,
		headers,
		borderWidth,
		borderColor,
		borderStyle,
		titlePaddingTop,
		titlePaddingRight,
		titlePaddingBottom,
		titlePaddingLeft,
		titlePaddingUnit,
		isSmooth,
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
		topSpace,
		contentHeight,
		contentWidth,
		contentWidthUnit,
		isSticky,
		hideOnMobile,
		zIndex,
		contentAlign,
		containerWidth,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			{headers.length !== 0 ? (
				<div
					className={`${blockId} eb-toc-container ${
						collapsible ? "eb-toc-collapsible" : "eb-toc-not-collapsible"
					} ${
						initialCollapse
							? "eb-toc-initially-collapsed"
							: "eb-toc-initially-not-collapsed"
					} ${isSticky ? "eb-toc-is-sticky" : "eb-toc-is-not-sticky"} ${
						scrollToTop ? "eb-toc-scrollToTop" : "eb-toc-not-scrollToTop"
					}    `}
					data-collapsible={collapsible}
					data-initial-collapse={initialCollapse}
					data-scroll-top={scrollToTop}
					data-arrow-height={arrowHeight}
					data-arrow-width={arrowWidth}
					data-arrow-bg={arrowBg}
					data-arrow-color={arrowColor}
					data-sticky={isSticky}
					data-text-color={contentColor}
					data-hover-color={contentHoverColor}
					data-hide-mobile={hideOnMobile}
					data-title-bg={titleBg}
					data-title-color={titleColor}
				>
					<div className="eb-toc-header">
						{isSticky && <span className="eb-toc-close"></span>}

						{displayTitle && (
							<RichText.Content
								tagName="div"
								className="eb-toc-title"
								value={title}
							/>
						)}
					</div>
					<div
						className={`eb-toc-wrapper ${
							collapsible && initialCollapse && !isSticky ? "hide-content" : ""
						}  `}
						data-headers={JSON.stringify(headers)}
						data-visible={JSON.stringify(visibleHeaders)}
						data-smooth={isSmooth}
					>
						<List attributes={attributes} />
					</div>
					{isSticky && (
						<button className="eb-toc-button">
							{displayTitle && title ? title : "Table of Contents"}
						</button>
					)}
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}
