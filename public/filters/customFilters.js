angular.module("customFilters", [])
.filter("unique", () => {
	return (data, propertyName) => {
		if (angular.isArray(data) && angular.isString(propertyName)) {
			const results = [];
			const keys = {};
			for (let i = 0; i < data.length; i++ ) {
				let val = data[i][propertyName];
				if (angular.isUndefined(keys[val])) {
					keys[val] = true;
					results.push(val);
				}
			}
			return results;
		} else {
			return data;
		}
	});
});
