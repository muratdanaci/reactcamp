import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Image,
  MenuItem,
} from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  // destructing yerine props yazabilirsin. onClick isleminde props.signOut kullanman gerekir.
  return (
    <div>
      <MenuItem>
        <Image
          avatar
          spaced="right"
          src="https://media.licdn.com/dms/image/D4D03AQG3d_zO1I7CzA/profile-displayphoto-shrink_200_200/0/1668711246538?e=2147483647&v=beta&t=3vZI9S02ChKTv6X9c7JHZNBxWyIlGgnv0n-5iB1UHM0"
        />
        <Dropdown pointing="top left" text="Murat">
          <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info" />
            <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  );
}
