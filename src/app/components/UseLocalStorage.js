"use client";
import { useEffect, useState } from "react";

export function UseLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    try {
      const savedValue = localStorage.getItem(key);
      const parsedValue = JSON.parse(savedValue);
      setValue(parsedValue || defaultValue);
    } catch (error) {
      console.error("Error retrieving data from local storage:", error);
      setValue(defaultValue);
    }
  }, [key, defaultValue]);

  return value;
}
