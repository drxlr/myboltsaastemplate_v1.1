"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { api } from "@/utils/api";
import { useToast } from "@/components/ui/use-toast";

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    priceMonthly: "$15",
    description: "Perfect for side projects and small applications.",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24-hour support response time",
      "1GB storage",
      "Community access",
    ],
    priceId: "price_hobby",
  },
  {
    name: "Pro",
    id: "tier-pro",
    priceMonthly: "$30",
    description: "Ideal for growing businesses and teams.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "1-hour support response time",
      "10GB storage",
      "Priority support",
      "Custom domain",
    ],
    priceId: "price_pro",
  },
];

export function Pricing() {
  const { toast } = useToast();
  const checkout = api.subscription.createCheckoutSession.useMutation({
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = async (priceId: string) => {
    try {
      const { sessionId } = await checkout.mutateAsync({ priceId });
      window.location.href = `/checkout/${sessionId}`;
    } catch (error) {
      console.error("Subscription error:", error);
    }
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Choose your plan
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
          Start with our flexible pricing plans. Upgrade or downgrade at any time.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8">{tier.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6">
                  /month
                </span>
              </p>
              <Button
                onClick={() => handleSubscribe(tier.priceId)}
                className="mt-6 w-full"
              >
                Subscribe
              </Button>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}