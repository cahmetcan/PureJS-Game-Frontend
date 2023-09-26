<template>
    <canvas id="pg" ref="playground" width="1000" height="700" />
</template>

<script setup lang="ts">

onMounted(() => {
    // const socket = io('https://agario.ahmetcanisik5458675.workers.dev/')
    const c = document.getElementById('pg') as HTMLCanvasElement
    const ctx = c.getContext('2d') as CanvasRenderingContext2D
    c.style.border = "2px solid #000";


    ctx.beginPath();
    var x = 100
    var y = 100
    // x , y , radius , start angle , end angle
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.stroke();

})


</script>

<style></style>