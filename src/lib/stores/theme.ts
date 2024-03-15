import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const userTheme = browser && (localStorage.getItem('color-scheme') as Theme);

export const theme = writable(userTheme ?? 'dark');

export function toggleTheme() {
  theme.update((currentTheme) => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('color-scheme', nextTheme);

    localStorage.setItem('color-scheme', nextTheme);

    return nextTheme;
  });
}

export function setTheme(nextTheme: Theme) {
  theme.set(nextTheme);
}
