(this["webpackJsonprec-test"]=this["webpackJsonprec-test"]||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/product.8eab0a0e.jpg"},44:function(e,a,t){e.exports=t(56)},49:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),o=t.n(c),l=(t(49),t(18)),i=t.n(l),s=t(24),u=t(22),p=t(25),d=t(26),m=t(37),f=t(38),h=t(21),b=t(77),y=t(79),g=t(81),v=t(82),E=t(80),x=t(83),j=t(34),C=t.n(j),N=t(31),O=t.n(N),D=t(27),w=t.n(D),k=t(58),T=t(35),W=t.n(T),S=t(36),Q=t.n(S),q=t(33),z=t.n(q),B=t(84),J=Object(b.a)((function(e){return{root:{display:"flex"},product:{width:"250px",float:"left",margin:e.spacing(2)},media:{height:0,paddingTop:"56.25%",backgroundColor:"gray"},button:{float:"right"},title:{fontWeight:"bold"},quantity:{fontSize:"0.6em"},price:{fontWeight:"bold"},cart:{"& > *":{margin:e.spacing(2),width:"300px",height:"500px"}},paper:{position:"relative"},cContainer:{display:"flex",justifyContent:"space-between",padding:e.spacing(1),"& span":{fontSize:"20px",fontWeight:"bold"}},delWra:{display:"flex",alignContent:"center"},drawLine:{height:"1px",width:"100%",backgroundColor:"#d6d6d6"},atcWrapper:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(1)},atcBtnWra:{position:"absolute",bottom:e.spacing(1),left:e.spacing(1),"& button":{marginRight:e.spacing(1)}}}}));function P(e){var a=J();return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.proWrapper},(console.log(e.proData),e&&e.proData?Object.entries(e.proData).map((function(t,n){var c=Object(h.a)(t,2),o=c[0],l=c[1],i=r.a.createElement(O.a,null);return Object.entries(e.addToCartData).forEach((function(e,a){var t=Object(h.a)(e,2),n=t[0];t[1],n===o&&(i=r.a.createElement(z.a,null))})),r.a.createElement(y.a,{className:a.product,key:n},r.a.createElement(E.a,{"aria-label":"add to favorites",className:a.button},r.a.createElement(C.a,null)),r.a.createElement(g.a,{className:a.media,image:w.a,title:"Paella dish"}),r.a.createElement(v.a,null,r.a.createElement(x.a,{variant:"body2",color:"textSecondary",className:a.title},l.title),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",className:a.quantity},"Quantity: ",l.quantity),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",className:a.price},"$",l.price)),r.a.createElement(E.a,{"aria-label":"share",className:a.button,onClick:function(){return e.onQuery(o,l,"add")}},i))})):null)),r.a.createElement("div",{className:a.cart},r.a.createElement(k.a,{elevation:3,children:r.a.createElement("div",{className:a.cWrapper},r.a.createElement("div",{className:a.cContainer},r.a.createElement("span",null,"Your Cart"),r.a.createElement("div",{className:a.delWra},r.a.createElement(W.a,null),"clear")),r.a.createElement("div",{className:a.drawLine}),Object.entries(e.addToCartData).map((function(t,n){var c=Object(h.a)(t,2),o=c[0],l=c[1];return r.a.createElement("div",{key:n,className:a.atcWrapper},r.a.createElement("span",null,l.title),r.a.createElement("span",null,l.quantity),r.a.createElement("span",null,l.price),r.a.createElement(E.a,{"aria-label":"add to favorites",className:a.button,size:"small",onClick:function(){return e.onQuery(o,l,"delete")}},r.a.createElement(Q.a,null)))})),r.a.createElement("div",{className:a.atcBtnWra},r.a.createElement(B.a,{variant:"contained",color:"primary"},"Place Order"),r.a.createElement("span",null,"GrandTotol $",500))),className:a.paper})))}var I="https://limitless-falls-37987.herokuapp.com",L=function(e){Object(f.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={proData:{},addToCartData:{}},e.onQuery=function(){var a=Object(u.a)(i.a.mark((function a(t,n,r){var c,o,l;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c="".concat(I,"/addtocart"),a.next=3,fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({args:Object(s.a)({},t,n),action:r})});case 3:return o=a.sent,a.next=6,o.json();case 6:l=a.sent,console.log(l),e.setState({addToCartData:l});case 9:case"end":return a.stop()}}),a)})));return function(e,t,n){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a,t,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(I,"/product"),console.log(a),e.next=4,fetch(a);case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,r="".concat(I,"/addtocart"),e.next=11,fetch(r);case 11:return c=e.sent,e.next=14,c.json();case 14:o=e.sent,this.setState({proData:n,addToCartData:o});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,{proData:this.state.proData,addToCartData:this.state.addToCartData,onQuery:this.onQuery}))}}]),t}(n.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9568da03.chunk.js.map