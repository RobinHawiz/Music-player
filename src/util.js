import { v4 as uuidv4 } from "uuid";

function songLibrary() {
  return [
    {
      name: "Lagoons",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/09/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Strehlow, Chris Mazuera - Lagoons",
      link: "https://chll.to/e3ac21bc",
      audio: "https://stream.chillhop.com/mp3/8266",
      color: ["#BA4A46", "#FDF0DD"],
      id: uuidv4,
      active: false,
    },
    {
      name: "Jazz Cabbage",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/09/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      artist: "Ian Ewing, Strehlow - Jazz Cabbage",
      link: "https://chll.to/01e3125e",
      audio: "https://stream.chillhop.com/mp3/9363",
      color: ["#BA4A46", "#FDF0DD"],
      id: uuidv4,
      active: false,
    },
    {
      name: "Pending",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/9e6aaa4e04b9e4054f8ed2586d331113e82247da-1024x1024.jpg",
      artist: "J.Folk - Pending",
      link: "https://chll.to/d86131a4",
      audio: "https://stream.chillhop.com/mp3/58838",
      color: ["#CEB493", "#904F2F"],
      id: uuidv4,
      active: false,
    },
    {
      name: "Longest Wait",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/9e6aaa4e04b9e4054f8ed2586d331113e82247da-1024x1024.jpg",
      artist: "J.Folk - Pending",
      link: "https://chll.to/d86131a4",
      audio: "https://stream.chillhop.com/mp3/58840",
      color: ["#CEB493", "#904F2F"],
      id: uuidv4,
      active: false,
    },
    {
      name: "Sex on the Backseat",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg",
      artist: "C Y G N - Sex on the Backseat",
      link: "https://chll.to/bd4dd89e",
      audio: "https://stream.chillhop.com/mp3/60618",
      color: ["#804F40", "#112323"],
      id: uuidv4,
      active: false,
    },
  ];
}

export default songLibrary;
