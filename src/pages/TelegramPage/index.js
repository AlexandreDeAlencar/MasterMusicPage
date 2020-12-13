import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

import HeaderApp from '../../components/Headers/HeaderWebnario';
import ButtonTelegram from '../../components/Buttons/ButtonTelegram';

const TelegramPage = () => {
  useEffect(() => {
    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false, // enable logs
    };
    ReactPixel.init('267694614272720', {
    }, options);
    ReactPixel.pageView();
    ReactPixel.fbq('track', 'TelegramPage');
  }, []);
  return (
    <>
      <HeaderApp />
      <ButtonTelegram pt={8} />
    </>
  );
};

export default TelegramPage;
