import { subscriptionRouter } from './routers/subscription';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  subscription: subscriptionRouter,
});

export type AppRouter = typeof appRouter;