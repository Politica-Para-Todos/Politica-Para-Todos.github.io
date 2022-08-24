import { Helmet } from "react-helmet";

interface MetaTagProps {
  pageTitle: string,
  pageDescription: string,
  socialTitle: string,
  socialDescription: string,
  socialImage: string
}

const defaultTags: MetaTagProps = {
  pageTitle: 'Política para Todos',
  pageDescription: 'Missão: Promover a participação ativa dos cidadãos nos processos eleitorais em Portugal',
  socialTitle: 'Política Para Todos - Informação sobre eleições em Portugal',
  socialDescription: 'Ajuda-nos a apelar ao voto informado e partilha este site!',
  socialImage: '/images/share/banner-PPT.jpg',
};

const MetaTags = (props: MetaTagProps) => {
  const { pageTitle, pageDescription, socialTitle, socialDescription, socialImage } = props;

  return (
    <Helmet data-react-helmet="true">
      <title>{pageTitle}</title>
      <meta id="meta-description" name="description" content={pageDescription} />

      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:url" content="https://politicaparatodos.pt/" />
      <meta property="og:type" content="website" />

      <meta id="twitter-title" property="twitter:title" content={socialTitle} />
      <meta id="twitter-description" property="twitter:description" content={socialDescription} />
      <meta id="twitter-image" property="twitter:image" content={socialImage} />
      <meta id="twitter-url" property="twitter:url" content="https://politicaparatodos.pt/" />
      <meta id="twitter-card" property="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default MetaTags;
