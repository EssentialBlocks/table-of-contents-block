// console.log("-------------TOC with 'wp' object on window");

window.addEventListener("DOMContentLoaded", function () {
	const parseTocSlug = function (slug) {
		// If not have the element then return false!
		if (!slug) {
			return slug;
		}

		let parsedSlug = slug
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

	const EBTableOfContents = {
		init: function () {
			this._run();
			this._scroll();
			this._toggleCollapse();
			this._scrollToTop();
			this._hide();
			this._show();
			this._hover();
			this._hideOnMobileView();
			this._changeHeaderColors();
		},

		_toggleCollapse: function () {
			let containers = document.querySelectorAll(".eb-toc-container");

			for (container of containers) {
				const isSticky = container.getAttribute("data-sticky") === "true";
				const collapsible =
					container.getAttribute("data-collapsible") === "true";

				if (collapsible) {
					const title = container.querySelector(".eb-toc-title");
					const content = container.querySelector(".eb-toc-wrapper");

					if (!isSticky) {
						title.addEventListener("click", function () {
							content.classList.toggle("hide-content");
						});
					}
				}
			}
		},

		_scrollToTop: function () {
			let container = document.querySelector(".eb-toc-container");
			let hasScrollTop =
				container && container.getAttribute("data-scroll-top") == "true";

			if (hasScrollTop) {
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
					document.body.scrollTop > 30 ||
					document.documentElement.scrollTop > 20
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
					const container = crossButton.closest(".eb-toc-container");

					container.classList.add("eb-toc-content-hidden");
					container.classList.remove("eb-toc-content-visible");
				});
			}
		},

		_show: function () {
			const headerButtons = document.querySelectorAll(".eb-toc-button");

			for (headerButton of headerButtons) {
				headerButton.addEventListener("click", function () {
					const container = headerButton.closest(".eb-toc-container");

					container.classList.remove("eb-toc-content-hidden");
					container.classList.add("eb-toc-content-visible");
				});
			}
		},

		/**
		 * Hover color
		 */
		_hover: function () {
			let nodes = document.querySelectorAll(".eb-toc-container");

			for (node of nodes) {
				const defaultColor = node.getAttribute("data-text-color");
				const hoverColor = node.getAttribute("data-hover-color");
				const lists = node.querySelectorAll("li");

				lists.forEach((list) => {
					list.addEventListener("mouseenter", function () {
						this.style.color = hoverColor;
						this.firstChild.style.color = hoverColor;
					});

					list.addEventListener("mouseleave", function () {
						this.style.color = defaultColor;
						this.firstChild.style.color = defaultColor;
					});
				});
			}
		},

		/**
		 * Alter the_content.
		 */
		_run: function () {
			let containers = document.querySelectorAll(".eb-toc-container");

			for (container of containers) {
				if (container) {
					// Save container border
					const tocBorder = container.style.border;
					window.ebTocBorder = tocBorder;
				}

				let node = document.querySelector(".eb-toc-wrapper");

				if (node) {
					let headers = JSON.parse(node.getAttribute("data-headers"));
					let visibleHeaders = JSON.parse(node.getAttribute("data-visible"));

					let allowed_h_tags = [];
					if (visibleHeaders !== undefined) {
						visibleHeaders.forEach((h_tag, index) =>
							h_tag === true ? allowed_h_tags.push("h" + (index + 1)) : null
						);
					}

					let allowed_h_tags_str =
						null !== allowed_h_tags ? allowed_h_tags.join(",") : "";

					let all_header =
						undefined !== allowed_h_tags_str && "" !== allowed_h_tags_str
							? document.body.querySelectorAll(allowed_h_tags_str)
							: document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");

					if (undefined !== headers && 0 !== all_header.length) {
						headers.forEach((element) => {
							const element_text = parseTocSlug(element.text);

							all_header.forEach((item) => {
								const header_text = parseTocSlug(item.textContent);

								// console.log({
								// 	header_text,
								// 	element_text,
								// 	item,
								// 	element,
								// });

								if (element_text.localeCompare(header_text) === 0) {
									// item.before(``);
									item.innerHTML = `<span id="${header_text}" class="eb-toc__heading-anchor"></span>${item.innerHTML}`;
								}
							});
						});
					}
				}
			}
		},

		/**
		 * Hide sticky content on mobile
		 */
		_hideOnMobileView: function () {
			const container = document.querySelector(".eb-toc-container");

			if (container) {
				const isSticky = container.getAttribute("data-sticky") === "true";
				const hideOnMobile =
					container.getAttribute("data-hide-mobile") == "true";

				if (isSticky && hideOnMobile && window.screen.width < 420) {
					container.style.display = "none";
				}
			}
		},

		/**
		 * Change collapsible header colors for sticky content
		 */
		_changeHeaderColors: function () {
			let containers = document.querySelectorAll(".eb-toc-container");

			for (container of containers) {
				const isSticky = container.getAttribute("data-sticky") === "true";

				if (isSticky) {
					const titleBg = container.getAttribute("data-title-bg");
					const titleColor = container.getAttribute("data-title-color");
					const button = container.querySelector(".eb-toc-button");

					button.style.color = titleColor;
					button.style.background = titleBg;
				}
			}
		},
	};

	EBTableOfContents.init();
});
