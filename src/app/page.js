import Counter from "@/components/counter/Counter";
import ProductWrapper from "@/components/product-wrapper/ProductWrapper";
import Image from "next/image";
import Wishlist from "./wishlist/page";

export default function Home() {
  return (
    <>
      <Counter />
      <ProductWrapper />
      <Wishlist />
    </>
  );
}
