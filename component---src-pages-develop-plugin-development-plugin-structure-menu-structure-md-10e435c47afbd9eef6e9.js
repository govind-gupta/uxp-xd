(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[919],{42448:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return r}});var i=a(22122),l=a(19756),t=(a(15007),a(64983)),p=a(99536),m=["components"],s={},u={_frontmatter:s},o=p.Z;function r(e){var n=e.components,a=(0,l.Z)(e,m);return(0,t.mdx)(o,(0,i.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"plugin-menu-structure"},"Plugin menu structure"),(0,t.mdx)("p",null,"In your ",(0,t.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"},"manifest.json"),", The ",(0,t.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints"),' field is an array of objects including all UI entry points your plugin has available. All entries listed in this array appear both in the Plugins menu in the native menubar and the "plugin launchpad" sidebar panel. Let\'s learn how these items appear in XD.'),(0,t.mdx)("h2",{id:"top-level-name"},"Top level name"),(0,t.mdx)("p",null,"No matter how many itmes you have in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints"),' array, XD will always use your plugin\'s name as the top level label for your plugin in the UI. For example, if you have "PLUGIN NAME" as your plugin name in your manifest.json file:'),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'"name": "PLUGIN NAME"\n')),(0,t.mdx)("p",null,'XD will display this as the top menu item in the native menubar and in the "plugin launchpad":'),(0,t.mdx)("h2",{id:"submenu-names"},"Submenu names"),(0,t.mdx)("p",null,"So where do the ",(0,t.mdx)("inlineCode",{parentName:"p"},"label"),"s you specify in ",(0,t.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," show up in XD? For example, if you have a plugin with one modal-dialog command and one panel:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'"uiEntryPoints": [\n    {\n        "type": "menu",\n        "label": "This is a modal",\n        "commandId": "test"\n    },\n    {\n        "type": "panel",\n        "label": "this is a panel",\n        "panelId": "enlargeRectangle"\n    }\n]\n')),(0,t.mdx)("p",null,"You will see those labels shown as ",(0,t.mdx)("em",{parentName:"p"},"submenu")," items under the plugin's name:"),(0,t.mdx)("h2",{id:"single-item-plugins"},"Single-item plugins"),(0,t.mdx)("p",null,"If your plugin has only ",(0,t.mdx)("strong",{parentName:"p"},"one")," item in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," array, its ",(0,t.mdx)("inlineCode",{parentName:"p"},"label")," will be ignored. Instead of having a single submenu item nested under the plugin's name, XD will simply show the plugin's name itself as a directly actionable top-level menu item, which triggers the plugin's one entry point. For example:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'"uiEntryPoints": [\n    {\n        "type": "panel",\n        "label": "this is a panel (IGNORED)",\n        "panelId": "enlargeRectangle"\n    }\n]\n')),(0,t.mdx)("p",null,"Since there is only one item in the ",(0,t.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," array, XD will ignore the ",(0,t.mdx)("inlineCode",{parentName:"p"},"label")," and display the plugin's name as the top menu item."),(0,t.mdx)("p",null,"This exception is applied to prevent user confusion and to promote the most ideal user experience."))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-plugin-structure-menu-structure-md-10e435c47afbd9eef6e9.js.map