import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [react(), vike()],
  resolve: {
    // Only needed for this example
    // TODO: check if still needed
    preserveSymlinks: true
  }
};

export default config;
