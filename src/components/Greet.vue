<script setup>
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <form class="row" @submit.prevent="greet">
    <input id="greet-input" v-model="name" class="input input-primary" placeholder="Enter a name..." />
    <button type="submit" class="btn">
      Greet
      <i class="icon icon-app"></i>
    </button>
  </form>

  <p>{{ greetMsg }}</p>
</template>
