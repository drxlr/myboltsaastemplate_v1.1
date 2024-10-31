import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const subscriptionRouter = createTRPCRouter({
  createCheckoutSession: publicProcedure
    .input(
      z.object({
        priceId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      // Implement Stripe checkout session creation here
      return {
        url: '#', // Return checkout URL when implemented
      };
    }),
});