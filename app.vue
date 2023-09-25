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