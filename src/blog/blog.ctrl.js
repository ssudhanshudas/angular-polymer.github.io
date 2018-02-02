(function () {
    angular.module('myBlog').controller('BlogController', function (blogEntries) {
        var vm = this;
        vm.blogEntries = blogEntries;
        vm.selectedBlog = blogEntries.length ? blogEntries[0]: null;
    })
})();