import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <SVGContainer>
        <SVGButton href="https://www.facebook.com/fsuugleaner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </SVGButton>
        <SVGButton href={'mailto:gleaner.fsuu@gmail.com'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
        </SVGButton>
      </SVGContainer>
      <CreditsContainer>
        <h3>Gleaner Staff</h3>
        <CreditsFlex>
          <div>
            <h5>Erika Bianca Sanchez</h5>
            <p>Editor in Chief</p>
          </div>
          <div>
            <h5>Haseena Alexa E. Montante</h5>
            <p>Associate Editor</p>
          </div>
          <div>
            <h5>Anthony Carl Jose O. Asuncion</h5>
            <p>Layout Artist</p>
          </div>
          <div>
            <h5>Ianne E. Gencianeo</h5>
            <p>Contributor</p>
          </div>
          <div>
            <h5>Dennis Clyde B. Castilla</h5>
            <p>Contributor</p>
          </div>
          <div>
            <h5>Jonas Rusiana</h5>
            <h5>Tyrone Gabriel B. Serdan</h5>
            <p>Web Designer</p>
          </div>
          <div>
            <h5>Claudine Adrales</h5>
            <p>Adviser (HS)</p>
          </div>
          <div>
            <h5>Flordeliz Villaluz</h5>
            <p>Adviser (GS)</p>
          </div>
          <div>
            <h5>Ma. Lourdes Bernadette V. Sanchez</h5>
            <p>Principal</p>
          </div>
        </CreditsFlex>
      </CreditsContainer>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  border-top: 7px solid #2a0e74;
  background-color: #009241;
  text-align: center;
  color: #f1f7ed;
`;

const SVGButton = styled.a`
  text-decoration: none;
  color: #f1f7ed;
  transition: color 0.225s;
  margin-left: 2%;
  margin-right: 2%;

  &:hover {
    color: #2a0e74;
  }
`;

const SVGContainer = styled.div`
  padding-top: 1%;
  margin-top: 3%;
`;

const CreditsContainer = styled.div`
  text-align: center;
`;

const CreditsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5%;
  padding-bottom: 1.5%;

  div {
      margin-left: 2%;
      margin-right: 2%;
  }

  h5,
  p {
    margin: 0%;
  }

  @media (max-width: 922px) {
    flex-direction: column;

    div {
        margin-bottom: 3%;
    }
  }
`;
