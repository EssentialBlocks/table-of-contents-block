export default function save({ attributes }) {
	const { headers } = attributes;
	if (headers.length === 0) {
		return <div />;
	}
	return (
		<div>
			<ul>
				{headers.map((header, index) => (
					<li key={index}>{header.content}</li>
				))}
			</ul>
		</div>
	);
}
