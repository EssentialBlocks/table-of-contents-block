import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";

class List extends Component {
	render() {
		const {
			visibleHeaders,
			headers,
			listType,
			listColor,
			contentColor,
			indent,
			contentGap,
			contentGapUnit,
			contentFontFamily,
			contentSizeUnit,
			contentFontSize,
			contentFontWeight,
			contentTextTransform,
			contentLetterSpacing,
			contentLetterSpacingUnit,
			contentLineHeight,
			listSeperatorWidth,
			listSeperatorStyle,
			listSeperatorColor,
			hasUnderline,
		} = this.props.attributes;

		// Style objects
		const listStyle = {
			listStyle: listType === "none" ? "none" : undefined,
			color: listType !== "none" ? listColor : undefined,
			marginLeft: indent,
		};

		const listItemStyle = {
			fontFamily: contentFontFamily,
			fontSize: contentFontSize + contentSizeUnit,
			fontWeight: contentFontWeight,
			letterSpacing: contentLetterSpacing + contentLetterSpacingUnit,
			lineHeight: contentLineHeight,
			textTransform: contentTextTransform,
		};

		const linkStyle = {
			color: contentColor,
			textDecoration: hasUnderline ? "underline" : "none",
		};

		const ListTag = listType === "ol" ? "ol" : "ul";

		const makeHeaderArray = (origHeaders) => {
			let arrays = [];

			origHeaders
				.filter((header) => visibleHeaders[header.level - 1])
				.forEach((header) => {
					let last = arrays.length - 1;
					if (arrays.length === 0 || arrays[last][0].level < header.level) {
						arrays.push([header]);
					} else if (arrays[last][0].level === header.level) {
						arrays[last].push(header);
					} else {
						while (arrays[last][0].level > header.level) {
							if (arrays.length > 1) {
								arrays[arrays.length - 2].push(arrays.pop());
								last = arrays.length - 1;
							} else break;
						}
						if (arrays[last][0].level === header.level) {
							arrays[last].push(header);
						}
					}
				});

			while (
				arrays.length > 1 &&
				arrays[arrays.length - 1][0].level > arrays[arrays.length - 2][0].level
			) {
				arrays[arrays.length - 2].push(arrays.pop());
			}

			return arrays[0];
		};

		const filterArray = (origHeaders) => {
			let arrays = [];
			headers.forEach((heading, key) => {
				if (visibleHeaders[heading.level - 1]) {
					arrays.push(heading);
				}
			});
			return makeHeaderArray(arrays);
		};

		var counter = 0;
		var ul_counter = 0;

		const parseList = (list) => {
			let items = [];
			list.forEach((item) => {
				if (Array.isArray(item)) {
					items.push(parseList(item));
				} else {
					items.push(
						<li
							key={counter}
							style={{
								...listItemStyle,
								paddingTop: counter > 0 && contentGap / 2 + contentGapUnit,
								paddingBottom:
									counter < list.length && contentGap / 2 + contentGapUnit,
								borderBottom:
									counter < list.length &&
									`${listSeperatorWidth}px ${listSeperatorStyle} ${listSeperatorColor}`,
							}}
						>
							<a
								href={`#${item.link}`}
								dangerouslySetInnerHTML={{
									__html: item.text,
								}}
								style={linkStyle}
							/>
						</li>
					);
					counter++;
				}
			});
			ul_counter++;
			return (
				<ListTag
					key={counter + "-" + ul_counter}
					className="eb-toc__list"
					style={listStyle}
				>
					{items}
				</ListTag>
			);
		};

		if (
			visibleHeaders != "undefined" &&
			headers &&
			headers.length > 0 &&
			headers.filter((header) => visibleHeaders[header.level - 1]).length > 0
		) {
			return (
				<div className="eb-toc__list-wrap">
					{parseList(filterArray(headers))}
				</div>
			);
		} else {
			return (
				<p className="eb_table-of-contents-placeholder">
					{__("Add a header to begin generating the table of contents")}
				</p>
			);
		}
	}
}

export default List;
