"use strict";
exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 4126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const baseURl = "http://13.53.95.48:3000/api";
const fetching = async (method, path, databody)=>{
    try {
        if (method === "post") {
            const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                method: method,
                url: `${baseURl}${path}`,
                data: databody
            });
            return response;
        } else if (method === "get") {
            const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
                method: method,
                url: `${baseURl}${path}`
            });
            return response;
        }
    } catch (err) {
        return err;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetching);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fetching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4126);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fetching__WEBPACK_IMPORTED_MODULE_1__]);
_fetching__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function reducerFunc(state, action) {
    if (action.type === "success") {
        // action.data.result.list.token
        console.log(action.data);
        return {
            ...state,
            data: action.data,
            error: false
        };
    } else if (action.type === "existing") {
        // alert(action.errorMessage)
        return {
            ...state,
            error: true,
            errorMessage: action.errorMessage
        };
    } else if (action.type === "error") {
        console.log(action.data);
        return {
            ...state,
            error: action.error
        };
    }
}
const useFetch = (method, path)=>{
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducerFunc, {
        data: null,
        error: null,
        errorMessage: ""
    });
    const fetchAPI = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((databody)=>{
        (0,_fetching__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(method, path, databody).then((response)=>{
            // console.log(response.response.data.result.mes)
            // if (response.response.status === 402) {
            //     dispatch({ type: 'existing', errorMessage: response.response.data.result.mes })
            // }else{
            //     dispatch({ type: 'success', data: response.data })
            // }
            dispatch({
                type: "success",
                data: response.data
            });
        }).catch((e)=>{
            dispatch({
                type: "error",
                err: e
            });
        });
    }, [
        method,
        path
    ]);
    return {
        data: state.data,
        error: state.error,
        errorMessage: state.errorMessage,
        fetchAPI
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;