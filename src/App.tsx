import { useState } from "react";
import {
  Layout,
  Menu as AntMenu,
  Typography,
  Button,
  Card,
  Row,
  Col,
  Avatar,
  Space,
  Divider,
  Tag,
  Drawer,
  Grid,
} from "antd";
import {
  PawPrint,
  Video,
  Users,
  LayoutTemplate,
  Heart,
  Info,
  Github,
  Linkedin,
  Mail,
  Menu as MenuIcon,
  X,
} from "lucide-react";

import alyson from "./assets/img/Alyson.jpeg";
import cleberson from "./assets/img/cleberson.jpg";
import joao from "./assets/img/Joao.jpeg";
import jane from "./assets/img/Jane.jpeg";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  link?: string;
}

interface Feature {
  title: string;
  desc: string;
}

interface NavItem {
  key: string;
  label: string;
  id: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alyson Gonçalves Jorge",
    role: "Desenvolvedor",
    photo: alyson,
    link: "https://github.com/AlysonGJorge",
  },
  {
    name: "João Guilherme Buzetto Tsuchiya",
    role: "Desenvolvedor",
    photo: joao,
    link: "https://github.com/jgtsuchiya",
  },
  { name: "Jane Kelli Sousa Pessoa", role: "Desenvolvedor", photo: jane },
  {
    name: "Cleberson",
    role: "CEO",
    photo: cleberson,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const features: Feature[] = [
  {
    title: "Conexão Rápida",
    desc: "Encontre o pet ideal perto de você em poucos cliques.",
  },
  {
    title: "Segurança",
    desc: "ONGs e protetores verificados para uma adoção segura.",
  },
  {
    title: "Acompanhamento",
    desc: "Suporte completo durante o processo de adaptação.",
  },
];

const navItems: NavItem[] = [
  { key: "1", label: "Início", id: "hero" },
  { key: "2", label: "O Produto", id: "video" },
  { key: "3", label: "Sobre Nós", id: "about" },
  { key: "4", label: "Processo", id: "sprint" },
  { key: "5", label: "Protótipo", id: "github" },
  { key: "6", label: "Equipe", id: "team" },
];

export default function App() {
  const screens = useBreakpoint();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuVisible(false);
    }
  };

  const isMobile = !screens.md;
  const responsiveLayout = {
    xs: { span: 22 },
    sm: { span: 22 },
    md: { span: 20 },
    lg: { span: 20 },
    xl: { span: 18 },
    xxl: { span: 16 },
  };

  return (
    <Layout
      className="layout"
      style={{ minHeight: "100vh", background: "#fff" }}
    >
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          padding: 0,
          height: "64px",
        }}
      >
        <Row
          justify="center"
          align="middle"
          style={{ height: "100%", width: "100%" }}
        >
          <Col
            {...responsiveLayout}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("hero")}
            >
              <PawPrint color="#fa8c16" size={24} style={{ marginRight: 8 }} />
              <Title
                level={4}
                style={{ margin: 0, color: "#fa8c16", fontSize: "1.2rem" }}
              >
                Audoção
              </Title>
            </div>
            {!isMobile && (
              <AntMenu
                mode="horizontal"
                disabledOverflow
                selectedKeys={[]}
                style={{
                  borderBottom: "none",
                  background: "transparent",
                  width: "auto",
                  justifyContent: "flex-end",
                  flex: 1,
                }}
                items={navItems.map((item) => ({
                  key: item.key,
                  label: item.label,
                  onClick: () => scrollToSection(item.id),
                }))}
              />
            )}
            {isMobile && (
              <Button
                type="text"
                icon={<MenuIcon size={24} />}
                onClick={() => setMobileMenuVisible(true)}
              />
            )}
          </Col>
        </Row>
      </Header>
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <PawPrint color="#fa8c16" size={20} style={{ marginRight: 8 }} />
            <span style={{ color: "#fa8c16", fontWeight: "bold" }}>Menu</span>
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={250}
        closeIcon={<X size={20} />}
      >
        <AntMenu
          mode="vertical"
          style={{ borderRight: "none" }}
          items={navItems.map((item) => ({
            key: item.key,
            label: item.label,
            onClick: () => scrollToSection(item.id),
          }))}
        />
      </Drawer>

      <Content style={{ padding: "0", background: "#fff" }}>
        <div
          id="hero"
          style={{
            background: "linear-gradient(135deg, #fff7e6 0%, #ffd591 100%)",
            padding: "80px 0",
          }}
        >
          <Row justify="center" style={{ width: "100%" }}>
            <Col {...responsiveLayout}>
              <Row justify="center" align="middle" gutter={[48, 48]}>
                <Col xs={24} md={12}>
                  <Title
                    style={{
                      fontSize: isMobile ? "2.5rem" : "3.5rem",
                      marginBottom: 16,
                    }}
                  >
                    Encontre seu{" "}
                    <span style={{ color: "#fa8c16" }}>melhor amigo</span>.
                  </Title>
                  <Paragraph style={{ fontSize: "1.2rem", color: "#595959" }}>
                    Conectando corações e patas. A plataforma definitiva para
                    facilitar a adoção responsável de animais de estimação.
                  </Paragraph>
                  <Space
                    size="middle"
                    direction={isMobile ? "vertical" : "horizontal"}
                    style={{ width: "100%", marginTop: 16 }}
                  >
                    <Button
                      type="primary"
                      size="large"
                      shape="round"
                      style={{
                        background: "#fa8c16",
                        borderColor: "#fa8c16",
                        minWidth: "160px",
                      }}
                      icon={<Heart size={16} />}
                      onClick={() => scrollToSection("github")}
                    >
                      Quero Adotar
                    </Button>
                    <Button
                      size="large"
                      shape="round"
                      style={{ minWidth: "160px" }}
                      onClick={() => scrollToSection("video")}
                    >
                      Ver o Vídeo
                    </Button>
                  </Space>
                </Col>
                <Col
                  xs={24}
                  md={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.5)",
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "400px",
                      height: "300px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PawPrint
                      size={100}
                      color="#fa8c16"
                      style={{ opacity: 0.5 }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div id="video" style={{ padding: "80px 0", background: "#fff" }}>
          <Row justify="center" style={{ width: "100%" }}>
            <Col {...responsiveLayout}>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <Divider>
                  <Title level={2}>
                    <Video style={{ marginRight: 10 }} />
                    Conceito do Produto
                  </Title>
                </Divider>
                <Paragraph>Assista à demonstração do nosso produto.</Paragraph>
              </div>
              <Row justify="center">
                <Col xs={24} md={20} lg={16}>
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      overflow: "hidden",
                      borderRadius: "16px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      background: "#000",
                    }}
                  >
                    <iframe
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      src="https://www.youtube.com/embed/dummy-video"
                      title="Vídeo Conceito"
                      frameBorder={0}
                      allowFullScreen
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "45%",
                        width: "100%",
                        color: "white",
                        pointerEvents: "none",
                        textAlign: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>
                        [Insira aqui o Embed do seu Vídeo]
                      </Text>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div id="about" style={{ padding: "80px 0", background: "#f5f5f5" }}>
          <Row justify="center" style={{ width: "100%" }}>
            <Col {...responsiveLayout}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <Divider>
                  <Title level={2}>
                    <Info style={{ marginRight: 10 }} />
                    Sobre a Audoção
                  </Title>
                </Divider>
                <Row justify="center">
                  <Col xs={24} md={16}>
                    <Paragraph style={{ fontSize: "1.1rem" }}>
                      A <strong>Audoção</strong> nasceu com o propósito de
                      diminuir o número de animais abandonados nas ruas,
                      conectando tecnologia e amor.
                    </Paragraph>
                  </Col>
                </Row>
              </div>

              <Row gutter={[24, 24]}>
                {features.map((feature, index) => (
                  <Col xs={24} md={8} key={index}>
                    <Card
                      hoverable
                      style={{
                        height: "100%",
                        textAlign: "center",
                        borderRadius: 12,
                      }}
                    >
                      <Title level={4} style={{ color: "#fa8c16" }}>
                        {feature.title}
                      </Title>
                      <Paragraph>{feature.desc}</Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
        <div id="sprint" style={{ padding: "80px 0", background: "#fff" }}>
          <Row justify="center" style={{ width: "100%" }}>
            <Col {...responsiveLayout}>
              <Divider>
                <Title level={2}>
                  <LayoutTemplate style={{ marginRight: 10 }} />
                  Design Sprint
                </Title>
              </Divider>
              <Paragraph style={{ textAlign: "center", marginBottom: 30 }}>
                Artefatos elaborados durante o processo.
              </Paragraph>

              <div
                style={{
                  width: "100%",
                  height: isMobile ? "400px" : "600px",
                  background: "#e6f7ff",
                  borderRadius: "16px",
                  border: "2px dashed #91d5ff",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://miro.com/app/live-embed/uXjVJ25MQ6I=/?embedMode=view_only_without_ui&moveToViewport=-38741%2C-23479%2C94172%2C46584&embedId=173427156142"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  title="Design Sprint Board"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div
          id="github"
          style={{ padding: "80px 0", background: "#222", color: "#fff" }}
        >
          <Row justify="center" style={{ width: "100%" }}>
            <Col {...responsiveLayout} style={{ textAlign: "center" }}>
              <Title level={2} style={{ color: "#fff" }}>
                Protótipo de Alta Fidelidade
              </Title>
              <Button
                type="primary"
                href="https://github.com/jgtsuchiya/audocao"
                target="_blank"
                icon={<Github size={16} />}
              >
                Ver Repositório no GitHub
              </Button>
            </Col>
          </Row>
        </div>
        <div id="team" style={{ padding: "80px 0", background: "#fff" }}>
          <Row justify="center" style={{ width: "100%" }}>
            <Col {...responsiveLayout}>
              <Divider>
                <Title level={2}>
                  <Users style={{ marginRight: 10 }} />
                  Nossa Equipe
                </Title>
              </Divider>
              <Row gutter={[32, 32]} justify="center">
                {teamMembers.map((member, idx) => (
                  <Col xs={24} sm={12} md={6} key={idx}>
                    <Card
                      hoverable
                      style={{
                        textAlign: "center",
                        borderRadius: 16,
                        cursor: member.link ? "pointer" : "default",
                      }}
                      onClick={
                        member.link
                          ? () => window.open(member.link, "_blank")
                          : undefined
                      }
                    >
                      <Avatar
                        src={member.photo}
                        size={100}
                        style={{
                          marginBottom: 16,
                          border: "2px solid #fa8c16",
                        }}
                      />
                      <Title level={5} style={{ marginBottom: 4 }}>
                        {member.name}
                      </Title>
                      <Tag color="orange">{member.role}</Tag>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          background: "#001529",
          color: "#fff",
          padding: "24px 0",
        }}
      >
        <Row justify="center" style={{ width: "100%" }}>
          <Col {...responsiveLayout}>
            <Space direction="vertical">
              <Text style={{ color: "#fff" }}>
                Audoção ©{new Date().getFullYear()}
              </Text>
              <Space>
                <Github size={20} style={{ cursor: "pointer" }} />
                <Linkedin size={20} style={{ cursor: "pointer" }} />
                <Mail size={20} style={{ cursor: "pointer" }} />
              </Space>
              <Text
                type="secondary"
                style={{ fontSize: "0.8rem", color: "#8c8c8c" }}
              >
                Projeto Acadêmico - Design Sprint e Desenvolvimento Web
              </Text>
            </Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}
