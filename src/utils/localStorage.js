export const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.error("localStorage load error", e);
    return fallback;
  }
};

export const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("localStorage save error", e);
  }
};

export const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error("localStorage remove error", e);
  }
};
