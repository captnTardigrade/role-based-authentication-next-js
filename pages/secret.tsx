import { NextPage } from "next";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";

const Secret: NextPage = () => {
  return (
    <div>
      <Card className="mx-auto text-center text-2xl font-semibold mt-[25vh] p-8 text-gray-700">
        Top secret page.
      </Card>
      <Link href="/">
        <Button className="mx-auto mt-3">Home</Button>
      </Link>
    </div>
  );
};

export default Secret;
