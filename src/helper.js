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
