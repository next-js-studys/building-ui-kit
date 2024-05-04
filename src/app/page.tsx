"use client"

import { Button } from "@/components/isomorphic/Button";

export default function Home() {

  const allert = () => {
    return alert("hey there!")
  }
  return (
    <div>
      <Button color="primary" onClick={allert}>Touch Me</Button>
      <Button color="secondary" onClick={allert}  >Click Me!</Button>
    </div>
  );
}
