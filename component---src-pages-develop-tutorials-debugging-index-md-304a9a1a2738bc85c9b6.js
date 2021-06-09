(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[59252],{13794:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return d},default:function(){return m}});var a=o(22122),n=o(19756),l=(o(15007),o(64983)),r=o(99536),i=["components"],d={},p={_frontmatter:d},u=r.Z;function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,l.mdx)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"how-to-debug-your-plugin"},"How to Debug Your Plugin"),(0,l.mdx)("p",null,"Bugs happen! In this tutorial, you will learn how to debug your Adobe XD plugin."),(0,l.mdx)("h3",{id:"prerequisite"},"Prerequisite"),(0,l.mdx)("p",null,"At least one plugin created and added to the ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/devtool"},"UXP Developer Tool"),"."),(0,l.mdx)("h3",{id:"debugging-options"},"Debugging Options"),(0,l.mdx)("p",null,"To debug your Adobe XD plugins, you'll be using the ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/devtool"},"UXP Developer Tool"),". However, you can glean some useful information by using the built-in Developer Console provided by Adobe XD. (Note that this is a legacy feature and ",(0,l.mdx)("em",{parentName:"p"},"will")," be going away in the future.)"),(0,l.mdx)("h2",{id:"quick-debugging-with-developer-console"},"Quick debugging with Developer Console"),(0,l.mdx)("h3",{id:"1-check-the-developer-console"},"1. Check the Developer Console"),(0,l.mdx)("p",null,"In XD, click ",(0,l.mdx)("em",{parentName:"p"},"Plugins > Development > Developer Console (Legacy)"),"."),(0,l.mdx)("p",null,"This displays information similar to what you'd find in the JS debugger's console view:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Any ",(0,l.mdx)("inlineCode",{parentName:"li"},"console.log()")," output from your plugin"),(0,l.mdx)("li",{parentName:"ul"},"Any error messages from XD due to plugin misbehavior, or failure to load a plugin"),(0,l.mdx)("li",{parentName:"ul"},"Stack traces if your code throws an uncaught exception")),(0,l.mdx)("p",null,"The console output for ",(0,l.mdx)("em",{parentName:"p"},"all")," installed XD plugins is mixed together in one single view here."),(0,l.mdx)("h3",{id:"2-reload-your-plugin-after-making-fixes"},"2. Reload your plugin after making fixes"),(0,l.mdx)("p",null,"You can easily iterate on your plugin code without heaving to restart XD. Switch to the UXP Developer Tool, and click ",(0,l.mdx)("em",{parentName:"p"},"Actions > Reload All"),", which will force the developer tool to reload all loaded plugins. "),(0,l.mdx)("p",null,"There's also a handy keyboard shortcut in the UXP Developer Tool to make reloading easier:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Platform"),(0,l.mdx)("th",{parentName:"tr",align:null},"Keyboard shortcut"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"macOS"),(0,l.mdx)("td",{parentName:"tr",align:null},"Shift-Cmd-R")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Windows"),(0,l.mdx)("td",{parentName:"tr",align:null},"Ctrl-Shift-R")))),(0,l.mdx)("p",null,"If there are any errors blocking the plugin from loading, they will appear in the Developer Console on reload:"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.56250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/cb523/reload-error.webp 320w","/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/797b9/reload-error.webp 640w","/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/4b075/reload-error.webp 1280w","/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/f3ff0/reload-error.webp 1920w","/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/f85e0/reload-error.webp 2266w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/72799/reload-error.png 320w","/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/6af66/reload-error.png 640w","/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/21b4d/reload-error.png 1280w","/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/29114/reload-error.png 1920w","/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/beade/reload-error.png 2266w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/b09753d4105f81cb3c092c97f4f6bf31/21b4d/reload-error.png",alt:"Error during reload",title:"Error during reload",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("h2",{id:"debugging-with-the-uxp-developer-tool"},"Debugging with the UXP Developer Tool"),(0,l.mdx)("h3",{id:"1-load-your-plugin"},"1. Load your plugin"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"If you haven't already, launch the UXP Developer Tool application."),(0,l.mdx)("li",{parentName:"ol"},"Next to the plugin you want to debug, find the ",(0,l.mdx)("strong",{parentName:"li"},"•••")," button and click it. Select ",(0,l.mdx)("strong",{parentName:"li"},"Load")," to load this into XD.")),(0,l.mdx)("h3",{id:"2-launch-debugger"},"2. Launch Debugger"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Click ",(0,l.mdx)("strong",{parentName:"li"},"••• > Debug"),". This will launch a Chrome Developer Tools environment that you can use to debug your plugins.")),(0,l.mdx)("h3",{id:"what-works-what-doesnt"},"What works, what doesn't"),(0,l.mdx)("p",null,"Currently, you ",(0,l.mdx)("strong",{parentName:"p"},"can"),"..."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Set breakpoints, pause & step through code, inspect the values of variables"),(0,l.mdx)("li",{parentName:"ul"},"View objects and run code in the Console view"),(0,l.mdx)("li",{parentName:"ul"},"View and edit the DOM structure of your plugin's UXP UI"),(0,l.mdx)("li",{parentName:"ul"},"View networking requests (for XHR, ",(0,l.mdx)("inlineCode",{parentName:"li"},"fetch"),", and Websockets only)")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Important caveats:")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"XD may be unstable while debugging a plugin. Don't debug when you have important XD documents open."),(0,l.mdx)("li",{parentName:"ul"},"Error messages are often ",(0,l.mdx)("em",{parentName:"li"},"missing")," from the DevTools Console. Use the Developer Console within XD to be sure you are not missing any important information."),(0,l.mdx)("li",{parentName:"ul"},"XD will be partially frozen while paused on a JS breakpoint. Don't try to interact with XD while paused."),(0,l.mdx)("li",{parentName:"ul"},"You may see a blank white panel to the left of the DevTools UI. Ignore this, as it does nothing."),(0,l.mdx)("li",{parentName:"ul"},"If debugging exposes any private fields and methods, do not attempt to use them. Plugins referring to private APIs may be rejected or removed from the plugin marketplace.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-debugging-index-md-304a9a1a2738bc85c9b6.js.map