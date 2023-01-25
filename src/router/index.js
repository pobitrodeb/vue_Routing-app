import { createRouter, createWebHashHistory } from "vue-router";

const routes = [

    {
        path: "/", 
        name: "home",
       component: ()=>
       import("../components/Home.vue"),

    }, 
    {
        path: "/about", 
        name: "about",
       component: ()=>
       import("../components/About.vue"),

    }, 
];
export default createRouter({
    history:createWebHashHistory("/"),
    routes,
});