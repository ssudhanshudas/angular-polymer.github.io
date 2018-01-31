(function () {
    'use strict';

    angular.module('myBlog', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider.state('home', {
            url : '/home',
            templateUrl: 'src/home/home.partial.html'
        }).state('blog', {
            url : '/blog',
            templateUrl: 'src/blog/blog.partial.html',
            controller: 'BlogController as blogController',
            resolve : {
                blogEntries : fetchBlogs
            }
        }).state('/blogdetail', {
            url : '/blogdetail',
            templateUrl: 'src/blog/blog.detail.partial.html'
        }).state('about', {
            url : '/about',
            templateUrl: 'src/about/about.partial.html'
        });        
    });

    function fetchBlogs(BlogService) {
        return BlogService.fetchBlogEntries();
    }
})();