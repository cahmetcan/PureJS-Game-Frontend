<template>
  <div id="app" class="container">
    <div class="side left">
      <div>
        <h2>Servers</h2>
        <ul>
          <li v-for="server in servers" :key="server.id" style="color:black;">
            {{ server.name }}
          </li>
        </ul>
      </div>
    </div>

    <div class="side main">
      <h1>Radius Space</h1>
      <input type="number" placeholder="Room ID" class="roomId" maxlength="6" />
      <div class="play">
        <button class="playButton" @click="getServers()">
          Play Game
        </button>
      </div>
      <!-- 
    Servers list
    servers' rooms are listed here
   -->

    </div>

    <div class="right side">
      <div class="login">
        <input type="text" placeholder="Nickname" class="nickname" />
        <input type="color" class="color" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
const url = "https://agario.ahmetcanisik5458675.workers.dev/"
const servers: any = []

onMounted(() => {
  getServers();
})

const getServers = async () => {
  await fetch(url + 'servers')
    .then(res => res.json())
    .then(data => {
      const roomsArray = JSON.parse(data.rooms)
      servers.value = roomsArray
    });
}

const storeServers = () => {
  const serversData = servers.value
  console.log(serversData)
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: indigo;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.roomId {
  width: 18%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #333;
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  transition: border-color 0.2s ease-in-out;
}

.container {
  text-align: center;
  background-color: indigo;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 0 30rem;
}



.side {
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  flex-direction: column;
}


.play {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}

.top {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 5px 5px 0 0;
}

.top h1 {
  font-size: 48px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  animation: textShadowAnimate 2s ease infinite alternate;
}

@keyframes textShadowAnimate {
  from {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  to {
    text-shadow: -2px -2px 4px rgba(0, 0, 0, 0.4);
  }
}

/* Oyun Butonu Stili */
.playButton {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 20px;
  border-radius: 0 0 5px 5px;
  outline: none;
}

.playButton:hover {
  justify-content: center;
  display: flex;
  align-items: center;
  left: 50%;
  background-color: #45a049;
  transform: scale(1.05);
}

h2 {
  font-size: 36px;
  margin-top: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 15px 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li:hover {
  transform: scale(1.05);
}

.color {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #333;
  outline: none;
  cursor: pointer;
  margin: 20px auto;
  transition: transform 0.2s ease-in-out;
}

.color:hover {
  transform: scale(1.1);
}

.nickname {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #333;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  transition: border-color 0.2s ease-in-out;
}

.nickname:focus {
  border-color: #4CAF50;
}


.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
