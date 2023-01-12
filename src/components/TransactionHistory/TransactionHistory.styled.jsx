import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 600px;
  margin: 50px auto;
  box-shadow: 0px 0px 4px 0px rgba(145, 145, 145, 0.38);

  th,
  td {
    padding: 10px;
    text-align: center;
    border-right: 1px solid rgb(205, 203, 203);
  }
  td:last-child,
  th:last-child {
    border-right: 0;
  }
  th {
    background-color: #31c7c7;
    color: #f1eded;
  }
  td {
    color: var(--font-color);
  }
  tr:nth-child(even) {
    background-color: #f1eded;
  }
`;
