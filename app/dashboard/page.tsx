import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
          <p className="text-muted-foreground">
            This is your dashboard. Start adding your content here.
          </p>
        </Card>
      </div>
    </div>
  );
}