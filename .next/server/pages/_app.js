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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (router === \"/\") {\n            particlesJS(\"particles-js\", {\n                \"particles\": {\n                    \"number\": {\n                        \"value\": 80,\n                        \"density\": {\n                            \"enable\": true,\n                            \"value_area\": 800\n                        }\n                    },\n                    \"color\": {\n                        \"value\": \"#000000\"\n                    },\n                    \"shape\": {\n                        \"type\": \"circle\",\n                        \"stroke\": {\n                            \"width\": 0,\n                            \"color\": \"#000000\"\n                        },\n                        \"polygon\": {\n                            \"nb_sides\": 5\n                        },\n                        \"image\": {\n                            \"src\": \"img/github.svg\",\n                            \"width\": 100,\n                            \"height\": 100\n                        }\n                    },\n                    \"opacity\": {\n                        \"value\": 0.5,\n                        \"random\": false,\n                        \"anim\": {\n                            \"enable\": false,\n                            \"speed\": 1,\n                            \"opacity_min\": 0.1,\n                            \"sync\": false\n                        }\n                    },\n                    \"size\": {\n                        \"value\": 5,\n                        \"random\": true,\n                        \"anim\": {\n                            \"enable\": false,\n                            \"speed\": 40,\n                            \"size_min\": 0.1,\n                            \"sync\": false\n                        }\n                    },\n                    \"line_linked\": {\n                        \"enable\": true,\n                        \"distance\": 150,\n                        \"color\": \"#000000\",\n                        \"opacity\": 0.4,\n                        \"width\": 1\n                    },\n                    \"move\": {\n                        \"enable\": true,\n                        \"speed\": 6,\n                        \"direction\": \"none\",\n                        \"random\": false,\n                        \"straight\": false,\n                        \"out_mode\": \"out\",\n                        \"attract\": {\n                            \"enable\": false,\n                            \"rotateX\": 600,\n                            \"rotateY\": 1200\n                        }\n                    }\n                },\n                \"interactivity\": {\n                    \"detect_on\": \"canvas\",\n                    \"events\": {\n                        \"onhover\": {\n                            \"enable\": true,\n                            \"mode\": \"repulse\"\n                        },\n                        \"onclick\": {\n                            \"enable\": true,\n                            \"mode\": \"push\"\n                        },\n                        \"resize\": true\n                    },\n                    \"modes\": {\n                        \"grab\": {\n                            \"distance\": 400,\n                            \"line_linked\": {\n                                \"opacity\": 1\n                            }\n                        },\n                        \"bubble\": {\n                            \"distance\": 400,\n                            \"size\": 40,\n                            \"duration\": 2,\n                            \"opacity\": 8,\n                            \"speed\": 3\n                        },\n                        \"repulse\": {\n                            \"distance\": 200\n                        },\n                        \"push\": {\n                            \"particles_nb\": 4\n                        },\n                        \"remove\": {\n                            \"particles_nb\": 2\n                        }\n                    }\n                },\n                \"retina_detect\": true,\n                \"config_demo\": {\n                    \"hide_card\": false,\n                    \"background_color\": \"#000000\",\n                    \"background_image\": \"\",\n                    \"background_position\": \"50% 50%\",\n                    \"background_repeat\": \"no-repeat\",\n                    \"background_size\": \"cover\"\n                }\n            });\n        }\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css\",\n                integrity: \"sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==\",\n                crossOrigin: \"anonymous\",\n                referrerPolicy: \"no-referrer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\abhi_portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 136,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js\",\n                integrity: \"sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==\",\n                crossOrigin: \"anonymous\",\n                referrerPolicy: \"no-referrer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\abhi_portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 137,\n                columnNumber: 5\n            }, this),\n            router === \"/\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.5/typed.min.js\",\n                        integrity: \"sha512-1KbKusm/hAtkX5FScVR5G36wodIMnVd/aP04af06iyQTkD17szAMGNmxfNH+tEuFp3Og/P5G32L1qEC47CZbUQ==\",\n                        crossOrigin: \"anonymous\",\n                        referrerPolicy: \"no-referrer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\abhi_portfolio\\\\pages\\\\_app.js\",\n                        lineNumber: 139,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"./js/particles.min.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\abhi_portfolio\\\\pages\\\\_app.js\",\n                        lineNumber: 140,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js\",\n                        integrity: \"sha512-SttpKhJqONuBVxbRcuH0wezjuX+BoFoli0yPsnrAADcHsQMW8rkR84ItFHGIkPvhnlRnE2FaifDOUw+EltbuHg==\",\n                        crossOrigin: \"anonymous\",\n                        referrerPolicy: \"no-referrer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\abhi_portfolio\\\\pages\\\\_app.js\",\n                        lineNumber: 141,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://unpkg.com/scrollreveal\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\abhi_portfolio\\\\pages\\\\_app.js\",\n                        lineNumber: 142,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/js/script.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\abhi_portfolio\\\\pages\\\\_app.js\",\n                        lineNumber: 143,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"text/javascript\",\n                src: \"https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\abhi_portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 146,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\abhi_portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 152,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ2UsS0FBSTs7Ozs7OzsrQkFDUjswQkFFTiw4REFBQ0Q7Z0JBQ0NFLE1BQUs7Z0JBQ0xELEtBQUk7Ozs7OzswQkFJTiw4REFBQ1g7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFJNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmhpcG9ydGZvbGlvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnQC9wdWJsaWMvY3NzL3N0eWxlLmNzcydcclxuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUGF0aG5hbWUoKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyID09PSAnLycpIHtcclxuICAgICAgcGFydGljbGVzSlMoJ3BhcnRpY2xlcy1qcycsXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwicGFydGljbGVzXCI6IHtcclxuICAgICAgICAgICAgXCJudW1iZXJcIjoge1xyXG4gICAgICAgICAgICAgIFwidmFsdWVcIjogODAsXHJcbiAgICAgICAgICAgICAgXCJkZW5zaXR5XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlX2FyZWFcIjogODAwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2hhcGVcIjoge1xyXG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgICAgIFwic3Ryb2tlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMCxcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwicG9seWdvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIm5iX3NpZGVzXCI6IDVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwiaW1hZ2VcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCJpbWcvZ2l0aHViLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMDBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAwLjUsXHJcbiAgICAgICAgICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJzcGVlZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLjEsXHJcbiAgICAgICAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA1LFxyXG4gICAgICAgICAgICAgIFwicmFuZG9tXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXCJzcGVlZFwiOiA0MCxcclxuICAgICAgICAgICAgICAgIFwic2l6ZV9taW5cIjogMC4xLFxyXG4gICAgICAgICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImxpbmVfbGlua2VkXCI6IHtcclxuICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogMTUwLFxyXG4gICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDAuNCxcclxuICAgICAgICAgICAgICBcIndpZHRoXCI6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtb3ZlXCI6IHtcclxuICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgIFwic3BlZWRcIjogNixcclxuICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBcInJhbmRvbVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICBcInN0cmFpZ2h0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIixcclxuICAgICAgICAgICAgICBcImF0dHJhY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcInJvdGF0ZVhcIjogNjAwLFxyXG4gICAgICAgICAgICAgICAgXCJyb3RhdGVZXCI6IDEyMDBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImludGVyYWN0aXZpdHlcIjoge1xyXG4gICAgICAgICAgICBcImRldGVjdF9vblwiOiBcImNhbnZhc1wiLFxyXG4gICAgICAgICAgICBcImV2ZW50c1wiOiB7XHJcbiAgICAgICAgICAgICAgXCJvbmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJyZXB1bHNlXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFwib25jbGlja1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwicHVzaFwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInJlc2l6ZVwiOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibW9kZXNcIjoge1xyXG4gICAgICAgICAgICAgIFwiZ3JhYlwiOiB7XHJcbiAgICAgICAgICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcclxuICAgICAgICAgICAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJidWJibGVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBcInNpemVcIjogNDAsXHJcbiAgICAgICAgICAgICAgICBcImR1cmF0aW9uXCI6IDIsXHJcbiAgICAgICAgICAgICAgICBcIm9wYWNpdHlcIjogOCxcclxuICAgICAgICAgICAgICAgIFwic3BlZWRcIjogM1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJyZXB1bHNlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogMjAwXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBcInB1c2hcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogNFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogMlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwicmV0aW5hX2RldGVjdFwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJjb25maWdfZGVtb1wiOiB7XHJcbiAgICAgICAgICAgIFwiaGlkZV9jYXJkXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmRfY29sb3JcIjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZF9pbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmRfcG9zaXRpb25cIjogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZF9yZXBlYXRcIjogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kX3NpemVcIjogXCJjb3ZlclwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgfSwgW3JvdXRlcl0pXHJcblxyXG4gIHJldHVybiA8PlxyXG5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMy9jc3MvYWxsLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGE1MTItaUJCWG04Zlc5MCtudUxjU0tsYm1yUGNMYTBPVDkyeE8xQklzWit5d0RXWkN2cXNXZ2NjVjNnRm9SQnYweis4ZExKZ3lBSEloUjM1VlpjMm9NL2dJMXc9PVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgcmVmZXJyZXJQb2xpY3k9XCJuby1yZWZlcnJlclwiIC8+XHJcbiAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhNTEyLTg5NFlFNlFXRDVJNTlIZ1pPR1JlRlltNGRuV2MxUXQ1TnR2WVNhTmNPUCt1MVQ5cVlkdmRpaHowUFBTaWlxbi8rLzNlN0pvNEVhRzdUdWJmV0dVck1RPT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIj48L3NjcmlwdD5cclxuXHJcbiAgICB7cm91dGVyID09PSAnLycgPyA8PjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvdHlwZWQuanMvMi4wLjUvdHlwZWQubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhNTEyLTFLYkt1c20vaEF0a1g1RlNjVlI1RzM2d29kSU1uVmQvYVAwNGFmMDZpeVFUa0QxN3N6QU1HTm14Zk5IK3RFdUZwM09nL1A1RzMyTDFxRUM0N0NaYlVRPT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIuL2pzL3BhcnRpY2xlcy5taW4uanNcIiAvPlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3ZhbmlsbGEtdGlsdC8xLjcuMC92YW5pbGxhLXRpbHQubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhNTEyLVN0dHBLaEpxT051QlZ4YlJjdUgwd2V6anVYK0JvRm9saTB5UHNuckFBRGNIc1FNVzhya1I4NEl0RkhHSWtQdmhubFJuRTJGYWlmRE9VdytFbHRidUhnPT1cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9zY3JvbGxyZXZlYWxcIj48L3NjcmlwdD5cclxuICAgICAgPFNjcmlwdCBzcmM9Jy9qcy9zY3JpcHQuanMnIC8+XHJcbiAgICA8Lz4gOiAnJ31cclxuXHJcbiAgICA8c2NyaXB0XHJcbiAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxyXG4gICAgICBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2VtYWlsanMtY29tQDMvZGlzdC9lbWFpbC5taW4uanNcIlxyXG4gICAgPjwvc2NyaXB0PlxyXG5cclxuXHJcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblxyXG5cclxuICA8Lz5cclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiU2NyaXB0IiwidXNlRWZmZWN0IiwidXNlUGF0aG5hbWUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJwYXJ0aWNsZXNKUyIsImxpbmsiLCJyZWwiLCJocmVmIiwiaW50ZWdyaXR5IiwiY3Jvc3NPcmlnaW4iLCJyZWZlcnJlclBvbGljeSIsInNjcmlwdCIsInNyYyIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();