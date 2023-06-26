"use strict";
exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 4937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 8507:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _features_RTRformslice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4937);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(298);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1856);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(640);
/* harmony import */ var _components_CustomTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7649);
/* harmony import */ var _public_assets_background3_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6596);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3337);
/* harmony import */ var _Login_LoginForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(314);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Login_LoginForm__WEBPACK_IMPORTED_MODULE_14__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _Login_LoginForm__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const RTRform = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const RTRformData = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.rtrForm);
    const [handleCheck, sethandleCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedDates, setSelectedDates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        from: null,
        to: null
    });
    const { handleSubmit, control, watch, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        defaultValues: {
            dateFrom: null,
            dateTo: null,
            companyName: "",
            tin: "",
            email: "",
            cellPhone: "",
            designation: "",
            fullName: ""
        }
    });
    const onsubmit = (data)=>{
        const watchedData = watch();
        const from = watchedData.dateFrom ? watchedData.dateFrom.toISOString() : null;
        const to = watchedData.dateTo ? watchedData.dateTo.toISOString() : null;
        setSelectedDates({
            from: from,
            to: to
        });
        dispatch((0,_features_RTRformslice__WEBPACK_IMPORTED_MODULE_4__/* .rtrData */ .P2)({
            ...data,
            dateFrom: from,
            dateTo: to
        }));
    };
    const formParentStyling = {
        width: {
            xs: "98%",
            md: "98%",
            lg: "98%"
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
            mt: "15rem"
        }
    };
    function handleCheckChange(e) {
        sethandleCheck(!handleCheck);
        console.log(handleCheck);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            RTRformData && console.log(RTRformData),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                sx: {
                    ...formParentStyling
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                    component: "form",
                    className: "grid grid-cols-2 gap-4 bg-white shadow-2xl p-4 rounded-xl my-12",
                    onSubmit: handleSubmit(onsubmit),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
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
                            children: "Plastic Levy Return!"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_7__.LocalizationProvider, {
                            dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_5__.AdapterDayjs,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                    control: control,
                                    name: "dateFrom",
                                    rules: {
                                        required: "Date is required"
                                    },
                                    render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6__.DatePicker, {
                                            label: "From",
                                            slotProps: {
                                                textField: {
                                                    variant: "outlined"
                                                }
                                            },
                                            ...field
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                    control: control,
                                    name: "dateTo",
                                    rules: {
                                        required: "Date is required"
                                    },
                                    render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_6__.DatePicker, {
                                            label: "To",
                                            slotProps: {
                                                textField: {
                                                    variant: "outlined"
                                                }
                                            },
                                            ...field
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            control: control,
                            name: "companyName",
                            rules: {
                                required: "Name of the Company is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    field: field,
                                    inputType: "text",
                                    fieldLabel: "Company Name",
                                    errorDetail: "companyName",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            control: control,
                            name: "tin",
                            rules: {
                                required: "TIN is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    field: field,
                                    inputType: "number",
                                    fieldLabel: "TIN",
                                    errorDetail: "tin",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            control: control,
                            name: "email",
                            rules: {
                                required: "Email Address is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    field: field,
                                    inputType: "email",
                                    fieldLabel: "Enter Email",
                                    errorDetail: "email",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            control: control,
                            name: "cellPhone",
                            rules: {
                                required: "Cell Phone Number is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    field: field,
                                    inputType: "number",
                                    fieldLabel: "Cell Phone Number",
                                    errorDetail: "cellPhone",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                            className: "col-span-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableContainer, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Table, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableHead, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableRow, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                            children: "Product"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                            children: "Opening Stock (Qty)"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                            children: "Purchases(+) (Qty)"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                            children: "Sales(-) (Qty)"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                            children: "Rate"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                            children: "Levy(E)"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                            children: [
                                                                "Closing Stock",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                "(OP + P – S) (Qty)"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableBody, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableRow, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: "+30 microns plastics"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number",
                                                                    value: "0.35",
                                                                    disabled: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number",
                                                                    disabled: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number",
                                                                    disabled: true
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableRow, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: "-30 microns plastics"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number",
                                                                    value: "0.20",
                                                                    disabled: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number",
                                                                    disabled: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number",
                                                                    disabled: true
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableRow, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: "Refuse bags"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number",
                                                                    value: "0.35",
                                                                    disabled: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number",
                                                                    disabled: true
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TableCell, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, {
                                                                    type: "number",
                                                                    disabled: true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                                    className: "col-span-full flex flex-col gap-4 justify-center items-center my-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                            variant: "body1",
                                            sx: {
                                                fontWeight: "bold"
                                            },
                                            children: " TOTAL LEVY PAYABLE"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            text: "Calculate",
                                            bgColor: "#1f892a"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            control: control,
                            name: "fullName",
                            rules: {
                                required: "FullName is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    field: field,
                                    inputType: "text",
                                    fieldLabel: "Full Name",
                                    errorDetail: "fullName",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            control: control,
                            name: "designation",
                            rules: {
                                required: "Desgination is required"
                            },
                            render: ({ field })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomTextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    field: field,
                                    inputType: "text",
                                    fieldLabel: "Desgination",
                                    errorDetail: "designation",
                                    errors: errors
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.FormGroup, {
                            className: "col-span-full flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.FormControlLabel, {
                                required: true,
                                control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Checkbox, {
                                    checked: handleCheck,
                                    onChange: handleCheckChange
                                }),
                                label: "Certified to the best of my knowledge as true, correct, and complete"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                            className: "col-span-full flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                text: "Submit",
                                bgColor: "#1f892a",
                                type: "submit",
                                btnDisable: !handleCheck
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RTRform);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;