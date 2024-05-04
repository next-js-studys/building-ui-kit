import { Button } from "@/components/isomorphic/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button color="primary">Touch Me</Button>
      <Button color="secondary"   >Click Me!</Button>
    </div>
  );
}
