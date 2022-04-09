import { BUY_CAKE } from "./cakeTypes";
export const buyCake = () => {
  {
    console.log("Buy Cake Action");
  }
  return {
    type: BUY_CAKE,
  };
};
