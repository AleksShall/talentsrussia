"use client";                       // ← помечаем файл как клиентский

import { useEffect, useState } from "react";

export default function Home() {
  // храним ответ от API
  const [courses, setCourses] = useState<any[]>([]);

  // один раз при загрузке страницы запрашиваем /courses/
  useEffect(() => {
    fetch("http://localhost:4010/courses/")
      .then((r) => r.json())
      .then(setCourses)
      .catch(console.error);
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Список курсов (данные из мок-API)</h1>
      <pre>{JSON.stringify(courses, null, 2)}</pre>
    </main>
  );
}
