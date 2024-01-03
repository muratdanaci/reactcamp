import React from "react";
import { Button, MenuItem } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  // destructing yerine props yazabilirsin. onClick isleminde props.signIn kullanman gerekir.
  return (
    <div>
      <MenuItem>
        <Button onClick={signIn} primary>
          Giriş Yap
        </Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          Kayıt Ol
        </Button>
      </MenuItem>
    </div>
  );
}
// 1.45.45