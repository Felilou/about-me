import{i as l,h as d,o as r,c as i,r as s,j as c,k as u,l as _,a as e,n as g,_ as m}from"./C0HqlYpa.js";const p={key:0},y={__name:"languageBox",props:{languageProp:{type:String,required:!0}},setup(t){const n=l("language");return(a,o)=>d(n)===t.languageProp?(r(),i("div",p,[s(a.$slots,"default")])):c("",!0)}},h={class:"md:h-[80vh] h-[75vh]"},v={class:"animate__animated animate__fadeInUp"},f={class:"bg-white text-black dark:bg-gray-900 dark:text-white"},k=u({__name:"ContainerWithHeroImg",props:{imgUrl:{type:String,required:!0,default:""}},setup(t){const n=t;return _(()=>{console.log(n.imgUrl)}),(a,o)=>(r(),i("div",null,[e("div",{class:"fixed-bg",style:g("background-image: url("+t.imgUrl+")")},null,4),e("div",h,[s(a.$slots,"title",{},void 0,!0)]),e("div",v,[o[0]||(o[0]=e("div",{class:"h-[20vh] md:h-[15vh] bg-gradient-to-b from-transparent to-white dark:to-gray-900"},null,-1)),e("div",f,[s(a.$slots,"content",{},void 0,!0)])])]))}}),x=m(k,[["__scopeId","data-v-289828a0"]]);export{x as _,y as a};
