import React from "react";
import "./App.css";

/*
PUBLIC_INTERFACE
Home – light-weight Recipe Explorer landing screen.

For now this renders:
• Page heading
• Search bar (non-functional stub)
• Very small hard-coded recipe list to prove routing / UI wiring

Later iterations can replace the static parts with real components
or fetch data from backend.
*/
export default function Home() {
  const recipes = [
    { id: 1, title: "Classic Greek Salad", time: "15 mins", rating: 4.5 },
    { id: 2, title: "Crunchy Nut Coleslaw", time: "10 mins", rating: 3.5 },
    { id: 3, title: "Barbecue Chicken Rice", time: "20 mins", rating: 4.7 }
  ];

  return (
    <main className="home">
      <header className="home__header">
        <h1 className="home__title">Recipe Explorer</h1>
        <p className="home__subtitle">What will you cook today?</p>
        <div className="home__search">
          <input
            type="search"
            placeholder="Search recipes…"
            aria-label="Search recipes"
          />
        </div>
      </header>

      <section className="recipes">
        {recipes.map((r) => (
          <article key={r.id} className="recipe-card">
            <div className="recipe-card__thumb" aria-hidden="true" />
            <h2 className="recipe-card__title">{r.title}</h2>
            <p className="recipe-card__meta">
              {r.time} • ⭐ {r.rating}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
