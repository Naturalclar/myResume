import styled from 'styled-components';
import { PrimaryColor } from './variables';

export const SectionHeader = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: ${PrimaryColor};
`;

export const Icon = styled.i`
  height: 32px;
  width: 32px;
  margin-right: 8px;
  background: ${PrimaryColor};
  color: white;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Article = styled.article`
  & h5 {
    color: silver;
    margin-bottom: 0;
  }
  & p {
    margin: 12px 0 0 0;
  }
  & strong {
    font-weight: bold;
    margin: 0;
  }
  & em { 
    font-weight: normal;
    font-style: italic;
  }
  & li {
    line-height: 28px;
  }
`;
