import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import YouTubePlayer from "react-player/youtube";
// import YouTubePlayer from "react-player/lib/players/YouTube";
import VideoMask from '../../../public/video_mask.jpg';
import ReactPlayer from "react-player/youtube";

interface Video {
  url: string,
  caption: string
}

const videos: Video[] = [
  {
    url: "https://www.youtube.com/watch?v=up0Gfd5c0cM",
    caption: "Mas afinal para que serve votar? Este é o primeiro de uma série de vídeos que explicam como funcionam as eleições legislativas e a nossa Assembleia da República."
  },
  {
    url: "https://www.youtube.com/watch?v=2nBGppKe1z4",
    caption: "Em semana de eleições continuamos a desconstruir o que está em causa no próximo dia 6 de Outubro, com este episódio a focar-se na Assembleia da República e os Círculos Eleitorais."
  },
  {
    url: "https://www.youtube.com/watch?v=OERxKenLIo8",
    caption: "Depois de no último vídeo nos termos debruçado sobre a Assembleia da República e os círculos eleitorais, neste episódio hoje ficarás a saber como se convertem os votos em mandatos."
  },
  {
    url: "https://www.youtube.com/watch?v=v-Uj7kwfG5o",
    caption: "No quarto e último episódio desta série, explicamos-te como é que, após as eleições legislativas, é formado o Executivo."
  }
]

const renderEpisodeButtons = (currentEpisode: number, setState: any) => {
  return videos.map((video: Video, index: number) => {
    let classNames = "home-videos__episode-button";

    if (currentEpisode === index) {
      classNames += " button--grey";
    } else {
      classNames += " button--white"
    }
    return (
      <Button
        key={`episode-${index}`}
        className={classNames}
        onClick={() => setState({ currentEpisode: index })}>
        Ep. {index + 1}
      </Button>
    );
  });
}

const HomeMedia = () => {

  const [episode, setState] = useState({
    currentEpisode: 0
  });

  const { url, caption } = videos[episode.currentEpisode];

  return (
    <section className="home-videos">
      <Row >
        <Col span={24} className="home-videos-title">
          <h2>Como funcionam as Eleições Legislativas</h2>
        </Col>
        <Col span={24} lg={18}>
          <div className='home-videos-player-wrapper'>
            <ReactPlayer
              className='home-videos-react-player'
              url={`https://www.youtube.com/embed/up0Gfd5c0cM?autoplay=0&mute=0&controls=1&origin=https%3A%2F%2Fwww.politicaparatodos.pt&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1`}
              light={VideoMask.src}
              width='100%'
              height='100%'
              controls={true}
              pip={true}
            />
          </div>
        </Col>
        <Col span={24} md={16}>
          <p>{caption}</p>
        </Col>
        <Col>
          {renderEpisodeButtons(episode.currentEpisode, setState)}
        </Col>
      </Row>
    </section>
  );
}

export default HomeMedia;
