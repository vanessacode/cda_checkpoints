import { Button, Layout } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#fff", padding: 0, textAlign: "center" }}>
        React Typescript Application
      </Header>
      <Content style={{ margin: "0 16px" }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        <p>Vanessa Salvador</p>
        <Link
          to="https://github.com/vanessacode/cda_checkpoints"
          target="blank"
        >
          <Button type="primary">Code source on Github</Button>
        </Link>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
