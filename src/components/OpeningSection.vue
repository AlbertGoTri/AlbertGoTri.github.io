<script setup>
import { profile } from '../data/profile'
</script>

<template>
  <header id="top" class="sheet opening">
    <div class="rail">
      <!-- The dateline sits in the margin, where a standfirst's byline belongs. -->
      <div class="margin">
        <span class="live">{{ profile.role }}</span><br />
        {{ profile.company }}<br />
        {{ profile.location }}
      </div>

      <div>
        <h1>{{ profile.name }}</h1>
        <p class="standfirst">{{ profile.standfirst }}</p>

        <p class="byline">
          <a :href="`mailto:${profile.links.email}`">{{ profile.links.email }}</a>
          <a :href="profile.links.github" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a :href="profile.links.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </div>
  </header>
</template>
