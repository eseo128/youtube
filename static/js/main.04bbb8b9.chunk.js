(this.webpackJsonptemplete=this.webpackJsonptemplete||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__179eI"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__2fv_c",grid:"video_item_grid__3JeCy",list:"video_item_list__3Jh_U",video:"video_item_video__2RpA-",thumbnail:"video_item_thumbnail__3B1bw",metadata:"video_item_metadata__12BH5",title:"video_item_title__A6eJ1",channel:"video_item_channel__1Mths"}},4:function(e,t,a){e.exports={header:"search_header_header__3HKb_",logo:"search_header_logo__A4OR7",title:"search_header_title__3NoRY",input:"search_header_input__yPYL7",button:"search_header_button__2QsXM",buttonImg:"search_header_buttonImg__3nYZH"}},5:function(e,t,a){e.exports={app:"app_app__3WKke",content:"app_content__2VDMV",detail:"app_detail__13csL",list:"app_list__2SWVs"}},50:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(20),s=a.n(c),r=(a(29),a(10)),o=a(5),l=a.n(o),u=a(4),d=a.n(u),h=a(0),p=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),i=function(){var e=a.current.value;t(e)};return Object(h.jsxs)("header",{className:d.a.header,children:[Object(h.jsxs)("div",{className:d.a.logo,children:[Object(h.jsx)("img",{className:d.a.img,src:"youtube/images/logo.png",alt:"logo"}),Object(h.jsx)("h1",{className:d.a.title,children:"Youtube"})]}),Object(h.jsx)("input",{ref:a,className:d.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(h.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){i()},children:Object(h.jsx)("img",{className:d.a.buttonImg,src:"youtube/images/search.png",alt:"search"})})]})})),_=a(7),b=a.n(_),m=function(e){var t=e.video,a=e.video.snippet;return Object(h.jsxs)("section",{className:b.a.detail,children:[Object(h.jsx)("iframe",{className:b.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(h.jsx)("h2",{children:a.title}),Object(h.jsx)("h3",{children:a.channelTitle}),Object(h.jsx)("pre",{className:b.a.description,children:a.description})]})},j=a(3),v=a.n(j),O=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,i="list"===e.display?v.a.list:v.a.grid;return Object(h.jsx)("li",{className:"".concat(v.a.container," ").concat(i),onClick:function(){return n(t)},children:Object(h.jsxs)("div",{className:v.a.video,children:[Object(h.jsx)("img",{className:v.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(h.jsxs)("div",{className:v.a.metadata,children:[Object(h.jsx)("p",{className:v.a.title,children:a.title}),Object(h.jsx)("p",{className:v.a.channel,children:a.channelTitle})]})]})})})),f=a(21),x=a.n(f),g=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(h.jsx)("ul",{className:x.a.videos,children:t.map((function(e){return Object(h.jsx)(O,{video:e,onVideoClick:a,display:n},e.id)}))})};var y=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(r.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(null),u=Object(r.a)(o,2),d=u[0],_=u[1],b=Object(n.useCallback)((function(e){_(null),t.search(e).then((function(e){s(e)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(h.jsxs)("div",{className:l.a.app,children:[Object(h.jsx)(p,{onSearch:b}),Object(h.jsxs)("section",{className:l.a.content,children:[d&&Object(h.jsx)("div",{className:l.a.detail,children:Object(h.jsx)(m,{video:d})}),Object(h.jsx)("div",{className:l.a.list,children:Object(h.jsx)(g,{videos:c,onVideoClick:function(e){_(e)},display:d?"list":"grid"})})]})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))},k=a(11),w=a(6),C=a.n(w),S=a(9),I=a(22),P=a(23),R=function(){function e(t){Object(I.a)(this,e),this.youtube=t}return Object(P.a)(e,[{key:"mostPopular",value:function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),V=a(24),F=new R(a.n(V).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyDFmnSko-nXIO9qNH40be8XTPOXEIXuE2A"}}));s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(y,{youtube:F})}),document.getElementById("root")),N()},7:function(e,t,a){e.exports={detail:"video_detail_detail__3k8f-",description:"video_detail_description__1UW40"}}},[[50,1,2]]]);
//# sourceMappingURL=main.04bbb8b9.chunk.js.map