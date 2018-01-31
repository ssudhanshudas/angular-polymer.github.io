(function () {
    angular.module('myBlog').controller('BlogController', function (blogEntries) {
        var vm = this;
        vm.blogEntries = blogEntries;
    })
})();