// src/app/messages/[slug]/page.js
import React from 'react';


const list = [
  { title: "Principal",
    name:"Rozeen Shrestha", 
    description: "Description of Principal",
    message: {
    subject: "Message Subject",
    body: "Messag Body"
      },
    quote:"Thicc Thighs Saves Lives",
    image:"https://preview.redd.it/this-person-does-not-exist-v0-9l5x3d2g21591.jpg?auto=webp&s=97e2a0e5624f9e052678ddb38812fea2945f5b19" 
  },
    
    { title: "Program Director", description: "Description of Program Director" },
];

// Fetch static params for pre-rendering
export async function generateStaticParams() {
  return list.map(card => ({
    slug: encodeURIComponent(card.title),
  }));
}

const SlugPage = ({ params }) => {
  const { slug } = params;

  // Find the card based on the slug
  const card = list.find(card => encodeURIComponent(card.title) === slug);

  if (!card) {
    return <div>Card not found</div>;
  }

  const testimony=()=>{
    return (
      <div className="p-4 ">
      <figure className="md:flex max-w-5xl bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover" src={card.image} alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium dark:text-slate-100">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {card.name}
            </div>
            <div className="text-slate-700 dark:text-slate-400">
              {card.title}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
)
  }

  return (
    <div>
      {testimony()}
    </div>
  );
};

export default SlugPage;
