import es from "../constants/es.json";

const langs = {
  es
};

export default function(lang = "en") {
  if (lang === "en")
    return {
      type: "en"
    };
  return langs[lang];
}
