export const EMAIL = "mrvctrarteaga@gmail.com";


export const GITHUB_URL = "https://github.com/VictoriaArteaga";
export const LINKEDIN_URL = "https://www.linkedin.com/in/victoria-arteaga-9694b739b";


export const CV_LINKS = {
  es: "https://drive.google.com/file/d/11jI0jSHWih1sUxJFj6UKarod81-eZNcg/view?usp=sharing", 
  en: "https://drive.google.com/file/d/17Pt-maL5jGuf3hJfA_uIRDLQt3cJ3Etv/view?usp=sharing"
};

export function cvHref(url: string) {
  const drive = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/);
  if (drive) return `https://drive.google.com/uc?export=download&id=${drive[1]}`;
  return url.replace(/(dropbox\.com\/.*)[?&]dl=0/, "$1?dl=1");
}
