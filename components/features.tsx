import {
  CircleIcon,
  DatabaseIcon,
  FlaskConicalIcon,
  LockIcon,
  RocketIcon,
  SettingsIcon,
} from "lucide-react";

const features = [
  {
    name: "Type Safety",
    description: "End-to-end type safety with TypeScript and tRPC.",
    icon: CircleIcon,
  },
  {
    name: "Authentication",
    description: "Secure authentication powered by Supabase Auth.",
    icon: LockIcon,
  },
  {
    name: "Database",
    description: "Type-safe database queries with Prisma ORM.",
    icon: DatabaseIcon,
  },
  {
    name: "Testing",
    description: "Integration and unit testing setup included.",
    icon: FlaskConicalIcon,
  },
  {
    name: "Payments",
    description: "Stripe integration for subscription payments.",
    icon: RocketIcon,
  },
  {
    name: "Components",
    description: "Beautiful UI components with shadcn/ui.",
    icon: SettingsIcon,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7">Production Ready</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build a SAAS
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A complete starter kit with all the features you need to build a production-ready SAAS application.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}