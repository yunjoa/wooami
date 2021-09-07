/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ (() => {

eval("$(function(){\r\n    $('header').load('inc.html header > div',navFun);\r\n    $('footer').load('inc.html footer > div');\r\n\r\n    function navFun(){\r\n        $('header').on({\r\n            mouseenter:function(){\r\n                $('.dep1').stop().slideDown(200);\r\n                $('header').addClass('active');\r\n            },\r\n            mouseleave:function(){\r\n                $('.dep1').stop().slideUp(200);\r\n                $('header').removeClass('active');\r\n            }\r\n        });\r\n        $('.search_icon').on({\r\n            click:function(e){\r\n            e.preventDefault();\r\n            $('.search').show();\r\n            $('.search_cancle_icon').show();\r\n            }\r\n        });\r\n        $('.search_cancle_icon').on({\r\n            click:function(){\r\n            $('.search').hide();\r\n            $('.search_cancle_icon').hide();\r\n            }\r\n        });\r\n\r\n    }\r\n\r\n\r\n\r\n    // 네비 스크롤시 하이드 쇼 \r\n    (function(){\r\n\r\n        var doc = document.documentElement;\r\n        var w = window;\r\n        var prevScroll = w.scrollY ||  doc.scrollTop;\r\n        var curScroll;\r\n        var direction = 0;\r\n        var prevDirection = 0;\r\n        var header = document.querySelector('header');\r\n        var checkScroll = function() {\r\n        \r\n                /*\r\n            ** Find the direction of scroll\r\n            ** 0 - initial, 1 - up, 2 - down\r\n            */\r\n            curScroll = w.scrollY || doc.scrollTop;\r\n            if (curScroll > prevScroll) { \r\n                //scrolled up\r\n                direction = 2;\r\n            } else if (curScroll < prevScroll) { \r\n                //scrolled down\r\n                direction = 1;\r\n            }\r\n\r\n            if (direction !== prevDirection) {\r\n                toggleHeader(direction, curScroll);\r\n            }\r\n            prevScroll = curScroll;\r\n        };\r\n\r\n\r\n        var toggleHeader = function(direction, curScroll) {\r\n            if (direction === 2 && curScroll > 75) { \r\n                header.classList.add('hide');\r\n                prevDirection = direction;\r\n\r\n            } else if (direction === 1) {\r\n                header.classList.remove('hide');\r\n                prevDirection = direction;\r\n\r\n            }\r\n        };\r\n        \r\n        window.addEventListener('scroll', checkScroll);\r\n    })();\r\n\r\n\r\n\r\n    \r\n    // 엘리먼트 스크롤시 위로 올라오기\r\n\r\n    function isElementUnderBottom(elem, triggerDiff) {\r\n        const { top } = elem.getBoundingClientRect();\r\n        const { innerHeight } = window;\r\n        return top > innerHeight + (triggerDiff || 0);\r\n    }\r\n\r\n    function isElementRightToLeft(elem2, triggerDiff2) {\r\n        const { right } = elem2.getBoundingClientRect();\r\n        const { innerWidth } = window;\r\n        return right > innerWidth + (triggerDiff2 || 0);\r\n    }\r\n    \r\n    function handleScroll() {\r\n        const elems = document.querySelectorAll('.up-on-scroll');\r\n        elems.forEach(elem => {\r\n        if (isElementUnderBottom(elem, -20)) {\r\n            elem.style.opacity = \"0\";\r\n            elem.style.transform = 'translateY(70px)';\r\n        } else {\r\n            elem.style.opacity = \"1\";\r\n            elem.style.transform = 'translateY(0px)';\r\n        }\r\n        })\r\n    }\r\n\r\n    function handleScroll2() {\r\n        const elems2 = document.querySelectorAll('.right-left-scroll');\r\n        elems2.forEach(elem => {\r\n        if (isElementRightToLeft(elem2, -20)) {\r\n            elem2.style.opacity = \"0\";\r\n            elem2.style.transform = 'translateX(70px)';\r\n        } else {\r\n            elem2.style.opacity = \"1\";\r\n            elem2.style.transform = 'translateX(0px)';\r\n        }\r\n        })\r\n    }\r\n\r\n\r\n    \r\n    window.addEventListener('scroll', handleScroll);\r\n    window.addEventListener('scroll', handleScroll2);\r\n});\r\n\n\n//# sourceURL=webpack://wooami/./src/js/common.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/common.js"]();
/******/ 	
/******/ })()
;