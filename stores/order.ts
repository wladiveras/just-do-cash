
import { v4 as uuidv4 } from "uuid";

export const useOrderStore = defineStore('order', {
  state: (): IState => {
    return {
      step: 1,
      items: [],
      seller: {
        id: 0,
        name: ''
      },
      customer: {
        id: 0,
        name: ''
      },
      checkout: {
        id: 0,
        name: '',
        price: 0,
        card: {
          holdername: '',
          number: '',
          expireMonth: '',
          expireYear: '',
          cvv: '',
          brand: ''
        }
      },
      token: ''
    }
  },
  actions: {
     nextStep() {
      this.step++
    },
     prevStep() {
      this.step--
    },
     setStep(step: number) {
      this.step = step
    },
    captureLead() {
      if (!this.token) {
        const hash =  uuidv4();
        this.token = hash 
      }
    },
  },
  persist: {
    paths: ['token'],
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
    }),
  },
})

// Interfaces

interface IState {
  step: number,
  items: IItems[]
  seller: ISeller,
  customer: ICustomer,
  checkout: ICheckout
  token: string | ''
}

interface IItems {
  id: number
  name: string
  price: number
}

interface ICheckout {
  id: number
  name: string
  price: number
  card: {
    holdername: string
    number: string
    expireMonth: string
    expireYear: string
    cvv: string
    brand: string
  }
}

interface ISeller {
  id: number
  name: string
}

interface ICustomer {
  id: number
  name: string
}


