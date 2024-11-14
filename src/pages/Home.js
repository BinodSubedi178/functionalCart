import { Card } from "../components";
import { useTitle } from "../hooks";

export const Home = () => {
  const productList = [
    {
      id: 1,
      title: "Apple Watch Series 7",
      rating: 4.2,
      price: 599,
      image_src: "/assets/p1.jpg",
    },
    {
      id: 2,
      title: "Xiaomi Watch Smart Band 7",
      rating: 3.5,
      price: 399,
      image_src: "/assets/p2.jpg",
    },
    {
      id: 3,
      title: "Galaxy Watch Ultra",
      rating: 4.3,
      price: 1299,
      image_src: "/assets/p3.jpeg",
    },
    {
      id: 4,
      title: "Google Pixel Watch 3",
      rating: 4.0,
      price: 579,
      image_src: "/assets/p4.jpg",
    },
    {
      id: 5,
      title: "Apple Watch Series 10",
      rating: 4.5,
      price: 1359,
      image_src: "/assets/p5.jpg",
    },
    {
      id: 6,
      title: "OnePlus Smartwatch 2",
      rating: 3.0,
      price: 699,
      image_src: "/assets/p6.jpg",
    },
  ];
  useTitle("Home");
  return (
    <main className="flex flex-wrap gap-6 justify-center items-stretch p-6 bg-gray-50 min-h-screen">
      {productList.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </main>
  );
};
