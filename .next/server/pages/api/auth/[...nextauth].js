"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            // `credentials` is used to generate a form on the sign in page.\n            // You can specify which fields should be submitted, by adding keys to the `credentials` object.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                const { email_id, password } = credentials;\n                const res = await fetch(\"http://13.53.95.48:3000/api/user/login\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        email_id: credentials?.email_id,\n                        password: credentials?.password\n                    })\n                });\n                const user = await res.json();\n                console.log(user);\n                console.log(user.result.list.user_type);\n                if (user.result.list.user_type === 1) {\n                    console.log(\"yes user is there \", user);\n                    // call new API get user details by user ID \n                    return Promise.resolve(\"123\");\n                }\n                return null;\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lDO0FBQ2lDO0FBQ3hCO0FBRTFDLGlFQUFlQSxnREFBUUEsQ0FBQztJQUd0QkcsV0FBVztRQUNURixzRUFBbUJBLENBQUM7WUFDbEIsbUVBQW1FO1lBQ25FRyxNQUFNO1lBR05DLGFBQVk7Z0JBQ1ZDLE9BQU07b0JBQ0ZDLE9BQU07b0JBQ05DLE1BQUs7Z0JBQ1Q7Z0JBRUFDLFVBQVM7b0JBQ0xGLE9BQU07b0JBQ05DLE1BQUs7Z0JBQ1Q7WUFDSjtZQUVFLGdFQUFnRTtZQUNoRSxnR0FBZ0c7WUFDaEcsbURBQW1EO1lBQ25ELHlFQUF5RTtZQUN6RSxNQUFNRSxXQUFVTCxXQUFXLEVBQUVNLEdBQUc7Z0JBQzlCLG1FQUFtRTtnQkFDbkUsTUFBTSxFQUFDQyxRQUFRLEVBQUNILFFBQVEsRUFBQyxHQUFHSjtnQkFFNUIsTUFBTVEsTUFBTSxNQUFNQyxNQUFNLDBDQUEwQztvQkFDaEVDLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsVUFBVTt3QkFDbkJQLFVBQVVQLGFBQWFPO3dCQUN2QkgsVUFBVUosYUFBYUk7b0JBQ3pCO2dCQUNGO2dCQUNBLE1BQU1XLE9BQU8sTUFBTVAsSUFBSVE7Z0JBRXZCQyxRQUFRQyxJQUFJSDtnQkFDWkUsUUFBUUMsSUFBSUgsS0FBS0ksT0FBT0MsS0FBS0M7Z0JBRzdCLElBQUdOLEtBQUtJLE9BQU9DLEtBQUtDLGNBQVksR0FBRTtvQkFDOUJKLFFBQVFDLElBQUksc0JBQXFCSDtvQkFFakMsNENBQTRDO29CQUMxQyxPQUFPTyxRQUFRQyxRQUFRO2dCQUM3QjtnQkFFQSxPQUFPO1lBQ1Q7UUFDRjtLQUNEO0FBQ0gsSUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzdHdhbmlwbGFzdGljdGF4Ly4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuXHJcblxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIC8vIFRoZSBuYW1lIHRvIGRpc3BsYXkgb24gdGhlIHNpZ24gaW4gZm9ybSAoZS5nLiBcIlNpZ24gaW4gd2l0aC4uLlwiKVxyXG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXHJcblxyXG4gICAgICBcclxuICAgICAgY3JlZGVudGlhbHM6e1xyXG4gICAgICAgIGVtYWlsOntcclxuICAgICAgICAgICAgbGFiZWw6XCJFbWFpbFwiLFxyXG4gICAgICAgICAgICB0eXBlOid0ZXh0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgXHJcbiAgICAgICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgICAgICBsYWJlbDonUGFzc3dvcmQnLFxyXG4gICAgICAgICAgICB0eXBlOidwYXNzd29yZCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICAgLy8gYGNyZWRlbnRpYWxzYCBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxyXG4gICAgICAvLyBZb3UgY2FuIHNwZWNpZnkgd2hpY2ggZmllbGRzIHNob3VsZCBiZSBzdWJtaXR0ZWQsIGJ5IGFkZGluZyBrZXlzIHRvIHRoZSBgY3JlZGVudGlhbHNgIG9iamVjdC5cclxuICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXHJcbiAgICAgIC8vIFlvdSBjYW4gcGFzcyBhbnkgSFRNTCBhdHRyaWJ1dGUgdG8gdGhlIDxpbnB1dD4gdGFnIHRocm91Z2ggdGhlIG9iamVjdC5cclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXHJcbiAgICAgICAgY29uc3Qge2VtYWlsX2lkLHBhc3N3b3JkfSA9IGNyZWRlbnRpYWxzO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEzLjUzLjk1LjQ4OjMwMDAvYXBpL3VzZXIvbG9naW4nLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBlbWFpbF9pZDogY3JlZGVudGlhbHM/LmVtYWlsX2lkLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHM/LnBhc3N3b3JkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlci5yZXN1bHQubGlzdC51c2VyX3R5cGUpXHJcblxyXG5cclxuICAgICAgICBpZih1c2VyLnJlc3VsdC5saXN0LnVzZXJfdHlwZT09PTEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygneWVzIHVzZXIgaXMgdGhlcmUgJyx1c2VyKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY2FsbCBuZXcgQVBJIGdldCB1c2VyIGRldGFpbHMgYnkgdXNlciBJRCBcclxuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcxMjMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG59XHJcbikiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwidXNlRGlzcGF0Y2giLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiZW1haWxfaWQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXIiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImxpc3QiLCJ1c2VyX3R5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();