(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{QD1n:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return u}));var a=n("wx14"),o=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("ndZU"),r=(n("qKvR"),{}),d={_frontmatter:r},m=i.a;function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(l.mdx)(m,Object(a.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"how-to-debug-your-plugin"},"How to Debug Your Plugin"),Object(l.mdx)("p",null,"Bugs happen! In this tutorial, you will learn how to debug your Adobe XD plugin."),Object(l.mdx)("h3",{id:"prerequisite"},"Prerequisite"),Object(l.mdx)("p",null,"At least one plugin in your ",Object(l.mdx)("inlineCode",{parentName:"p"},"develop")," folder (you can create one using our ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/tutorials/quick-start/"}),"Quick Start tutorial"),")."),Object(l.mdx)("h3",{id:"debugging-options"},"Debugging Options"),Object(l.mdx)("p",null,"There are two ways you can debug an XD plugin:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"For ",Object(l.mdx)("strong",{parentName:"li"},"quick, simple debugging"),", ",Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"#quick-debugging-with-developer-console"}),"use the Developer Console built into XD")),Object(l.mdx)("li",{parentName:"ul"},"For ",Object(l.mdx)("strong",{parentName:"li"},"in-depth debugging"),", set up your plugin for ",Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"#debugging-with-chrome-devtools-beta"}),"debugging with Chrome DevTools")," ",Object(l.mdx)("em",{parentName:"li"},"(beta)"))),Object(l.mdx)("h2",{id:"quick-debugging-with-developer-console"},"Quick debugging with Developer Console"),Object(l.mdx)("h3",{id:"1-check-the-developer-console"},"1. Check the Developer Console"),Object(l.mdx)("p",null,"In XD, click ",Object(l.mdx)("em",{parentName:"p"},"Plugins > Development > Developer Console"),"."),Object(l.mdx)("p",null,"This displays information similar to what you'd find in the JS debugger's console view:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Any ",Object(l.mdx)("inlineCode",{parentName:"li"},"console.log()")," output from your plugin"),Object(l.mdx)("li",{parentName:"ul"},"Any error messages from XD due to plugin misbehavior, or failure to load a plugin"),Object(l.mdx)("li",{parentName:"ul"},"Stack traces if your code throws an uncaught exception")),Object(l.mdx)("p",null,"The console output for ",Object(l.mdx)("em",{parentName:"p"},"all")," installed XD plugins is mixed together in one single view here."),Object(l.mdx)("h3",{id:"2-reload-your-plugin-after-making-fixes"},"2. Reload your plugin after making fixes"),Object(l.mdx)("p",null,"You can easily iterate on your plugin code without heaving to restart XD. Click ",Object(l.mdx)("em",{parentName:"p"},"Plugins > Development > Reload Plugins")," to reload all plugins in your ",Object(l.mdx)("inlineCode",{parentName:"p"},"develop")," folder. This will reflect any changes in ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"}),"manifest.json")," in addition to any changes to your JS code."),Object(l.mdx)("p",null,"There's also a handy keyboard shortcut to make reloading easier:"),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Keyboard shortcut"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"macOS"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Shift-Cmd-R")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Windows"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ctrl-Shift-R")))),Object(l.mdx)("p",null,"If there are any errors blocking the plugin from loading, they will appear in the Developer Console on reload:"),Object(l.mdx)("p",null,Object(l.mdx)("img",{alt:"Error during reload",src:n("iRfn")})),Object(l.mdx)("h2",{id:"debugging-with-chrome-devtools-beta"},"Debugging with Chrome DevTools ",Object(l.mdx)("em",{parentName:"h2"},"(beta)")),Object(l.mdx)("h3",{id:"1-enable-debugging-on-your-plugin"},"1. Enable debugging on your plugin"),Object(l.mdx)("p",null,"Navigate to the root folder of your plugin and ",Object(l.mdx)("strong",{parentName:"p"},"create a ",Object(l.mdx)("inlineCode",{parentName:"strong"},"debug.json")," file"),":"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "port": 9345,\n  "breakOnStart": false\n}\n')),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Debugging is only supported for plugins in the ",Object(l.mdx)("strong",{parentName:"li"},Object(l.mdx)("inlineCode",{parentName:"strong"},"develop")," folder")," (not plugins installed from the Plugin Manager UI)."),Object(l.mdx)("li",{parentName:"ul"},"Specify any port number you want."),Object(l.mdx)("li",{parentName:"ul"},"Advanced: Set ",Object(l.mdx)("inlineCode",{parentName:"li"},"breakOnStart")," to true if you want the debugger to immediately pause on the first line of code in your plugin the moment it starts loading. This is useful since you won't have a chance to open DevTools ",Object(l.mdx)("em",{parentName:"li"},"before")," this moment to set breakpoints before that initial code runs.")),Object(l.mdx)("h3",{id:"2-launch-chrome-devtools"},"2. Launch Chrome DevTools"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"Windows only: ",Object(l.mdx)("em",{parentName:"li"},"before")," launching XD, open an admin command prompt and run ",Object(l.mdx)("inlineCode",{parentName:"li"},'CheckNetIsolation LoopbackExempt -is -n="Adobe.CC.XD_adky2gkssdxte"')," -- do this ",Object(l.mdx)("em",{parentName:"li"},"each time")," you want to debug a plugin."),Object(l.mdx)("li",{parentName:"ol"},"Open Google Chrome and navigate to ",Object(l.mdx)("strong",{parentName:"li"},Object(l.mdx)("inlineCode",{parentName:"strong"},"chrome://inspect"))," ",Object(l.mdx)("em",{parentName:"li"},"(you must use Chrome)")),Object(l.mdx)("li",{parentName:"ol"},'One-time setup: ensure "Discover Network Targets" is enabled. Click the Configure button next to this and add ',Object(l.mdx)("inlineCode",{parentName:"li"},"localhost:9345")," (or whatever port number your ",Object(l.mdx)("inlineCode",{parentName:"li"},"debug.json")," file used)."),Object(l.mdx)("li",{parentName:"ol"},'Click the "inspect" link under your plugin\'s ID.')),Object(l.mdx)("h3",{id:"beta-what-works-what-doesnt"},"Beta: What works, what doesn't"),Object(l.mdx)("p",null,"Currently, you ",Object(l.mdx)("strong",{parentName:"p"},"can"),"..."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Set breakpoints, pause & step through code, inspect the values of variables"),Object(l.mdx)("li",{parentName:"ul"},"View objects and run code in the Console view"),Object(l.mdx)("li",{parentName:"ul"},"View and edit the DOM structure of your plugin's UXP UI")),Object(l.mdx)("p",null,"Most other DevTools features are not supported and may behave erratically if you attempt to use them."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Important caveats:")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"XD may be unstable while debugging a plugin. Don't debug when you have important XD documents open."),Object(l.mdx)("li",{parentName:"ul"},"Error messages are often ",Object(l.mdx)("em",{parentName:"li"},"missing"),' from the DevTools Console. Use the Developer Console within XD (see "Quick debugging" above) to be sure you are not missing any important information.'),Object(l.mdx)("li",{parentName:"ul"},"XD will be partially frozen while paused on a JS breakpoint. Don't try to interact with XD while paused."),Object(l.mdx)("li",{parentName:"ul"},"You may see a blank white panel to the left of the DevTools UI. Ignore this, as it does nothing."),Object(l.mdx)("li",{parentName:"ul"},"If debugging exposes any private fields and methods, do not attempt to use them. Plugins referring to private APIs will be rejected or removed from XD's plugin listing.")),Object(l.mdx)("p",null,"Read the ","[known issues]","(/known-issues/ for more details."))}u.isMDXComponent=!0},iRfn:function(e,t,n){e.exports=n.p+"static/reload-error-b09753d4105f81cb3c092c97f4f6bf31.png"}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-debugging-index-md-efb64792e114129ab331.js.map