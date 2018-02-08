import React from 'react';
import styled from 'styled-components';

export const SectionHeader = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: var(--primary-color);
`;

export const Icon = styled.div`
  height: 32px;
  width: 32px;
  margin-right: 8px;
  background: var(--primary-color);
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
