"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[412],{6164:function(n,e,t){t.d(e,{Dx:function(){return g},II:function(){return h},W2:function(){return f},__:function(){return b},l0:function(){return x},rU:function(){return j},zx:function(){return m}});var r,i,o,a,c,s,u,l=t(168),d=t(1087),p=t(5867),f=p.zo.div(r||(r=(0,l.Z)(["\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n"]))),x=p.zo.form(i||(i=(0,l.Z)(["\n  padding: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),b=p.zo.label(o||(o=(0,l.Z)(["\n  width: 100%;\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n\n  margin-top: 20px;\n\n  color: #3b3b3b;\n"]))),h=p.zo.input(a||(a=(0,l.Z)(["\n  width: 100%;\n  padding: 16px 16px;\n  border: 1px solid silver;\n  border-radius: 10px;\n  outline: none;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  margin-top: 8px;\n\n  &:focus-within {\n    border: 2px solid #198f27a3;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n  }\n"]))),m=p.zo.button(c||(c=(0,l.Z)(["\n  min-width: 200px;\n  padding: 20px 15px;\n  margin-top: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  border: none;\n  outline: none;\n  text-transform: uppercase;\n  color: rgb(255, 255, 255);\n  background-color: #222;\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  border-radius: 10px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  \n\n  &:before {\n    content: '';\n    background: linear-gradient(\n      45deg,\n      #ff0000,\n      #ff7300,\n      #fffb00,\n      #48ff00,\n      #00ffd5,\n      #002bff,\n      #7a00ff,\n      #ff00c8,\n      #ff0000\n    );\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    background-size: 400%;\n    z-index: -1;\n    filter: blur(5px);\n    -webkit-filter: blur(5px);\n    width: calc(100% + 4px);\n    height: calc(100% + 4px);\n    animation: glowing-button 20s linear infinite;\n    transition: opacity 0.3s ease-in-out;\n    border-radius: 10px;\n  }\n\n  @keyframes glowing-button {\n    0% {\n      background-position: 0 0;\n    }\n    50% {\n      background-position: 400% 0;\n    }\n    100% {\n      background-position: 0 0;\n    }\n  }\n\n  &:after {\n    z-index: -1;\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #222;\n    left: 0;\n    top: 0;\n    border-radius: 10px;\n  }\n"]))),g=p.zo.h2(s||(s=(0,l.Z)(["\n  margin-top: 32px;\n  color: #003306;\n"]))),j=(0,p.zo)(d.OL)(u||(u=(0,l.Z)(["\n  color: #0043ff;\n  &:hover {\n    color: #003306;\n  }\n"])))},2412:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r=t(6164),i=t(9434),o=function(n){return n.contacts.items},a=function(n){return n.filters},c=t(4713),s=t(184),u=function(){var n=(0,i.v9)(o),e=(0,i.I0)();return(0,s.jsxs)(r.l0,{onSubmit:function(t){t.preventDefault();var r=t.target,i=r.name.value,o=r.number.value;if(-1!==n.findIndex((function(n){return n.name===i})))return alert("".concat(i," is already in contacts"));e((0,c.uK)({name:i,number:o})),r.reset()},children:[(0,s.jsxs)(r.__,{children:["Name",(0,s.jsx)(r.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name"})]}),(0,s.jsxs)(r.__,{children:["Number",(0,s.jsx)(r.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number"})]}),(0,s.jsx)(r.zx,{type:"submit",children:"Add contact"})]})},l=t(297),d=t(2791),p=function(){var n=(0,i.v9)(o),e=(0,i.v9)(a),t=(0,i.I0)();(0,d.useEffect)((function(){t((0,c.yF)())}),[t]);var r=function(n){t((0,c.GK)(n.target.id))};return(0,s.jsx)(l.aV,{children:(e&&""!==e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n).map((function(n){var e=n.id,t=n.name,i=n.number;return(0,s.jsxs)(l.ck,{children:[(0,s.jsxs)(l.xv,{children:[t,": ",(0,s.jsx)("span",{children:i})]}),(0,s.jsx)(l.zx,{type:"button",id:e,onClick:r,children:"Delete"})]},e)}))})},f=t(286),x=function(){var n=(0,i.I0)();return(0,s.jsx)(r.l0,{children:(0,s.jsxs)(r.__,{children:["Find contacts by name",(0,s.jsx)(r.II,{type:"text",name:"filter",placeholder:"Enter contact name",onChange:function(e){n((0,f.x)(e.target.value))}})]})})},b=function(){return(0,s.jsxs)(r.W2,{children:[(0,s.jsx)(r.Dx,{children:"Your TeleSphere"}),(0,s.jsx)(u,{}),(0,s.jsx)(r.Dx,{children:"Contacts"}),(0,s.jsx)(x,{}),(0,s.jsx)(p,{})]})}}}]);
//# sourceMappingURL=412.0598370c.chunk.js.map