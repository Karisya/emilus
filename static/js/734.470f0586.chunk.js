"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[734],{8734:(e,a,n)=>{n.r(a),n.d(a,{default:()=>b});var i=n(2483),t=n(4370),r=n(9913),s=n(1250),A=n(1923),V=n(6723);const c=e=>{let{obj:a}=e;const[{isDragging:n},i]=(0,A.i)({type:"object",item:a,collect:e=>({isDragging:e.isDragging()})});return(0,V.jsx)("div",{ref:i,style:{opacity:n?.5:1,marginBottom:"10px",cursor:"move"},children:(0,V.jsx)("img",{src:a.image,alt:a.name,style:{width:"100px",height:"100px",objectFit:"contain"}})})},x=e=>{let{objects:a}=e;return(0,V.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"200px"},children:a.map((e=>(0,V.jsx)(c,{obj:e},e.id)))})};var g=n(6362);const u=e=>{let{obj:a,moveObject:n}=e;const[{isDragging:i},t]=(0,A.i)({type:"object",item:{id:a.id,x:a.x,y:a.y},collect:e=>({isDragging:e.isDragging()})});return(0,V.jsx)("div",{ref:t,style:{position:"absolute",left:a.x,top:a.y,cursor:"move",zIndex:10,opacity:i?.5:1},children:(0,V.jsx)("img",{src:a.image,alt:a.name,style:{width:"100px",height:"100px",objectFit:"contain"}})})},O=e=>{let{placedObjects:a,setObjects:n}=e;const[t,r]=(0,i.useState)([]);(0,i.useEffect)((()=>{r(a)}),[a]);const[{isOver:s},A]=(0,g.H)({accept:"object",drop:(e,a)=>{const i=a.getClientOffset(),s=i.x-500,A=i.y-100,V=t.findIndex((a=>a.id===e.id));if(-1!==V){const e=[...t];e[V]={...e[V],x:s,y:A},r(e),n(e)}else{const a={...e,id:`${e.id}-${(new Date).getTime()}`,x:s,y:A},i=[...t,a];r(i),n(i)}},collect:e=>({isOver:e.isOver()})}),c=(e,a,i)=>{const s=t.map((n=>n.id===e?{...n,x:a,y:i}:n));r(s),n(s)};return(0,V.jsx)("div",{ref:A,style:{width:"100%",height:"500px",border:"2px solid black",position:"relative",backgroundColor:s?"lightgreen":"black"},children:t.map((e=>(0,V.jsx)(u,{obj:e,moveObject:c},e.id)))})},b=()=>{const[e,a]=(0,i.useState)([]);return(0,V.jsxs)(t.Q,{backend:r.t2,children:[(0,V.jsxs)("div",{style:{display:"flex"},children:[(0,V.jsx)(x,{objects:[{id:1,name:"Table1",image:"data:image/png;base64,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"},{id:2,name:"Table2",image:"data:image/png;base64,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"},{id:3,name:"Table3",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAe1BMVEUAAAD///+AgIAGBgYPDw/6+vppaWnJyclOTk6ysrIKCgq+vr7T09Px8fEVFRVCQkJ4eHgwMDAbGxvc3Nw3NzckJCRHR0enp6fX19ednZ1kZGRcXFzi4uKIiIgqKioZGRmEhITr6+uSkpLAwMA9PT1wcHBTU1N5eXmWlpZjafXeAAAGO0lEQVR4nO2c63ayOhCGjYqKCopyUIu1eGrv/wo36mdISCbHYbV7Ld5ftpLwGCaTmRwYDLyVhhFhFIWpf53++iCCPn6baTCIIxErin+banATqQi5/TbVYCjDGv42VY/VY/VYPVaP9T/FSiaTpEOsuRPUOHzUH467wUrCgJRrB6rp6wZTHZcT1ix4XhaOHKn0XC5Y/6isuRoqLZcDFqWy5GKpdFz2WAyVFRdPRchF1WmssTgqC642FSELBZctVovKmEukUnKtd4v98JCnWTwex1maH4b7xQ7u+gKVIddIQqVuLxtJqGoug4JrGRUWl5TKaFBYyrFQuAAqUumLSrJRLC6IipCNtizUWv5cMBXRZ+GAbflzKaiW+tLynujPpaAiuUF5md+iXM5UKwXVxKgGmGsrnbk65bdzON2VtaaLYviRyNzj6OxJBXMV4jPcHIpSuC6YHq8iWg70cVMqgCsQZodON/h5R/tV+/JM2snNqeo4eyHep22X11BhLg9t162IaB6Kv9Vu4lDgqlrZRq7oGM1PObYc0k+bamZFJXCVGfdtagL1BBvy9nj0o2px8VTjvSHUsyj/8FmuQDA/E67GEiqOalZZUNUqOBNrHIUTVe1q3lwRa1ejtn0YNNiVrbbwo2q42MewMbUqVgHrBUYXP6o3FxsBJ5UDVa0fpo649KN6cRXM3yswGtOJDdjTwI/qwVUyBquKAnRaMFxrT6qa67P5rIoC7NrrU7yRsxLnJ/jSHpGl0UYMFSz13QGVKmo1lf1YoxUcxpkr0mc4lsoRqAi5IFONvQ3rJeSFRoxH+BDuY0y8PBarQn8zc4kxtLMQl/1XeFQeqaYgxMYi5Kq/n5kSTCqjSTYj2YTuBkLqjGPPIbotpHWqAy4V2eJgoRr8Qyg+YozmSt/6wsCaYVOZTP7VGk2GEtGvsYZDRjQ9yGV3vj+j63QrKxlRLHiO11k0HJRuZyJlbXyZvPvThh6hmxbjIu7y76OM5t4tUV+M6+JblafABQW0PEDTYMkeO2/t3pVvgAuiAfAFzVK+O8AKqOFCFgJhHd4F7SdoDEQnCaFYHMKinQWwPT/RrBrq5hAWjYrQhx6j2iEsOtN26QKLzoyIc8+GWB14U8ZEnLEQcnxR/q31tx7iVVfQS/RH25o8ffrIgfxLNJy3dRDUnX51gUUnBm3dKR18sCP5h8p35fDgoxuqrx1g0cwaHqp1gc24A6zzu3I4sNGFgeDj9xBdRITDQG3Q3MFYTVe24KBZm2Lg23xj8YoUQyfILN2FM0GPPljjzINjh82R7bZOuTJkLKxFFuQAFWs6EPAujjKbgTCR1LO5Cu8kF6br2uIY/EMjxOY66G9nLDzrwrOsh9AierRZ+ac+kaaTsBeGcVx9qT2sYCuUx+i7z0DUpvKn+kKn8t0F8RDaag8nX6e6RDSszan5LN2xb6ySWYLyXcfYbNllyaP+5jAVszXtShyO+HBU/GK8OxdL9dgpZbOvU0ZFAtYxy1MVvZbsIuIzfnPnil9RfMVWeXdaXOTOfP1rcleu+J1b7NhKP3f2VNzC5uT9XzeuuMl4uIM+c9spcX7HIrM1zYUrZvMw/sxLbhV+/XDuinPK9lwxnx3yXPOhscef8i4q5wvacsXtnLV1sOD0YwS2a2Wq93YpO66VOE0zPfGXbI7aPnlpp88T8RqbLUrSHZNl+8Tp/EOVQJbn9r5E+QEDc38P7OOU7G2PD6G0zZZHMTg+ARGbKRe8u1Ry6mEwSA7nxZYWqabFdy4LFfIKqtWMS7HnVXGAcpx9Jkl2gpNAiV29ZWJfih1k2uO5Sim4DNIh2Iz9qFRcBlvgwMbypVJw6XPaeXdUMJfBvk9gvhuDCuQy6IvyE3c4VADX0uTEnGylDotKyrU0ekfQSORSUd3Pt3vKjJen9H473y24zKgkXMFJcfUrSwuq3XI6Xe6qV0dW7bObuFGJXMppRfvD8Zz1mlO1udQxkcOrBBguGyqeSxOpubx4Ye1GxXLp4ken11Ss3agaLm1U6/ZSj0NVXxW6vD1sWJdc6s/wOr4CZb6aZdqL5NqY/Jr+PTY9Vo/VY/VYPVaP9aexpGciOji2aamRJN8t8VbvnZUKE2/Rn3iZblbwr/gtXOM7Rv8BDYdXqhvfs1QAAAAASUVORK5CYII="}]}),(0,V.jsx)(O,{placedObjects:e,setObjects:a})]}),(0,V.jsx)("button",{onClick:()=>{const a=JSON.stringify(e),n=new Blob([a],{type:"application/json"});(0,s.saveAs)(n,"arrangement.json")},style:{marginTop:"20px"},children:"Save Arrangement"}),(0,V.jsx)("input",{type:"file",onChange:e=>{const n=e.target.files[0];if(n){const e=new FileReader;e.onload=e=>{const n=JSON.parse(e.target.result);a(n)},e.readAsText(n)}},style:{marginTop:"20px",display:"block"}})]})}}}]);
//# sourceMappingURL=734.470f0586.chunk.js.map