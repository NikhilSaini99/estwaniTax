(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/_app.js
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (App)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/features/formSlice.js
var formSlice = __webpack_require__(8676);
// EXTERNAL MODULE: ./src/features/SignupSlice.js
var SignupSlice = __webpack_require__(1448);
// EXTERNAL MODULE: ./src/features/RTRformslice.js
var RTRformslice = __webpack_require__(4937);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
;// CONCATENATED MODULE: ./src/state/store.js







const persistConfig = {
    key: "root",
    storage: (storage_default())
};
const reducer = (0,toolkit_.combineReducers)({
    loginForm: formSlice/* default */.Z,
    SignupForm: SignupSlice/* default */.ZP,
    rtrForm: RTRformslice/* default */.ZP
});
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, reducer);
const store = (0,toolkit_.configureStore)({
    reducer: persistedReducer
});
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);

;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const integration_react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: ./src/pages/_app.js









function App({ Component, pageProps }) {
    const theme = (0,styles_.createTheme)({
        typography: {
            fontFamily: [
                "Jacques Francois",
                "ui-sans-serif",
                "ui-sans-serif",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji"
            ].join(",")
        }
    });
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime.jsx(styles_.ThemeProvider, {
            theme: theme,
            children: /*#__PURE__*/ jsx_runtime.jsx(integration_react_namespaceObject.PersistGate, {
                loading: null,
                persistor: persistor,
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 4937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P2: () => (/* binding */ rtrData),
/* harmony export */   WG: () => (/* binding */ existingData),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export rtrSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {};
const rtrSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "RTRform",
    initialState,
    reducers: {
        rtrData: (state, action)=>{
            state = action.payload;
            console.log("checking satate in ", state);
            return state;
        },
        existingData: (state, action)=>{
            return state = action.payload;
        }
    }
});
const { rtrData, existingData } = rtrSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rtrSlice.reducer);


/***/ }),

/***/ 1448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hK: () => (/* binding */ signupData)
/* harmony export */ });
/* unused harmony export signUpSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    name_of_business: "",
    address: "",
    tin: "",
    first_name: "",
    last_name: "",
    designation: "",
    telephone_number: "",
    cell_phone_number: "",
    email_id: "",
    password: "",
    // rePassword: '',
    user_type: 2
};
const signUpSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "SignUp",
    initialState,
    reducers: {
        signupData: (state, action)=>{
            return state = action.payload;
        }
    }
});
const { signupData } = signUpSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signUpSlice.reducer);


/***/ }),

/***/ 8676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ updateLoginState),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {};
const loginformSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "form",
    initialState,
    reducers: {
        updateLoginState: (state, action)=>{
            return state = action.payload;
        }
    }
});
const { updateLoginState } = loginformSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginformSlice.reducer);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812], () => (__webpack_exec__(9266)));
module.exports = __webpack_exports__;

})();