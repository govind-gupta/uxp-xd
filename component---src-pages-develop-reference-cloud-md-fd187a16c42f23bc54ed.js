(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[50510],{20133:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return s}});var n=a(22122),r=a(19756),l=(a(15007),a(64983)),d=a(99536),m=["components"],i={},o={_frontmatter:i},p=d.Z;function s(e){var t=e.components,a=(0,r.Z)(e,m);return(0,l.mdx)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"cloud"},"cloud"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"cloud")," module lets you get information about shared prototypes and design specs."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'// Get prototypes data\nconst cloud = require("cloud");\nvar sharedArtifacts = cloud.getSharedArtifacts();\nvar prototypes = sharedArtifacts.filter(\n  (artifact) => artifact.type === cloud.ArtifactType.PROTOTYPE\n);\nprototypes.forEach((artifact) => {\n  console.log("Prototype URL: ", artifact.url);\n});\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'// Get design specs data\nconst cloud = require("cloud");\nvar sharedArtifacts = cloud.getSharedArtifacts();\nvar specs = sharedArtifacts.filter(\n  (artifact) => artifact.type === cloud.ArtifactType.SPECS\n);\nspecs.forEach((artifact) => {\n  console.log("Design Spec URL: ", artifact.url);\n});\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Since"),": XD 14"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#module_cloud"},"cloud"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#module_cloud-getSharedArtifacts"},".getSharedArtifacts()")," ⇒ ",(0,l.mdx)("inlineCode",{parentName:"li"},"!Array.<!PrototypeArtifact|SpecsArtifact>"))))),(0,l.mdx)("h3",{id:"enums"},"Enums"),(0,l.mdx)("dl",null,(0,l.mdx)("dt",null,(0,l.mdx)("a",{name:"ArtifactType"})," ArtifactType : "),(0,l.mdx)("dd",null,"`PROTOTYPE, SPECS` - Type of shared artifact: interactive prototype only, or developer-focused specs view (which may ",(0,l.mdx)("i",null,"also")," include access to an interactive prototype view)"),(0,l.mdx)("dt",null,(0,l.mdx)("a",{name:"TargetPlatform"})," TargetPlatform : "),(0,l.mdx)("dd",null,"`WEB, IOS, ANDROID` - Target platform for published design specs"),(0,l.mdx)("dt",null,(0,l.mdx)("a",{name:"AccessLevel"})," AccessLevel : "),(0,l.mdx)("dd",null,"`LINKABLE, PASSWORD_PROTECTED, INVITE_ONLY` - Access level of the shared link: accessible to anyone with the link, anyone with the link + password, or only specific Creative Cloud user accounts")),(0,l.mdx)("h3",{id:"cloudgetsharedartifacts"},"cloud.getSharedArtifacts()"),(0,l.mdx)("p",null,"Get a list of recently shared artifacts generated from this document.\nOlder artifacts may not be included even if the shared links are still live. Shared links that have\nbeen deleted from the server (File > Manage Published Links) may still be listed here, as this API\nonly provides a record of recent share actions from XD - not what the links' current status on the\nserver may be."),(0,l.mdx)("p",null,"The list may contain a mix of PrototypeArtifact and/or SpecsArtifact, and items are listed in no\nparticular order. If nothing has been shared from this document, an empty array is returned."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.mdx)("a",{parentName:"p",href:"#module_cloud"},(0,l.mdx)("inlineCode",{parentName:"a"},"cloud"))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Returns"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"!Array.<!PrototypeArtifact|SpecsArtifact>")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Typedef BaseSharedArtifact")),(0,l.mdx)("p",null,"Properties common to both types."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"type"),(0,l.mdx)("td",{parentName:"tr",align:null},"ArtifactType"),(0,l.mdx)("td",{parentName:"tr",align:null},"Type of shared artifact")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"url"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"URL to view in browser")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"name"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of shared artifact (often, but not always, matches the document name)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"accessLevel"),(0,l.mdx)("td",{parentName:"tr",align:null},"AccessLevel"),(0,l.mdx)("td",{parentName:"tr",align:null},"Level of access protection")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"allowComments"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"True if stakeholders can post comments on this artifact")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Typedef PrototypeArtifact")),(0,l.mdx)("p",null,'Interactive prototype view generated via "Share for Review."'),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"embedURL"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"URL for embedding a view of the prototype inside an iframe (compact view with minimal surrounding UI)")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"embedWidth"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},"iframe width needed to display embedURL. May include room for navigation UI in addition to the prototype's content itself.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"embedHeight"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},"iframe height needed to display embedURL. May include room for navigation UI in addition to the prototype's content itself.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"fullscreenInPage"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"True if prototype defaults to a view that fills the entire page, with no surrounding UI visible for navigation, commenting, etc.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"hotspotHints"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"True if clicking in non-interactive parts of the prototype flashes visual hints indicating the interactive spots")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Typedef SpecsArtifact")),(0,l.mdx)("p",null,'Developer-oriented specs view generated via "Share for Development." This may ',(0,l.mdx)("em",{parentName:"p"},"also")," allow viewing the document as an interactive prototype, with default settings (",(0,l.mdx)("inlineCode",{parentName:"p"},"fullscreenInPage: false")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"hotspotHints: true"),")."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"targetPlatform"),(0,l.mdx)("td",{parentName:"tr",align:null},"PlatformType"),(0,l.mdx)("td",{parentName:"tr",align:null},"Target platform. Determines which information and measurement units are shown by default.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-cloud-md-fd187a16c42f23bc54ed.js.map