import List from "./list";

export default function save({ attributes }) {
	const { visibleHeaders, headers } = attributes;

	if (headers.length === 0) {
		return <div />;
	}

	return (
		<div>
			<div
				className="eb-toc-wrapper"
				data-headers={JSON.stringify(headers)}
				data-visible={JSON.stringify(visibleHeaders)}
			>
				<List mappingHeaders={visibleHeaders} headers={headers} />
			</div>
		</div>
	);
}
