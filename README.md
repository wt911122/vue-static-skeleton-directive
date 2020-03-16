# vue-static-skeleton-directive
## 静态骨架指令

### 使用方法
三个参数必传 
1. v-skeleton 后面跟主题
2. sk-status 加载状态
3. key 用于触发渲染，key值需要与加载态不同
```vue
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
```