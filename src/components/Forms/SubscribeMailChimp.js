import React, { useState } from 'react';
import { useTheme } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';

export default function SubscribeMailChimp() {
  const theme = useTheme();
  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const btnStyle = {
    marginTop: 0,
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    borderRadius: 4,
    fontWeight: 600,
    fontSize: 20,
  };

  return (
    <div id="mc_embed_signup">
      <form action="https://mastemusicbrasil.us2.list-manage.com/subscribe/post" method="POST">
        <div
          id="mc_embed_signup_scroll"
          style={theme.breakpoints.up('sm') ? {
            maxWidth: 360,
            marginLeft: 'auto',
            marginRight: 'auto',
          } : {
          }}
        >

          <input type="hidden" name="u" value="f3dc3da4768f1fb8a103ac9e5" />
          <input type="hidden" name="id" value="203c836029" />

          <TextField
            type="email"
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            label="Insira seu melhor e-mail   :)"
            fullWidth
            variant="outlined"
            margin="normal"
            value={email}
            onChange={handleEmail}
            style={{
              backgroundColor: theme.palette.darkColors.input,
            }}
          />
          <div className="clear">
            <Button
              type="submit"
              value="QUERO PARTICIPAR"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
              disableElevation
              fullWidth
              color="secondary"
              size="large"
              variant="contained"
              style={btnStyle}
            >
              QUERO PARTICIPAR
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
