'use client';

import styled from '@emotion/styled';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

const Button = styled.button<ButtonProps>`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  background-color: ${({ variant }) =>
    variant === 'secondary' ? '#ddd' : 'hotpink'};
  color: ${({ variant }) => (variant === 'secondary' ? '#444' : 'white')};

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'secondary' ? '#ddd' : 'deeppink'};
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 14px;
  }
`;

export default Button;
