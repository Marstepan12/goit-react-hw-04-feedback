import styled from 'styled-components';
import {
  BsFillEmojiSmileFill,
  BsFillEmojiExpressionlessFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 35px;
  margin: 0 auto 40px auto;
  width: 600px;
  background-color: #ebe7e7fc;
  box-shadow: inset -1px 1px 25px 0px #aa8d8dc6;
`;
export const GoodIcon = styled(BsFillEmojiSmileFill)`
  fill: rgba(0, 128, 75, 0.6);
  width: 36px;
  margin-right: 20px;
`;
export const NeutralIcon = styled(BsFillEmojiExpressionlessFill)`
  fill: rgba(203, 152, 22, 0.6);
  width: 36px;
  margin-right: 20px;
`;
export const BadIcon = styled(BsFillEmojiFrownFill)`
  fill: rgba(203, 22, 22, 0.6);
  width: 36px;
  margin-right: 20px;
`;
export const Button = styled.button`
  display: block;
  width: 200px;
  padding: 20px;
  font-size: 30px;

  cursor: pointer;
  transition: box-shadow 250ms ease-in;
  &:hover,
  &:focus {
    box-shadow: 2px 5px 23px 0px rgba(0, 0, 0, 0.64);
  }
`;
