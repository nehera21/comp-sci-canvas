(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8545:function(e,n,i){Promise.resolve().then(i.bind(i,8416))},8416:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return P}});var t=i(7437),o=i(2265),a=i(1220),r=i(9070),s=i(8504),l=i(4658),c=i(2841);function m(e){let{name:n,link:i,isLink:o}=e;return(0,t.jsx)(a.x,{bgColor:"brand.accent",borderRadius:"15px",pl:"2",pr:"2",ml:"2",mr:"2",_hover:{backgroundColor:"#FFEC96"},_active:{backgroundColor:"#FFFFE0",transform:"scale(0.98)"},transition:"transform 0.2s ease-in-out",children:o?(0,t.jsx)(c.r,{href:i,isExternal:!0,children:(0,t.jsx)(l.x,{color:"#333333",children:n})}):(0,t.jsx)(l.x,{color:"#333333",children:n})})}function p(e){let{title:n,description:i,image:c,tags:p}=e;return(0,t.jsx)(a.x,{pl:"3",pb:"5",children:(0,t.jsx)(a.x,{pl:"2",pr:"2",pt:"3",pb:"3",bg:"transparent",border:"1px",borderColor:"brand.accent",borderRadius:"10",_hover:{boxShadow:"5px 5px 10px #333333"},_active:{boxShadow:"none"},children:(0,t.jsxs)(r.k,{direction:"row",children:[(0,t.jsx)(a.x,{width:"70%",children:(0,t.jsxs)(r.k,{direction:"column",justifyContent:"space-between",height:"100%",children:[(0,t.jsx)(s.X,{fontSize:"30",pb:"7px",pl:"5px",color:"white",fontWeight:"bolder",children:n}),(0,t.jsx)(l.x,{pb:"5px",pl:"5px",fontSize:"18",color:"white",fontWeight:"bold",children:i}),(0,t.jsx)(r.k,{children:p.map(e=>(0,o.createElement)(m,{...e,key:e.name}))})]})}),(0,t.jsx)(a.x,{width:"30%",children:(0,t.jsx)("img",{src:c,alt:n})})]})})})}function g(e){let{id:n,title:i,projects:o}=e;return(0,t.jsxs)(a.x,{pl:"6",pt:"10",width:"800px",justifyContent:"right",children:[(0,t.jsx)(s.X,{size:"2xl",pl:"3",pb:"8",pt:"5",id:n,children:i}),o.map(e=>(0,t.jsx)(p,{...e},e.id))]})}var h=i(1719);function d(e){let{title:n,subtitle:i,intro:o}=e;return(0,t.jsxs)(h.K,{h:"30vh",w:"40vw",pl:"6",textAlign:"left",children:[(0,t.jsx)(s.X,{pt:"10px",fontFamily:"mono",size:"2xl",children:n}),(0,t.jsx)(s.X,{fontFamily:"mono",size:"sm",children:i}),(0,t.jsx)(s.X,{pt:"20px",fontFamily:"mono",size:"md",children:o})]})}function x(e){let{text:n}=e;return(0,t.jsx)(a.x,{id:"about",children:(0,t.jsx)(l.x,{fontSize:"18",fontFamily:"mono",mt:"15px",mr:"45px",ml:"35px",children:n})})}var u=i(7388);function w(e){let[n,i]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{i(!0)},[]),(0,t.jsx)(r.k,{pl:"5",children:e.links.map((e,i)=>(0,t.jsx)(a.x,{mr:"15px",transition:"transform 0.2s ease-in-out",_hover:{transform:"scale(1.1)"},_active:{transform:"scale(0.9)"},children:n?(0,t.jsx)(c.r,{href:e,isExternal:!0,children:(0,t.jsx)(u.QZ,{url:e})}):(0,t.jsx)(u.QZ,{url:e})},i))})}var k=i(5859);function f(e){let{jumpID:n,name:i}=e;return(0,o.useEffect)(()=>{let e=()=>{let e=document.getElementById(window.location.hash.substring(1));e&&e.scrollIntoView({behavior:"smooth"})};return window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]),(0,t.jsx)(a.x,{fontSize:"2xl",mt:"8",children:(0,t.jsx)(k.z,{onClick:()=>{window.location.hash=n},fontFamily:"mono",bgColor:"transparent",color:"brand.accent",border:"1px",borderColor:"brand.accent",width:"100px",_hover:{backgroundColor:"#F6B75D",color:"#30064f",width:"200px"},transition:"width 0.3s ease-in-out",_active:{transform:"scale(0.95)"},children:i})})}function j(e){let{menuItems:n}=e;return(0,t.jsx)(a.x,{pl:"6",width:"600px",justifyContent:"right",children:n.map(e=>(0,t.jsx)(f,{...e},e.jumpID))})}var b=i(3847),v=i(1984),y=i(672),C=i(7001);function S(e){let{image:n,name:i,color:o}=e;return(0,t.jsx)(a.x,{bgColor:"transparent",boxSize:"150px",borderColor:o,border:"1px",_hover:{boxShadow:"0 0 40px ".concat(o)},transition:"box-shadow 0.3s ease-in-out",children:(0,t.jsx)(y.M,{boxSize:"150px",children:(0,t.jsx)(C.E,{src:n,alt:i,boxSize:"130px",objectFit:"contain"})})})}function L(e){let{skills:n,id:i}=e;return(0,t.jsxs)(a.x,{pt:"30px",children:[(0,t.jsx)(s.X,{size:"2xl",pb:"6",pt:"15",pl:"9",id:i,children:"Skills"}),(0,t.jsx)(b.r,{templateColumns:"repeat(3, 1fr)",gap:5,pt:"3",pl:"9",children:n.map(e=>(0,t.jsx)(v.P,{children:(0,t.jsx)(S,{...e})},e.name))})]})}var F=i(981),E=i.n(F);let A={title:"Alexander Neher",subtitle:"Software Engineering, Data Science, and Machine Learning",intro:"I am a Computer Science student at the Milwaukee School of Engineering"},I={text:"I am a senior at the Milwaukee School of Engineering, pursuing a B.S. in Computer Science with a minor in Mathematics, and a M.S. in Machine Learning. With experience across a range of programming languages and technologies, I am continually seeking opportunities to expand my knowledge. I am currently looking for a full-time position in software engineering or data science, driven by a passion for applying machine learning to solve real-world challenges, particularly in the medical field. I also have a strong interest in web development, with expertise in both front-end and back-end technologies."},z=["https://www.linkedin.com/in/alex-j-neher/","https://github.com/nehera21","mailto: ajneher21@gmail.com"],D=[{id:"1",title:"Homologus Point Transformer",description:"A program the takes in dataset of two modalities of medical images (made for histology and MRI images) and uses a convolutional neural network to register the one modality to the other.",link:"",image:"./images/hpt-img.png",tags:[{name:"Python",link:"https://www.python.org/",isLink:!0},{name:"TensorFlow",link:"https://www.tensorflow.org/",isLink:!0},{name:"Research",link:"",isLink:!1},{name:"CNN Architecture",link:"",isLink:!1}]},{id:"2",title:"Hierflow",description:"A program that uses a large language model to create a hierarchy of a particular topic, as well as classify an item within an existing hierarchy. The pipeline utilizes embeddings, RAG, and prompt engineering.",link:"",image:"./images/hierflow-img.png",tags:[{name:"Python",link:"https://www.python.org/",isLink:!0},{name:"ReactJS",link:"https://react.dev/",isLink:!0},{name:"Large Language Models",link:"",isLink:!1}]},{id:"3",title:"Japanese Character Recognition",description:"A program that takes in an image of a Japanese character and uses a neural network to predict what character it is. The model was deployed on an Android app where a user could draw the character and see the model prediction.",link:"",image:"./images/japanese-char-img.png",tags:[{name:"Python",link:"https://www.python.org/",isLink:!0},{name:"TensorFlow",link:"https://www.tensorflow.org/",isLink:!0},{name:"Numpy",link:"https://numpy.org/",isLink:!0}]},{id:"4",title:"Memory Montor Web App",description:"An internal app at Cognex that allows a worker to monitor the heap memory usage of a camera overtime using a web interface and network requests using socket calls.",link:"",image:"./images/cognex-camera.png",tags:[{name:"AngularJS",link:"https://angular.io/",isLink:!0},{name:"TypeScript",link:"https://www.typescriptlang.org/",isLink:!0},{name:"Web Development",link:"",isLink:!1}]}],_=[{id:"1",title:"Software Engineering Intern - Cognex Corporation",description:"At Cognex, I worked on a team that developed software for the In-Sight camera line. I worked on various parts of our tech stack, including the camera firmware and the .NET apps which users interact with to perform operations.",link:"https://www.cognex.com/",image:"./images/cognex-logo.png",tags:[{name:"C#",link:"",isLink:!1},{name:".NET",link:"",isLink:!1},{name:"C",link:"",isLink:!1},{name:"C++",link:"",isLink:!1},{name:"AngularJS",link:"https://angular.io/",isLink:!0},{name:"TypeScript",link:"https://www.typescriptlang.org/",isLink:!0}]}],M=[{id:"1",title:"Mind Over (Gray) Matter",description:"A program the takes in dataset of two modalities of medical images (made for histology and MRI images) and uses a convolutional neural network to register the one modality to the other.",link:"",image:"./images/hpt-img.png",tags:[{name:"Python",link:"https://www.python.org/",isLink:!0},{name:"TensorFlow",link:"https://www.tensorflow.org/",isLink:!0},{name:"Research",link:"",isLink:!1},{name:"CNN Architecture",link:"",isLink:!1}]}],N=[{name:"About",jumpID:"about"},{name:"Projects",jumpID:"projects"},{name:"Experience",jumpID:"experience"},{name:"Research",jumpID:"research"},{name:"Skills",jumpID:"skills"}],R=[{image:"./images/javascript-logo.png",name:"JavaScript",color:"#F7DF1E"},{image:"./images/typescript-logo.png",name:"TypeScript",color:"#007ACC"},{image:"./images/react-logo.png",name:"ReactJS",color:"#61DAFB"},{image:"./images/angular-logo.png",name:"AngularJS",color:"#DD0031"},{image:"./images/node-logo.png",name:"NodeJS",color:"#339933"},{image:"./images/java-logo.png",name:"Java",color:"#E04C26"},{image:"./images/c-logo.png",name:"C",color:"#55479C"},{image:"./images/cpp-logo.png",name:"C++",color:"#00599C"},{image:"./images/c-sharp-logo.png",name:"C#",color:"#3e0f5a"},{image:"./images/python-logo.png",name:"Python",color:"#3776AB"},{image:"./images/r-logo.png",name:"R",color:"#276DC3"},{image:"./images/pandas-logo.png",name:"Pandas",color:"#150458"},{image:"./images/numpy-logo.png",name:"NumPy",color:"#4D77CF"},{image:"./images/tensorflow-logo.png",name:"TensorFlow",color:"#FF6F00"},{image:"./images/git-logo.png",name:"Git",color:"#F05032"}];function P(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E(),{children:(0,t.jsx)("title",{children:"Alexander Neher Portfolio"})}),(0,t.jsx)("div",{style:{minWidth:"100vw",minHeight:"100vh",background:"url(".concat("./images/wave.png",")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",position:"fixed",top:0,left:0,zIndex:-2}}),(0,t.jsx)(a.x,{style:{minWidth:"100vw",height:"3320px",background:"linear-gradient(to bottom, rgba(18, 7, 89, 0.8), rgba(48, 6, 79, 0.8))",position:"absolute",top:0,left:0,zIndex:-1}}),(0,t.jsxs)(r.k,{minW:"100vw",minH:"100vh",color:"brand.text",position:"relative",direction:"column",children:[(0,t.jsxs)(a.x,{position:"fixed",p:8,minH:"100vh",minW:"100vw",color:"brand.text",children:[(0,t.jsx)(d,{...A}),(0,t.jsx)(w,{links:z}),(0,t.jsx)(j,{menuItems:N})]}),(0,t.jsxs)(a.x,{position:"absolute",p:8,left:"40vw",minH:"100vh",minW:"55vw",top:"0",children:[(0,t.jsx)(x,{...I}),(0,t.jsx)(g,{title:"Projects",id:"projects",projects:D}),(0,t.jsx)(g,{title:"Experience",id:"experience",projects:_}),(0,t.jsx)(g,{title:"Research",id:"research",projects:M}),(0,t.jsx)(L,{skills:R,id:"skills"})]})]})]})}}},function(e){e.O(0,[347,702,971,596,744],function(){return e(e.s=8545)}),_N_E=e.O()}]);