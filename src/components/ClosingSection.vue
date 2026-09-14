<script setup>
import { closing, profile } from '../data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="sheet section closing">
    <div class="rail">
      <div class="margin" aria-hidden="true"></div>
      <div>
        <h2>{{ closing.heading }}</h2>
        <div class="prose">
          <p>{{ closing.body }}</p>
        </div>

        <ul class="contact-lines">
          <li>
            <span class="key">Email</span>
            <a :href="`mailto:${profile.links.email}`">{{ profile.links.email }}</a>
          </li>
          <li>
            <span class="key">GitHub</span>
            <a :href="profile.links.github" target="_blank" rel="noopener noreferrer"
              >github.com/AlbertGoTri <span class="arrow">↗</span></a
            >
          </li>
          <li>
            <span class="key">LinkedIn</span>
            <a :href="profile.links.linkedin" target="_blank" rel="noopener noreferrer"
              >linkedin.com/in/albertgotri <span class="arrow">↗</span></a
            >
          </li>
          <li>
            <span class="key">Based in</span>
            <span>{{ profile.location }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <footer class="sheet">
    <div class="colophon-foot">
      <p>
        Static files on GitHub Pages. No analytics, no cookies, nothing tracking you.
        <a
          href="https://github.com/AlbertGoTri/AlbertGoTri.github.io"
          target="_blank"
          rel="noopener noreferrer"
          >Source for this site <span class="arrow">↗</span></a
        >
      </p>
      <p>© {{ year }} {{ profile.name }}</p>
    </div>
  </footer>
</template>
