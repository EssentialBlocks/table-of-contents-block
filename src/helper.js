export const supportedHeaders = [
	"core/heading",
	"essential-blocks/heading",
	"block/heading",
];

export function isCoreHeading(block) {
	return block.name === "core/heading";
}

export function getFromCoreHeading(block) {
	return {
		level: parseInt(block.attributes.level),
		content: block.attributes.content,
	};
}

export function isEbHeading(block) {
	return (
		block.name === "essential-blocks/heading" || block.name === "block/heading"
	);
}

export function getFromEbHeading(block) {
	return {
		level: parseInt(block.attributes.tagName[1]),
		content: block.attributes.content,
	};
}

export function parseTocSlug(slug) {
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
}
