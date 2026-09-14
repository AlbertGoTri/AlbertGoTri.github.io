<script setup>
import { ref } from 'vue'

const root = document.documentElement

// Read the state the inline head script already applied, rather than assuming
// light — otherwise the control contradicts the page on a reload.
const dark = ref(root.getAttribute('data-theme') === 'dark')

function set(next) {
  if (next === dark.value) return
  dark.value = next

  if (next) root.setAttribute('data-theme', 'dark')
  else root.removeAttribute('data-theme')

  try {
    localStorage.setItem('theme', next ? 'dark' : 'light')
  } catch (e) {
    // Storage blocked: the choice still applies for this page view.
  }
}
</script>

<template>
  <div class="theme-switch" role="group" aria-label="Colour theme">
    <button type="button" :aria-pressed="!dark" @click="set(false)">Light</button>
    <span class="theme-switch-rule" aria-hidden="true"></span>
    <button type="button" :aria-pressed="dark" @click="set(true)">Dark</button>
  </div>
</template>
