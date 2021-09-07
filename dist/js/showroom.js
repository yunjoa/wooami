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

/***/ "./src/js/showroom.js":
/*!****************************!*\
  !*** ./src/js/showroom.js ***!
  \****************************/
/***/ (() => {

eval("$(function(){\r\n    //start \r\n\r\n    $.ajax({\r\n        url:'data/showroom_data.json',\r\n        success:function(data){\r\n\r\n            let place, address,showroomInfo= '', idx=0;\r\n            \r\n            data.showroom_table.forEach(function(h){\r\n                showroomInfo +=`<ul><li class=\"the_place_store\">${h.place}</li>\r\n                <li class=\"the_place_address\">${h.address}</li>\r\n                <li class=\"arrow\"><img src=\"img/green_arrow.png\" alt=\"\"></li></ul>`\r\n                \r\n            })\r\n            place = data.showroom_table[idx].place;\r\n            address = data.showroom_table[idx].address;\r\n            maptimestamp = data.showroom_table[idx].maptimestamp;\r\n            mapkey = data.showroom_table[idx].mapkey;\r\n            $('.the_place').html(showroomInfo)\r\n\r\n\r\n\r\n            $('.arrow > img').on('click', function(){\r\n                var currentClass = $(this).hasClass(\"active\");\r\n                $(this).addClass('active');\r\n                if(currentClass !== 'active'){\r\n                    $(this).removeClass('active');\r\n                }\r\n                $('.map-1').show()\r\n            })\r\n                        \r\n        },\r\n        error:function(e){\r\n            console.log(e.status);\r\n            console.log(e.error);\r\n            console.log(e.responseText);\r\n            \r\n        }\r\n\r\n    })\r\n})\r\n\r\n\n\n//# sourceURL=webpack://wooami/./src/js/showroom.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/showroom.js"]();
/******/ 	
/******/ })()
;