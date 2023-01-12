import styled from '@emotion/styled';
export const StatSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-left: auto;
  margin-right: auto;

  box-shadow: 0px 0px 4px 0px rgba(145, 145, 145, 0.38);
  margin-bottom: 40px;
`;
export const StatTitle = styled.h2`
  color: var(--font-color);
  margin-left: auto;
  margin-right: auto;
`;
export const StatList = styled.ul`
  display: flex;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: calc(100% / 5);
  padding: 15px;
  border-radius: 1px;
`;
export const StatLabel = styled.span`
  color: white;
  font-size: 13px;
`;
export const StatPercentage = styled.span`
  color: white;
  font-size: 16px;
`;
