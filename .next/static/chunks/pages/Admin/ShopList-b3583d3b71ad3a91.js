(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[221],{5248:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Admin/ShopList",function(){return t(1893)}])},640:function(e,r,t){"use strict";var n=t(5893),s=t(3321);t(7294),r.Z=e=>{let{bgColor:r,textColor:t,text:a,type:i,btnDisable:o,handleClick:c}=e;return(0,n.jsx)(s.Z,{type:i,variant:"contained",sx:{backgroundColor:"".concat(r," !important"),color:"#FEFEFE","&:hover":{backgroundColor:"".concat(r,"F1 ")}},disabled:o,onClick:c,children:a})}},3337:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var n=t(5893),s=t(7294),a={src:"/_next/static/media/logo.b7e3a3f4.png",height:76,width:260,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGOcvWJF1ddfvwMF+dkWcf1m+MzKwc7x4/v3L+xs7Be5eXneMU5aOr/1w59vsZLcPH0K/BLvf/z+xfvnzx8WRgaGO1w83CcA84IdlrJGwK0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},i=t(629),o=t(1536),c=t(7357),l=t(3321),d=t(7533),x=t(3946),h=t(326),u=t(594),p=t(5675),m=t.n(p),f=t(5021),g=t.n(f),j=t(1664),Z=t.n(j),b=()=>{let[e,r]=(0,s.useState)(!1),[t,p]=(0,s.useState)(!1);function f(){window.scrollY>100?p(!0):p(!1)}function j(){r(!e)}return(0,s.useEffect)(()=>(f(),window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}),[]),(0,n.jsx)(i.Z,{elevation:20,sx:{zIndex:"999",position:"relative",top:"0",backgroundColor:"transparent"},children:(0,n.jsxs)(o.Z,{py:1.5,sx:{width:"100%",position:"relative",top:"0",flexDirection:{xs:"row",sm:"row",md:"row"},...t?{backgroundColor:"#1f892a",transition:"background-color 0.5s ease"}:{backgroundColor:"#1f892aC5   ",transition:"background-color 0.8s ease-out"},display:"flex",justifyContent:"space-between",alignItems:"center",py:{md:"1rem"},px:{xs:"2rem",md:"5rem"}},children:[(0,n.jsx)(c.Z,{display:"flex",sx:{"&:hover":{color:"#DE3163",transition:"color 0.5s"},cursor:"pointer",alignItems:"center",gap:{xs:"10px",sm:"20px"},py:{xs:"1rem",sm:"0.8rem",md:"0.2rem"}},children:(0,n.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",gap:"0.2rem"},children:(0,n.jsx)(Z(),{href:"/",children:(0,n.jsx)(m(),{src:a,alt:"Profile_image",style:{width:"100%",height:"100%",maxWidth:"10rem",borderRadius:"50%"}})})})}),(0,n.jsxs)(c.Z,{fontWeight:"bold",children:[(0,n.jsxs)("ul",{className:g().check,children:[(0,n.jsx)(Z(),{href:"/RTR/RTRform",children:"RTR Form"}),(0,n.jsx)(Z(),{href:"/Admin/ShopList",children:"RTR List"})]}),(0,n.jsx)(l.Z,{sx:{display:"none",color:"black"},onClick:j,className:g().hamburger,type:"button","aria-label":"menu",endIcon:(0,n.jsx)(h.Z,{sx:{fontSize:"12rem !important"}})})]}),(0,n.jsx)(d.ZP,{anchor:"right",open:e,variant:"temporary",onClose:j,className:g().drawer,BackdropProps:{style:{backgroundColor:"transparent",opacity:2}},PaperProps:{elevation:5,sx:{paddingTop:"20px",width:"100%",backgroundColor:"#E9F1FA"}},children:(0,n.jsxs)(c.Z,{fontWeight:"bold",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)(Z(),{href:"/RTR/RTRform",children:"RTR Form"}),(0,n.jsx)(Z(),{href:"/Admin/ShopList",children:"RTR List"})]}),(0,n.jsx)(x.Z,{onClick:j,display:"flex",sx:{width:"100%",marginTop:"2.5rem"},role:"button",children:(0,n.jsx)(u.Z,{sx:{fontSize:"2rem",color:"black",borderRadius:"50px"}})})]})})]})})}},773:function(e,r,t){"use strict";t.d(r,{i:function(){return c}});var n=t(7294),s=t(6154);let a="http://13.53.95.48:3000/api",i=async(e,r,t)=>{try{if("post"===e){let n=await (0,s.Z)({method:e,url:"".concat(a).concat(r),data:t});return n}if("get"===e){let t=await (0,s.Z)({method:e,url:"".concat(a).concat(r)});return t}}catch(e){return e}};function o(e,r){return"success"===r.type?(console.log(r.data),{...e,data:r.data,error:!1}):"existing"===r.type?{...e,error:!0,errorMessage:r.errorMessage}:"error"===r.type?(console.log(r.data),{...e,error:r.error}):void 0}let c=(e,r)=>{let[t,s]=(0,n.useReducer)(o,{data:null,error:null,errorMessage:""}),a=(0,n.useCallback)(t=>{i(e,r,t).then(e=>{s({type:"success",data:e.data})}).catch(e=>{s({type:"error",err:e})})},[e,r]);return{data:t.data,error:t.error,errorMessage:t.errorMessage,fetchAPI:a}}},1893:function(e,r,t){"use strict";t.r(r);var n=t(5893),s=t(7294),a=t(629),i=t(1536),o=t(5861),c=t(2882),l=t(7906),d=t(3184),x=t(3816),h=t(3252),u=t(295),p=t(3321),m=t(2734),f=t(8396),g=t(773);t(640);var j=t(3337),Z=t(1664),b=t.n(Z),v=t(1163),A=t(1649),w=t(4937);r.default=()=>{(0,v.useRouter)();let e=(0,m.Z)();(0,f.Z)(e.breakpoints.down("sm"));let[r,t]=(0,s.useState)([]),Z=(0,A.I0)(),{data:_,fetchAPI:R}=(0,g.i)("get","/rtr/list");return(0,s.useEffect)(()=>{R()},[R]),(0,s.useEffect)(()=>{null!==_&&t(_.result.list)},[R,_,Z]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.Z,{}),(0,n.jsx)(a.Z,{elevation:20,sx:{width:"98%",mx:"auto",my:"5rem",overflowX:"auto"},children:(0,n.jsxs)(i.Z,{spacing:4,direction:"column",children:[(0,n.jsx)(o.Z,{variant:"h1",sx:{width:"95%",margin:"0 auto",fontSize:"3rem",color:"#2C306F"},children:"Shop RTR List"}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)(l.Z,{sx:{width:"95%",margin:"0 auto"},children:[(0,n.jsx)(d.Z,{sx:{" & th":{px:"5px"}},children:(0,n.jsxs)(x.Z,{sx:{"&>*":{textAlign:"center"}},children:[(0,n.jsx)(h.Z,{children:"Business Name"}),(0,n.jsx)(h.Z,{children:"Tin"}),(0,n.jsx)(h.Z,{children:"Full Name"}),(0,n.jsx)(h.Z,{children:"Designation"}),(0,n.jsx)(h.Z,{children:"Email Id"}),(0,n.jsx)(h.Z,{children:"Total Levy Payable"}),(0,n.jsx)(h.Z,{children:"Status"}),(0,n.jsx)(h.Z,{children:"Approvers Comment"}),(0,n.jsx)(h.Z,{children:"Action"})]})}),(0,n.jsx)(u.Z,{sx:{" & td":{px:"5px"}},children:r.map((e,r)=>(0,n.jsxs)(x.Z,{sx:{"&>*":{textAlign:"center"}},children:[(0,n.jsx)(h.Z,{children:e.company_name}),(0,n.jsx)(h.Z,{children:e.tin}),(0,n.jsx)(h.Z,{children:e.first_name}),(0,n.jsx)(h.Z,{children:e.designation}),(0,n.jsx)(h.Z,{children:e.email_id}),(0,n.jsx)(h.Z,{children:e.total_levy_payable}),(0,n.jsxs)(h.Z,{children:[" ",1===e.approval_status?"Pending":2===e.approval_status?"Approved":3===e.approval_status?"Rejected":""]}),(0,n.jsx)(h.Z,{children:e.admin_comments}),(0,n.jsx)(h.Z,{children:(0,n.jsx)(b(),{href:{pathname:"/Admin/RTRDetails/".concat(e.rtr_id)},children:(0,n.jsx)(p.Z,{variant:"contained",sx:{background:"#2e7d32 !important"},onClick:()=>{Z((0,w.WG)(e))},children:"Details"})})})]},r))})]})})]})})]})}},5021:function(e){e.exports={"menu-items":"Navbar_menu-items__Ats6Y",hamburger:"Navbar_hamburger__OIX2Y",check:"Navbar_check__XagqC",drawer:"Navbar_drawer__AeabX"}},1163:function(e,r,t){e.exports=t(6885)}},function(e){e.O(0,[935,154,662,774,888,179],function(){return e(e.s=5248)}),_N_E=e.O()}]);