<template>
    <div class="modal-overlay">
        <div class="modal">
            <div class="color" :style="{ backgroundColor: '#' + color }">
                Room ID: {{ roomId }}
                Nickname: {{ nickname }}</div>

            <p id="isConnected">Connecting</p>
            <button class="exit"> Exit
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


onMounted(() => {
    const ws = new WebSocket(url)

    ws.onopen = () => {
        console.log('connected')
        const isConnected = document.getElementById('isConnected') as HTMLParagraphElement
        isConnected.innerHTML = "Connected"
    }
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data)
        messages.value.push(data)
        //{ "data": { "name": "ahmetcan", "color": "f573d5" }, "ws": {}, "score": 0, "x": 98, "y": 90 }
        if (data.data.name == nickname) {
            const player = new User(data.data.name, data.x, data.y, 0, data.data.color, data.data.name)
            player.locate(data.x, data.y, ctx)
            console.log(player)

        }

    }

    ws.onclose = () => {
        console.log('disconnected')
        const isConnected = document.getElementById('isConnected') as HTMLParagraphElement
        isConnected.innerHTML = "Disconnected"

    }
    const c = document.getElementById('pg') as HTMLCanvasElement
    const ctx = c.getContext('2d') as CanvasRenderingContext2D
    c.style.border = "2px solid #000";
    c.style.backgroundColor = "#fff";

    const newPlayer = new User("asd", 100, 100, 0, "f573d5", "ahmetcan")
    newPlayer.locate(25, 100, ctx)
    console.log(newPlayer)
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