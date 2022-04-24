/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

import attributes from "./attributes";
import List from "./list";

const deprecated = [
	{
		attributes: { ...attributes },
		save: ({ attributes }) => {
			const {
				blockId,
				displayTitle,
				title,
				collapsible,
				initialCollapse,
				visibleHeaders,
				headers,
				isSmooth,
				scrollToTop,
				isSticky,
				hideOnMobile,
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
							data-scroll-top={scrollToTop}
							data-collapsible={collapsible}
							data-hide-mobile={hideOnMobile}
							data-sticky={isSticky}
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
		},
	},
];

export default deprecated;

// comment