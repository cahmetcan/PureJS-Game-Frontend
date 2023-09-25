<template>
  <div class="top">
    <h1>Radius Space</h1>
  </div>

  <div>
    <button @click="getServers()">
      Play Game
    </button>
  </div>

  <!-- 
    Servers list
    servers' rooms are listed here
   -->
  <div>
    <h2>Servers</h2>
    <ul>
      <li v-for="server in servers" :key="server.id">
        {{ server.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const url = "https://agario.ahmetcanisik5458675.workers.dev/"

export default {
  name: "App",
  data() {
    return {
      servers: []
    }
  },
  methods: {
    async getServers() {
      await fetch(url + 'servers')
        .then(res => res.json())
        .then(data => {
          const roomsArray = JSON.parse(data.rooms)
          this.servers = roomsArray
        })
    }
  }
}
</script>

<style>
  /* Genel Sayfa Stili */
  body {
    font-family: 'Arial', sans-serif;
    background-image: linear-gradient(to bottom, #f0f0f0, #c0c0c0);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  /* Üst Kısım Stili */
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
  button {
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

  button:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  /* Sunucu Listesi Stili */
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
</style>
