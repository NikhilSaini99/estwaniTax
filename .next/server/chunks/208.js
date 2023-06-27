"use strict";
exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 1448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 7208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _features_SignupSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1448);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7649);
/* harmony import */ var _Login_LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(314);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(640);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3337);
/* harmony import */ var _constants_useFetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3461);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _Login_LoginForm__WEBPACK_IMPORTED_MODULE_8__, _constants_useFetch__WEBPACK_IMPORTED_MODULE_11__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _Login_LoginForm__WEBPACK_IMPORTED_MODULE_8__, _constants_useFetch__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Signup = ()=>{
    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: registerData, error, errorMessage, fetchAPI } = (0,_constants_useFetch__WEBPACK_IMPORTED_MODULE_11__/* .useFetch */ .i)("post", "/user/ragister");
    const [errorSet, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const signUpFormValue = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.SignupForm);
    const { control, handleSubmit, watch, reset, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        defaultValues: {
            name_of_business: signUpFormValue.name_of_business,
            address: signUpFormValue.address,
            tin: signUpFormValue.tin,
            first_name: signUpFormValue.first_name,
            last_name: "Test",
            designation: signUpFormValue.designation,
            telephone_number: signUpFormValue.telephone_number,
            cell_phone_number: signUpFormValue.cell_phone_number,
            email_id: signUpFormValue.email_id,
            password: signUpFormValue.password,
            rePassword: "",
            user_type: 2
        }
    });
    const password = watch("password");
    const rePassword = watch("rePassword");
    const onsubmit = (data)=>{
        if (password !== rePassword) {
            // alert("Passwords do not match. Please try again.")
            setPasswordError(true);
            return;
        }
        setPasswordError(false);
        //removing repassword field and making a new copy without it usingLodash lib
        const newData = lodash_omit__WEBPACK_IMPORTED_MODULE_12___default()(data, "rePassword");
        dispatch((0,_features_SignupSlice__WEBPACK_IMPORTED_MODULE_4__/* .signupData */ .hK)(newData)); //Dispatching data to store 
        resgitserUser(newData);
        if (error) {
            alert(errorMessage);
            setError(false);
            return;
        }
    // reset()
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (error) {
            alert(errorMessage);
            return;
        }
    }, [
        errorMessage,
        error
    ]);
    function resgitserUser(data) {
        //calling API with the form field
        fetchAPI(data);
    }
    const formParentStyling = {
        width: {
            xs: "98%",
            lg: "50%"
        },
        margin: "0 auto",
        p: {
            xs: "0.5rem",
            lg: "2rem"
        },
        borderRadius: "20px",
        position: "relative",
        top: "0",
        minHeight: {
            xs: "100vh",
            lg: "800px"
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                sx: {
                    ...formParentStyling
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                    className: "grid grid-cols-2 gap-4 bg-white shadow-2xl p-4 rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-3/4 lg:w-full",
                    component: "form",
                    onSubmit: handleSubmit(onsubmit),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                            className: "col-span-full",
                            variant: "h1",
                            sx: {
                                marginBottom: "2rem",
                                fontSize: {
                                    xs: "1.5rem",
                                    md: "2rem",
                                    lg: "3rem"
                                },
                                color: "#2C306F"
                            },
                            children: "Sign Up Now!!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "name_of_business",
                            rules: {
                                required: "BusinessName is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputType: "text",
                                    fieldLabel: "Enter BusinessName",
                                    field: field,
                                    errorDetail: "name_of_business",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "address",
                            rules: {
                                required: "Address is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputType: "text",
                                    fieldLabel: "Enter Address",
                                    field: field,
                                    errorDetail: "address",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "tin",
                            rules: {
                                required: "Tin is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputType: "number",
                                    fieldLabel: "Enter Tin",
                                    field: field,
                                    errorDetail: "tin",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "first_name",
                            rules: {
                                required: "PrimaryContact is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputType: "text",
                                    fieldLabel: "Enter Full Name",
                                    field: field,
                                    errorDetail: "first_name",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "designation",
                            rules: {
                                required: "Designation is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputType: "text",
                                    fieldLabel: "Enter Designation",
                                    field: field,
                                    errorDetail: "designation",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "telephone_number",
                            rules: {
                                required: "TeleNo is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputType: "number",
                                    fieldLabel: "Enter Telephone Number",
                                    field: field,
                                    errorDetail: "telephone_number",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "cell_phone_number",
                            rules: {
                                required: "CellNo is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputType: "number",
                                    fieldLabel: "Enter Celephone Number",
                                    field: field,
                                    errorDetail: "cell_phone_number",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "email_id",
                            rules: {
                                required: "Email is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputType: "email",
                                    fieldLabel: "Enter Email",
                                    field: field,
                                    errorDetail: "email_id",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "password",
                            rules: {
                                required: "Password is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    inputType: "password",
                                    fieldLabel: "Enter Password",
                                    field: field,
                                    errorDetail: "password",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "rePassword",
                            rules: {
                                required: "Password is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            name: "repassword",
                                            inputType: "password",
                                            fieldLabel: "Re-Type-Password",
                                            field: field,
                                            errorDetail: "rePassword",
                                            errors: errors
                                        }),
                                        passwordError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            style: {
                                                color: "red"
                                            },
                                            children: "Passwords do not match. Please try again."
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {
                            className: "col-span-full flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                type: "submit",
                                text: "Register",
                                bgColor: "#2C306F"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;