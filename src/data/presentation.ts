type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "kevinah95@gmail.com",
  title: "Hi, I'm Kevs 👋",
  // profile: "/profile.webp",
  description:
    "I'm a 🇨🇷 *costa rican developer* 🇨🇷. I consider programming a *creative act*. Currently, I am working in a movement called *#HechoEnCostaRica*. See my bento 🍱 in the *links bellow* and check my work.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/kevinah95",
    },
    {
      label: "Bento",
      link: "https://bento.me/kevinah95",
    },
    {
      label: "Github",
      link: "https://github.com/kevinah95",
    },
    {
      label: "Newsletter",
      link: "https://kevinah95.substack.com",
    },
  ],
};

export default presentation;
