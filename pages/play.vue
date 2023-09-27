<template>
    <canvas id="pg" ref="playground" width="1000" height="700" />
</template>

<script setup lang="ts">
import User from '../User'

onMounted(() => {
    const url = "wss://agario.ahmetcanisik5458675.workers.dev"
    const ws = new WebSocket(url)

    const c = document.getElementById('pg') as HTMLCanvasElement
    const ctx = c.getContext('2d') as CanvasRenderingContext2D
    c.style.border = "2px solid #000";
    c.style.backgroundColor = "#fff";

    const user = new User('1', 100, 100, 5, '#000', 'ahmetcan')
    user.locate(100, 100, ctx)
})


</script>

<style></style>