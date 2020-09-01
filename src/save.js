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
	} = attributes;

	const wrapperStyle = {
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
			<RichText.Content
				tagName="p"
				className="eb-toc-title"
				value={title}
				style={titleStyle}
			/>
			<div
				className="eb-toc-wrapper"
				data-headers={JSON.stringify(headers)}
				data-visible={JSON.stringify(visibleHeaders)}
				data-smooth={isSmooth}
			>
				<List attributes={attributes} />
			</div>
		</div>
	);
}
