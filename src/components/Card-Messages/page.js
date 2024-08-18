
'use client';
import { useRouter } from 'next/navigation';
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Example card data
const list = [
  { title: "Principal", img: "" },
  { title: "Program Director", img: "" },
];

export default function MessagesPage() {
  const router = useRouter();

  const handleCardClick = (title) => {
    const encodedTitle = encodeURIComponent(title);
    router.push(`/messages/${encodedTitle}`);
  };

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-4">
      {list.map((item, index) => (
        <Card 
          className="bg-gray-200" 
          shadow="sm" 
          key={index} 
          isPressable 
          onPress={() => handleCardClick(item.title)}
        >
          <CardBody className="overflow-visible p-0 ">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small bg-gray-100 justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
