import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  external: ["picocolors"],
  // switch the plugins option to make the build work
  plugins: [typescript({ module: 'ESNext' })],
  // plugins: [typescript({ module: 'ESNext', include: "src/index.ts" })],
};
