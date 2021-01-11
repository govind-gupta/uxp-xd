(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{vBDv:function(e,t,s){"use strict";s.r(t),s.d(t,"_frontmatter",(function(){return a})),s.d(t,"default",(function(){return u}));var o=s("wx14"),n=s("zLVn"),r=(s("q1tI"),s("7ljp")),i=s("ndZU"),a=(s("qKvR"),{}),l={_frontmatter:a},m=i.a;function u(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(r.mdx)(m,Object(o.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"40-file-io"},"4.0 File I/O"),Object(r.mdx)("p",null,"In many cases, your plugin may need to create, read, and write files on the user’s persistent storage mediums. Your plugin should be respectful of the fact that it has access to a lot of potentially privileged information and should respect the user’s privacy. The plugin should also be mindful of not wasting a lot of space."),Object(r.mdx)("h2",{id:"41-handle-io-exceptions"},"4.1 Handle I/O Exceptions"),Object(r.mdx)("p",null,"There may well be cases when your File I/O attempt will fail. Your plugin should always handle the exceptions gracefully."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"(4.1.1) An exception encountered during a File I/O operation should ",Object(r.mdx)("strong",{parentName:"li"},Object(r.mdx)("em",{parentName:"strong"},"never"))," cause the plugin to fail silently. The plugin should attempt to recover if possible. If no recovery is possible, ",Object(r.mdx)("strong",{parentName:"li"},Object(r.mdx)("em",{parentName:"strong"},"always"))," inform the user via a modal dialog."),Object(r.mdx)("li",{parentName:"ul"},"(4.1.2) Don’t use “programmer-speak” when showing File I/O error messages. For example, if the user is out of disk space, give the user some options instead of throwing up a terse error message instead. For example, “",Object(r.mdx)("strong",{parentName:"li"},"You’re out of disk space. This plugin requires more disk space in order to complete its operation. Try removing temporary or unneeded files and then try again."),"”")),Object(r.mdx)("h2",{id:"42-respect-the-users-disk-space"},"4.2 Respect the user’s disk space"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"(4.2.1) Don’t store unnecessary data in the plugin’s data folder."),Object(r.mdx)("li",{parentName:"ul"},"(4.2.2) Don’t expect data stored in the plugin’s temporary folder to persist for any considerable length of time."),Object(r.mdx)("li",{parentName:"ul"},"(4.2.3) Clean up after yourself — delete files stored in temporary or persistent storage when they are no longer needed.")),Object(r.mdx)("h2",{id:"43-dont-store-sensitive-information-on-the-users-disk"},"4.3 Don’t store sensitive information on the user’s disk"),Object(r.mdx)("p",null,"Although plugin’s can’t access other plugin data without the user first giving permission, the files that you store are themselves accessible to other applications running on your user’s machine. This means that if you were to save a user’s password to the file system, that password would now be accessible to any other application running on the machine."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"(4.3.1) ",Object(r.mdx)("strong",{parentName:"li"},Object(r.mdx)("em",{parentName:"strong"},"Never"))," store sensitive information (like passwords) to the user’s storage."),Object(r.mdx)("li",{parentName:"ul"},"(4.3.2) Request sensitive information each time it is needed (either from the user, or from a remote endpoint)."),Object(r.mdx)("li",{parentName:"ul"},"(4.3.3) You can cache sensitive information in memory for the life of the current document."),Object(r.mdx)("li",{parentName:"ul"},"(4.3.4) Use time-limited, revokable tokens instead of passwords.")),Object(r.mdx)("h2",{id:"44-never-access-user-files-without-permission"},"4.4 Never access user files without permission"),Object(r.mdx)("p",null,"Although the File I/O API surface makes it difficult to access files outside of the plugin data folder and temporary folder without the user first providing some sort of permission using a file picker, it is incumbent upon your plugin to ensure that it doesn’t circumvent the user’s permissions to do so."),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"(4.4.1) ",Object(r.mdx)("strong",{parentName:"li"},Object(r.mdx)("em",{parentName:"strong"},"Always"))," invoke a picker once per document session when accessing a user file (excludes temporary and plugin data)."),Object(r.mdx)("li",{parentName:"ul"},"(4.4.2) Your plugin can cache access to a file for the lifetime of the document session."),Object(r.mdx)("li",{parentName:"ul"},"(4.4.3) ",Object(r.mdx)("strong",{parentName:"li"},Object(r.mdx)("em",{parentName:"strong"},"Never"))," ask for access to the root folder of the user’s storage volume."),Object(r.mdx)("li",{parentName:"ul"},"(4.4.4) Avoid asking for access to the user’s “Documents” folder (and other similar files.)"),Object(r.mdx)("li",{parentName:"ul"},"(4.4.5) ",Object(r.mdx)("strong",{parentName:"li"},Object(r.mdx)("em",{parentName:"strong"},"Never"))," ask for permission to access files in another plugin’s folder.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-devbestpractices-4-file-io-md-7e717a0fd1225e0ca911.js.map