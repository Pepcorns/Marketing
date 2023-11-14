import Image from "next/image";
import { Heading } from "./_components/heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const card = [
    {
      cardHead: "Free for Investors",
      cardContent:
        "We charge no hidden fees for investing and provide top service. Enjoy a hassle free process.",
    },
    {
      cardHead: "Highly Vetted Startups",
      cardContent:
        "The startups need to successfully pass our comprehensive due diligence process.",
    },
    {
      cardHead: "Earn Rewards",
      cardContent:
        "Every time you invest, you earn multiple rewards in in the form of merchandise, coupons and more.",
    },
  ];

  const statups = [
    {
      cardHead: "Hardware & IOT",
      cardContent: "",
      cardQuantity: "10",
    },
    {
      cardHead: "Artificial Intelligence",
      cardContent:
        "The startups need to successfully pass our comprehensive due diligence process.",
      cardQuantity: "10",
    },
    {
      cardHead: "Mobility",
      cardContent:
        "Every time you invest, you earn multiple rewards in in the form of merchandise, coupons and more.",
      cardQuantity: "10",
    },
    {
      cardHead: "Biotechnology",
      cardContent:
        "Every time you invest, you earn multiple rewards in in the form of merchandise, coupons and more.",
      cardQuantity: "10",
    },
  ];
  return (
    <>
      <main>
        <Heading />

        <div className="flex flex-col gap-6 justify-center items-center text-center px-2 py-16">
          <p className="text-4xl">Raise, Build, Engage & Grow!</p>
          <p className="text-lg text-muted-foreground">
            We have a wide range of startups that you can invest in. It takes
            less than a minute to get started.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
            {card.map((val, ind) => (
              <Card key={ind} className="min-h-[150px] max-w-[400px]">
                <CardHeader>
                  <CardTitle className="text-xl  sm:text-3xl">
                    {val.cardHead}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{val.cardContent}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center text-center px-2 py-16">
          <p className="text-4xl">250+ Startups to pick from</p>
          <p className="text-lg text-muted-foreground">
            We have startups from every emerging field you can imagine. We go
            through a vetting process for each one.
          </p>

          <div className="grid grid-cols-2  gap-2 ">
            {statups.map((val, ind) => (
              <Card key={ind} className="">
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-1 sm:text-3xl">
                    {val.cardHead}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-muted-foreground">
                    {val.cardQuantity}+
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
