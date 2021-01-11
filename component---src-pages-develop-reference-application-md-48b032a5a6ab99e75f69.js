(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{J4XH:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return o}));var a=n("wx14"),i=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("ndZU"),d=(n("qKvR"),{}),m={_frontmatter:d},c=r.a;function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.mdx)(c,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"application"},"application"),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"application")," module exposes APIs for exporting content, initiating edits from panel UI, and getting version / locale info."),Object(l.mdx)("h3",{id:"applicationeditdocumentoptions-editfunction--editfunction"},Object(l.mdx)("em",{parentName:"h3"},"application.editDocument(options, editFunction) | (editFunction)")),Object(l.mdx)("p",null,"Call ",Object(l.mdx)("inlineCode",{parentName:"p"},"editDocument()")," from a ",Object(l.mdx)("strong",{parentName:"p"},"plugin panel UI")," event listener to initiate an ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/xd-concepts/lifecycle/#edit-operations"}),"edit operation")," batch in order to modify the XD document. This API is irrelevant for plugin menu item commands, which are wrapped in an edit batch automatically."),Object(l.mdx)("p",null,"XD calls the ",Object(l.mdx)("inlineCode",{parentName:"p"},"editFunction()")," synchronously (before ",Object(l.mdx)("inlineCode",{parentName:"p"},"editDocument()")," returns). This function is treated the same as a ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#command"}),"menu command handler"),":"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"It is passed two arguments, the selection and the root node of the scenegraph"),Object(l.mdx)("li",{parentName:"ul"},"It can return a Promise to extend the duration of the edit asynchronously")),Object(l.mdx)("p",null,"You can ",Object(l.mdx)("em",{parentName:"p"},"only")," call ",Object(l.mdx)("inlineCode",{parentName:"p"},"editDocument()")," in response to a user action, such as a button ",Object(l.mdx)("inlineCode",{parentName:"p"},'"click"')," event or a text input's ",Object(l.mdx)("inlineCode",{parentName:"p"},'"input"')," event. This generally means you must call it while a UI event handler is on the call stack."),Object(l.mdx)("p",null,"For UI events that often occur in rapid-fire clusters, such as dragging a slider or pressing keys in a text field, XD tries to smartly merge consecutive edits into a single atomic Undo step. See the ",Object(l.mdx)("inlineCode",{parentName:"p"},"mergeId")," option below to customize this behavior."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_application"}),Object(l.mdx)("inlineCode",{parentName:"a"},"application"))),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"options"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"EditSettings="),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional settings object (see below). This argument can be omitted.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"editFunction"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"!function(!Selection, !RootNode):?Promise"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function which will perform your plugin's edits to the scenegraph.")))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Typedef EditSettings")),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"editLabel"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"?string"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Used as the Undo label in the ",Object(l.mdx)("strong",{parentName:"td"},"Edit")," menu. If unspecified, XD uses the ",Object(l.mdx)("inlineCode",{parentName:"td"},"uxp-edit-label")," attribute on the DOM node which the user interacted with, and if that does not exist then the plugin's name will be used.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"mergeId"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"?string"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"If two consecutive edits to the same selection have the same ",Object(l.mdx)("inlineCode",{parentName:"td"},"mergeId"),', they are flattened together into one Undo step. If unspecified, for "high frequency" UI events (see above), XD treats the originating DOM node as a unique identifier for merging; for other UI events, merging is disabled.')))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let Color = require("scenegraph").Color;\nlet application = require("application");\n\nlet panelButton = document.querySelector("panel #myButton");\n\n// When button is clicked, set selected item\'s fill to solid red\npanelButton.addEventListener("click", (event) => {\n  application.editDocument((selection) => {\n    selection.items[0].fill = new Color("red");\n  });\n});\n')),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},Object(l.mdx)("strong",{parentName:"p"},"Info"),"\nFor comparison, plugin ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#command"}),"menu command handlers")," are effectively run as if they were passed to ",Object(l.mdx)("inlineCode",{parentName:"p"},"editDocument()")," with ",Object(l.mdx)("inlineCode",{parentName:"p"},"editLabel")," set to the menu item's label and ",Object(l.mdx)("inlineCode",{parentName:"p"},"mergeId")," set to null.")),Object(l.mdx)("hr",null),Object(l.mdx)("h3",{id:"applicationcreaterenditionsrenditions"},Object(l.mdx)("em",{parentName:"h3"},"application.createRenditions(renditions)")),Object(l.mdx)("p",null,"Generate renditions of nodes in the document in a batch. Overwrites any existing files without warning."),Object(l.mdx)("p",null,"A single ",Object(l.mdx)("inlineCode",{parentName:"p"},"createRenditions()")," call can generate any number of renditions, including multiple renditions of the same node (with\ndifferent output settings) or renditions of multiple different nodes. Only one ",Object(l.mdx)("inlineCode",{parentName:"p"},"createRenditions()")," call can be executing at any\ngiven time, so wait for the Promise it returns before calling it again."),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_application"}),Object(l.mdx)("inlineCode",{parentName:"a"},"application")),Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("strong",{parentName:"p"},"Returns"),": ",Object(l.mdx)("inlineCode",{parentName:"p"},"Promise<Array<RenditionResult>, string>")," - Promise which is fulfilled with an array of RenditionResults (pointing to\nthe same ",Object(l.mdx)("inlineCode",{parentName:"p"},"outputFile"),"s that were originally passed in, or rejected with an error string if one or more renditions failed for\nany reason."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Param"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"renditions"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array","<","RenditionSettings>"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"List of renditions to generate")))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Typedef RenditionSettings")),Object(l.mdx)("p",null,Object(l.mdx)("em",{parentName:"p"},"All rendition settings fields are required")," (for a given rendition type) unless otherwise specified."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"node"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"!SceneNode"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"Root of scenegraph subtree to render. This may be ",Object(l.mdx)("em",{parentName:"td"},"any")," node in the scenegraph, regardless of the current edit context.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"outputFile"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"!uxp.storage.File"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"File to save the rendition to (overwritten without warning if it already exists)")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"File type: RenditionType.PNG, JPG, PDF, or SVG")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"scale"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.mdx)("em",{parentName:"td"},"(PNG & JPG renditions)")," DPI multipler in the range ","[0.1, 100]",", e.g. 2.0 for @2x DPI.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"quality"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.mdx)("em",{parentName:"td"},"(JPG renditions)")," Compression quality in the range ","[1, 100]",".")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"background"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"?Color"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.mdx)("em",{parentName:"td"},"(PNG & JPEG renditions)")," Alpha component ignored for JPG. Optional: defaults to transparent for PNG, solid white for JPG.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"minify"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.mdx)("em",{parentName:"td"},"(SVG renditions)")," If true, SVG code is minified.")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"embedImages"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.mdx)("em",{parentName:"td"},"(SVG renditions)")," If true, bitmap images are stored as base64 data inside the SVG file. If false, bitmap images are saved as separate files linked from the SVG code.")))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Typedef RenditionResult")),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"outputFile"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"!uxp.storage.File"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"File the rendition was written to (equal to ",Object(l.mdx)("inlineCode",{parentName:"td"},"outputFile")," in RenditionSettings)")))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Generate PNG rendition of the selected node\nlet application = require("application");\nlet fs = require("uxp").storage.localFileSystem;\n\nlet file = await fs.getFileForSaving();\nlet shape = selection.items[0];\nlet renditions = [\n  {\n    node: shape,\n    outputFile: file,\n    type: application.RenditionType.PNG,\n    scale: 2,\n  },\n];\napplication.createRenditions(renditions).then(function (results) {\n  // ...do something with outputFiles on disk...\n});\n')),Object(l.mdx)("hr",null),Object(l.mdx)("h3",{id:"applicationversion--string"},Object(l.mdx)("em",{parentName:"h3"},"application.version : ",Object(l.mdx)("inlineCode",{parentName:"em"},"string"))),Object(l.mdx)("p",null,'Adobe XD version number in the form "major.minor.patch.build"'),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_application"}),Object(l.mdx)("inlineCode",{parentName:"a"},"application")),Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'console.log("Version:", application.version); // e.g. "13.0.21.3"\n')),Object(l.mdx)("hr",null),Object(l.mdx)("h3",{id:"applicationapplanguage--string"},Object(l.mdx)("em",{parentName:"h3"},"application.appLanguage : ",Object(l.mdx)("inlineCode",{parentName:"em"},"string"))),Object(l.mdx)("p",null,"Current language the application UI is using. This may not equal the user's OS locale setting: it is the closest\nlocale ",Object(l.mdx)("em",{parentName:"p"},"supported by XD"),' - use this when you want your plugin\'s UI to be consistent with XD\'s UI. Specifies\nlanguage only, with no region info (e.g. "fr", not "fr_FR").'),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_application"}),Object(l.mdx)("inlineCode",{parentName:"a"},"application")),Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'console.log("XD locale:", application.appLanguage); // e.g. "en"\n')),Object(l.mdx)("hr",null),Object(l.mdx)("h3",{id:"applicationsystemlocale--string"},Object(l.mdx)("em",{parentName:"h3"},"application.systemLocale : ",Object(l.mdx)("inlineCode",{parentName:"em"},"string"))),Object(l.mdx)("p",null,"User's OS-wide locale setting. May not match the XD UI, since XD does not support all world languages. Includes both\nlanguage ",Object(l.mdx)("em",{parentName:"p"},"and"),' region (e.g. "fr_CA" or "en_US").'),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_application"}),Object(l.mdx)("inlineCode",{parentName:"a"},"application")),Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'console.log("OS locale:", application.systemLocale); // e.g. "en_US"\n')),Object(l.mdx)("hr",null),Object(l.mdx)("h3",{id:"applicationactivedocument--documentinfo"},Object(l.mdx)("em",{parentName:"h3"},"application.activeDocument : ",Object(l.mdx)("inlineCode",{parentName:"em"},"!DocumentInfo"))),Object(l.mdx)("p",null,"Information about the document which this instance of the plugin is attached to."),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},Object(l.mdx)("strong",{parentName:"p"},"Tip")," > ",Object(l.mdx)("em",{parentName:"p"},"This does ",Object(l.mdx)("strong",{parentName:"em"},"not"),' indicate the frontmost "active" document window in the XD application.'),"\nIn XD, each document window ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/xd-concepts/lifecycle/#plugin-loading"}),"loads a separate copy of your plugin"),". When a given instance of your plugin calls this API, you will always receive information about the document that this instance of the plugin is attached to, even if it's not the active window.")),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Kind"),": static property of ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"#module_application"}),Object(l.mdx)("inlineCode",{parentName:"a"},"application")),Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("strong",{parentName:"p"},"Read only"),": true"),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Typedef DocumentInfo")),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),'Document name as displayed in the titlebar. For untitled documents, this will be a localized string such as "Untitled-1."')),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"guid"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.mdx)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.mdx)("em",{parentName:"td"},"Semi"),'-unique document identifier. Duplicating an .xd file on disk will result in two files with the same GUID. Duplicating a document via "Save As" will change its GUID; thus two ',Object(l.mdx)("em",{parentName:"td"},"cloud")," documents will never have the same GUID. The GUID of an Untitled document doesn't change when it is saved for the first time. ",Object(l.mdx)("br",null),Object(l.mdx)("br",null),"This returns the same value as ",Object(l.mdx)("inlineCode",{parentName:"td"},"scenegraph.root.guid"),".")))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let application = require("application");\nlet documentInfo = application.activeDocument;\nconsole.log("Document title: " + documentInfo.name);\nconsole.log("Document ID: " + documentInfo.guid);\n')))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-application-md-48b032a5a6ab99e75f69.js.map