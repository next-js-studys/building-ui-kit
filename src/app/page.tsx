"use client"

import { Input } from "@/components/isomorphic/Input";
import { Button } from "@/components/isomorphic/button/Button";

export default function Home() {

  const allert = () => {
    return alert("hey there!")
  }
  return (
    <div>
      <Input />
      <Button onClick={allert} color="primary" className="bg-sky-500" >Click Me!</Button>
    </div>
  );
}
