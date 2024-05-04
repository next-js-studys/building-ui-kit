"use client"

import { Button } from "@/components/isomorphic/Button";
import { Input } from "@/components/isomorphic/Input";

export default function Home() {

  const allert = () => {
    return alert("hey there!")
  }
  return (
    <div>
      <Input />
      <Button onClick={allert} className="bg-sky-500" >Click Me!</Button>
    </div>
  );
}
