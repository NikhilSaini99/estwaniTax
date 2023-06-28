"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Admin/ShopList",{

/***/ "./src/constants/useFetch.js":
/*!***********************************!*\
  !*** ./src/constants/useFetch.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useFetch: function() { return /* binding */ useFetch; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fetching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetching */ \"./src/constants/fetching.js\");\nvar _s = $RefreshSig$();\n\n\nfunction reducerFunc(state, action) {\n    switch(action.type){\n        case \"success\":\n            return {\n                ...state,\n                data: action.data,\n                error: false\n            };\n        case \"existing\":\n            return {\n                ...state,\n                error: true,\n                errorMessage: action.errorMessage\n            };\n        case \"error\":\n            return {\n                ...state,\n                error: action.error\n            };\n        default:\n            return state;\n    }\n}\nconst useFetch = (method, path)=>{\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducerFunc, {\n        data: null,\n        error: null,\n        errorMessage: \"\"\n    });\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const fetchAPI = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (databody)=>{\n        setIsLoading(true); // Show loader\n        const response = await (0,_fetching__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(method, path, databody);\n        if (response.status === 402) {\n            dispatch({\n                type: \"existing\",\n                errorMessage: response.data.result.mes\n            });\n        } else {\n            dispatch({\n                type: \"success\",\n                data: response.data\n            });\n        }\n        setIsLoading(false); // Hide loader\n    }, [\n        method,\n        path\n    ]);\n    return {\n        data: state.data,\n        error: state.error,\n        errorMessage: state.errorMessage,\n        loading: isLoading,\n        fetchAPI\n    };\n};\n_s(useFetch, \"IIK9H/2BjxYxyLJA+0Ed83cUW+w=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL3VzZUZldGNoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlEO0FBQ3ZCO0FBRWxDLFNBQVNJLFlBQVlDLEtBQUssRUFBRUMsTUFBTTtJQUNoQyxPQUFRQSxPQUFPQztRQUNiLEtBQUs7WUFDSCxPQUFPO2dCQUNMLEdBQUdGLEtBQUs7Z0JBQ1JHLE1BQU1GLE9BQU9FO2dCQUNiQyxPQUFPO1lBQ1Q7UUFDRixLQUFLO1lBQ0gsT0FBTztnQkFDTCxHQUFHSixLQUFLO2dCQUNSSSxPQUFPO2dCQUNQQyxjQUFjSixPQUFPSTtZQUN2QjtRQUNGLEtBQUs7WUFDSCxPQUFPO2dCQUNMLEdBQUdMLEtBQUs7Z0JBQ1JJLE9BQU9ILE9BQU9HO1lBQ2hCO1FBRUY7WUFDRSxPQUFPSjtJQUNYO0FBQ0Y7QUFFTyxNQUFNTSxXQUFXLENBQUNDLFFBQVFDOztJQUMvQixNQUFNLENBQUNSLE9BQU9TLFNBQVMsR0FBR2IsaURBQVVBLENBQUNHLGFBQWE7UUFBRUksTUFBTTtRQUFNQyxPQUFPO1FBQU1DLGNBQWM7SUFBRztJQUM5RixNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWUsV0FBV2pCLGtEQUFXQSxDQUFDLE9BQU9rQjtRQUNsQ0YsYUFBYSxPQUFPLGNBQWM7UUFDbEMsTUFBTUcsV0FBVyxNQUFNaEIscURBQVFBLENBQUNTLFFBQVFDLE1BQU1LO1FBRTlDLElBQUlDLFNBQVNDLFdBQVcsS0FBSztZQUMzQk4sU0FBUztnQkFBRVAsTUFBTTtnQkFBWUcsY0FBY1MsU0FBU1gsS0FBS2EsT0FBT0M7WUFBSTtRQUN0RSxPQUFPO1lBQ0xSLFNBQVM7Z0JBQUVQLE1BQU07Z0JBQVdDLE1BQU1XLFNBQVNYO1lBQUs7UUFDbEQ7UUFDQVEsYUFBYSxRQUFRLGNBQWM7SUFDckMsR0FBRztRQUFDSjtRQUFRQztLQUFLO0lBRWpCLE9BQU87UUFDTEwsTUFBTUgsTUFBTUc7UUFDWkMsT0FBT0osTUFBTUk7UUFDYkMsY0FBY0wsTUFBTUs7UUFDcEJhLFNBQVNSO1FBQ1RFO0lBQ0Y7QUFDRixFQUFFO0dBdkJXTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL3VzZUZldGNoLmpzPzI3MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaGluZyBmcm9tICcuL2ZldGNoaW5nJztcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXJGdW5jKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ2V4aXN0aW5nJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvck1lc3NhZ2VcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yXHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGZXRjaCA9IChtZXRob2QsIHBhdGgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlckZ1bmMsIHsgZGF0YTogbnVsbCwgZXJyb3I6IG51bGwsIGVycm9yTWVzc2FnZTogJycgfSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hBUEkgPSB1c2VDYWxsYmFjayhhc3luYyAoZGF0YWJvZHkpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTsgLy8gU2hvdyBsb2FkZXJcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hpbmcobWV0aG9kLCBwYXRoLCBkYXRhYm9keSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAyKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2V4aXN0aW5nJywgZXJyb3JNZXNzYWdlOiByZXNwb25zZS5kYXRhLnJlc3VsdC5tZXMgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzdWNjZXNzJywgZGF0YTogcmVzcG9uc2UuZGF0YSB9KTtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7IC8vIEhpZGUgbG9hZGVyXHJcbiAgfSwgW21ldGhvZCwgcGF0aF0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogc3RhdGUuZGF0YSxcclxuICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcclxuICAgIGVycm9yTWVzc2FnZTogc3RhdGUuZXJyb3JNZXNzYWdlLFxyXG4gICAgbG9hZGluZzogaXNMb2FkaW5nLFxyXG4gICAgZmV0Y2hBUElcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInJlZHVjZXJGdW5jIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwidXNlRmV0Y2giLCJtZXRob2QiLCJwYXRoIiwiZGlzcGF0Y2giLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmZXRjaEFQSSIsImRhdGFib2R5IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZXN1bHQiLCJtZXMiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/useFetch.js\n"));

/***/ })

});