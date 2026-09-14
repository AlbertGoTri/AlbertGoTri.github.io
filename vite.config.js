import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// User site (albertgotri.github.io) is served from the domain root,
// so base stays '/'. A project site would need '/<repo-name>/'.
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
