<template>
    <div class="modal-overlay">
        <div class="modal">
            <img class="check" src="~/assets/check-icon.png" alt="" />
            <h6>Ready to Play!</h6>
            <p>You are about to join the game. Are you ready?</p>
            <p>Server: {{ local }}</p>
            <img :src="'https://flagsapi.com/' + local + '/flat/64.png'" alt="" />
            <p>Room ID: {{ roomId }}</p>
            <p>Nickname: {{ nickname }}</p>
            <div class="color" :style="{ backgroundColor: color }"></div>
            <button class="startButton">
                <NuxtLink to="/play">Play</NuxtLink>
            </button>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    roomId: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    text-align: center;
    background-color: white;
    height: 450px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}

h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
    color: #000000;
}

p {
    font-size: 16px;
    margin: 20px 0;
    color: #000000;
}

.startButton {
    background-color: #c0f8ff;
    color: white;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    color: #000000;
    transition: transform 0.2s ease-in-out;
}

.startButton:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
}
</style>