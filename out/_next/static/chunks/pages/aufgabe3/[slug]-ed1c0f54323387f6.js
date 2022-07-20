(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{4580:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aufgabe3/[slug]",function(){return t(8667)}])},8667:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var i=t(5893),r=t(1163);function a(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"md:flex",children:[{title:"Layout 1 (Aufgabe 3.1)",content:"Welcher Layout-Mode und weshalb er verwendet wurde ist in den folgenden Containern ausgef\xfchrt =>",footnote:"vpw = viewport-width",classN:"border-cyan-400 ring-cyan-400 shadow-cyan-700/20"},{title:"Normal Flow (vpw < 768px)",content:"Unter einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Normal Flow' angezeigt:\n      \n      Der Parent-Container erh\xe4lt als CSS-Property 'display: block'. Dadurch werden die zugeh\xf6rigen 'Children-Container' untereinander angeordnet und erlauben auf kleineren Bildschirmen die volle Breite zur Darstellung von Inhalten zu nutzen.\n      \n      Die 'Children-Container' passen sich mit dem CSS-Property 'width: 100%' an die Viewport-Breite an und wachsen in der H\xf6he je nachdem, wieviel Content (Inhalt) sie beinhalten.",footnote:"Layout-Mode 'Normal Flow' ist der Standart-Layout-Mode",classN:"border-lime-400 ring-lime-400 shadow-lime-700/20"},{title:"Flexible Box Layout (vpw >= 768px)",content:"Ab einer Breite von 768px wird die Seite im Layout-Mode 'Flexible Box Layout' angezeigt:\n      \n      Der Parent-Container erh\xe4lt als CSS-Property 'display: flex'. Dadurch werden die zugeh\xf6rigen 'Children-Container' nebeneinander angeordnet und erlauben eine \xfcbersichtliche Darstellung des Inhalts. Damit jeder 'Child-Container' gleichbreit ist und mit der Ver\xe4nderung der Viewport-Breite w\xe4chst bzw. schrumpft, erh\xe4lt er (bzw. sein Wrapper-Element) als CSS-Property 'width: calc(100%/3)'.\n      \n      Der Parent-Container w\xe4chst flexibel auf die H\xf6he des gr\xf6\xdften Child-Containers. Dadurch k\xf6nnen die Children-Container mit CSS-Property 'height: 100%' an die H\xf6he des Parent-Containers (welcher die H\xf6he des h\xf6chsten Elements hat) angepasst werden.",footnote:"Layout-Mode 'Flexible Box Layout' ist sinnvoll um Elemente, wie der Name bereits vermuten l\xe4sst, 'flexibel' anzuordnen",classN:"border-fuchsia-400 ring-fuchsia-400 shadow-fuchsia-700/20"}].map((function(e,n){return(0,i.jsx)("div",{className:"md:w-1/3 w-full p-2",children:(0,i.jsxs)("div",{className:"\n            ".concat(e.classN," \n            px-8 py-4 h-full\n            border-l-8 ring-1\n            bg-gradient-to-r dark:from-stone-800 dark:via-stone-900 dark:to-stone-900\n            from-white via-white to-white\n            text-stone-800 dark:text-white whitespace-pre-line\n            rounded-r-lg shadow-2xl dark:shadow-black/90\n          "),children:[(0,i.jsx)("h2",{className:"mb-2 text-xl md:text-lg lg:text-xl font-bold",children:e.title}),(0,i.jsx)("p",{className:"text-base md:text-sm lg:text-base",children:e.content}),(0,i.jsx)("p",{className:"mt-4 text-sm font-light italic",children:e.footnote})]})},"wrapperChildContainer".concat(n))}))},"parentContainer")})}var s=t(7294);function l(){var e=(0,s.useRef)(null),n=(0,s.useState)(0),t=n[0],r=n[1],a=(0,s.useCallback)((function(){e&&e.current&&r(e.current.getBoundingClientRect().width)}),[e]);(0,s.useEffect)((function(){return a(),window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[a]);var l="m-3 p-4 text-xl font-semibold bg-gradient-to-b rounded-lg border ring-1 shadow-xl",o="from-lime-200 to-lime-300 border-lime-400 ring-lime-900 text-lime-900",d="from-pink-200 to-pink-300 border-pink-400 ring-pink-900 text-pink-900",u="from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-900 dark:text-white dark:border-stone-700 dark:ring-white/10 border-stone-400 ring-stone-900",c="from-yellow-200 to-yellow-300 border-yellow-400 ring-yellow-900 text-yellow-900",m="from-blue-200 to-blue-300 border-blue-400 ring-blue-900 text-blue-900";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"".concat(l," ").concat(o),children:"Layout 2 (Aufgabe 3.2)"}),(0,i.jsxs)("div",{className:"md:flex",children:[(0,i.jsx)("div",{className:"".concat(l," ").concat(d," flex-none md:w-52 overflow-scroll"),children:"Navigation"}),(0,i.jsxs)("div",{ref:e,className:"".concat(l," ").concat(u," md:w-full whitespace-pre-line"),children:[(0,i.jsx)("h1",{className:"lg:text-2xl lg:font-bold pb-2",children:"Warum welcher Layout-Mode"}),(0,i.jsx)("p",{className:"font-light text-base",children:"Unter einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Normal Flow' (beinhaltet Block-Layout) angezeigt:\n          So flie\xdfen alle Container untereinander und haben automatisch eine Breite von 100% und damit genug Platz um ihre Inhalte angemessen zu platzieren.\n\n          Ab einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Flexible Box Layout' angezeigt:\n          Der Parent-Container von Navigation, Content und Sidebar erh\xe4lt als CSS-Property 'display: flex'.\n          Der Navigations- und Sidebar-Container erhalten als CSS-Property 'flex: none', sowie eine bestimmte, feste Breite (width) um genug Platz f\xfcr ihre Inhalte zu garantieren und nicht in ihrer Breite zu schrumpfen bzw. zu wachsen.\n          Ihre H\xf6he passt sich automatisch an die H\xf6he des Content-Containers f\xfcr eine symmetrische Darstellung an und bietet 'overflow: scroll', sollte der container zu niedrig sein, um den gesamten Inhalt anzuzeigen.\n          Die Breite des Footers wird an die des Contents angegleicht und erh\xe4lt einen Abstand zur linken Seite (margin-left) in Breite der Navigation.\n          "})]}),(0,i.jsx)("div",{className:"".concat(l," ").concat(c," flex-none md:w-40 overflow-scroll"),children:"Sidebar"})]}),(0,i.jsx)("div",{style:{width:t},className:"".concat(l," ").concat(m," md:ml-[244px]"),children:"Footer"})]})}var o=t(5675),d=t.n(o);function u(e){var n=e.isDark;return(0,i.jsx)("div",{className:"px-2",children:(0,i.jsxs)("div",{className:"\n        max-w-[732px] mx-auto py-3 pb-4\n        dark:from-stone-800 dark:via-stone-900 dark:to-black bg-gradient-to-br from-white via-white to-indigo-50 \n        dark:text-stone-300 text-stone-800\n        rounded-3xl shadow-2xl dark:shadow-black/90 shadow-indigo-800/80\n        ring dark:ring-white/30 ring-indigo-500/70 \n        border dark:border-indigo-700\n        border-blue-800\n      ",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4 px-6 ".concat(n?"silver-gradient":"blue-gradient"," w-fit"),children:"Layout 3 (Aufgabe 3.3)"}),(0,i.jsx)("div",{className:"w-full md:w-64 md:h-64 md:mx-4 mb-2 float-left md:rounded-xl overflow-hidden",children:(0,i.jsx)(d(),{alt:"aiicecream",src:"https://i.ibb.co/LvWdwWB/aiicecream.jpg",height:800,width:800,placeholder:"blur",blurDataURL:"/aiicecream.jpg"})}),(0,i.jsx)("p",{className:"px-4 whitespace-pre-line",children:"Unter einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Normal Flow' angezeigt:\n          Der Image- sowie der Content-Container flie\xdfen untereinander und haben automatisch eine Breite von 100% um die volle Breite des Viewports zu nutzen.\n\n          Ab einer Viewport-Breite von 768px wird die Seite im Layout-Mode 'Positioned Layout' angezeigt:\n          Der Image-Container erh\xe4lt als CSS-Property 'float: left', sowie eine feste H\xf6he und Breite von 256px um sich am linken Rand des Parent-Containers zu positionieren.\n          Der Inhalt des Content-Containers umflie\xdft nun den Image-Container. Wichtig hierbei ist, dass der Parent-Container im 'Block-Layout' (CSS: display: block) angeordnet ist.\n\n          Hier noch ein bisschen lorem ipsum, um die Seite zu f\xfcllen:\n\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et ipsum fringilla, imperdiet turpis vel, varius augue. Nulla vel cursus metus, bibendum gravida lacus. Nam blandit at ante non vestibulum. Curabitur dolor quam, molestie vel efficitur in, blandit fringilla est. Duis libero metus, condimentum sed libero vitae, volutpat semper magna. Praesent tincidunt luctus lorem, non condimentum turpis vehicula in. \n          \n          Mauris interdum eget leo vel tempor. Donec blandit venenatis purus, iaculis pellentesque enim consequat vitae. Sed nibh orci, pellentesque at dolor in, ultricies tempor libero. Nam arcu leo, pretium eu sem et, dignissim vestibulum lorem. Curabitur tempor, sapien non gravida aliquam, nunc nisl bibendum ex, id ultrices diam justo quis felis. Donec convallis mi erat, eget tincidunt quam condimentum a. Nullam euismod, purus ac dictum posuere, risus nibh vulputate tortor, id vehicula diam libero eu enim. Pellentesque accumsan turpis velit, feugiat gravida massa aliquam sit amet. \n          "})]})})}function c(e){var n=e.isDark,t=function(e){var t=e.title,r=e.titleClassN;return(0,i.jsx)("div",{className:"".concat(r," ").concat(n?"silver-gradient":"blue-gradient"," w-fit font-semibold text-lg"),children:t})},r=function(e){var n=e.listItems;return(0,i.jsx)("ul",{style:{listStyleType:"disc"},className:"ml-4",children:n.map((function(e,n){return(0,i.jsx)("li",{children:e},n)}))})},a=function(e){var n=e.title,a=e.listItems,s=e.conClassN,l=e.titleClassN;return(0,i.jsxs)("div",{className:"".concat(s),children:[(0,i.jsx)(t,{title:n,titleClassN:l}),(0,i.jsx)(r,{listItems:a})]})};return(0,i.jsx)("div",{className:"px-2",children:(0,i.jsxs)("div",{className:"\n        max-w-[732px] mx-auto py-4 px-4\n        dark:from-stone-800 dark:via-stone-900 dark:to-black bg-gradient-to-br from-white via-white to-indigo-50 \n        dark:text-stone-300 text-stone-800\n        rounded-3xl shadow-2xl dark:shadow-black/90 shadow-indigo-800/80\n        ring dark:ring-white/30 ring-indigo-500/70 \n        border dark:border-indigo-700\n        border-blue-800\n      ",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-3 ".concat(n?"silver-gradient":"blue-gradient"," w-fit"),children:"Tailwind vs. Sass (3.4)"}),(0,i.jsx)("div",{className:"whitespace-pre-line",children:(0,i.jsx)("div",{className:"sm:flex",children:[{title:"Tailwind (CSS-Framework)",listItems:["Vordefinierte CSS-Klassen, die \xfcber das 'classNames'-Attribut direkt an HTML-Elemente gebunden werden","Klassennamen sind strukturiert aufgebaut und erm\xf6glichen eine intuitive Nutzung","Einfache Konfigurierungsm\xf6glichkeiten & Theming via config-file","Klassen-Pr\xe4fixe f\xfcr Media Queries, Hover- & Focus-States","Lightweight: Entfernt automatisch alle unbenutzten CSS-Klassen beim Erstellen des Production-Builds","Farben- und Gr\xf6\xdfen-Paletten f\xfcr einheitlichere Darstellung","Das Tailwind-Team verfolgt einen minimalistischen, modernen und der simplen Handhabung und Anpassung zugewendeten Ansatz bei der Entwicklung ihrer Produkte und ist dar\xfcber hinaus, wie sich unschwer aus ihren ver\xf6ffentlichten Inhalten erkennen l\xe4sst, echt lustig","Bedenkenloses \xe4ndern der Klassen, da diese, wenn nicht anders via @apply directive oder tailwind.config.js vorgegeben, lokal und nicht global definiert werden","Nachteile: \n                1. Unaufger\xe4umte, un\xfcbersichtliche Darstellung der HTML-Elemente im Code (Strings k\xf6nnten bei Bedarf jedoch in Variablen gespeichert werden)\n                2. Klassennamen k\xf6nnen nicht 'on-the-fly' dynamisch ver\xe4ndert werden (z.B. bg-[colorVar]-200), was u. A. die Erstellung von Templates bzw. Template-Components verkompliziert und aufw\xe4ndig macht"]},{title:"Sass (CSS-Preprocessor)",listItems:["CSS-nahe Syntax","Variablen k\xf6nnen erstellt und dynamisch verwendet werden","'Mixins' erm\xf6glichen das funktions\xe4hnliche Erstellen von CSS-Werten, die durch '@include' in CSS-Klassen eingebettet werden k\xf6nnen","Das Importieren bzw. Exportieren von Variablen etc. zwischen Sass-Dateien ist m\xf6glich","CSS-Selector k\xf6nnen innerhalb von CSS-Klassen verwendet werden","Funktionen zur Berechnung von CSS-Werten k\xf6nnen zugunsten der Wiederverwendung erstellt werden","Nachteile:\n                1. Ben\xf6tigt eigene .sass oder .scss Datei, Klassen etc. werden also nicht lokal definiert\n                2. Hat nicht die Tailwind-Vorteile"]}].map((function(e,n){return(0,i.jsx)(a,{title:e.title,listItems:e.listItems,conClassN:"sm:w-1/2 mb-4",titleClassN:"mx-a uto"},n)}))})}),(0,i.jsx)("h1",{className:"text-2xl font-bold mt-5 mb-3 ".concat(n?"silver-gradient":"blue-gradient"," w-fit"),children:"CSS Box-Modell (3.5)"}),(0,i.jsxs)("div",{className:"whitespace-pre-line",children:[(0,i.jsx)(t,{title:"Box-Modell"}),(0,i.jsx)(r,{listItems:["Content-Box: Bildet den Content des HTML-Elements ab","Padding: Freier, transparenter Bereich zwischen der Content-Box und Border","Border: Rahmen des Elements","Margin: Freier, transparenter Bereich um den Rahmen des Elements herum","Standartm\xe4\xdfig werden Breite und H\xf6he, die einem Element zugewiesen werden der Content-Box angelegt (box-sizing: content-box), was das Handling mit Padding und Border-Eigenschaften kompliziert macht. Um Abhilfe zu schaffen, kann bzw. sollte 'box-sizing: border-box' verwendet werden, wodurch sich zugewiesene Breite und H\xf6he aus Content-Box, Padding und Border zusammensetzen."]}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"text-sm",children:(0,i.jsxs)("div",{className:"bg-indigo-900 p-2 mt-2 shadow-black text-center text-white",children:["Margin",(0,i.jsxs)("div",{className:"bg-blue-500 p-2 mt-2 shadow-black m-6 text-center text-white",children:["Border",(0,i.jsxs)("div",{className:"bg-lime-300 p-2 mt-2 shadow-black m-6 text-center text-black",children:["Padding",(0,i.jsx)("div",{className:"bg-white p-2 mt-2 shadow-black m-6 text-center text-black h-32 font-bold center text-base",children:"Content"})]})]})]})})]})]})})}function m(e){var n=e.isDark,t=(0,r.useRouter)().query.slug;return(0,i.jsx)("div",{children:function(){switch(t){case"layout1":default:return(0,i.jsx)(a,{});case"layout2":return(0,i.jsx)(l,{});case"layout3":return(0,i.jsx)(u,{isDark:n});case"layout4":return(0,i.jsx)(c,{isDark:n})}}()})}}},function(e){e.O(0,[675,774,888,179],(function(){return n=4580,e(e.s=n);var n}));var n=e.O();_N_E=n}]);