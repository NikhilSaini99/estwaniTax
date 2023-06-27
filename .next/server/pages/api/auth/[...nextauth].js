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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            // `credentials` is used to generate a form on the sign in page.\n            // You can specify which fields should be submitted, by adding keys to the `credentials` object.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                const { email_id, password } = credentials;\n                const res = await fetch(\"http://13.53.95.48:3000/api/user/login\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        email_id: credentials?.email_id,\n                        password: credentials?.password\n                    })\n                });\n                const user = await res.json();\n                console.log(user);\n                console.log(user.result.list.user_type);\n                if (user.result.list.email_id === \"eeaadmin\") {\n                    console.log(\"yes user is there\");\n                    return user;\n                }\n                return null;\n            }\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lDO0FBQ2lDO0FBQ3hCO0FBRTFDLGlFQUFlQSxnREFBUUEsQ0FBQztJQUd0QkcsV0FBVztRQUNURixzRUFBbUJBLENBQUM7WUFDbEIsbUVBQW1FO1lBQ25FRyxNQUFNO1lBR05DLGFBQVk7Z0JBQ1ZDLE9BQU07b0JBQ0ZDLE9BQU07b0JBQ05DLE1BQUs7Z0JBQ1Q7Z0JBRUFDLFVBQVM7b0JBQ0xGLE9BQU07b0JBQ05DLE1BQUs7Z0JBQ1Q7WUFDSjtZQUVFLGdFQUFnRTtZQUNoRSxnR0FBZ0c7WUFDaEcsbURBQW1EO1lBQ25ELHlFQUF5RTtZQUN6RSxNQUFNRSxXQUFVTCxXQUFXLEVBQUVNLEdBQUc7Z0JBQzlCLG1FQUFtRTtnQkFDbkUsTUFBTSxFQUFDQyxRQUFRLEVBQUNILFFBQVEsRUFBQyxHQUFHSjtnQkFFNUIsTUFBTVEsTUFBTSxNQUFNQyxNQUFNLDBDQUEwQztvQkFDaEVDLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsVUFBVTt3QkFDbkJQLFVBQVVQLGFBQWFPO3dCQUN2QkgsVUFBVUosYUFBYUk7b0JBQ3pCO2dCQUNGO2dCQUNBLE1BQU1XLE9BQU8sTUFBTVAsSUFBSVE7Z0JBRXZCQyxRQUFRQyxJQUFJSDtnQkFDWkUsUUFBUUMsSUFBSUgsS0FBS0ksT0FBT0MsS0FBS0M7Z0JBRzdCLElBQUdOLEtBQUtJLE9BQU9DLEtBQUtiLGFBQVcsWUFBVztvQkFDdENVLFFBQVFDLElBQUk7b0JBQ1YsT0FBT0g7Z0JBQ2I7Z0JBRUEsT0FBTztZQUNUO1FBQ0Y7S0FDRDtBQUNILElBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc3R3YW5pcGxhc3RpY3RheC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcblxyXG5cclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gXCJTaWduIGluIHdpdGguLi5cIilcclxuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxyXG5cclxuICAgICAgXHJcbiAgICAgIGNyZWRlbnRpYWxzOntcclxuICAgICAgICBlbWFpbDp7XHJcbiAgICAgICAgICAgIGxhYmVsOlwiRW1haWxcIixcclxuICAgICAgICAgICAgdHlwZTondGV4dCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgIFxyXG4gICAgICAgIHBhc3N3b3JkOntcclxuICAgICAgICAgICAgbGFiZWw6J1Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgdHlwZToncGFzc3dvcmQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAgIC8vIGBjcmVkZW50aWFsc2AgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cclxuICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIGZpZWxkcyBzaG91bGQgYmUgc3VibWl0dGVkLCBieSBhZGRpbmcga2V5cyB0byB0aGUgYGNyZWRlbnRpYWxzYCBvYmplY3QuXHJcbiAgICAgIC8vIGUuZy4gZG9tYWluLCB1c2VybmFtZSwgcGFzc3dvcmQsIDJGQSB0b2tlbiwgZXRjLlxyXG4gICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgLy8gQWRkIGxvZ2ljIGhlcmUgdG8gbG9vayB1cCB0aGUgdXNlciBmcm9tIHRoZSBjcmVkZW50aWFscyBzdXBwbGllZFxyXG4gICAgICAgIGNvbnN0IHtlbWFpbF9pZCxwYXNzd29yZH0gPSBjcmVkZW50aWFscztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMy41My45NS40ODozMDAwL2FwaS91c2VyL2xvZ2luJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZW1haWxfaWQ6IGNyZWRlbnRpYWxzPy5lbWFpbF9pZCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzPy5wYXNzd29yZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIucmVzdWx0Lmxpc3QudXNlcl90eXBlKVxyXG5cclxuXHJcbiAgICAgICAgaWYodXNlci5yZXN1bHQubGlzdC5lbWFpbF9pZD09PSdlZWFhZG1pbicpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygneWVzIHVzZXIgaXMgdGhlcmUnKVxyXG4gICAgICAgICAgICAgIHJldHVybiB1c2VyXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXSxcclxufVxyXG4pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInVzZURpc3BhdGNoIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsX2lkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJsaXN0IiwidXNlcl90eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

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