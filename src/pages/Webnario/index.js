import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import {
  useTheme,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import HeaderApp from '../../components/Headers/HeaderWebnario';
import Footer from '../../components/Footer';
import Session from '../../components/Session';

import Depoiments from '../../components/Carousels/Depoiments';
import FormSubscribe from '../../components/Forms/SubscribeMailChimp';
import TitleUp from '../../assets/img/title.png';
import Hashtag from '../../components/Hashtag';
import Info from '../../components/Tags/Info';
import Decorative from '../../components/Tags/Decorative';
import Vicentini from '../../components/Tags/Vicentini';
import Schedule from '../../components/Schedule';

const Webnario = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false, // enable logs
    };
    ReactPixel.init('3566405916743028', {
    }, options);
    ReactPixel.pageView();
    ReactPixel.fbq('track', 'WebnarioPage');
  }, []);

  return (
    <>
      <HeaderApp />

      <Session pb={0.25} pt={7} pl={2} pr={2}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={9} md={6}>
            <img
              src={TitleUp}
              alt="Título da página"
              style={{
                width: '100%', marginBottom: theme.spacing(0.5),
              }}
            />

            <Hashtag />

            <Typography
              variant={matches ? 'h5' : 'h4'}
              align="center"
              gutterBottom
              style={{
                lineHeight: matches ? 1.2 : 1.334,
                color: '#fff',
                fontWeight: 300,
              }}
            >
              Você também pode terminar suas primeiras
              músicas já nos primeiros meses de produção
              e <b>se tornar um produtor musical</b>, preparado
              para o mercado da música, <b>ainda no ano de 2021</b>.
            </Typography>
          </Grid>
        </Grid>
      </Session>

      <Session pb={matches ? 4 : 8} pl={2} pr={2} pt={matches ? 0.25 : 0.5}>
        <FormSubscribe />
      </Session>

      <Session
        pt={matches ? 1.5 : 4.5}
        pb={matches ? 1.5 : 4.5}
        pl={2}
        justify="center"
        alignItems="center"
        align="center"
        bgcolor="primary.main"
        containerStyle={{
          width: matches ? 'fit-content' : '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Info />
      </Session>

      <Session pt={matches ? 3 : 6} pb={matches ? 0.75 : 4}>
        <Schedule
          schedule={[
            {
              label: 'DIA 1',
              date: 'SEGUNDA - 11/01',
              content: '<b>Entenda porquê qualquer pessoa pode começar a produzir suas próprias músicas</b> e os maiores erros dos produtores iniciantes e como evitá-los.',
            },
            {
              label: 'DIA 2',
              date: 'QUARTA - 13/01',
              content: 'O melhor caminho que você pode percorrer para chegar à produção de alto nível. <b>Quanto tempo demora para terminar uma música? Quanto tempo demora para se tornar um produtor preparado para o mercado?</b>',
            },
            {
              label: 'DIA 3',
              date: 'SEXTA - 15/01',
              content: 'A Plataforma Master Music e meu método para ensinar produção',
            },
            {
              label: 'BÔNUS 1',
              date: '',
              content: 'Abrindo e mostrando os detalhes do projeto de uma música que eu produzi',
            },
            {
              label: 'BÔNUS 2',
              date: '',
              content: 'Uma super oportunidade para você!',
            },
          ]}
        />
      </Session>

      <Decorative />

      <Session pb={2} pl={2} pr={2} pt={matches ? 4 : 6}>
        <FormSubscribe />
      </Session>

      <Session pl={1} pr={1} pt={matches ? 3 : 6} pb={matches ? 3 : 6}>
        <Depoiments
          depoiments={[
            {
              index: 0,
              url: 'https://youtu.be/TIeENYfkXNE',
              description: 'O diferencial dele, com toda certeza, é o vínculo que ele tem com os alunos, e isso, com certeza, gera um maior resultado.',
            },
            {
              index: 1,
              url: 'https://youtu.be/Tu8dJN1E5T8',
              description: 'Eu não sabia nada sobre produção musical, desde o começo foi um cara sensacional, já me ensinando a disciplina e organização. Todas as aulas ele vai direto ao ponto, aprendi muito, muito mesmo.',
            },
            {
              index: 2,
              url: 'https://youtu.be/Y9FP-C8htV4',
              description: 'Ele me acompanhou a cada etapa do curso para que eu aprendesse tudo. Acabou que o curso avançado me abriu mais portas para deixar meu trabalho mais profissional. ',
            },
            {
              index: 3,
              url: 'https://youtu.be/pZFXGHRQjsA',
              description: 'Ele conseguiu me fazer enxergar uma luz no fim do túnel, eu pensava que a produção musical estava distante de se tornar uma profissão de fato, e ele conseguiu desmistificar isso de minha cabeça.',
            },
            {
              index: 4,
              url: 'https://youtu.be/b9J3UNqJjrI',
              description: 'Através do seu método, ele consegue fazer com que você, que tem pouco tempo para estudar, que é o meu caso, tenha um resultado bom de desempenho.',
            },
            {
              index: 5,
              url: 'https://youtu.be/bacvez1Tpgo',
              description: 'Com o método Vicentini, consegui deixar a minha música muito perto de um nível profissional em pouco tempo, ele faz as aulas de modo muito prático.',
            },
          ]}
        />
      </Session>

      <Session
        pt={matches ? 3 : 6}
        pb={matches ? 3 : 6}
        pl={2}
        pr={3}
        bgcolor="primary.main"
      >
        <Vicentini />
      </Session>

      <Session pb={0.375} pl={5} pr={5} pt={matches ? 4.5 : 6}>
        <Typography
          variant={matches ? 'body1' : 'h6'}
          gutterBottom
          style={{
            lineHeight: 1.4,
            color: '#fff',
            fontWeight: 300,
            marginBottom: theme.spacing(3),
          }}
        >
          <b>DJ, produtor musical, professor de produção musical</b>
          {' '}
          há 7 anos e empreendedor digital, Vicentini, que fazia parte da dupla Victor Oliver & Vicentini, agora aposta em seu projeto solo, que,
          {' '}
          <b>lançado a apenas um ano e meio, já soma mais de 2 milhões de plays em suas músicas</b>
          .
        </Typography>
        <Typography
          variant={matches ? 'body1' : 'h6'}
          style={{
            lineHeight: 1.4,
            color: '#fff',
            fontWeight: 300,
          }}
        >
          Em sua carreira, o artista já lançou por gigantes como
          {' '}
          <b>Sony Music, Warner Music e Só Track Boa</b>
          , além de ter recebido o suporte de artistas como
          {' '}
          <b>Hardwell, Vintage Culture, KVSH, Cat Dealers, Dubdogz, Dashdot, entre outros</b>
          .
        </Typography>
      </Session>

      <Session pb={0.375} pl={2} pr={matches ? 2 : 4} pt={matches ? 2 : 4}>
        <FormSubscribe />
      </Session>

      <Footer />
    </>
  );
};
export default Webnario;


// <!-- Facebook Pixel Code -->
// {# <script>
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '3566405916743028');
// fbq('track', 'PageView');
// </script>
// <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=3566405916743028&ev=PageView&noscript=1"
// /></noscript> #}
// <!-- End Facebook Pixel Code -->
