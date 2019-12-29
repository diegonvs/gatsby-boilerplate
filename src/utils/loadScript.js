export default url =>
	new Promise((resolve, reject) =>
		document.head.appendChild(
			Object.assign(document.createElement('script'), {
				async: true,
				onerror: reject,
				onload: resolve,
				src: url,
			})
		)
	);
