import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, { name, email }) => {
    //if user already exists

    const userData = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), email))
      .collect();

    //is user not exist

    if (userData.length === 0) {
      const data = {
        name,
        email,
        credits: 5000,
      };
      const result = await ctx.db.insert("users", {
        ...data,
      });
  
      return data;
    }

    return userData[0];
  },
});
