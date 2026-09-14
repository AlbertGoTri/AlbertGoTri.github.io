<script setup>
import { tools } from '../data/profile'
</script>

<template>
  <section id="tools" class="sheet section">
    <div class="rail">
      <div class="margin" aria-hidden="true"></div>
      <div>
        <h2 class="section-title">Tools</h2>
        <dl class="deflist">
          <template v-for="g in tools" :key="g.group">
            <dt>{{ g.group }}</dt>
            <dd>{{ g.items }}</dd>
          </template>
        </dl>
      </div>
    </div>
  </section>
</template>
