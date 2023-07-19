// Función para obtener el valor inicial del estado desde localStorage
export default function getStorageValue(key, defaultValue) {
  const saved =
    typeof window !== "undefined" && window.localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}
