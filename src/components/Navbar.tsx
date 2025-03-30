import { Heart, Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import MaxwidthWrapper from "./MaxwidthWrapper";

export default function Navbar() {
  return (
    <nav>
      <MaxwidthWrapper>
        <div className="flex py-3 ">
          <h2 className=" text-18  text-rose-600"> alaroro </h2>

          <div className=" ml-auto flex space-x-2">
            <Link
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
              href={"#"}
            >
              {" "}
              <Search />
            </Link>
            <Link
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
              href={"#"}
            >
              {" "}
              <Heart />
            </Link>
            <Link
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
              href={"#"}
            >
              {" "}
              <User />
            </Link>
          </div>
        </div>
      </MaxwidthWrapper>
    </nav>
  );
}
