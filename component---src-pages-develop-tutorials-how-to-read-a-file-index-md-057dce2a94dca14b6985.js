(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[18994],{63286:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return m}});var n=a(22122),i=a(19756),d=(a(15007),a(64983)),l=a(99536),o=["components"],s={},r={_frontmatter:s},p=l.Z;function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,d.mdx)(p,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"how-to-read-a-file"},"How to read a file"),(0,d.mdx)("p",null,"This tutorial will show you how an XD plugin can read in a file from the file system. As one of example of what you can do with a file, we'll extract text from the file and add that text to the scenegraph."),(0,d.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, and JavaScript."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/tutorials/quick-start/"},"Quick Start Tutorial")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/tutorials/debugging/"},"Debugging Tutorial"))),(0,d.mdx)("h2",{id:"development-steps"},"Development Steps"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},(0,d.mdx)("strong",{parentName:"p"},"Info"),"\nComplete code for this plugin can be found ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-read-a-file"},"on GitHub"),".")),(0,d.mdx)("h3",{id:"1-prepare-your-plugin-scaffold"},"1. Prepare your plugin scaffold"),(0,d.mdx)("p",null,"First, edit the manifest file for the plugin you created in our ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/tutorials/quick-start"},"Quick Start Tutorial"),"."),(0,d.mdx)("p",null,"Replace the ",(0,d.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," field of the manifest with the following:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'"uiEntryPoints": [\n    {\n        "type": "menu",\n        "label": "Insert Text From File",\n        "commandId": "insertTextFromFileCommand"\n    }\n]\n')),(0,d.mdx)("p",null,"If you're curious about what each entry means, ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"},"see the manifest documentation"),", where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager."),(0,d.mdx)("p",null,"Then, update your ",(0,d.mdx)("inlineCode",{parentName:"p"},"main.js")," file, mapping the manifest's ",(0,d.mdx)("inlineCode",{parentName:"p"},"commandId")," to a handler function."),(0,d.mdx)("p",null,"Replace the content of your ",(0,d.mdx)("inlineCode",{parentName:"p"},"main.js")," file with the following code (note the presence of the ",(0,d.mdx)("inlineCode",{parentName:"p"},"async")," keyword, which we'll look at in a later step):"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"async function insertTextFromFileHandler(selection) {\n  // The body of this function is added later\n}\n\nmodule.exports = {\n  commands: {\n    insertTextFromFileCommand: insertTextFromFileHandler,\n  },\n};\n")),(0,d.mdx)("p",null,"The remaining steps in this tutorial describe additional edits to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"main.js")," file."),(0,d.mdx)("h3",{id:"2-require-in-xd-api-dependencies"},"2. Require in XD API dependencies"),(0,d.mdx)("p",null,"For this tutorial, we need access to two XD scenegraph dependencies and one UXP dependency."),(0,d.mdx)("p",null,"Add the following lines to the top of your ",(0,d.mdx)("inlineCode",{parentName:"p"},"main.js")," file:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'// Add this to the top of your main.js file\nconst { Text, Color } = require("scenegraph");\nconst fs = require("uxp").storage.localFileSystem;\n')),(0,d.mdx)("p",null,"Now the ",(0,d.mdx)("inlineCode",{parentName:"p"},"Text")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"Color")," classes are required in and ready to be used, as well as UXP's local file system provider."),(0,d.mdx)("h3",{id:"3-create-a-handler-function"},"3. Create a handler function"),(0,d.mdx)("p",null,"Our plugin will allow the user to pick a file from the system file picker, read that file's contents, and add the contents to a text object on the scenegraph."),(0,d.mdx)("p",null,"Each of the numbered comments are explained below the code:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'async function insertTextFromFileHandler(selection) {\n  // [1]\n  const aFile = await fs.getFileForOpening({ types: ["txt"] }); // [2]\n  if (!aFile) return; // [3]\n\n  const contents = await aFile.read(); // [4]\n\n  const text = new Text(); // [5]\n  text.text = contents;\n  text.styleRanges = [\n    {\n      length: contents.length,\n      fill: new Color("#0000ff"),\n      fontSize: 12,\n    },\n  ];\n\n  selection.insertionParent.addChild(text); // [6]\n  text.moveInParentCoordinates(10, 30);\n}\n')),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"This example uses XD's asynchronous Filo I/O APIs, so the handler function must be declared as an async method. To learn more about async support in XD plugin APIs, see ",(0,d.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/plugin-development/javascript-and-xd/sync-async/"},"our document on sync and async support"),"."),(0,d.mdx)("li",{parentName:"ol"},"A file picker dialog is displayed, and the function waits for the user to select a text file. The selected file is assigned to ",(0,d.mdx)("inlineCode",{parentName:"li"},"aFile"),". The ",(0,d.mdx)("inlineCode",{parentName:"li"},"#getFileForOpening")," method is asynchronous, so the ",(0,d.mdx)("inlineCode",{parentName:"li"},"await")," keyword is used."),(0,d.mdx)("li",{parentName:"ol"},"If ",(0,d.mdx)("inlineCode",{parentName:"li"},"aFile")," is undefined (because the user did not select a file), then plugin exits."),(0,d.mdx)("li",{parentName:"ol"},"The contents of the file is read in, and returned as a string. See below for more detail. The ",(0,d.mdx)("inlineCode",{parentName:"li"},"#read")," method is asynchronous, so the ",(0,d.mdx)("inlineCode",{parentName:"li"},"await")," keyword is used."),(0,d.mdx)("li",{parentName:"ol"},"The contents of the string is added to a ",(0,d.mdx)("inlineCode",{parentName:"li"},"Text")," object. For details on ",(0,d.mdx)("inlineCode",{parentName:"li"},"Text"),' properties, see the "',(0,d.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/tutorials/how-to-style-text"},"How to style text"),'" tutorial.'),(0,d.mdx)("li",{parentName:"ol"},"The ",(0,d.mdx)("inlineCode",{parentName:"li"},"text")," object is added to and positioned on the selected artboard.")),(0,d.mdx)("h3",{id:"4-run-the-plugin"},"4. Run the plugin"),(0,d.mdx)("p",null,"After saving all of your changes, reload the plugin in XD and run it. First you'll see a file picker:"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/26e6e122afec101732dad4513ebc442c/cb523/filepicker.webp 320w","/uxp-xd/static/26e6e122afec101732dad4513ebc442c/797b9/filepicker.webp 640w","/uxp-xd/static/26e6e122afec101732dad4513ebc442c/4b075/filepicker.webp 1280w","/uxp-xd/static/26e6e122afec101732dad4513ebc442c/74d86/filepicker.webp 1700w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/26e6e122afec101732dad4513ebc442c/72799/filepicker.png 320w","/uxp-xd/static/26e6e122afec101732dad4513ebc442c/6af66/filepicker.png 640w","/uxp-xd/static/26e6e122afec101732dad4513ebc442c/21b4d/filepicker.png 1280w","/uxp-xd/static/26e6e122afec101732dad4513ebc442c/dcb79/filepicker.png 1700w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/26e6e122afec101732dad4513ebc442c/21b4d/filepicker.png",alt:"System file picker",title:"System file picker",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,"If you select a file containing text, the text should be added to the currently-selected artboard:"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"176.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/c0fdacb45719284625c351b7f1bb3576/cb523/displayed-results.webp 320w","/uxp-xd/static/c0fdacb45719284625c351b7f1bb3576/797b9/displayed-results.webp 640w","/uxp-xd/static/c0fdacb45719284625c351b7f1bb3576/01256/displayed-results.webp 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/c0fdacb45719284625c351b7f1bb3576/72799/displayed-results.png 320w","/uxp-xd/static/c0fdacb45719284625c351b7f1bb3576/6af66/displayed-results.png 640w","/uxp-xd/static/c0fdacb45719284625c351b7f1bb3576/5a6dd/displayed-results.png 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/c0fdacb45719284625c351b7f1bb3576/5a6dd/displayed-results.png",alt:"blue text added to the artboard",title:"blue text added to the artboard",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-tutorials-how-to-read-a-file-index-md-057dce2a94dca14b6985.js.map