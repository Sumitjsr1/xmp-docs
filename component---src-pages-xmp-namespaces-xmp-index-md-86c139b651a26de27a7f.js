(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9473],{8473:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return s}});var r=a(2122),n=a(9756),d=(a(5007),a(4983)),i=a(9536),m={},l={_frontmatter:m},o=i.Z;function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,d.mdx)(o,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"adobe-xmp-basic-namespace"},"Adobe XMP Basic namespace"),(0,d.mdx)("p",null,"The XMP basic namespace contains properties that provide basic descriptive information."),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The namespace URI is ",(0,d.mdx)("a",{parentName:"p",href:"http://ns.adobe.com/xap/1.0/"},"http://ns.adobe.com/xap/1.0/"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The preferred namespace prefix is xmp"))),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null}),(0,d.mdx)("th",{parentName:"tr",align:null}),(0,d.mdx)("th",{parentName:"tr",align:null}))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"Name")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"Description")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"Type"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:CreateDate"),(0,d.mdx)("td",{parentName:"tr",align:null},"The date and time the resource was created. For a digital file, this need not match a file-system creation time. For a freshly created resource, it should be close to that time, modulo the time taken to write the file. Later file transfer, copying, and so on, can make the file-system time arbitrarily different."),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#date"},"Date"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:CreatorTool"),(0,d.mdx)("td",{parentName:"tr",align:null},"The name of the first known tool used to create the resource."),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#agent-name"},"AgentName"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:Identifier"),(0,d.mdx)("td",{parentName:"tr",align:null},"An unordered array of text strings that unambiguously identify the resource within a given context. An array item may be qualified with xmpidq:Scheme to denote the formal identification system to which that identifier conforms. NOTE: The xmp:Identifier property was added because dc:identifier has been defined in the original XMP specification as a single identifier instead of as an array, and changing dc:identifier to an array would break compatibility with existing XMP processors."),(0,d.mdx)("td",{parentName:"tr",align:null},"Unordered array of ",(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#text"},"Text"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:Label"),(0,d.mdx)("td",{parentName:"tr",align:null},"A word or short phrase that identifies a resource as a member of a userdefined collection. NOTE: One anticipated usage is to organize resources in a file browser."),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#text"},"Text"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:MetadataDate"),(0,d.mdx)("td",{parentName:"tr",align:null},"The date and time that any metadata for this resource was last changed. It should be the same as or more recent than xmp:ModifyDate."),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#date"},"Date"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:ModifyDate"),(0,d.mdx)("td",{parentName:"tr",align:null},"The date and time the resource was last modified. NOTE: The value of this property is not necessarily the same as the file’s system modification date because it is typically set before the file is saved."),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#date"},"Date"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:Rating"),(0,d.mdx)("td",{parentName:"tr",align:null},"A user-assigned rating for this file. The value shall be -1 or in the range ","[0..5]",", where -1 indicates “rejected” and 0 indicates “unrated”. If xmp:Rating is not present, a value of 0 should be assumed. NOTE: Anticipated usage is for a typical “star rating” UI, with the addition of a notion of rejection."),(0,d.mdx)("td",{parentName:"tr",align:null},"Closed Choice of ",(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#real"},"Real"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:BaseURL"),(0,d.mdx)("td",{parentName:"tr",align:null},"The base URL for relative URLs in the document content. If this document contains Internet links, and those links are relative, they are relative to this base URL. This property provides a standard way for embedded relative URLs to be interpreted by tools. Web authoring tools should set the value based on their notion of where URLs will be interpreted."),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#url"},"URL"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:Nickname"),(0,d.mdx)("td",{parentName:"tr",align:null},"A short informal name for the resource."),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/CoreProperties.md#text"},"Text"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"xmp:Thumbnails"),(0,d.mdx)("td",{parentName:"tr",align:null},"An alternative array of thumbnail images for a file, which can differ in characteristics such as size or image encoding."),(0,d.mdx)("td",{parentName:"tr",align:null},"alternative array of ",(0,d.mdx)("a",{parentName:"td",href:"./XMPDataTypes/Thumbnails.md"},"Thumbnail"))))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-xmp-namespaces-xmp-index-md-86c139b651a26de27a7f.js.map