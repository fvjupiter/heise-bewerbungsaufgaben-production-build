"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Loader.js
var Loader = __webpack_require__(6494);
;// CONCATENATED MODULE: ./components/Weather.js



function Weather({ isPrompt  }) {
    const { 0: loc , 1: setloc  } = (0,external_react_.useState)(null);
    const { 0: data , 1: setdata  } = (0,external_react_.useState)(null);
    const { 0: askedForUserLocation , 1: setaskedForUserLocation  } = (0,external_react_.useState)(false);
    const fetchWeather = async (lat, lon)=>{
        const appId = "44202ae07c2ec2db1a823b9aa9317443";
        try {
            if (lat && lon) {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${appId}`);
                const fetchedData = await res.json();
                // console.log(fetchedData)
                setdata(fetchedData);
            }
        } catch (error) {
            console.log("error:", error);
        }
    };
    (0,external_react_.useEffect)(()=>{
        let timO = ()=>{};
        if (isPrompt && !loc) setloc({
            lat: 52.52,
            lon: 13.40
        }) //Berlin
        ;
        else if (!isPrompt && !askedForUserLocation) {
            const getUserLocation = ()=>{
                try {
                    const options = {
                        maximumAge: 3600000
                    };
                    const success = (pos)=>{
                        setloc({
                            lat: pos.coords.latitude,
                            lon: pos.coords.longitude
                        });
                    };
                    const error = (err)=>{
                        console.log(`error, (${err.code}): ${err.message}`);
                        if (!loc) setloc({
                            lat: 52.52,
                            lon: 13.40
                        }) //Berlin
                        ;
                        setaskedForUserLocation(true);
                    };
                    navigator.geolocation.getCurrentPosition(success, error, options);
                } catch (error1) {
                    console.log("error:", error1);
                }
            };
            timO = setTimeout(()=>{
                getUserLocation();
            }, 3000);
        }
        return ()=>{
            clearTimeout(timO);
        };
    }, [
        isPrompt
    ]);
    (0,external_react_.useEffect)(()=>{
        if (loc) fetchWeather(loc.lat, loc.lon);
    }, [
        loc
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `
        px-2 py-1 sm:w-80 h-24 w-full
        bg-gradient-to-l dark:from-black/90 dark:to-black/40
        dark:shadow-black/90 sm:dark:shadow-black/20 shadow-indigo-400/20 sm:shadow-indigo-400/20
        sm:from-indigo-100/70 
        text-indigo-900 dark:text-white
        rounded-lg shadow-none dark:shadow-md dark:sm:shadow-md sm:shadow-md
        dark:ring-1 sm:ring-1 ring-indigo-400/20 dark:ring-white/30 
        dark:border sm:border border-indigo-500 dark:border-white/30
      `,
        children: data ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "font-extralight",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "font-semibold",
                                children: data.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-sm",
                                children: data.weather[0].description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-5xl",
                                children: [
                                    data.main.temp,
                                    "\xb0"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-sm text-right",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-28 between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "feels like:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    data.main.feels_like,
                                                    "\xb0"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-28 between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "H:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    data.main.temp_max,
                                                    "\xb0"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-28 between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "L:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    data.main.temp_min,
                                                    "\xb0"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "center -translate-y-2",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {})
        })
    });
};

;// CONCATENATED MODULE: ./components/Header.js





function Header({ isDark , isPrompt  }) {
    const router = (0,router_.useRouter)();
    const isHome = router.asPath == "/";
    const classNames = `dark:text-white text-indigo-900 ${isDark && "textShadowLight"} text-3xl w-fit font-extralight`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${isHome ? "pb-6" : "pb-4 sm:pb-6"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "sm:flex justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${classNames} pl-2 sm:pb-0 pb-6`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Dashboard"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "pt-3 hidden sm:block",
                                children: "News"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Weather, {
                        isPrompt: isPrompt
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: `${classNames} pt-6 sm:hidden pl-2`,
                        children: "News"
                    })
                ]
            }),
            !isHome && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pl-2 w-fit text-stone-400 dark:hover:text-white hover:text-indigo-900 underline underline-offset-2 cursor-pointer",
                    children: "\u2190 zur\xfcck"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/ExercisePrompt.js


function ExercisePrompt({ isPrompt , setisPrompt  }) {
    const exercises = [
        {
            name: "1 + 2: Dashboard (News, Wetter)",
            href: "/"
        },
        {
            name: "3.1: Layout 1",
            href: "/aufgabe3/layout1"
        },
        {
            name: "3.2: Layout 2",
            href: "/aufgabe3/layout2"
        },
        {
            name: "3.3: Layout 3",
            href: "/aufgabe3/layout3"
        },
        {
            name: "3.4 + 3.5: CSS Styling und Box-Modell",
            href: "/aufgabe3/layout4"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>setisPrompt(true),
                className: `
        bg-indigo-500/50 dark:bg-stone-600 hover:ring-offset-2
        rounded-full center w-8 h-8 mr-4 text-xl
        ring ring-transparent hover:ring-indigo-500/50 dark:hover:ring-white/30 
        cursor-pointer duration-75 active:shadow-inner
    `,
                children: "\uD83D\uDCA1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${isPrompt ? "visible" : "hidden"} fixed inset-0 z-50 backdrop center bg-black/60`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `
          w-11/12 max-w-2xl px-4 py-3 sm:px-8 sm:py-4 lg:-translate-y-10
          dark:bg-stone-800 bg-white dark:text-white text-indigo-900
          rounded-3xl shadow-2xl shadow-black border-2 dark:border-indigo-700 border-indigo-900
          ring dark:ring-white/30 ring-indigo-500/90
          max-h-screen overflow-y-scroll
        `,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "text-base sm:text-lg font-bold mb-3 sm:mb-4 between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "px-4",
                                    children: "Bewerbungsaufgaben"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: ()=>setisPrompt(false),
                                    className: "cursor-pointer text-stone-400 dark:hover:text-white hover:text-indigo-900",
                                    children: "x"
                                })
                            ]
                        }),
                        exercises.map((exercise, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: exercise.href,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>setisPrompt(false),
                                    className: `
                    px-4 py-3 sm:px-8 sm:py-4 mb-2
                    dark:text-stone-300 text-indigo-900 dark:hover:text-indigo-300 hover:text-indigo-600
                    border dark:border-white/10 hover:border-transparent dark:hover:border-transparent border-indigo-500/20
                    rounded-2xl cursor-pointer 
                    shadow-lg dark:shadow-black/30 shadow-indigo-900/10 hover:shadow-none
                    duration-75
                  `,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-sm sm:text-base font-bold",
                                        children: exercise.name
                                    })
                                })
                            }, index))
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/HeiseSvg.js

function HeiseSvg() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-52 mr-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 193 36",
            role: "img",
            preserveAspectRatio: "xMinYMin",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "heise online Logo"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    id: "heise_online_svg__heise_online",
                    className: "dark:2xl:fill-stone-700 md:dark:fill-stone-400 dark:fill-stone-300 fill-indigo-900",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            id: "heise_online_svg__logo",
                            d: "M31.09 28.57l.75 1.11A18.12 18.12 0 0118.43 36C8.34 36 0 28.69 0 18.36A17.79 17.79 0 0117.24 0h1c8.76 0 16 5.49 16 14.66A13.76 13.76 0 0130 24.09L28.68 23a12.06 12.06 0 002.6-7.21c0-7.53-5.91-12.43-13.22-12.43-9.78 0-13.22 7.71-13.22 16.31a13.5 13.5 0 0013.07 13.89h.34a19.16 19.16 0 0011.05-3.48 13.62 13.62 0 001.79-1.51zm-11.55-.75a2 2 0 002.65-1l4-9a2 2 0 00-1-2.65 2 2 0 00-2.65 1l-4 9a2 2 0 001 2.65zm.78-20.64a2 2 0 00-2.62 1l-7.52 17a2 2 0 001 2.64 2 2 0 002.62-1l7.52-17a2 2 0 00-1-2.64z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            id: "heise_online_svg__heise",
                            d: "M54.39 14.54a7.28 7.28 0 011.07 4.3V28H52v-8.72a4.59 4.59 0 00-.53-2.55 2 2 0 00-1.72-.73 3.16 3.16 0 00-1.68.46 11.22 11.22 0 00-1.65 1.36V28H43V7h3.42v5.41l-.12 2.83a11.81 11.81 0 012-1.53A5 5 0 0151 13a3.9 3.9 0 013.39 1.54zm16.45 2.66a9.85 9.85 0 01.38 2.8v1a6.36 6.36 0 01-.11.71h-9.29a4.72 4.72 0 001.38 3 4.15 4.15 0 002.92 1.05 5.38 5.38 0 001.77-.28 7.73 7.73 0 001.61-.79l1.16 2.14a10.87 10.87 0 01-2.32 1.13 8.15 8.15 0 01-2.66.44 7.48 7.48 0 01-2.82-.52 6.47 6.47 0 01-2.28-1.5A6.6 6.6 0 0159.05 24a8.73 8.73 0 01-.55-3.22 8.73 8.73 0 01.56-3.2 7.58 7.58 0 011.5-2.41 6.7 6.7 0 012.15-1.51 6.23 6.23 0 012.49-.53 6.43 6.43 0 012.61.5A5 5 0 0169.69 15a6.18 6.18 0 011.15 2.2zm-2.58 2.14a4.36 4.36 0 00-.73-2.66 2.63 2.63 0 00-2.24-1 3.19 3.19 0 00-2.28.92 4.37 4.37 0 00-1.22 2.7zM76.2 7a2.13 2.13 0 00-1.51.55A1.8 1.8 0 0074.1 9a1.77 1.77 0 00.59 1.39 2.42 2.42 0 003 0A1.78 1.78 0 0078.31 9a1.81 1.81 0 00-.6-1.41A2.11 2.11 0 0076.2 7zm-1.72 21h3.41V13.44h-3.41zm16.15-7.12a6.28 6.28 0 00-1.35-.88c-.5-.22-1-.43-1.48-.61s-.8-.24-1.15-.39a7.19 7.19 0 01-1-.45A2.3 2.3 0 0185 18a1.22 1.22 0 01-.25-.76 1.45 1.45 0 01.52-1.14 2.37 2.37 0 011.62-.46 4 4 0 011.64.34 8.26 8.26 0 011.56.9l1.57-2.07a10 10 0 00-2.1-1.22 6.85 6.85 0 00-2.73-.53A5.81 5.81 0 0083 14.29a4 4 0 00-1.42 3.15 3.16 3.16 0 00.33 1.56 4.33 4.33 0 001 1.18 5.89 5.89 0 001.32.86c.49.23 1 .44 1.45.62l1.13.46a7.3 7.3 0 011 .49 2.65 2.65 0 01.71.6 1.24 1.24 0 01.27.79 1.6 1.6 0 01-.57 1.26 2.59 2.59 0 01-1.75.49 5 5 0 01-2.09-.43 9.56 9.56 0 01-1.94-1.2l-1.6 2.19a9.24 9.24 0 002.53 1.44 8 8 0 003 .58 7.68 7.68 0 002.38-.33 5 5 0 001.77-1 4 4 0 001.09-1.42 4.35 4.35 0 00.39-1.74 3.65 3.65 0 00-1.35-3zM106.8 20v1c0 .35-.07.53-.1.71h-9.3a4.72 4.72 0 001.38 3 4.15 4.15 0 002.92 1.05 5.34 5.34 0 001.77-.28 7.73 7.73 0 001.61-.79l1.16 2.14a10.78 10.78 0 01-2.31 1.13 8.21 8.21 0 01-2.67.44 7.48 7.48 0 01-2.82-.52 6.47 6.47 0 01-2.28-1.5A6.87 6.87 0 0194.63 24a8.73 8.73 0 01-.55-3.22 8.53 8.53 0 01.57-3.2 7.39 7.39 0 011.49-2.41 6.82 6.82 0 012.15-1.51 6.23 6.23 0 012.49-.53 6.43 6.43 0 012.61.5 5.16 5.16 0 011.89 1.37 6.33 6.33 0 011.14 2.19 9.85 9.85 0 01.38 2.81zm-3-.65a4.29 4.29 0 00-.73-2.66 2.62 2.62 0 00-2.24-1 3.19 3.19 0 00-2.28.92 4.37 4.37 0 00-1.22 2.7z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            id: "heise_online_svg__brand",
                            d: "M115 20.73c0-4.86 3.29-7.65 6.91-7.65s6.94 2.79 6.94 7.65-3.29 7.62-6.94 7.62-6.91-2.79-6.91-7.62zm10.35 0c0-2.94-1.31-4.86-3.44-4.86s-3.41 1.92-3.41 4.86 1.27 4.83 3.41 4.83 3.44-1.92 3.44-4.83zm6.65-7.3h2.82l.23 2h.12a6.8 6.8 0 014.83-2.35c3.11 0 4.47 2.1 4.47 5.78V28H141v-8.69c0-2.41-.68-3.3-2.28-3.3-1.27 0-2.1.63-3.32 1.81V28H132zm16.5 10.83V7.06h3.41v17.38c0 .83.39 1.12.74 1.12a2 2 0 00.53-.06l.45 2.55a4.63 4.63 0 01-1.81.3c-2.43 0-3.32-1.57-3.32-4.09zM156.6 9a2.11 2.11 0 112.1 1.92A2 2 0 01156.6 9zm.4 4.47h3.41V28H157zm7.46 0h2.82l.24 2h.11a6.8 6.8 0 014.78-2.31c3.11 0 4.48 2.1 4.48 5.78V28h-3.41v-8.69c0-2.41-.69-3.3-2.29-3.3-1.27 0-2.1.63-3.32 1.81V28h-3.41zm15.35 7.3c0-4.75 3.3-7.65 6.71-7.65 3.94 0 6 2.85 6 6.91a7.9 7.9 0 01-.15 1.66h-9.25a4.16 4.16 0 004.3 4.06 6 6 0 003.38-1.07l1.2 2.1a9.16 9.16 0 01-5 1.57c-4 0-7.19-2.82-7.19-7.62zm9.76-1.39c0-2.26-1-3.62-3-3.62-1.72 0-3.21 1.27-3.5 3.62z"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/ModeToggle.js

function ModeToggle({ isDark  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isDark ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 64 64",
            className: "h-6 w-6 fill-white",
            xmlSpace: "preserve",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                id: "Sun",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M32.1318512,18.2793007c-7.7119007,0-13.9863014,6.2743988-13.9863014,13.9862976 s6.2744007,13.9864006,13.9863014,13.9864006s13.9862976-6.274498,13.9862976-13.9864006 S39.84375,18.2793007,32.1318512,18.2793007z M32.1318512,44.2793007c-6.6245003,0-12.0137005-5.3897018-12.0137005-12.0137024 s5.3892002-12.0135975,12.0137005-12.0135975s12.0136986,5.3895988,12.0136986,12.0135975 S38.7563515,44.2793007,32.1318512,44.2793007z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M32.0000496,13.1688995c0.5522003,0,1-0.4471998,1-1V1c0-0.5527-0.4477997-1-1-1c-0.5522995,0-1,0.4473-1,1v11.1688995 C31.0000496,12.7216997,31.4477501,13.1688995,32.0000496,13.1688995z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M32.0000496,50.830101c-0.5522995,0-1,0.4472008-1,1V63c0,0.5527,0.4477005,1,1,1c0.5522003,0,1-0.4473,1-1V51.830101 C33.0000496,51.2773018,32.5522499,50.830101,32.0000496,50.830101z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M62.263649,30.4452991H51.09375c-0.5522003,0-1,0.4473-1,1s0.4477997,1.0000019,1,1.0000019h11.169899 c0.5522995,0,1-0.4473019,1-1.0000019S62.8159485,30.4452991,62.263649,30.4452991z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13.90625,31.4452991c0-0.5527-0.447794-1-0.999999-1H1.7363508c-0.5523,0-1,0.4473-1,1s0.4477,1.0000019,1,1.0000019 H12.906251C13.458456,32.4453011,13.90625,31.9979992,13.90625,31.4452991z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M45.1801491,19.8778992c0.2559013,0,0.5116997-0.097599,0.7070999-0.2929001l7.8988991-7.8984995 c0.3906021-0.3905993,0.3906021-1.0233994,0-1.4139996c-0.3905983-0.3907003-1.0234985-0.3907003-1.4140968,0l-7.8989029,7.8984003 c-0.3905983,0.3906002-0.3905983,1.0233994,0,1.4140987C44.668457,19.7803001,44.9243507,19.8778992,45.1801491,19.8778992z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M45.887249,45.2030983c-0.3906975-0.3905983-1.0234985-0.3905983-1.4141006,0 c-0.3905983,0.3907013-0.3905983,1.0235023,0,1.4141006l7.8989029,7.8973999 c0.1952972,0.1954002,0.4511986,0.2929993,0.7070999,0.2929993c0.2557983,0,0.5116997-0.097599,0.7069969-0.2929993 c0.3906021-0.3905983,0.3906021-1.0233994,0-1.4139977L45.887249,45.2030983z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M18.112751,19.5849991c0.1954002,0.1953011,0.4511986,0.2929001,0.7070999,0.2929001 c0.2558002,0,0.5116997-0.097599,0.7069988-0.2929001c0.3906059-0.3906994,0.3906059-1.0234985,0-1.4140987L11.6289501,10.2725 c-0.3906994-0.3907003-1.0234947-0.3907003-1.4140997,0c-0.3906002,0.3906002-0.3906002,1.0234003,0,1.4139996 L18.112751,19.5849991z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M19.5712509,45.2700996c-0.0177002-0.0208015-0.024601-0.0471992-0.0444012-0.0670013 c-0.3906002-0.3905983-1.0233936-0.3905983-1.4140987,0l-3.9401007,3.9400024l-4.0341949,3.8446999 c-0.3999052,0.3811989-0.415205,1.0139008-0.0339994,1.4137993c0.0192947,0.0203018,0.045495,0.0278015,0.066,0.0460014 c0.0176945,0.0208969,0.0245943,0.0472984,0.0443945,0.0669975c0.1953001,0.1954002,0.4512005,0.2929993,0.7069998,0.2929993 c0.2559004,0,0.5117006-0.097599,0.7070999-0.2929993l3.9401007-3.9398994l4.0341997-3.8446999 c0.3999004-0.3811989,0.415205-1.0139008,0.0340004-1.4137993C19.6179504,45.2958984,19.5917511,45.2882996,19.5712509,45.2700996z "
                    })
                ]
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            version: "1.1",
            id: "Capa_1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            viewBox: "0 0 49.739 49.739",
            className: `h-6 w-6 fill-indigo-900`,
            xmlSpace: "preserve",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268 c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0 c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822 C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253 c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748 c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
            })
        })
    });
};

// EXTERNAL MODULE: ./components/Wrapper.js
var Wrapper = __webpack_require__(5029);
;// CONCATENATED MODULE: ./components/NavBar.js





function NavBar({ isDark , toggleMode , isPrompt , setisPrompt  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "mb-6 py-3 shadow-lg shadow-indigo-900/10 dark:shadow-black/10",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Wrapper/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `between mx-auto`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "",
                        href: "https://www.heise.de/",
                        rel: "noreferrer",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(HeiseSvg, {
                            isDark: isDark
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ExercisePrompt, {
                                isDark: isDark,
                                isPrompt: isPrompt,
                                setisPrompt: setisPrompt
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: toggleMode,
                                className: `
                    rounded-full p-1 
                    ring ring-transparent hover:ring-indigo-500/50 dark:hover:ring-white/30 
                    cursor-pointer duration-75 active:shadow-inner
                `,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ModeToggle, {
                                    isDark: isDark
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout.js







function Layout({ isDark , toggleMode , children  }) {
    const router = (0,router_.useRouter)();
    const asPath = router.asPath;
    const topRef = (0,external_react_.useRef)(null);
    const { 0: isPrompt , 1: setisPrompt  } = (0,external_react_.useState)(true);
    const { 0: isTopButton , 1: setisTopButton  } = (0,external_react_.useState)(false);
    const showTopButton = ()=>{
        const offSetTop = topRef.current.getBoundingClientRect().top;
        if (offSetTop < -100 && !isTopButton) {
            setisTopButton(true);
        } else if (offSetTop > -100 && isTopButton) {
            setisTopButton(false);
        }
    };
    const scrollToTop = ()=>topRef.current.scrollIntoView({
            behavior: "smooth"
        });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Dashboard"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Heise Online News und Wetter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/aiicecream.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${isDark && "dark"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onScroll: showTopButton,
                    className: `
                    h-screen pb-64
                    bg-gradient-to-r 
                    from-white to-white
                    dark:from-stone-900 dark:via-stone-400 dark:to-stone-900 
                    overflow-scroll
                `,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            ref: topRef
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {
                            isDark: isDark,
                            toggleMode: toggleMode,
                            isPrompt: isPrompt,
                            setisPrompt: setisPrompt
                        }),
                        (asPath == "/" || asPath.includes("/news")) && /*#__PURE__*/ jsx_runtime_.jsx(Wrapper/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                isDark: isDark,
                                isPrompt: isPrompt
                            })
                        }),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(Wrapper/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(GoToTopButton, {
                                isTopButton: isTopButton,
                                scrollToTop: scrollToTop
                            })
                        })
                    ]
                })
            })
        ]
    });
};
const GoToTopButton = ({ isTopButton , scrollToTop  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "end",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            onClick: isTopButton ? scrollToTop : null,
            className: `
            fixed bottom-6 xl:bottom-8 -translate-x-2 sm:translate-x-2 md:translate-x-4 lg:translate-x-8 xl:translate-x-20 z-40 h-10 w-10 sm:h-12 sm:w-12 center
            ring dark:ring-white/30 ring-indigo-500/50 border border-indigo-500 dark:border-transparent dark:hover:border-indigo-500
            ${isTopButton ? "opacity-70 hover:opacity-100 cursor-pointer" : "opacity-0 scale-0"}
            backdrop text-xs bg-white/60 dark:bg-black/60 dark:text-white text-indigo-900 font-bold shadow-xl dark:shadow-black shadow-indigo-900/30
            duration rounded-full
            `,
            children: "top"
        })
    });

// EXTERNAL MODULE: ./lib/context.js
var context = __webpack_require__(9863);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    const { 0: isDark , 1: setisDark  } = (0,external_react_.useState)(true);
    const toggleMode = ()=>setisDark(!isDark);
    const { 0: news , 1: setnews  } = (0,external_react_.useState)({});
    return /*#__PURE__*/ jsx_runtime_.jsx(context/* NewsContext.Provider */.I.Provider, {
        value: {
            news: news,
            setnews: setnews
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            isDark: isDark,
            toggleMode: toggleMode,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                isDark: isDark,
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,910,952,664,800], () => (__webpack_exec__(9501)));
module.exports = __webpack_exports__;

})();