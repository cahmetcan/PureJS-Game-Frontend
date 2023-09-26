<template>
    <div class="modal-overlay">
        <div class="modal">
            <img class="check" src="~/assets/check-icon.png" alt="" />
            <h6>Ready to Play!</h6>
            <p>You are about to join the game. Are you ready?</p>
            <p>Server: {{ local }}</p>
            <p>Room ID: {{ roomId }}</p>
            <p>Nickname: {{ nickname }}</p>
            <div class="color" :style="{ backgroundColor: color }"></div>
            <button>Play!</button>
        </div>
    </div>
</template>
  
<script>

export default {
    props: {
        roomId: String,
        nickname: String,
        color: String,
        local: String
    }
};
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
    height: 400px;
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

button {
    background-color: #141414;
    width: 150px;
    height: 40px;
    color: white;
    font-size: 14px;
    margin-top: 50px;
}
</style>