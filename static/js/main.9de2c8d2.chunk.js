(this["webpackJsonprec-test"]=this["webpackJsonprec-test"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/product.8eab0a0e.jpg"},44:function(e,t,a){e.exports=a(56)},49:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(49),a(18)),i=a.n(l),s=a(24),p=a(22),d=a(25),u=a(26),m=a(37),h=a(38),f=a(21),b=a(77),y=a(79),v=a(81),E=a(82),g=a(80),x=a(83),j=a(34),C=a.n(j),N=a(31),O=a.n(N),D=a(27),w=a.n(D),k=a(58),T=a(35),W=a.n(T),S=a(36),Q=a.n(S),q=a(33),z=a.n(q),B=a(84),J=Object(b.a)((function(e){return{root:{display:"flex"},product:{width:"250px",float:"left",margin:e.spacing(2)},media:{height:0,paddingTop:"56.25%",backgroundColor:"gray"},button:{float:"right"},title:{fontWeight:"bold"},quantity:{fontSize:"0.6em"},price:{fontWeight:"bold"},cart:{"& > *":{margin:e.spacing(2),width:"300px",height:"500px"}},paper:{position:"relative"},cContainer:{display:"flex",justifyContent:"space-between",padding:e.spacing(1),"& span":{fontSize:"20px",fontWeight:"bold"}},delWra:{display:"flex",alignContent:"center"},drawLine:{height:"1px",width:"100%",backgroundColor:"#d6d6d6"},atcWrapper:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(1)},atcBtnWra:{position:"absolute",bottom:e.spacing(1),left:e.spacing(1),"& button":{marginRight:e.spacing(1)}}}}));function P(e){var t=J();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.proWrapper},(console.log(e.proData),e&&e.proData?Object.entries(e.proData).map((function(a,n){var c=Object(f.a)(a,2),o=c[0],l=c[1],i=r.a.createElement(O.a,null);return Object.entries(e.addToCartData).forEach((function(e,t){var a=Object(f.a)(e,2),n=a[0];a[1],n===o&&(i=r.a.createElement(z.a,null))})),r.a.createElement(y.a,{className:t.product,key:n},r.a.createElement(g.a,{"aria-label":"add to favorites",className:t.button},r.a.createElement(C.a,null)),r.a.createElement(v.a,{className:t.media,image:w.a,title:"Paella dish"}),r.a.createElement(E.a,null,r.a.createElement(x.a,{variant:"body2",color:"textSecondary",className:t.title},l.title),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",className:t.quantity},"Quantity: ",l.quantity),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",className:t.price},"$",l.price)),r.a.createElement(g.a,{"aria-label":"share",className:t.button,onClick:function(){return e.onQuery(o,l,"add")}},i))})):null)),r.a.createElement("div",{className:t.cart},r.a.createElement(k.a,{elevation:3,children:r.a.createElement("div",{className:t.cWrapper},r.a.createElement("div",{className:t.cContainer},r.a.createElement("span",null,"Your Cart"),r.a.createElement("div",{className:t.delWra},r.a.createElement(W.a,null),"clear")),r.a.createElement("div",{className:t.drawLine}),Object.entries(e.addToCartData).map((function(a,n){var c=Object(f.a)(a,2),o=c[0],l=c[1];return r.a.createElement("div",{key:n,className:t.atcWrapper},r.a.createElement("span",null,l.title),r.a.createElement("span",null,l.quantity),r.a.createElement("span",null,l.price),r.a.createElement(g.a,{"aria-label":"add to favorites",className:t.button,size:"small",onClick:function(){return e.onQuery(o,l,"delete")}},r.a.createElement(Q.a,null)))})),r.a.createElement("div",{className:t.atcBtnWra},r.a.createElement(B.a,{variant:"contained",color:"primary"},"Place Order"),r.a.createElement("span",null,"GrandTotol $",500))),className:t.paper})))}var I=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={proData:{},addToCartData:{}},e.onQuery=function(){var t=Object(p.a)(i.a.mark((function t(a,n,r){var c,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://localhost:3010/addtocart",t.next=3,fetch("http://localhost:3010/addtocart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({args:Object(s.a)({},a,n),action:r})});case 3:return c=t.sent,t.next=6,c.json();case 6:o=t.sent,console.log(o),e.setState({addToCartData:o});case 9:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(i.a.mark((function e(){var t,a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:3010/product",e.next=3,fetch("http://localhost:3010/product");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,"http://localhost:3010/addtocart",e.next=10,fetch("http://localhost:3010/addtocart");case 10:return n=e.sent,e.next=13,n.json();case 13:r=e.sent,this.setState({proData:a,addToCartData:r});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,{proData:this.state.proData,addToCartData:this.state.addToCartData,onQuery:this.onQuery}))}}]),a}(n.Component);o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9de2c8d2.chunk.js.map