<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style>
    @import "./assets/css/main.css";
    @import "./assets/css/color-dark.css";     /*深色主题*/
    /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
    #app{
        min-width: 1040px;
        max-width: 1440px;
        position: relative;
        margin: 0 auto;
    }
</style>
<script>
    export default {
        mounted () {
//            window.addEventListener( 'beforeunload', e => this.set() );
        },
        methods:{
            set(){
                localStorage.removeItem('token');
                localStorage.removeItem('sideBarList');
            }
        },
        destroyed(){
           this.set();
        }
    }
</script>