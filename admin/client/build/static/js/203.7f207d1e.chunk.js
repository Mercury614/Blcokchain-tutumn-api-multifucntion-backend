"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[203],{3363:function(e,n,t){t.d(n,{$e:function(){return m},Fl:function(){return o},N6:function(){return x},Oy:function(){return d},mW:function(){return l},su:function(){return c},tC:function(){return u},vP:function(){return i}});var r=t(4165),a=t(5861),s=t(7314),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.loadDashBoardData(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.getPlayerdata(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.deletePlayerData(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.getPlayerDetail(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.getRoundData(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.deleteRoundData(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.getRoundDetail(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.Api.bonusUser(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},5203:function(e,n,t){t.r(n);var r=t(1413),a=t(4165),s=t(5861),i=t(885),c=t(8921),o=t(1889),l=t(890),u=t(1603),d=t(6151),x=t(4245),m=t(2791),h=t(3363),p=t(1803),f=t(8182),Z=t(3578),j=t(6030),g=t(2092),v=t(184),b=["Burger","Taco","Salad","Hotdog","Chicken","Pancakes","French","Sausage","Spaghetti"],N=["Sushi","Pizza","Icecream"],w=(0,p.Z)((function(){return{DetailContainer:{width:"100%",height:"auto",display:"flex",flexDirection:"column",gap:"20px"},InfoContainer:{width:"100%",borderTop:"3px solid #d2d6de",background:"#FFF",padding:"10px"},InfoHeaderBox:{width:"100%",padding:"10px",fontSize:"18px",fontWeight:"800"},GridKeyItem:{padding:"8px",fontSize:"14px",color:"#000",fontWeight:"600",backgroundColor:"#f9f9f9",borderRight:"1px solid #dee2e6"},GridValueItem:{padding:"8px",fontSize:"14px",color:"#000",fontWeight:"200",borderLeft:"none"},MainGrid:{border:"1px solid #dee2e6","&>$RowGrid:last-child":{borderBottom:"none"}},RowGrid:{borderBottom:"1px solid #dee2e6"},HistoryDetailContainer:{width:"100%",borderTop:"3px solid #00a65a",background:"#FFF",padding:"10px"},TextAlignCenter:{textAlign:"center"},TextAlignRight:{textAlign:"right"},TextAlignLeft:{textAlign:"left"},BonusContainer:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:8}}}));n.default=function(){var e,n=w(),t=(0,j.v9)((function(e){return e.userAuth})),p=(0,m.useState)(null),C=(0,i.Z)(p,2),y=C[0],A=C[1],P=(0,m.useState)(0),G=(0,i.Z)(P,2),T=G[0],D=G[1],I=(0,g.e1)().addToast,k=(0,m.useContext)(Z.p),S=k.showLoading,F=k.hideLoading;(0,m.useEffect)((function(){R()}),[]);var R=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,r,s,i,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=x.parse(window.location.search),s=null===t||void 0===t||null===(n=t.userData)||void 0===n?void 0:n._id,null===r||void 0===r||!r.id){e.next=10;break}return S(),i={id:s,user_id:r.id},e.next=7,(0,h.mW)(i);case 7:(c=e.sent).status&&A(c.data),F();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,s,i,c,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=null===t||void 0===t||null===(n=t.userData)||void 0===n?void 0:n._id,0!==T){e.next=3;break}return e.abrupt("return");case 3:return S(),i={id:s,user_id:null===y||void 0===y?void 0:y._id,bonus:Number(T)},e.next=7,(0,h.$e)(i);case 7:(c=e.sent).status&&(I("Successfully submitted.",{appearance:"success",autoDismiss:!0}),A(c.data),(o=(0,r.Z)({},y)).balance=c.balance,A((0,r.Z)({},o))),F();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(c.Z,{className:n.DetailContainer,children:[(0,v.jsxs)(c.Z,{className:n.InfoContainer,children:[(0,v.jsxs)(c.Z,{className:n.InfoHeaderBox,children:["Player Detail: ",null===y||void 0===y?void 0:y._id]}),(0,v.jsxs)(o.ZP,{container:!0,m:0,children:[(0,v.jsx)(o.ZP,{item:!0,md:6,xs:12,p:2,children:(0,v.jsxs)(o.ZP,{container:!0,m:0,className:n.MainGrid,children:[(0,v.jsx)(o.ZP,{item:!0,xs:12,className:n.RowGrid,children:(0,v.jsxs)(o.ZP,{container:!0,m:0,children:[(0,v.jsx)(o.ZP,{item:!0,xs:4,className:n.GridKeyItem,children:"Player Wallet"}),(0,v.jsx)(o.ZP,{item:!0,xs:8,className:n.GridValueItem,children:null===y||void 0===y?void 0:y.address})]})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,className:n.RowGrid,children:(0,v.jsxs)(o.ZP,{container:!0,m:0,children:[(0,v.jsx)(o.ZP,{item:!0,xs:4,className:n.GridKeyItem,children:"Pump Address"}),(0,v.jsx)(o.ZP,{item:!0,xs:8,className:n.GridValueItem,children:null===y||void 0===y?void 0:y.pumpAddress})]})})]})}),(0,v.jsx)(o.ZP,{item:!0,md:6,xs:12,p:2,children:(0,v.jsxs)(o.ZP,{container:!0,m:0,className:n.MainGrid,children:[(0,v.jsx)(o.ZP,{item:!0,xs:12,className:n.RowGrid,children:(0,v.jsxs)(o.ZP,{container:!0,m:0,children:[(0,v.jsx)(o.ZP,{item:!0,xs:4,className:n.GridKeyItem,children:"Balance"}),(0,v.jsx)(o.ZP,{item:!0,xs:8,className:n.GridValueItem,children:Number(null===y||void 0===y?void 0:y.balance).toString()})]})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,className:n.RowGrid,children:(0,v.jsxs)(o.ZP,{container:!0,m:0,children:[(0,v.jsx)(o.ZP,{item:!0,xs:4,className:n.GridKeyItem,children:"Currency"}),(0,v.jsx)(o.ZP,{item:!0,xs:8,className:n.GridValueItem,children:"$FOOD"})]})}),(0,v.jsx)(o.ZP,{item:!0,xs:12,className:n.RowGrid,children:(0,v.jsxs)(o.ZP,{container:!0,m:0,children:[(0,v.jsx)(o.ZP,{item:!0,xs:4,className:n.GridKeyItem,children:"Register Date"}),(0,v.jsx)(o.ZP,{item:!0,xs:8,className:(0,f.Z)(n.GridValueItem),children:null!==y?new Intl.DateTimeFormat("en-US").format(new Date(null===y||void 0===y?void 0:y.createdAt)):""})]})})]})})]})]}),(0,v.jsx)(c.Z,{className:n.InfoContainer,children:(0,v.jsxs)(c.Z,{className:n.BonusContainer,children:[(0,v.jsx)(l.Z,{children:"Bonus"}),(0,v.jsx)(u.Z,{id:"bonus-label",label:"Input Bonus",variant:"outlined",type:"number",value:T,onChange:function(e){return function(e){D(e.target.value.replace(/[^0-9]/g,""))}(e)}}),(0,v.jsx)(d.Z,{onClick:_,variant:"contained",children:"Submit"})]})}),(0,v.jsxs)(c.Z,{className:n.HistoryDetailContainer,children:[(0,v.jsx)(c.Z,{className:n.InfoHeaderBox,children:"Game History"}),(0,v.jsx)(c.Z,{children:(0,v.jsxs)("table",{className:"table table-bordered table-hover",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:n.TextAlignCenter,children:(0,v.jsx)("strong",{children:"Game Number"})}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:(0,v.jsx)("strong",{children:"Chef Food"})}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:(0,v.jsx)("strong",{children:"Customer Food"})}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:(0,v.jsx)("strong",{children:"Customer Amount"})}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:(0,v.jsx)("strong",{children:"Customer Profit"})}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:(0,v.jsx)("strong",{children:"Game Result"})}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:(0,v.jsx)("strong",{children:"Game State"})}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:(0,v.jsx)("strong",{children:"Game Date"})})]})}),(0,v.jsx)("tbody",{children:null===y||void 0===y||null===(e=y.histories)||void 0===e?void 0:e.map((function(e,t){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:n.TextAlignCenter,style:{textTransform:"uppercase"},children:e.round_number}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:b[e.chef_food]}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:N[e.customer_food]}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:e.bet_amount}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:e.bet_amount*(e.customer_payout-1).toFixed(2)}),(0,v.jsx)("td",{className:n.TextAlignCenter,style:"win"===e.result?{color:"green"}:{color:"red"},children:e.result}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:e.round_state}),(0,v.jsx)("td",{className:n.TextAlignCenter,children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}).format(new Date(e.round_date))})]},t)}))})]})})]})]})}}}]);
//# sourceMappingURL=203.7f207d1e.chunk.js.map