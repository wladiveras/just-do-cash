import { v4 as uuidv4 } from "uuid";
import type { IOrderState } from "~/types";

export const useOrderStore = defineStore("order", {
  state: (): IOrderState => {
    return {
      isLoading: false,
      steps: {
        step: 1,
        max: 3,
        trigger: false,
      },

      items: [],
      seller: {
        id: 0,
        name: "",
      },
      customer: {
        id: 0,
        name: "",
        email: "",
        phone: "",
        document: "",
      },
      address: {
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        country: "",
        complement: "",
        zipcode: "",
      },
      payment: {
        id: 0,
        name: "",
        price: 0,
        method: "credit_card",
        card: {
          holderName: "",
          number: "",
          expireMonth: "",
          expireYear: "",
          cvv: "",
          brand: "",
        },
      },
      token: "",
    };
  },
  actions: {
    triggerStep(value: boolean) {
      this.steps.trigger = value;
    },
    nextStep() {
      this.steps.step++;
    },
    prevStep() {
      this.steps.step--;
    },
    setStep(step: number) {
      this.steps.step = step;
    },
    captureLead() {
      if (!this.token) {
        const hash = uuidv4();
        this.token = hash;
      }
    },
  },
  persist: {
    paths: ["token"],
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
    }),
  },
});
