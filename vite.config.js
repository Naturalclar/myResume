import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

const options = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
}

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [
    { enforce: 'pre', ...mdx(options) },
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
  ],
})
