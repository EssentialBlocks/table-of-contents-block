(function ($) {
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
			this._run();
			this._scroll();
			this._toggleCollapse();
			this._scrollToTop();
			this._hide();
			this._show();
		},

		_toggleCollapse: function () {
			let containers = document.querySelectorAll(".eb-toc-container");

			for (container of containers) {
				const collapsible =
					container.getAttribute("data-collapsible") === "true";
				const initialCollapse =
					container.getAttribute("data-initial-collapse") === "true";

				if (collapsible) {
					const title = container.querySelector(".eb-toc-title");
					const content = container.querySelector(".eb-toc-wrapper");
					const header = container.querySelector(".eb-toc-header");

					if (initialCollapse) {
						content.classList.add("hide-content");
						header.classList.add("hide-content");
					}

					title.addEventListener("click", function () {
						content.classList.toggle("hide-content");
						header.classList.toggle("hide-content");
					});
				}
			}
		},

		_scrollToTop: function () {
			// Create go to top element
			const goTop = document.createElement("div");
			goTop.setAttribute(
				"class",
				"eb-toc-go-top dashicons dashicons-arrow-up-alt2"
			);
			document.body.insertBefore(goTop, document.body.lastChild);

			// Add click event
			goTop.addEventListener("click", function () {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			});

			function hideScroll() {
				goTop.classList.remove("show-scroll");
				goTop.classList.add("hide-scroll");
			}

			function showScroll() {
				goTop.classList.remove("hide-scroll");
				goTop.classList.add("show-scroll");
			}

			function onScrollPage() {
				document.body.scrollTop > 30 || document.documentElement.scrollTop > 20
					? showScroll()
					: hideScroll();
			}

			function setArrowStyles(height, width, bg, color) {
				if (height) goTop.style.height = height + "px";
				if (width) goTop.style.width = width + "px";
				if (bg) goTop.style.background = bg;
				if (color) goTop.style.color = color;
			}

			const containers = document.querySelectorAll(".eb-toc-container");

			for (container of containers) {
				const goToTop = container.getAttribute("data-scroll-top") === "true";
				const height = container.getAttribute("data-arrow-height");
				const width = container.getAttribute("data-arrow-width");
				const bg = container.getAttribute("data-arrow-bg");
				const color = container.getAttribute("data-arrow-color");

				if (goToTop) {
					// Add scroll event
					window.addEventListener("scroll", onScrollPage);

					// Set arrow styles
					setArrowStyles(height, width, bg, color);

					showScroll();
				} else {
					hideScroll();
				}
			}
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
		 * Close contents
		 */
		_hide: function () {
			const crossButtons = document.querySelectorAll(".eb-toc-close");

			for (crossButton of crossButtons) {
				crossButton.addEventListener("click", function () {
					const headerNode = crossButton.closest(".eb-toc-header");
					const contentNode = headerNode.nextSibling;
					const headerButton = contentNode.nextSibling;

					headerNode.style.display = "none";
					contentNode.style.display = "none";

					headerButton.style.display = "block";
				});
			}
		},

		_show: function () {
			const headerButtons = document.querySelectorAll(".eb-toc-button");

			for (headerButton of headerButtons) {
				headerButton.addEventListener("click", function () {
					const headerNode = headerButton.parentNode.firstChild;
					const contentNode = headerNode.nextSibling;

					headerNode.style.display = "block";
					contentNode.style.display = "block";

					this.style.display = "none";
				});
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
		},
	};

	$(document).ready(function () {
		EBTableOfContents.init();
	});
})(jQuery);
