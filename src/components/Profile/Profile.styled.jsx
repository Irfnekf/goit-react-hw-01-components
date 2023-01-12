import styled from '@emotion/styled';

export const CardProfile = styled.div`
  text-align: center;
  width: 250px;
  padding-top: 30px;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  margin: 40px auto;
  box-shadow: 0px 0px 4px 0px rgba(145, 145, 145, 0.38);
`;
export const Description = styled.div``;

export const AvatarProfile = styled.img`
  width: 90px;
  display: block;
  border-radius: 50px;
  margin: auto;
  box-shadow: 0px 0px 4px 0px rgba(145, 145, 145, 0.38);
`;
export const ProfileName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const ProfileTagLoc = styled.p`
  margin-top: 10px;
  color: var(--font-color);
`;
export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: rgba(204, 210, 220, 0.38);
  margin: 40px 0 0 0;
  padding: 0;
`;
export const ProfileItems = styled.li`
  flex-direction: column;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--border-color);
  border-top: 1px solid var(--border-color);
  width: calc(100% / 3);
  padding-top: 20px;
  padding-bottom: 20px;

  :last-child {
    border-right: none;
  }
`;
export const ProfileLabel = styled.span`
  color: var(--font-color);
`;
export const ProfileQuantity = styled.span`
  font-weight: bold;
`;
