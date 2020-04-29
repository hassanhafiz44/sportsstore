angular.module("sportsStore")
.constant("productListActiveClass", "btn-primary")
.controller("productListCtrl", ($scope, $filter, productListActiveClass) => {
	let selectedCategory = null;

	$scope.selectCategory = newCategory =>  selectedCategory = newCategory;

	$scope.categoryFilterFn = product => selectedCategory == null 
		|| product.category == selectedCategory;

	$scope.getCategoryClass = category => selectedCategory == category 
		? productListActiveClass : "";
});
