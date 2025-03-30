import Caro from "@/components/Caro";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <>
      <MaxwidthWrapper newClass="  mt-60 ">
        <div className="  gap-4 items-center grid max-sm:grid-cols-1 grid-cols-2">
          <div className="    ">
            <h2 className=" flex gap-2 items-center mb-12 text-rose-600   font-montserrat    font-semibold text-xs  ">
              shopping smartly saves you money
              <span>
                <ArrowRight className=" text-zinc-600" />
              </span>
            </h2>
            <h1 className=" text-5xl font-popins max-w-prose font-bold leading-tight   font-bol ">
              Monitor price changes with
              <span className=" text-rose-600"> Alaroro</span>
            </h1>

            <h3 className=" font-montserrat max-w-prose text-zinc-900 mt-12">
              powerful webscraping tool to help you save cost and shop smartly
              in this <span className=" font-bold font-popins">T_PAIN </span>{" "}
              economy.
            </h3>

            <div className=" flex  w-full mt-30">
              <div className="flex  w-full   items-center space-x-2">
                <Input
                  type="search"
                  className=" flex-1 h-full"
                  placeholder="Search"
                />
                <Button type="submit" size={"lg"}>
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className=" ">
            <Caro />
          </div>
        </div>

        {/* this section is for caroucel */}
      </MaxwidthWrapper>
    </>
  );
}
