"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[572],{3363:function(e,r,t){t.d(r,{$e:function(){return m},Fl:function(){return o},N6:function(){return x},Oy:function(){return l},mW:function(){return u},su:function(){return c},tC:function(){return d},vP:function(){return i}});var n=t(4165),a=t(5861),s=t(7314),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.loadDashBoardData(r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.getPlayerdata(r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.deletePlayerData(r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.getPlayerDetail(r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.getRoundData(r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.deleteRoundData(r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.getRoundDetail(r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.bonusUser(r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},6572:function(e,r,t){t.r(r);var n=t(4165),a=t(5861),s=t(885),i=t(8921),c=t(1889),o=t(4245),u=t(2791),d=t(3363),l=t(1803),x=t(3578),m=t(6030),h=t(184),p=["Burger","Taco","Salad","Hotdog","Chicken","Pancakes","French","Sausage","Spaghetti"],f=["Sushi","Pizza","Icecream"],Z=(0,l.Z)((function(){return{DetailContainer:{width:"100%",height:"auto",display:"flex",flexDirection:"column",gap:"20px"},InfoContainer:{width:"100%",borderTop:"3px solid #d2d6de",background:"#FFF",padding:"10px"},InfoHeaderBox:{width:"100%",padding:"10px",fontSize:"18px",fontWeight:"800"},GridKeyItem:{padding:"8px",fontSize:"14px",color:"#000",fontWeight:"600",backgroundColor:"#f9f9f9",borderRight:"1px solid #dee2e6"},GridValueItem:{padding:"8px",fontSize:"14px",color:"#000",fontWeight:"200",borderLeft:"none"},MainGrid:{border:"1px solid #dee2e6","&>$RowGrid:last-child":{borderBottom:"none"}},RowGrid:{borderBottom:"1px solid #dee2e6"},HistoryDetailContainer:{width:"100%",borderTop:"3px solid #00a65a",background:"#FFF",padding:"10px"},TextAlignCenter:{textAlign:"center"},TextAlignRight:{textAlign:"right"},TextAlignLeft:{textAlign:"left"}}}));r.default=function(){var e,r=Z(),t=(0,m.v9)((function(e){return e.userAuth})),l=(0,u.useState)(null),j=(0,s.Z)(l,2),g=j[0],v=j[1],N=(0,u.useState)(0),w=(0,s.Z)(N,2),P=w[0],y=w[1],b=(0,u.useContext)(x.p),A=b.showLoading,C=b.hideLoading;(0,u.useEffect)((function(){G()}),[]);var G=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,a,s,i,c,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.parse(window.location.search),s=null===t||void 0===t||null===(r=t.userData)||void 0===r?void 0:r._id,null===a||void 0===a||!a.id){e.next=10;break}return A(),i={id:s,round_uuid:a.id},e.next=7,(0,d.N6)(i);case 7:(c=e.sent).status&&(v(c.data),u=0,c.data.players.map((function(e){u+=e.customer_amount*(1-e.customer_payout)})),y(u)),C();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)(i.Z,{className:r.DetailContainer,children:[(0,h.jsxs)(i.Z,{className:r.InfoContainer,children:[(0,h.jsxs)(i.Z,{className:r.InfoHeaderBox,children:["Game Number: ",null===g||void 0===g?void 0:g.number]}),(0,h.jsxs)(c.ZP,{container:!0,m:0,children:[(0,h.jsx)(c.ZP,{item:!0,md:6,xs:12,p:2,children:(0,h.jsxs)(c.ZP,{container:!0,m:0,className:r.MainGrid,children:[(0,h.jsx)(c.ZP,{item:!0,xs:12,className:r.RowGrid,children:(0,h.jsxs)(c.ZP,{container:!0,m:0,children:[(0,h.jsx)(c.ZP,{item:!0,xs:4,className:r.GridKeyItem,children:"Chef Food"}),(0,h.jsx)(c.ZP,{item:!0,xs:8,className:r.GridValueItem,children:p[null===g||void 0===g?void 0:g.result.dealer]})]})}),(0,h.jsx)(c.ZP,{item:!0,xs:12,className:r.RowGrid,children:(0,h.jsxs)(c.ZP,{container:!0,m:0,children:[(0,h.jsx)(c.ZP,{item:!0,xs:4,className:r.GridKeyItem,children:"Chef Profit"}),(0,h.jsx)(c.ZP,{item:!0,xs:8,className:r.GridValueItem,children:Number(P).toFixed(2)})]})}),(0,h.jsx)(c.ZP,{item:!0,xs:12,className:r.RowGrid,children:(0,h.jsxs)(c.ZP,{container:!0,m:0,children:[(0,h.jsx)(c.ZP,{item:!0,xs:4,className:r.GridKeyItem,children:"Curency"}),(0,h.jsx)(c.ZP,{item:!0,xs:8,className:r.GridValueItem,children:"$FOOD"})]})})]})}),(0,h.jsx)(c.ZP,{item:!0,md:6,xs:12,p:2,children:(0,h.jsxs)(c.ZP,{container:!0,m:0,className:r.MainGrid,children:[(0,h.jsx)(c.ZP,{item:!0,xs:12,className:r.RowGrid,children:(0,h.jsxs)(c.ZP,{container:!0,m:0,children:[(0,h.jsx)(c.ZP,{item:!0,xs:4,className:r.GridKeyItem,children:"State"}),(0,h.jsx)(c.ZP,{item:!0,xs:8,className:r.GridValueItem,children:null===g||void 0===g?void 0:g.state})]})}),(0,h.jsx)(c.ZP,{item:!0,xs:12,className:r.RowGrid,children:(0,h.jsxs)(c.ZP,{container:!0,m:0,children:[(0,h.jsx)(c.ZP,{item:!0,xs:4,className:r.GridKeyItem,children:"Date"}),(0,h.jsx)(c.ZP,{item:!0,xs:8,className:r.GridValueItem,children:null!==g?new Intl.DateTimeFormat("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date(null===g||void 0===g?void 0:g.date)):""})]})})]})})]})]}),(0,h.jsxs)(i.Z,{className:r.HistoryDetailContainer,children:[(0,h.jsx)(i.Z,{className:r.InfoHeaderBox,children:"Player History"}),(0,h.jsx)(i.Z,{children:(0,h.jsxs)("table",{className:"table table-bordered table-hover",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:r.TextAlignCenter,children:(0,h.jsx)("strong",{children:"Address"})}),(0,h.jsx)("td",{className:r.TextAlignCenter,children:(0,h.jsx)("strong",{children:"Pump Address"})}),(0,h.jsx)("td",{className:r.TextAlignCenter,children:(0,h.jsx)("strong",{children:"Customer Food"})}),(0,h.jsx)("td",{className:r.TextAlignCenter,children:(0,h.jsx)("strong",{children:"Customer Amount"})}),(0,h.jsx)("td",{className:r.TextAlignCenter,children:(0,h.jsx)("strong",{children:"Customer Profit"})}),(0,h.jsx)("td",{className:r.TextAlignCenter,children:(0,h.jsx)("strong",{children:"Player Result"})})]})}),(0,h.jsx)("tbody",{children:null===g||void 0===g||null===(e=g.players)||void 0===e?void 0:e.map((function(e,t){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:r.TextAlignLeft,children:e.address}),(0,h.jsx)("td",{className:r.TextAlignLeft,children:e.pumpAddress}),(0,h.jsx)("td",{className:r.TextAlignCenter,children:f[e.customer_food]}),(0,h.jsx)("td",{className:r.TextAlignCenter,children:e.customer_amount.toString()}),(0,h.jsx)("td",{className:r.TextAlignCenter,children:Number(e.customer_amount*(e.customer_payout-1)).toFixed(2)}),(0,h.jsx)("td",{className:r.TextAlignCenter,style:"win"===e.result?{color:"green"}:{color:"red"},children:e.result})]},t)}))})]})})]})]})}}}]);
//# sourceMappingURL=572.0098f22b.chunk.js.map