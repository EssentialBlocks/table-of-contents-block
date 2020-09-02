/*
 * WordPress dependencies
 */

import { RichText } from "@wordpress/block-editor";

/*
 * Internal dependencies
 */
import List from "./list";

export default function save({ attributes }) {
	const {
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
		titleColor,
		titleBg,
		contentColor,
		contentBg,
		collapsible,
		initialCollapse,
		seperator,
		seperatorSize,
		seperatorStyle,
		seperatorColor,
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
		radius,
		radiusUnit,
		topSpace,
		contentHeight,
		contentWidth,
		contentWidthUnit,
	} = attributes;

	const wrapperStyle = {
		border: `${borderWidth}px ${borderStyle} ${borderColor}`,
		background: contentBg,
		boxShadow: `${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${
			spread || 0
		}px ${shadowColor || "black"}`,
		borderRadius: radius + radiusUnit,
		position: "fixed",
		top: topSpace + "%",
		width: contentWidth + contentWidthUnit,
		zIndex: 999,
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
		background: contentBg,
		padding: `${contentPaddingTop || 0}${contentPaddingUnit} ${
			contentPaddingRight || 0
		}${contentPaddingUnit} ${contentPaddingBottom || 0}${contentPaddingUnit} ${
			contentPaddingLeft || 0
		}${contentPaddingUnit}`,
		overflow: "scroll",
		height: contentHeight,
	};

	if (headers.length === 0) {
		return <div />;
	}

	return (
		<div
			className="eb-toc-container"
			style={wrapperStyle}
			data-collapsible={collapsible}
			data-initial-collapse={initialCollapse}
			data-scroll-top={scrollToTop}
			data-arrow-height={arrowHeight}
			data-arrow-width={arrowWidth}
			data-arrow-bg={arrowBg}
			data-arrow-color={arrowColor}
		>
			<div className="eb-toc-header">
				<span className="eb-toc-close">x</span>
				<RichText.Content
					tagName="p"
					className="eb-toc-title"
					value={title}
					style={titleStyle}
				/>
			</div>
			<div
				className="eb-toc-wrapper"
				style={contentStyle}
				data-headers={JSON.stringify(headers)}
				data-visible={JSON.stringify(visibleHeaders)}
				data-smooth={isSmooth}
			>
				<List attributes={attributes} />
			</div>
			<button className="eb-toc-button">
				{displayTitle && title ? title : "Table of Contents"}
			</button>
		</div>
	);
}
