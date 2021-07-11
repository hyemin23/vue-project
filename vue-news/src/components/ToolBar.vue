<template>
    <div class="head">
        <router-link to="/news">news</router-link> |
        <router-link to="/ask">ask</router-link> |
    </div>
</template>

<script>
export default {

}
</script>

<style>
.head{
    color : white;
    background: #42b883;
    display: flex;
    justify-content: center;
    padding : 8px;
}
.head .router-link-exact-active router-link-active{
    color : red;
}
.head a{
    color : blue;
}
</style>