(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"1KTU":function(t,e,n){"use strict";n.r(e);var r=n("wx14"),o=n("zLVn"),i=n("dI71"),a=n("q1tI"),c=n.n(a),s=n("TSYQ"),p=n.n(s),l=n("Hk+Y"),d=n.n(l),b=n("Xhe4"),u=n("s4cb"),f=n("Z2Dm"),O=n("H9WF"),m=n("y4MT"),h=function(t){var e,n;return{container:m.c,brand:{color:"#FFFFFF",textAlign:"left"},title:(e={fontSize:"4.2rem",fontWeight:"600",display:"inline-block",position:"relative"},e[t.breakpoints.down("sm")]={fontSize:"3rem"},e),subtitle:(n={fontSize:"1.313rem",margin:"10px 0 0"},n[t.breakpoints.down("sm")]={fontSize:"1rem"},n),main:{background:"#FFFFFF",position:"relative",zIndex:"3"},mainRaised:{minHeight:"60vh",margin:"-60px 30px 0px",borderRadius:"6px",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},link:{textDecoration:"none"},textCenter:{textAlign:"center"},coloredBackground:{backgroundColor:"#ededed"},buttonStyle:{width:"120px",color:"white",backgroundColor:"#425CC7","&:hover":{backgroundColor:"#E3E7F7",color:"#425CC7"}}}},g=n("ZchG"),j=n("fSuq"),y=n("qKvR"),x=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.classes,i=Object(o.a)(t,["classes"]);return Object(y.d)("div",{className:e.coloredBackground},Object(y.d)(b.a,Object(r.a)({brand:"LOGO",rightLinks:Object(y.d)(O.a,null),fixed:!0,color:"transparent",changeColorOnScroll:{height:50,color:"dark"}},i)),Object(y.d)(f.a,{small:!0,image:n("xJf2")}),Object(y.d)("div",{className:p()(e.main,e.mainRaised)},Object(y.d)("div",{className:e.container},Object(y.d)(g.default,null),Object(y.d)(j.default,null))),Object(y.d)(u.a,null))},e}(c.a.Component);e.default=d()(h)(x)},Z2Dm:function(t,e,n){"use strict";var r=n("rePB"),o=n("JX7q"),i=n("dI71"),a=n("q1tI"),c=n.n(a),s=n("TSYQ"),p=n.n(s),l=n("Hk+Y"),d=n.n(l),b=function(t){var e;return(e={parallax:{height:"70vh",maxHeight:"1000px",overflow:"hidden",position:"relative",backgroundPosition:"center center",backgroundSize:"cover",margin:"0",padding:"0",border:"0",display:"flex",alignItems:"center"},filter:{"&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:after,&:before":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:"''"}},small:{height:"35vh"}})[t.breakpoints.down("xs")]={parallax:{height:"95vh"},small:{height:"35vh"}},e},u=n("qKvR");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=function(t){function e(e){var n;n=t.call(this,e)||this;var r="undefined"!=typeof window&&window.pageYOffset/3;return n.state={transform:"translate3d(0,"+r+"px,0)"},n.resetTransform=n.resetTransform.bind(Object(o.a)(n)),n}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=window.pageYOffset/3;this.setState({transform:"translate3d(0,"+t+"px,0)"}),window.addEventListener("scroll",this.resetTransform)},n.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.resetTransform)},n.resetTransform=function(){var t="undefined"!=typeof window&&window.pageYOffset/3;this.setState({transform:"translate3d(0,"+t+"px,0)"})},n.render=function(){var t,e=this.props,n=e.classes,r=e.filter,o=e.className,i=e.children,a=e.style,c=e.image,s=e.small,l=p()(((t={})[n.parallax]=!0,t[n.filter]=r,t[n.small]=s,t[o]=void 0!==o,t));return Object(u.d)("div",{className:l,style:O(O({},a),{},{backgroundImage:"url("+c+")"},this.state),ref:"parallax"},i)},e}(c.a.Component);e.a=d()(b)(m)},ZchG:function(t,e,n){"use strict";n.r(e);var r=n("dI71"),o=n("q1tI"),i=n.n(o),a=n("Hk+Y"),c=n.n(a),s=n("aoJa"),p=n("HdOC"),l=n("rePB");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={section:{padding:"70px 0 0 0",textAlign:"center"},title:b(b({},n("y4MT").q),{},{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"}),description:{color:"#999"}},f=n("Wbzz"),O=n("IPLq"),m=n.n(O),h=n("phc9"),g=n.n(h),j=n("Ce3J"),y=n.n(j),x=n("6ZaM"),v=n.n(x),w={root:{textAlign:"left",borderRadius:"12px",height:"380px"},media:{height:140}},k=n("qKvR"),P=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.classes;return Object(k.d)("div",{style:{margin:"50px 0"}},Object(k.d)(g.a,null,Object(k.d)(m.a,{className:t.root},Object(k.d)(f.Link,{to:this.props.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},Object(k.d)(y.a,{style:{padding:"40px 50px"}},Object(k.d)(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.title),Object(k.d)(v.a,{variant:"body1",color:"textSecondary",component:"p"},this.props.description))))))},e}(i.a.Component),S=c()(w)(P),D=n("7ynR"),C=n.n(D),q=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.classes;return Object(k.d)("div",{className:t.section},Object(k.d)(s.a,{justify:"center"},Object(k.d)(p.a,{xs:12,sm:12,md:8},Object(k.d)("h1",{className:t.title},"Related Projects"))),Object(k.d)(s.a,{justify:"center"},C.a.projects.map((function(t,e){return Object(k.d)(p.a,{xs:12,sm:12,md:4},Object(k.d)(S,{key:e,title:t.title,description:t.description,link:t.link}))}))))},e}(i.a.Component);e.default=c()(u)(q)},fSuq:function(t,e,n){"use strict";n.r(e);var r=n("dI71"),o=n("q1tI"),i=n.n(o),a=n("Hk+Y"),c=n.n(a),s=n("aoJa"),p=n("HdOC"),l=n("rePB");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(l.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={section:{padding:"0 0 100px 0",textAlign:"center"},title:b(b({},n("y4MT").q),{},{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"}),description:{color:"#999"}},f=n("Wbzz"),O=n("IPLq"),m=n.n(O),h=n("phc9"),g=n.n(h),j=n("Ce3J"),y=n.n(j),x=n("6ZaM"),v=n.n(x),w={root:{textAlign:"left",margin:"50px 0",borderRadius:"12px"},media:{height:140}},k=n("qKvR"),P=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.classes;return Object(k.d)(m.a,{className:t.root},Object(k.d)(g.a,{style:{minHeight:"150px"}},Object(k.d)(f.Link,{to:this.props.link,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},Object(k.d)(y.a,{style:{padding:"40px 50px"}},Object(k.d)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",style:{textAlign:"center"}},this.props.title)))))},e}(i.a.Component),S=c()(w)(P),D=n("7ynR"),C=n.n(D),q=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){var t=this.props.classes;return Object(k.d)("div",{className:t.section},Object(k.d)(s.a,{justify:"center"},Object(k.d)(p.a,{xs:12,sm:12,md:8},Object(k.d)("h1",{className:t.title},"Related Blogs"))),Object(k.d)(s.a,{justify:"center"},C.a.blogs.map((function(t,e){return Object(k.d)(p.a,{xs:12,sm:12,md:4},Object(k.d)(S,{key:e,title:t.title,link:t.link}))}))))},e}(i.a.Component);e.default=c()(u)(q)},xJf2:function(t,e,n){t.exports=n.p+"static/himalia_bg-27f3b1a7652d397e36cf0f85e3f382d7.jpg"}}]);
//# sourceMappingURL=component---src-pages-resources-page-resources-page-jsx-9e667d6b0e5f85453013.js.map