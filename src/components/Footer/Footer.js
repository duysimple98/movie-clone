import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <h4>Copyright &copy; Duy Do</h4>
      <p>duysimple98@gmail.com</p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background: linear-gradient(
    rgba(0, 0, 0, 0.9) 40%,
    rgba(0, 0, 0, 0.99) 100%,
    transparent
  );
`;
