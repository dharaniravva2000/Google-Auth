<template>
        <header>

<NxNavbar :menu="mainMenu" @clicked="MenuClicked"/>
        </header>
        <slot/>
        <footer>
            <NxFooter>
               &copy; Nuxt Google Auth 
            </NxFooter>
        </footer>
</template>

<script setup lang="ts">

/* __placeholder__ */
import type { NxLink, NxLinks } from "~/types.d";
const mainMenu=[
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Dashboard",
        link: "/dashboard",
    },
    {
        name: "Settings",
        link: "/settings",
    },
    {
        name: "Login",
        link: "/login",
    },

]as NxLinks; 

/**
 * @desc
 * @param menuItem 
 */

function MenuClicked(menuItem: NxLink){

    if (menuItem.link) navigateTo(menuItem.link)

}
</script>


