import { NextPage } from "next";
import { Layout } from 'antd';
import LayoutHeader from "../src/components/layout-header";
import MetaTags from "../src/components/meta-tags";

const Parlament: NextPage = () => (
  <Layout>
    <MetaTags 
      pageTitle="Quem somos"
      pageDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialTitle="Quem somos"
      socialDescription="A comunidade Política Para Todos nasceu no verão de 2019 com o objetivo de promover a participação ativa dos cidadãos nos processos eleitorais em Portugal. É composta por voluntários de várias partes do país e diferentes áreas profissionais."
      socialImage="/images/share/banner-PPT.jpg"
    />
    <LayoutHeader />
    <Layout.Content>
      <h2>Parlament</h2>
    </Layout.Content>
  </Layout>
)
  // const mapper = new ObjectMapper();
  // const legislature: Legislature = mapper.parse<Legislature>(JSON.stringify(data.legislature), { mainCreator: () => [Legislature] })

// export const getStaticProps: GetStaticProps = async () => {
//   const baseInfoRequest = fetch('https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394a626d5a76636d3168773666446f32386c4d6a424359584e6c4c3168574a5449775447566e61584e7359585231636d45765357356d62334a7459574e6862304a6863325659566c3971633239754c6e523464413d3d&fich=InformacaoBaseXV_json.txt&Inline=true')
//     .then(response => response.json())
//     .catch(() => {props: { null; null}});

//   const baseInfoResponse = fetch baseInfoRequest.json();

//   const deputyActivitiesRequest = await fetch('https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394264476c32615752685a47556c4d6a426b62334d6c4d6a42455a5842316447466b62334d765746596c4d6a424d5a57647063327868644856795953394264476c32615752685a4756455a5842316447466b623168575832707a6232347564486830&fich=AtividadeDeputadoXV_json.txt&Inline=true');
//   const deputyActivitiesResponse = await deputyActivitiesRequest.json();

//   const { status } = baseInfoResponse;

//   if (status !== 201) {
//     console.log(status);

//     return { props: {
//       null: null
//     } }
//   }

//   return {
//     props: {
//       legislature: baseInfoResponse.Legislatura,
//       deputyActivities: deputyActivitiesResponse.ArrayOfAtividadeDeputado
//     }
//   }
// }

export default Parlament;
