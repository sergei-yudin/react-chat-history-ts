import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ base: '/react-chat-history-ts/', plugins: [react()] });
