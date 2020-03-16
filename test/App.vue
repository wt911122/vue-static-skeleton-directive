<template>
    <span v-skeleton="'dark'" :sk-status="status" :key="message">
        {{ message }}
    </span>
</template>
<script>
export default {
    data(){
        return {
            status: 'loaded',
            message: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
    },
    created(){
        this.status = 'loading';
        setTimeout(() => {
            this.status = 'loaded';
            this.message = 'hello world!';
        }, 3000)
    }
}
</script>