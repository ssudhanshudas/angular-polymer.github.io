(function () {
    'use strict';

    angular.module('myBlog', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider.state('home', {
            url : '/home',
            templateUrl: 'home/home.partial.html'
        }).state('blog', {
            url : '/blog',
            templateUrl: 'blog/blog.partial.html',
            controller: 'BlogController as blogController',
            resolve : {
                blogEntries : fetchBlogs
            }
        }).state('/blogdetail', {
            url : '/blogdetail',
            templateUrl: 'blog/blog.detail.partial.html'
        }).state('about', {
            url : '/about',
            templateUrl: 'about/about.partial.html'
        });        
    });

    function fetchBlogs(BlogService) {
        return BlogService.fetchBlogEntries();
    }
})();