<script setup>
import ThemeToggle from './ThemeToggle.vue'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'tools', label: 'Tools' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
</script>

<template>
  <div class="masthead">
    <div class="sheet masthead-inner">
      <a href="#top" class="masthead-name">Albert Gómez Triunfante</a>

      <!-- The toggle sits outside <nav> so it survives the narrow-width rule
           that hides the section links. -->
      <div class="masthead-end">
        <nav aria-label="Sections">
          <ul>
            <li v-for="s in sections" :key="s.id">
              <a :href="`#${s.id}`">{{ s.label }}</a>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  </div>
</template>
