(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[69792],{45892:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return u}});var a=t(22122),l=t(19756),i=(t(15007),t(64983)),o=t(99536),p={},r={_frontmatter:p},d=o.Z;function u(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,i.mdx)(d,(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"panel-update-callback"},"Panel update() callback"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"update()")," function is an ",(0,i.mdx)("em",{parentName:"p"},"optional")," lifecycle method in ",(0,i.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#panel"},"panel objects"),". XD calls ",(0,i.mdx)("inlineCode",{parentName:"p"},"update()")," whenever your panel UI content should be refreshed:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When the user changes the selection"),(0,i.mdx)("li",{parentName:"ul"},"When the user modifies a node within the current selection. This can include actions such as move, resize, changing fill color, etc."),(0,i.mdx)("li",{parentName:"ul"},"When your panel is reopened after having been closed")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"update")," function receives ",(0,i.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#contextual-arguments"},(0,i.mdx)("inlineCode",{parentName:"a"},"selection")," and ",(0,i.mdx)("inlineCode",{parentName:"a"},"root")," arguments"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'function update(selection, root) {\n  const { Text } = require("scenegraph");\n\n  if (!(selection.items[0] instanceof Text)) {\n    panelContainer.innerHTML = `<p>Please select a text object in the document.</p>`;\n  }\n}\n')),(0,i.mdx)("p",null,"Note that the example code above assumes you created a reference to the panel markup ",(0,i.mdx)("inlineCode",{parentName:"p"},"panelContainer")," at the global level when the panel was created."),(0,i.mdx)("p",null,"Whenever the ",(0,i.mdx)("inlineCode",{parentName:"p"},"update")," function is called, it is important to get in and out as quickly as possible since it's triggered for essentially every user action in XD while your panel is open."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-ui-panels-update-md-7777b4f3363b2156618b.js.map