import List from "./list";

export default function save({ attributes }) {
	const { visibleHeaders, headers, isSmooth } = attributes;

	// Until finalizing backend
	// return <div />;

	if (headers.length === 0) {
		return <div />;
	}

	return (
		<div>
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
