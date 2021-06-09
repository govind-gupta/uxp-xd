(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[54197],{75218:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return x}});var t=a(22122),d=a(19756),l=(a(15007),a(64983)),r=a(99536),m=["components"],i={},o={_frontmatter:i},p=r.Z;function x(e){var n=e.components,a=(0,d.Z)(e,m);return(0,l.mdx)(p,(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"scenenodelist"},"SceneNodeList"),(0,l.mdx)("p",null,"Represents the children of a scenenode. Typically accessed via the ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/scenegraph/#SceneNode-children"},"SceneNode.children")," property."),(0,l.mdx)("p",null,"This is ",(0,l.mdx)("em",{parentName:"p"},"not an Array"),", so you must use ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList-at"},(0,l.mdx)("inlineCode",{parentName:"a"},".at(i)"))," instead of ",(0,l.mdx)("inlineCode",{parentName:"p"},"[i]")," to access children by index. It has a\nnumber of Array-like methods such as ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList-forEach"},"forEach")," for convenience, however. For best performance, iterate\nthe list using these methods rather than repeatedly calling ",(0,l.mdx)("inlineCode",{parentName:"p"},"at()"),"."),(0,l.mdx)("p",null,"Items in this list are ordered from lowest z order to highest."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": class"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'let node = ...;\nconsole.log("Node has " + node.children.length + " children");\nconsole.log("First child: " + node.children.at(0));  // do not use `[0]` - it will not work!\nnode.children.forEach(function (childNode, i) {\n    ...\n});\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"See"),": ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/scenegraph/#SceneNode-children"},"SceneNode.children")),(0,l.mdx)("h3",{id:"scenenodelistlength--number"},"sceneNodeList.length : ",(0,l.mdx)("inlineCode",{parentName:"h3"},"number")),(0,l.mdx)("p",null,"Number of children in the list."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},(0,l.mdx)("inlineCode",{parentName:"a"},"SceneNodeList")),(0,l.mdx)("br",{parentName:"p"}),"\n",(0,l.mdx)("strong",{parentName:"p"},"Read only"),": true"),(0,l.mdx)("h3",{id:"scenenodelistforeachcallback-thisarg-⇒-void"},"sceneNodeList.forEach(callback, thisArg) ⇒ ",(0,l.mdx)("inlineCode",{parentName:"h3"},"void")),(0,l.mdx)("p",null,"Iterate all children in the list."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},(0,l.mdx)("inlineCode",{parentName:"a"},"SceneNodeList"))),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"!function(!SceneNode, number)")),(0,l.mdx)("td",{parentName:"tr",align:null},"Callback, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("h3",{id:"scenenodelistforeachrightcallback-thisarg-⇒-void"},"sceneNodeList.forEachRight(callback, thisArg) ⇒ ",(0,l.mdx)("inlineCode",{parentName:"h3"},"void")),(0,l.mdx)("p",null,"Iterate all children in the list, in reverse order (highest z order to lowest)."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},(0,l.mdx)("inlineCode",{parentName:"a"},"SceneNodeList"))),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"!function(!SceneNode, number)")),(0,l.mdx)("td",{parentName:"tr",align:null},"Callback, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("h3",{id:"scenenodelistfiltercallback-thisarg-⇒-arrayscenenodegt"},"sceneNodeList.filter(callback, thisArg) ⇒ ",(0,l.mdx)("inlineCode",{parentName:"h3"},"Array.<!SceneNode&gt;")),(0,l.mdx)("p",null,"Iterates all children and returns an array of just the children that passed the filter function's test."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},(0,l.mdx)("inlineCode",{parentName:"a"},"SceneNodeList"))),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"!function(!SceneNode, number): boolean")),(0,l.mdx)("td",{parentName:"tr",align:null},"Filter function, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("h3",{id:"scenenodelistmapcallback-thisarg-⇒-arraygt"},"sceneNodeList.map(callback, thisArg) ⇒ ",(0,l.mdx)("inlineCode",{parentName:"h3"},"Array.<\\*&gt;")),(0,l.mdx)("p",null,"Iterates all children and returns an array of the map function's result value for each child node."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},(0,l.mdx)("inlineCode",{parentName:"a"},"SceneNodeList"))),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"!function(!SceneNode, number): *")),(0,l.mdx)("td",{parentName:"tr",align:null},"Map function, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("h3",{id:"scenenodelistsomecallback-thisarg-⇒-boolean"},"sceneNodeList.some(callback, thisArg) ⇒ ",(0,l.mdx)("inlineCode",{parentName:"h3"},"boolean")),(0,l.mdx)("p",null,"Iterates children until the test returns true for at least one child."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},(0,l.mdx)("inlineCode",{parentName:"a"},"SceneNodeList")),(0,l.mdx)("br",{parentName:"p"}),"\n",(0,l.mdx)("strong",{parentName:"p"},"Returns"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"boolean")," - True if the test function returned true for at least one child."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"callback"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"!function(!SceneNode, number): boolean")),(0,l.mdx)("td",{parentName:"tr",align:null},"Test function, passed each child node and its index.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"thisArg"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"?Object")),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional value for ",(0,l.mdx)("inlineCode",{parentName:"td"},"this")," when executing the callback.")))),(0,l.mdx)("h3",{id:"scenenodelistat-⇒-scenenode"},"sceneNodeList.at() ⇒ ",(0,l.mdx)("inlineCode",{parentName:"h3"},"SceneNode")),(0,l.mdx)("p",null,"Note: calling ",(0,l.mdx)("inlineCode",{parentName:"p"},"at()")," repeatedly (e.g. in a ",(0,l.mdx)("inlineCode",{parentName:"p"},"for")," loop) is not as fast as using SceneNodeList's iteration methods such as ",(0,l.mdx)("inlineCode",{parentName:"p"},"forEach()"),",\n",(0,l.mdx)("inlineCode",{parentName:"p"},"some()"),", or ",(0,l.mdx)("inlineCode",{parentName:"p"},"map()"),"."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,l.mdx)("a",{parentName:"p",href:"#SceneNodeList"},(0,l.mdx)("inlineCode",{parentName:"a"},"SceneNodeList")),(0,l.mdx)("br",{parentName:"p"}),"\n",(0,l.mdx)("strong",{parentName:"p"},"Returns"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"?SceneNode")," - Child node at the specified index in the list, or null if index is out of bounds."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"index"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"number"))))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-scene-node-list-md-8e76c27d57b47de22e66.js.map