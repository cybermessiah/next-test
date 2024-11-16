import { Suspense } from "react";
import PeopleList from "./components/PeopleList";

export default function Home() {
  return (
    <div className="max-w-6xl m-auto">
     <Suspense fallback={<h2>Loading...</h2>}>
        <PeopleList />
      </Suspense>
    </div>
  );
}
