<script setup>
import { experience } from '../data/profile'
</script>

<template>
  <section id="experience" class="sheet section">
    <div class="rail">
      <div class="margin" aria-hidden="true"></div>
      <h2 class="section-title">Experience</h2>
    </div>

    <article v-for="job in experience" :key="job.role + job.period" class="entry rail">
      <div class="margin">
        {{ job.period }}<br />{{ job.until }}<br />{{ job.location }}
        <span v-if="job.current" class="now">Current</span>
      </div>

      <div>
        <h3>{{ job.role }}</h3>
        <p class="at">{{ job.company }}</p>
        <ul class="hang">
          <li v-for="(point, i) in job.highlights" :key="i">{{ point }}</li>
        </ul>
      </div>
    </article>
  </section>
</template>
