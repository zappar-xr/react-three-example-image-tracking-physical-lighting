(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(34),r=n.n(c),i=(n(94),n(9)),o=n(0),j=n(8),h=n(51),b=n.p+"static/media/example-tracking-image.775f3d2f.zpt",l=n(17);function d(){var e=Object(a.useRef)();return Object(j.useFrame)((function(){var t=5e-4*Date.now();e.current.position.y=e.current.position.x+Math.cos(t)})),Object(l.jsxs)("mesh",{ref:e,position:[.5,1.5,1],scale:[.1,.1,.1],castShadow:!0,children:[Object(l.jsx)("sphereBufferGeometry",{}),Object(l.jsx)("meshStandardMaterial",{emissive:new o.Color(16777198)}),Object(l.jsx)("pointLight",{position:[0,0,0],intensity:.5,castShadow:!0})]})}function u(){return Object(l.jsxs)("group",{children:[Object(l.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,children:[Object(l.jsx)("planeBufferGeometry",{args:[2,2]}),Object(l.jsx)("meshStandardMaterial",{color:"lightblue"})]}),Object(l.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,rotation:[Math.PI/2,0,0],position:[0,1,.5],children:[Object(l.jsx)("planeBufferGeometry",{args:[2,1]}),Object(l.jsx)("meshStandardMaterial",{color:"lightblue"})]}),Object(l.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,rotation:[0,Math.PI/2,0],position:[-1,0,.5],children:[Object(l.jsx)("planeBufferGeometry",{args:[1,2]}),Object(l.jsx)("meshStandardMaterial",{color:"lightblue"})]})]})}function O(){var e=Object(a.useRef)();return Object(j.useFrame)((function(){var t=5e-4*Date.now();e.current.position.x=e.current.position.y+Math.cos(t)+.25})),Object(l.jsxs)("mesh",{ref:e,castShadow:!0,receiveShadow:!0,scale:[.2,.2,.2],position:[0,0,.5],children:[Object(l.jsx)("sphereBufferGeometry",{}),Object(l.jsx)("meshStandardMaterial",{color:"hotpink"})]})}var p=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h.BrowserCompatibility,{}),Object(l.jsxs)(h.ZapparCanvas,{shadowMap:!0,gl:{antialias:!0},children:[Object(l.jsx)(h.ZapparCamera,{}),Object(l.jsxs)(h.ImageTracker,{onNotVisible:function(){s(!1)},onNewAnchor:function(e){return console.log("New anchor ".concat(e.id))},onVisible:function(){s(!0)},targetImage:b,visible:n,children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{}),Object(l.jsx)(d,{})]}),Object(l.jsx)("directionalLight",{position:[2.5,8,5],intensity:1.5,castShadow:!0})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),x()},94:function(e,t,n){}},[[173,1,2]]]);
//# sourceMappingURL=main.a6f19eee.chunk.js.map