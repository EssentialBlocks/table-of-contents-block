import List from "./list";

export default function save({ attributes }) {
	const { visibleHeaders, headers } = attributes;

	if (headers.length === 0) {
		return <div />;
	}

	return <List mappingHeaders={visibleHeaders} headers={headers} />;

	// return (
	// 	<div>
	// 		<ul>
	// 			{headers.map((header, index) => (
	// 				<li key={index}>{header.content}</li>
	// 			))}
	// 		</ul>
	// 	</div>
	// );
}
