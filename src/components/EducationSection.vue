<script setup>
import { certificates, education, languages } from '../data/profile'
</script>

<template>
  <section id="education" class="sheet section">
    <div class="rail">
      <div class="margin" aria-hidden="true"></div>
      <div>
        <h2 class="section-title">Education</h2>

        <div class="stack-cols">
          <div>
            <ul class="rows" style="border-top: 1px solid var(--rule-strong)">
              <li v-for="e in education" :key="e.school">
                <span class="title">{{ e.school }}</span>
                {{ e.award }}
                <span class="meta">{{ e.period }}</span>
                <span v-if="e.note" class="meta">{{ e.note }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="sub-label">Certificates</h3>
            <ul class="rows" style="margin-bottom: 34px">
              <li v-for="c in certificates" :key="c.name">
                <a :href="c.url" target="_blank" rel="noopener noreferrer">{{ c.name }}</a>
                <span class="meta">{{ c.issuer }}, {{ c.year }}</span>
              </li>
            </ul>

            <h3 class="sub-label">Languages</h3>
            <ul class="rows">
              <li v-for="l in languages" :key="l.name" class="split">
                <span>{{ l.name }}</span>
                <span class="level">{{ l.level }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
