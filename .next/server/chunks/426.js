exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 3220:
/***/ ((module) => {

// Exports
module.exports = {
	"menu-items": "Navbar_menu-items__Ats6Y",
	"hamburger": "Navbar_hamburger__OIX2Y",
	"check": "Navbar_check__XagqC",
	"drawer": "Navbar_drawer__AeabX"
};


/***/ }),

/***/ 640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const CustomButton = ({ bgColor, textColor, text, type, btnDisable, handleClick })=>{
    const btnStyling = {
        backgroundColor: `${bgColor} !important`,
        color: "#FEFEFE",
        "&:hover": {
            backgroundColor: `${bgColor}F1 `
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: type,
        variant: "contained",
        sx: {
            ...btnStyling
        },
        disabled: btnDisable,
        onClick: handleClick,
        children: text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomButton);


/***/ }),

/***/ 3337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.b7e3a3f4.png","height":76,"width":260,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGOcvWJF1ddfvwMF+dkWcf1m+MzKwc7x4/v3L+xs7Be5eXneMU5aOr/1w59vsZLcPH0K/BLvf/z+xfvnzx8WRgaGO1w83CcA84IdlrJGwK0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Navbar.module.css
var Navbar_module = __webpack_require__(3220);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbar.js










const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [navColor, setNavColor] = (0,external_react_.useState)(false);
    function changeColor() {
        if (window.scrollY > 100) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    }
    (0,external_react_.useEffect)(()=>{
        changeColor();
        window.addEventListener("scroll", changeColor);
        return ()=>{
            window.removeEventListener("scroll", changeColor);
        };
    }, []);
    function handleHamburger() {
        setIsOpen(!isOpen);
    }
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Paper, {
        elevation: 20,
        sx: {
            zIndex: "999",
            position: "relative",
            top: "0",
            backgroundColor: "transparent"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
            py: 1.5,
            sx: {
                width: "100%",
                position: "relative",
                top: "0",
                flexDirection: {
                    xs: "row",
                    sm: "row",
                    md: "row"
                },
                ...navColor ? {
                    backgroundColor: "#1f892a",
                    transition: "background-color 0.5s ease"
                } : {
                    backgroundColor: "#1f892aC5   ",
                    transition: "background-color 0.8s ease-out"
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: {
                    md: "1rem"
                },
                px: {
                    xs: "2rem",
                    md: "5rem"
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    display: "flex",
                    sx: {
                        "&:hover": {
                            color: "#DE3163",
                            transition: "color 0.5s"
                        },
                        cursor: "pointer",
                        alignItems: "center",
                        gap: {
                            xs: "10px",
                            sm: "20px"
                        },
                        py: {
                            xs: "1rem",
                            sm: "0.8rem",
                            md: "0.2rem"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.2rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: logo,
                                alt: "Profile_image",
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    maxWidth: "10rem",
                                    borderRadius: "50%"
                                }
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                    fontWeight: "bold",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: (Navbar_module_default()).check,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/RTR/RTRform",
                                    children: "RTR Form"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/Admin/ShopList",
                                    children: "RTR List"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                            sx: {
                                display: "none",
                                color: "black"
                            },
                            onClick: handleHamburger,
                            className: (Navbar_module_default()).hamburger,
                            type: "button",
                            "aria-label": "menu",
                            endIcon: /*#__PURE__*/ jsx_runtime.jsx((Menu_default()), {
                                sx: {
                                    fontSize: "12rem !important"
                                }
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Drawer, {
                    anchor: "right",
                    open: isOpen,
                    variant: "temporary",
                    onClose: handleHamburger,
                    className: (Navbar_module_default()).drawer,
                    BackdropProps: {
                        style: {
                            backgroundColor: "transparent",
                            opacity: 2
                        }
                    },
                    PaperProps: {
                        elevation: 5,
                        sx: {
                            paddingTop: "20px",
                            // height: 320,
                            width: "100%",
                            backgroundColor: "#E9F1FA"
                        }
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                        fontWeight: "bold",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/RTR/RTRform",
                                        children: "RTR Form"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/Admin/ShopList",
                                        children: "RTR List"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.IconButton, {
                                onClick: handleHamburger,
                                display: "flex",
                                sx: {
                                    width: "100%",
                                    marginTop: "2.5rem"
                                },
                                role: "button",
                                children: /*#__PURE__*/ jsx_runtime.jsx((Close_default()), {
                                    sx: {
                                        fontSize: "2rem",
                                        color: "black",
                                        borderRadius: "50px"
                                    }
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);


/***/ })

};
;