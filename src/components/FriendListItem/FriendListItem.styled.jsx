import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  position: relative;
  padding: 15px 0;
  border: 1px solid var(--border-color);
  box-shadow: 0px 0px 4px 0px rgba(145, 145, 145, 0.38);
  width: 250px;
`;
export const StatusElem = styled.span`
  position: absolute;

  bottom: 30px;
  width: 15px;
  height: 15px;
  margin-left: 10px;
  border-radius: 50px;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  margin-left: 45px;
`;
export const FriendName = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;
