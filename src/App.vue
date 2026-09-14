<script setup>
import { about } from './data/profile'
import MastheadNav from './components/MastheadNav.vue'
import OpeningSection from './components/OpeningSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import WorkSection from './components/WorkSection.vue'
import ToolsSection from './components/ToolsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ClosingSection from './components/ClosingSection.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <MastheadNav />
  <OpeningSection />

  <main id="main">
    <section id="about" class="sheet section">
      <div class="rail">
        <div class="margin" aria-hidden="true"></div>
        <div>
          <h2 class="section-title">About</h2>
          <div class="prose">
            <p class="lede">{{ about.lede }}</p>
            <p v-for="(para, i) in about.body" :key="i">{{ para }}</p>
          </div>
        </div>
      </div>
    </section>

    <ExperienceSection />
    <WorkSection />
    <ToolsSection />
    <EducationSection />
    <ClosingSection />
  </main>
</template>
