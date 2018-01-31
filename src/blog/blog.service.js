(function () {
    angular.module('myBlog').factory('BlogService', function ($http) {
        var service = {};
        service.fetchBlogEntries = fetchBlogEntries;
        return service;

        /////////////////////////////////////////////////////////

        function fetchBlogEntries() {
            return $http.get('blog/blog.data.json').then(function (response) {
                return response.data;
            });
        }
    })
})();