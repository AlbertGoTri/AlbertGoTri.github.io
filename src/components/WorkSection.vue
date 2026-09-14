<script setup>
import { index, profile, work } from '../data/profile'
</script>

<template>
  <section id="work" class="sheet section">
    <div class="rail">
      <div class="margin" aria-hidden="true"></div>
      <h2 class="section-title">Work</h2>
    </div>

    <article v-for="p in work" :key="p.title" class="work rail">
      <div class="margin">
        {{ p.year }}<br />
        <a class="source-link" :href="p.repo" target="_blank" rel="noopener noreferrer">Source <span class="arrow">↗</span></a>
      </div>

      <div>
        <h3>{{ p.title }}</h3>
        <p class="at">{{ p.note }}</p>
        <p class="summary">{{ p.summary }}</p>

        <table v-if="p.results" class="results">
          <caption>
            {{ p.results.caption }}
          </caption>
          <thead>
            <tr>
              <th v-for="c in p.results.columns" :key="c" scope="col">{{ c }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, ri) in p.results.rows"
              :key="ri"
              :class="{ 'is-key': row[p.results.columns.length] === true }"
            >
              <th scope="row">{{ row[0] }}</th>
              <td v-for="(cell, ci) in row.slice(1, p.results.columns.length)" :key="ci">
                {{ cell }}
              </td>
            </tr>
          </tbody>
        </table>

        <ul class="hang">
          <li v-for="(d, i) in p.details" :key="i">{{ d }}</li>
        </ul>

        <p class="colophon"><b>Built with</b> {{ p.stack.join(' · ') }}</p>
      </div>
    </article>

    <div class="rail" style="margin-top: 52px">
      <div class="margin" aria-hidden="true"></div>
      <div>
        <h3 class="sub-label" style="margin-bottom: 0">Also in the open</h3>
        <ul class="index">
          <li v-for="m in index" :key="m.name">
            <a :href="m.repo" target="_blank" rel="noopener noreferrer">
              <span>
                <span class="index-name">{{ m.name }}</span>
                <span v-if="m.note" class="index-note">{{ m.note }}</span>
              </span>
              <span class="index-blurb">
                {{ m.blurb }}
                <span class="tags">{{ m.tags }}</span>
              </span>
            </a>
          </li>
        </ul>
        <p style="margin-top: 18px; font-size: 0.9rem">
          <a :href="profile.links.github" target="_blank" rel="noopener noreferrer"
            >All repositories on GitHub <span class="arrow">↗</span></a
          >
        </p>
      </div>
    </div>
  </section>
</template>
