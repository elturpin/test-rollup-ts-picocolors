import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  external: ["express", "vite", "node-fetch", "fs", "path", "picocolors"],
  plugins: [typescript({ module: 'ESNext' })],
};
