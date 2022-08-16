import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
// import { useStore } from "../stores/store";

export default function NavBar() {
  // const { activityStore } = useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px", borderRadius: "50%" }}
          />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
            // onClick={() => activityStore.openForm()}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
