import React, { useState } from 'react';

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="border rounded p-4 w-full">
      <div className="flex justify-between items-center">
        <h3>{title}</h3>
        <button className="button" onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Show' : 'Hide'}
        </button>
      </div>
      {isActive && (
        <p className="border-t border-stone-700 mt-3 pt-3">{children}</p>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <div className="w-1/2">
      <h2 className="text-2xl mb-4">Accordion</h2>
      <Panel title="Title 1">
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Title 2">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
      <Panel title="Title 3">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}
