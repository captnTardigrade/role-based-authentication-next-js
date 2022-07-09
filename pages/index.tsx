import { Skeleton } from "@chakra-ui/react";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";

const Home: NextPage = () => {
  const { data, status } = useSession();

  const isAuthenticated = status === "authenticated";

  let cardContent = (
    <Skeleton height="20px" isLoaded={status !== "loading"}>
      You are not logged in.
    </Skeleton>
  );

  if (isAuthenticated) {
    cardContent = <div>You are {`${data?.username}, ${data?.userRole}`}</div>;
  }

  return (
    <>
      <Card className="mx-auto text-center text-2xl font-semibold mt-[25vh] p-8 text-gray-700">
        {cardContent}
      </Card>
      {!isAuthenticated && (
        <Button className="mx-auto mt-3" onClick={() => signIn()}>
          Login
        </Button>
      )}
      {data?.userRole === "seller" && (
        <Link href="/secret">
          <Button className="mx-auto mt-3">Secret</Button>
        </Link>
      )}
      {isAuthenticated && (
        <Button className="mx-auto mt-3" onClick={signOut}>
          Logout
        </Button>
      )}
    </>
  );
};

export default Home;
