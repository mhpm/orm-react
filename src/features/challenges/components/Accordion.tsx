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
          {isActive ? 'Hide' : 'Show'}
        </button>
      </div>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="border-t border-stone-700 mt-3 pt-3">{children}</p>
      </div>
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quis ex!
        Nostrum, eveniet qui! Eum, illo sed ipsam id quod architecto animi qui!
        Voluptatem, veniam nulla animi id excepturi enim?
      </Panel>
      <Panel title="Title 3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, quis ex!
        Nostrum, eveniet qui! Eum, illo sed ipsam id quod architecto animi qui!
        Voluptatem, veniam nulla animi id excepturi enim?
      </Panel>
    </div>
  );
}
