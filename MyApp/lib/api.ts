const DEFAULT_API_BASE_URL = 'http://localhost:5000';

export const API_BASE_URL = (
  process.env.EXPO_PUBLIC_API_URL ?? DEFAULT_API_BASE_URL
).replace(/\/$/, '');

export const apiUrl = (path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};
