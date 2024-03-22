import type { ILandingState } from "~/types";

export const useLandingStore = defineStore("landing", {
  state: (): ILandingState => {
    return {
      isLoading: false,
      header: {
        title:
          "Descubra a Beleza em Cada Caixa Assinaturas Personalizadas para Você",
        description:
          "Você está pronto para elevar sua rotina de beleza a um novo patamar? oferecemos uma experiência única e personalizada que vai revolucionar sua maneira de cuidar de si mesmo.",
        content: {
          type: "video",
          src: "https://www.youtube.com/embed/hf1iUqZc4lc?si=Ft1nA9pjI710pjGX",
          carousel: [
            "https://picsum.photos/1920/1080?random=1",
            "https://picsum.photos/1920/1080?random=2",
            "https://picsum.photos/1920/1080?random=3",
            "https://picsum.photos/1920/1080?random=4",
            "https://picsum.photos/1920/1080?random=5",
            "https://picsum.photos/1920/1080?random=6",
          ],
        },
      },
      logos: {
        title: "Parceiros de confiança",
        icons: [
          "tabler:brand-disney",
          "tabler:brand-visa",
          "i-simple-icons-netlify",
          "tabler:brand-bluesky",
          "tabler:brand-airbnb",
        ],
      },
      services: {
        title: "Por Que Escolher Nossos Serviços?",
        description:
          "Opte pela excelência. oferecemos serviços de qualidade superior, com uma equipe experiente e uma abordagem personalizada. Confie em nós para cuidar de você da melhor maneira possível.",
        headline: "Serviços",
        items: [
          {
            title: "Consultoria de Skincare Personalizada",
            description:
              "Obtenha uma pele radiante com nossa consultoria de skincare personalizada. Nossos especialistas analisam seu tipo de pele, preocupações específicas e estilo de vida para criar um plano único com recomendações de produtos e rotinas ideais.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Maquiagem Profissional para Eventos Especiais",
            description:
              "Destaque-se em seu próximo evento com nossa maquiagem profissional. Nossos artistas de maquiagem colaboram com você para criar um visual perfeito que realça sua beleza natural e combina com seu estilo pessoal.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Tratamento Capilar de Luxo",
            description:
              "Mime seus cabelos com nosso tratamento capilar de luxo. Usando produtos premium e técnicas avançadas, restauramos a saúde e a vitalidade dos seus fios, deixando-os macios, brilhantes e irresistíveis.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Massagem Relaxante e Terapêutica",
            description:
              "Relaxe completamente com nossa massagem relaxante e terapêutica. Nossos terapeutas especializados aliviam a tensão muscular, reduzem o estresse e promovem o bem-estar físico e mental.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Tratamento Facial Anti-idade Avançado",
            description:
              "Desafie os sinais do envelhecimento com nosso tratamento facial anti-idade. Utilizamos tecnologias inovadoras e ingredientes potentes para rejuvenescer e revitalizar sua pele, proporcionando uma aparência mais jovem e firme.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
          {
            title: "Manicure Deluxe - Unhas Perfeitas e Deslumbrantes",
            description:
              "Experimente o luxo da nossa manicure de alta qualidade. Deixe nossos especialistas cuidarem das suas unhas, proporcionando-lhes um tratamento especial desde a modelagem até a aplicação do esmalte. Saia com unhas impecáveis e elegantes, prontas para impressionar em qualquer ocasião.",
            icon: "line-md:confirm",
            to: "/order/checkout",
          },
        ],
      },
      plans: {
        title: "Box Surpresa Mensal",
        description:
          "Descubra uma jornada mensal de surpresas e encantos com nossa Box Mensal exclusiva. Receba uma seleção cuidadosamente escolhida de produtos de beleza e bem-estar diretamente em sua porta, oferecendo uma experiência de autocuidado excepcional a cada entrega. Mime-se ou presenteie alguém especial com uma assinatura hoje e embarque em uma jornada de descoberta e autocompaixão.",
        headline: "Planos",
        subscriptions: [
          {
            title: "Box Essencial",
            description:
              "Um plano cuidadosamente elaborado para atender às suas necessidades de beleza com carinho e atenção.",
            price: "$RS 70.99",
            align: "bottom",
            highlight: false,
            scale: false,
            button: {
              label: "Assinar",
              color: "gray",
              to: "/order/checkout",
              click: undefined,
            },
            features: [
              "2 produtos de beleza surpresa",
              "1 item de bem-estar",
              "Entrega mensal",
            ],
          },
          {
            title: "Box Plus",
            description:
              "O favorito de nossos clientes.Um plano para aqueles que desejam algo a mais, com excelente custo- benefício.",
            price: "$RS 90.99",
            align: "top",
            highlight: true,
            scale: true,
            button: {
              label: "Assinar",
              color: "primary",
              to: "/order/checkout",
              click: undefined,
            },
            features: [
              "3 produtos de beleza de marcas premium",
              "2 itens de bem-estar exclusivos",
              "Acessórios surpresa",
              "Entrega mensal com rastreamento",
            ],
          },
          {
            title: "Box Premium",
            description:
              "Um plano para os amantes de cuidados pessoais, com produtos de alta qualidade.",
            price: "$RS 120,99",
            align: "bottom",
            highlight: false,
            scale: false,
            button: {
              label: "Assinar",
              color: "gray",
              to: "/order/checkout",
              click: undefined,
            },
            features: [
              "4 a 5 produtos de beleza de luxo",
              "3 itens de bem-estar de alta qualidade da sua escola",
              "Acessórios de edição limitada",
              "Brinde especial mensal",
              "Entrega prioritária com seguro",
            ],
          },
        ],
      },
      testimonials: {
        headline: "Depoimentos",
        title: "O Que Nossos Clientes Dizem",
        description:
          "Veja o que nossos clientes têm a dizer sobre nós. Suas palavras refletem nossa dedicação em fornecer serviços excepcionais e resultados impressionantes. Confira abaixo e descubra por que somos a escolha confiável para suas necessidades de beleza e bem-estar.",
        items: [
          {
            quote:
              "Estou extremamente satisfeita com os serviços da empresa. A equipe foi incrivelmente profissional e atenciosa em cada etapa do processo. Recomendo sem hesitação!",
            author: {
              name: "Ana Silva",
              description: "Empresária",
              avatar: {
                src: "https://i.pravatar.cc/120?img=1",
                loading: "lazy",
              },
            },
          },
          {
            quote:
              "Minha experiência com a empresa foi excepcional. Eles superaram todas as minhas expectativas, e os resultados foram simplesmente incríveis. Definitivamente voltarei!",
            author: {
              name: "Pedro Santos",
              description: "Estudante Universitário",
              avatar: {
                src: "https://i.pravatar.cc/120?img=59",
                loading: "lazy",
              },
            },
          },
          {
            quote:
              "A empresa me proporcionou uma experiência única e transformadora. Sua abordagem personalizada realmente fez a diferença para mim. Estou muito grato por sua dedicação e comprometimento.",
            author: {
              name: "Ricardo Costa",
              description: "Músico Profissional",
              avatar: {
                src: "https://i.pravatar.cc/120?img=55",
                loading: "lazy",
              },
            },
          },
          {
            quote:
              "Recebi tratamento da empresa recentemente e estou muito impressionada com os resultados. A equipe foi gentil, profissional e eficiente em todos os aspectos. Recomendo totalmente!",
            author: {
              name: "Sandra Lima",
              description: "Professora",
              avatar: {
                src: "https://i.pravatar.cc/120?img=49",
                loading: "lazy",
              },
            },
          },
        ],
      },
      promotion: {
        title: "Box Premium",
        description:
          "Descubra o ápice do luxo com nosso Box Premium por R$ 120/mês. Receba de 4 a 5 produtos de beleza de marcas renomadas, junto com 3 itens de bem-estar selecionados para relaxamento. Além disso, incluímos acessórios exclusivos para aprimorar sua experiência. Com entrega prioritária, você desfrutará de indulgência mensal garantida.",
        label: "Assine agora mesmo",
        path: "#pricing",
        src: "https://locaria.com/wp-content/uploads/2019/05/AdobeStock_249865970-1024x683.jpeg",
      },
      faq: {
        title: "Perguntas Frequentes (FAQ)",
        description:
          "Curiosidades? Dúvidas? Estamos aqui para ajudar! Confira nossas respostas às perguntas mais comuns sobre nossos serviços e descubra como podemos tornar sua jornada de beleza ainda mais incrível. Deixe-nos guiá-lo pelo caminho da confiança e do bem-estar.",
        items: [
          {
            label: "O que é uma assinatura de beleza?",
            content:
              "Uma assinatura de beleza é um serviço que oferece uma seleção de produtos de beleza entregues regularmente, geralmente mensalmente, trimestralmente ou anualmente, diretamente na sua porta. Esses produtos podem incluir itens de skincare, maquiagem, cabelo, fragrâncias e muito mais.",
          },
          {
            label: "Como funcionam as assinaturas de beleza?",
            content:
              "Ao se inscrever em uma assinatura de beleza, você seleciona um plano de assinatura e, em seguida, recebe uma caixa com uma variedade de produtos de beleza escolhidos com cuidado por especialistas. Algumas assinaturas permitem personalizar sua caixa, enquanto outras oferecem uma seleção padrão de produtos.",
          },
          {
            label: "Quais são os benefícios de assinar uma caixa de beleza?",
            content:
              "Os benefícios incluem experimentar uma variedade de produtos de beleza de alta qualidade, descobrir novas marcas e tendências, economizar tempo e dinheiro, receber produtos exclusivos e brindes, além de desfrutar da conveniência de ter seus produtos favoritos entregues diretamente em sua casa.",
          },
          {
            label: "Como posso personalizar minha assinatura de beleza?",
            content:
              "Alguns serviços de assinatura permitem que você personalize sua caixa de acordo com suas preferências individuais. Isso pode incluir escolher tipos específicos de produtos, como skincare, maquiagem ou cabelo, bem como selecionar marcas ou até mesmo indicar suas preferências de cores ou fragrâncias.",
          },
          {
            label: "Posso cancelar minha assinatura a qualquer momento?",
            content:
              "Sim, a maioria das assinaturas de beleza oferece flexibilidade, permitindo que você cancele sua assinatura a qualquer momento, sem penalidades. Verifique os termos e condições específicos de cada serviço para obter detalhes sobre políticas de cancelamento e reembolso.",
          },
          {
            label: "Quanto custa uma assinatura de beleza?",
            content:
              "O custo de uma assinatura de beleza pode variar dependendo do serviço e do plano escolhido. Planos mensais tendem a ter preços mais baixos por caixa do que planos trimestrais ou anuais. Além disso, algumas assinaturas oferecem opções de nível de preço para se adequar ao seu orçamento.",
          },
          {
            label:
              "Como são selecionados os produtos incluídos em uma assinatura de beleza?",
            content:
              "Os produtos são cuidadosamente selecionados por especialistas em beleza com base em tendências, qualidade, eficácia e preferências do cliente. Muitas assinaturas também permitem que você forneça feedback sobre os produtos recebidos para ajudar a personalizar ainda mais suas futuras caixas.",
          },
          {
            label:
              "As assinaturas de beleza são adequadas para todos os tipos de pele?",
            content:
              "Sim, as assinaturas de beleza geralmente oferecem uma variedade de produtos adequados para diferentes tipos de pele, desde pele oleosa até pele sensível. Ao personalizar sua assinatura, você pode selecionar produtos específicos para atender às necessidades da sua pele.",
          },
          {
            label: "Posso presentear alguém com uma assinatura de beleza?",
            content:
              "Sim, muitas assinaturas de beleza oferecem a opção de presentear amigos e familiares com caixas de assinatura. Você pode selecionar o plano e personalizar a caixa para corresponder aos gostos e preferências do destinatário, tornando-o um presente perfeito para qualquer ocasião.",
          },
          {
            label: "Como faço para começar minha assinatura de beleza?",
            content:
              "Para começar sua jornada de beleza com uma assinatura, basta escolher um serviço de assinatura confiável, selecionar o plano que melhor atenda às suas necessidades e preferências, e seguir as instruções para se inscrever. Em pouco tempo, você estará desfrutando de uma seleção exclusiva de produtos de beleza entregues diretamente na sua porta.",
          },
        ],
      },
    };
  },
  actions: {
    triggerStep(value: boolean) {
      this.isLoading = value;
    },
  },
});
