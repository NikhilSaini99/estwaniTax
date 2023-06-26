"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 6596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/background3.0839a8c9.jpg","height":2000,"width":3000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKwCf//EABoQAAICAwAAAAAAAAAAAAAAAAECAxEAIjH/2gAIAQEAAT8AUpMu0Yuu5//EABcRAQADAAAAAAAAAAAAAAAAAAEAAjH/2gAIAQIBAT8Aspk//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAA//aAAgBAwEBPwDnM3A0C7//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 7649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const CustomTextField = ({ inputType, fieldLabel, field, errorDetail, errors, disabled })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
        fullWidth: true,
        InputLabelProps: {
            style: {
                color: "#2C306F"
            }
        },
        InputProps: {
            style: {
                background: "white"
            }
        },
        sx: {
            borderRadius: "5px"
        },
        variant: "outlined",
        autoComplete: "on",
        type: inputType,
        label: fieldLabel,
        error: !!errors[errorDetail],
        helperText: errors[errorDetail]?.message,
        disabled: disabled,
        ...field
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTextField);


/***/ }),

/***/ 8676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bgImgStyling: () => (/* binding */ bgImgStyling),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _features_formSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8676);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(640);
/* harmony import */ var _components_CustomTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7649);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_background3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6596);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3337);
/* harmony import */ var _constants_useFetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3461);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_11__, _constants_useFetch__WEBPACK_IMPORTED_MODULE_13__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_11__, _constants_useFetch__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const bgImgStyling = {
    background: `url(${_public_assets_background3_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.src})`,
    zIndex: "-1",
    backgroundSize: "cover",
    position: "absolute",
    width: "100%",
    height: "100%"
};
const LoginForm = ()=>{
    const { data: loginData, fetchAPI } = (0,_constants_useFetch__WEBPACK_IMPORTED_MODULE_13__/* .useFetch */ .i)("post", "/user/login");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const loginFormValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.loginForm);
    const [userList, setUserList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { register, control, watch, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: {
            password: "",
            email_id: ""
        }
    });
    const onSubmit = ()=>{
        const watchData = watch();
        console.log("watcghin", watchData);
        dispatch((0,_features_formSlice__WEBPACK_IMPORTED_MODULE_4__/* .updateLoginState */ .Y)(watchData));
        gettingLogin(watchData);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // console.log(loginData)
    }, [
        loginData
    ]);
    const gettingLogin = (watchData)=>{
        // console.log(watchData);
        fetchAPI(watchData);
    };
    // useEffect(() => {
    //     async function checking() {
    //         if (JSON.stringify(loginFormValue) === "{}") {
    //             return
    //         }
    //         // console.log(loginFormValue)
    //         const check = await axios({
    //             method: 'get',
    //             url: `${process.env.NEXT_PUBLIC_API_URL}/admin/user_list`
    //         })
    //             .then((res) => {
    //                 console.log(res.data)
    //                 return res.data.result.list
    //             })
    //         setUserList(check)
    //     }
    //     checking();
    // }, [loginFormValue])
    const formParentStyling = {
        width: {
            xs: "98%",
            lg: "40%"
        },
        margin: "0 auto",
        p: {
            xs: "0.5rem",
            lg: "2rem"
        },
        borderRadius: "20px",
        position: "relative",
        top: "0"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Eswatini Environment Authority"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            userList.length >= 1 && console.log(userList),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                sx: {
                    ...formParentStyling
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    className: "flex flex-col gap-4 bg-white shadow-2xl p-4 rounded-xl  w-full sm:w-3/4 lg:w-full",
                    component: "form",
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            sx: {
                                marginBottom: "2rem"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                variant: "h1",
                                sx: {
                                    fontSize: {
                                        xs: "1.5rem",
                                        md: "2rem",
                                        lg: "3rem"
                                    },
                                    color: "#2C306F"
                                },
                                children: "Get Started Now"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            control: control,
                            name: "email_id",
                            // rules={{ required: 'Email is required' }}
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    field: field,
                                    inputType: "text",
                                    fieldLabel: "Enter Email",
                                    errorDetail: "email_id",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            control: control,
                            name: "password",
                            rules: {
                                required: "Password is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    field: field,
                                    inputType: "password",
                                    fieldLabel: "Enter Password",
                                    errorDetail: "password",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                type: "submit",
                                text: "Login In",
                                bgColor: "#1f892a"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);
{}{}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;