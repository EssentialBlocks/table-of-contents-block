(function ($) {
	var scroll = true;
	var scroll_offset = 30;
	var scroll_delay = 800;
	var scroll_to_top = false;
	var scroll_element = null;

	var parseTocSlug = function (slug) {
		// If not have the element then return false!
		if (!slug) {
			return slug;
		}

		var parsedSlug = slug
			.toString()
			.toLowerCase()
			.replace(/&(amp;)/g, "") // Remove &
			.replace(/&(mdash;)/g, "") // Remove long dash
			.replace(/\u2013|\u2014/g, "") // Remove long dash
			.replace(/[&]nbsp[;]/gi, "-") // Replace inseccable spaces
			.replace(/\s+/g, "-") // Replace spaces with -
			.replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g, "") // Remove special chars
			.replace(/\-\-+/g, "-") // Replace multiple - with single -
			.replace(/^-+/, "") // Trim - from start of text
			.replace(/-+$/, ""); // Trim - from end of text

		return decodeURI(encodeURIComponent(parsedSlug));
	};

	EBTableOfContents = {
		init: function () {
			$(document).delegate(
				".eb-toc__list a",
				"click",
				EBTableOfContents._scroll
			);
			$(document).delegate(
				".eb-toc__scroll-top",
				"click",
				EBTableOfContents._scrollTop
			);
			$(document).delegate(
				".eb-toc__title-wrap",
				"click",
				EBTableOfContents._toggleCollapse
			);
			$(document).on("scroll", EBTableOfContents._showHideScroll);

			this._run();
			this._scroll();
		},

		_toggleCollapse: function (e) {
			if ($(this).find(".eb-toc__collapsible-wrap").length > 0) {
				let $root = $(this).closest(".wp-block-eb-table-of-contents");

				if ($root.hasClass("eb-toc__collapse")) {
					$root.removeClass("eb-toc__collapse");
				} else {
					$root.addClass("eb-toc__collapse");
				}
			}
		},

		_showHideScroll: function (e) {
			if (null != scroll_element) {
				if (jQuery(window).scrollTop() > 300) {
					if (scroll_to_top) {
						scroll_element.addClass("eb-toc__show-scroll");
					} else {
						scroll_element.removeClass("eb-toc__show-scroll");
					}
				} else {
					scroll_element.removeClass("eb-toc__show-scroll");
				}
			}
		},

		/**
		 * Smooth To Top.
		 */
		_scrollTop: function (e) {
			$("html, body").animate(
				{
					scrollTop: 0,
				},
				scroll_delay
			);
		},

		/**
		 * Smooth Scroll.
		 */
		_scroll: function () {
			let nodes = document.querySelectorAll(".eb-toc-wrapper");

			for (node of nodes) {
				const isSmooth = node.getAttribute("data-smooth") === "true";

				if (isSmooth) {
					node.querySelectorAll('a[href^="#"]').forEach((anchor) => {
						anchor.addEventListener("click", function (e) {
							e.preventDefault();

							document.querySelector(this.getAttribute("href")).scrollIntoView({
								behavior: "smooth",
							});
						});
					});
				}
			}
		},

		/**
		 * Alter the_content.
		 */
		_run: function () {
			let node = document.querySelector(".eb-toc-wrapper");

			if (node) {
				let headers = JSON.parse(node.getAttribute("data-headers"));
				let visibleHeaders = JSON.parse(node.getAttribute("data-visible"));

				var allowed_h_tags = [];
				if (visibleHeaders !== undefined) {
					visibleHeaders.forEach((h_tag, index) =>
						h_tag === true ? allowed_h_tags.push("h" + (index + 1)) : null
					);
				}

				var allowed_h_tags_str =
					null !== allowed_h_tags ? allowed_h_tags.join(",") : "";

				var all_header =
					undefined !== allowed_h_tags_str && "" !== allowed_h_tags_str
						? $("body").find(allowed_h_tags_str)
						: $("body").find("h1, h2, h3, h4, h5, h6");

				if (undefined !== headers && 0 !== all_header.length) {
					headers.forEach(function (element, i) {
						let element_text = parseTocSlug(element.text);
						all_header.each(function () {
							let header = $(this);
							let header_text = parseTocSlug(header.text());
							if (element_text.localeCompare(header_text) === 0) {
								header.before(
									'<span id="' +
										header_text +
										'" class="eb-toc__heading-anchor"></span>'
								);
							}
						});
					});
				}
			}

			// scroll_to_top = attr.scrollToTop;

			// scroll_element = $(".eb-toc__scroll-top");
			// if (0 == scroll_element.length) {
			// 	$("body").append(
			// 		'<div class="eb-toc__scroll-top dashicons dashicons-arrow-up-alt2"></div>'
			// 	);
			// 	scroll_element = $(".eb-toc__scroll-top");
			// }

			// if (scroll_to_top) {
			// 	scroll_element.addClass("eb-toc__show-scroll");
			// } else {
			// 	scroll_element.removeClass("eb-toc__show-scroll");
			// }

			// EBTableOfContents._showHideScroll();
		},
	};

	$(document).ready(function () {
		EBTableOfContents.init();
	});
})(jQuery);
