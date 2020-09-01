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
		collapsible,
		initialCollapse,
		seperator,
		seperatorSize,
		seperatorStyle,
		seperatorColor,
		visibleHeaders,
		headers,
		isSmooth,
		scrollToTop,
		arrowHeight,
		arrowWidth,
		arrowBg,
		arrowColor,
	} = attributes;

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
	};

	if (headers.length === 0) {
		return <div />;
	}

	return (
		<div
			className="eb-toc-container"
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
