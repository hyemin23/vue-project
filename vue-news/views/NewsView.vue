<template>
    <div>
        <div
            v-for=" user in users"
            :key="user"
        >
            {{ user.domain }}
        </div>
    </div>
</template>

<script>
import { fetchNewsList } from '../src/api/index';


export default {

    data () {
        return {
            users: [],
        }
    },
    created () {
        fetchNewsList().then(res=> this.users = res.data).catch(err=>console.log(err))
    },
}
</script>

<style>

</style>