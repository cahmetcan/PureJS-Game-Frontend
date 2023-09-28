<template>
    <div class="modal-overlay">
        <div class="modal">
            <div class="color" :style="{ backgroundColor: '#' + color }">
                Room ID: {{ roomId }}
                Nickname: {{ nickname }}</div>

            <p id="isConnected">Connecting</p>
            <button @click="ws.send(JSON.stringify({ type: 'move', data: 'a' }))">a</button>
            <button @click="ws.send(JSON.stringify({ type: 'move', data: 's' }))">w</button>
            <button @click="ws.send(JSON.stringify({ type: 'move', data: 'w' }))">s</button>
            <button @click="ws.send(JSON.stringify({ type: 'move', data: 'd' }))">d</button>

            <button class="exit" @click="$router.push('/')">
                Exit
            </button>
            <div class="messages" id="messages">
                <div class="message" v-for="message in messages" :key="message.id">
                    <p>{{ message }}</p>
                </div>
            </div>
        </div>

        <canvas id="pg" ref="playground" width="1000" height="700" />
    </div>
</template>

<script setup lang="ts">
import User from '../User'
const messages = ref<any[]>([])
const route = useRoute()
const roomId = route.query.roomId
const nickname = route.query.nickname
let color = new URLSearchParams(window.location.search).get('color') as string


const urlParams = new URLSearchParams(window.location.search)
const url = "wss://agario.ahmetcanisik5458675.workers.dev/play?room=" + urlParams.get('roomId') + "&name=" + urlParams.get('nickname') + "&color=" + urlParams.get('color')
const ws = new WebSocket(url)
const w = () => {
    ws.send(JSON.stringify({
        type: "move",
        data: "w"
    }))
}

onMounted(() => {

    ws.onopen = () => {
        const isConnected = document.getElementById('isConnected') as HTMLParagraphElement
        isConnected.innerHTML = "Connected"
    }
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data)

        if (data.type === "allCoordinates") {
            const announce: User[] = data.data
            for (let i = 0; i < announce.length; i++) {
                const user = new User(announce[i].name, announce[i].x, announce[i].y, 0, announce[i].color, announce[i].name)
                user.locate(announce[i].x, announce[i].y, ctx)
            }
        }

        if (data.type === "newUser") {
            const announce: User = data.data
            const user = new User(announce.name, announce.x, announce.y, 0, announce.color, announce.name)
            user.locate(announce.x, announce.y, ctx)
        }

        if (data.type === "removeUser") {
            console.log("removeUser")
            const announce: User = data.data
            const user = new User(announce.name, announce.x, announce.y, 0, announce.color, announce.name)
            user.removeUser(ctx, announce.x, announce.y)
        }

        if (data.type === "move") {
            const announce = data.data as {
                name: string;
                x: number;
                y: number;
                color: string;
            };

            const user = new User(announce.name, announce.x, announce.y, 0, announce.color, announce.name)
            user.update(ctx, announce.x, announce.y)
        }



        /*         document.addEventListener('keydown', (event) => {
                    console.log(event.key)
                    if (event.key === 'w') {
                        ws.send(JSON.stringify({
                            type: "move",
                            data: "w"
                        }))
                    }
                    if (event.key === 'a') {
                        ws.send(JSON.stringify({
                            type: "move",
                            data: "a"
                        }))
                    }
                    if (event.key === 's') {
                        ws.send(JSON.stringify({
                            type: "move",
                            data: "s"
                        }))
                    }
                    if (event.key === 'd') {
                        ws.send(JSON.stringify({
                            type: "move",
                            data: "d"
                        }))
                    }
                }) */

    }

    ws.onclose = () => {
        const isConnected = document.getElementById('isConnected') as HTMLParagraphElement
        isConnected.innerHTML = "Disconnected"
    }

    const c = document.getElementById('pg') as HTMLCanvasElement
    const ctx = c.getContext('2d') as CanvasRenderingContext2D
    c.style.border = "2px solid #000";
    c.style.backgroundColor = "#fff";
})



</script>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;

}

.modal {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}
</style>