import { Suspense } from "react";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="max-w-6xl m-auto">
     <Suspense fallback={<h2>Loading...</h2>}>
        <ProductList />
      </Suspense>
    </div>
  );
}
