"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/RTR/RTRform",{

/***/ "./src/constants/useFetch.js":
/*!***********************************!*\
  !*** ./src/constants/useFetch.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useFetch: function() { return /* binding */ useFetch; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fetching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetching */ \"./src/constants/fetching.js\");\nvar _s = $RefreshSig$();\n\n\nfunction reducerFunc(state, action) {\n    switch(action.type){\n        case \"success\":\n            return {\n                ...state,\n                data: action.data,\n                error: false\n            };\n        case \"existing\":\n            return {\n                ...state,\n                error: true,\n                errorMessage: action.errorMessage\n            };\n        case \"error\":\n            return {\n                ...state,\n                error: action.error\n            };\n        default:\n            return state;\n    }\n}\nconst useFetch = (method, path)=>{\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducerFunc, {\n        data: null,\n        error: null,\n        errorMessage: \"\"\n    });\n    const fetchAPI = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (databody)=>{\n        const response = await (0,_fetching__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(method, path, databody);\n        if (response.status === 402) {\n            dispatch({\n                type: \"existing\",\n                errorMessage: response.data.result.mes\n            });\n        } else {\n            dispatch({\n                type: \"success\",\n                data: response.data\n            });\n        }\n    }, [\n        method,\n        path\n    ]);\n    return {\n        data: state.data,\n        error: state.error,\n        errorMessage: state.errorMessage,\n        fetchAPI\n    };\n};\n_s(useFetch, \"xJV0BCYf6YKNXwE6eRPUY/v6Z2E=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL3VzZUZldGNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBQ2Q7QUFFbEMsU0FBU0csWUFBWUMsS0FBSyxFQUFFQyxNQUFNO0lBQ2hDLE9BQVFBLE9BQU9DO1FBQ2IsS0FBSztZQUNILE9BQU87Z0JBQ0wsR0FBR0YsS0FBSztnQkFDUkcsTUFBTUYsT0FBT0U7Z0JBQ2JDLE9BQU87WUFDVDtRQUNGLEtBQUs7WUFDSCxPQUFPO2dCQUNMLEdBQUdKLEtBQUs7Z0JBQ1JJLE9BQU87Z0JBQ1BDLGNBQWNKLE9BQU9JO1lBQ3ZCO1FBQ0YsS0FBSztZQUNILE9BQU87Z0JBQ0wsR0FBR0wsS0FBSztnQkFDUkksT0FBT0gsT0FBT0c7WUFDaEI7UUFDRjtZQUNFLE9BQU9KO0lBQ1g7QUFDRjtBQUVPLE1BQU1NLFdBQVcsQ0FBQ0MsUUFBUUM7O0lBQy9CLE1BQU0sQ0FBQ1IsT0FBT1MsU0FBUyxHQUFHWixpREFBVUEsQ0FBQ0UsYUFBYTtRQUFFSSxNQUFNO1FBQU1DLE9BQU87UUFBTUMsY0FBYztJQUFHO0lBRTlGLE1BQU1LLFdBQVdkLGtEQUFXQSxDQUFDLE9BQU9lO1FBQ2xDLE1BQU1DLFdBQVcsTUFBTWQscURBQVFBLENBQUNTLFFBQVFDLE1BQU1HO1FBRTlDLElBQUlDLFNBQVNDLFdBQVcsS0FBSztZQUMzQkosU0FBUztnQkFBRVAsTUFBTTtnQkFBWUcsY0FBY08sU0FBU1QsS0FBS1csT0FBT0M7WUFBSTtRQUN0RSxPQUFPO1lBQ0xOLFNBQVM7Z0JBQUVQLE1BQU07Z0JBQVdDLE1BQU1TLFNBQVNUO1lBQUs7UUFDbEQ7SUFDRixHQUFHO1FBQUNJO1FBQVFDO0tBQUs7SUFFakIsT0FBTztRQUNMTCxNQUFNSCxNQUFNRztRQUNaQyxPQUFPSixNQUFNSTtRQUNiQyxjQUFjTCxNQUFNSztRQUNwQks7SUFDRjtBQUNGLEVBQUU7R0FuQldKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25zdGFudHMvdXNlRmV0Y2guanM/MjczMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZldGNoaW5nIGZyb20gJy4vZmV0Y2hpbmcnO1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlckZ1bmMoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnZXhpc3RpbmcnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZVxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGZXRjaCA9IChtZXRob2QsIHBhdGgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlckZ1bmMsIHsgZGF0YTogbnVsbCwgZXJyb3I6IG51bGwsIGVycm9yTWVzc2FnZTogJycgfSk7XHJcblxyXG4gIGNvbnN0IGZldGNoQVBJID0gdXNlQ2FsbGJhY2soYXN5bmMgKGRhdGFib2R5KSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoaW5nKG1ldGhvZCwgcGF0aCwgZGF0YWJvZHkpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMikge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdleGlzdGluZycsIGVycm9yTWVzc2FnZTogcmVzcG9uc2UuZGF0YS5yZXN1bHQubWVzIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc3VjY2VzcycsIGRhdGE6IHJlc3BvbnNlLmRhdGEgfSk7XHJcbiAgICB9XHJcbiAgfSwgW21ldGhvZCwgcGF0aF0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogc3RhdGUuZGF0YSxcclxuICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcclxuICAgIGVycm9yTWVzc2FnZTogc3RhdGUuZXJyb3JNZXNzYWdlLFxyXG4gICAgZmV0Y2hBUElcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VSZWR1Y2VyIiwiZmV0Y2hpbmciLCJyZWR1Y2VyRnVuYyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJlcnJvciIsImVycm9yTWVzc2FnZSIsInVzZUZldGNoIiwibWV0aG9kIiwicGF0aCIsImRpc3BhdGNoIiwiZmV0Y2hBUEkiLCJkYXRhYm9keSIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVzdWx0IiwibWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/useFetch.js\n"));

/***/ })

});