import React from 'react';
import {
  StyledTable,
  StyledTableRow,
  StyledTableColumn,
  StyledTableColumnTitle,
  StyledTableColumnDate,
} from './program.styles';

export default class Table extends React.Component {
  render() {
    const {
      title,
      rows,
      lastRow,
      width = '25%',
    } = this.props;

    return (
      <StyledTable>
        {title ? (
          <StyledTableRow>
            <StyledTableColumnTitle
              style={{
                width,
              }}
            >
              {title[0]}
            </StyledTableColumnTitle>
            <StyledTableColumnTitle>
              {title[1]}
            </StyledTableColumnTitle>
          </StyledTableRow>
        ) : null}
        {rows.map(row => (
          <StyledTableRow key={row.label}>
            <StyledTableColumnDate
              style={{
                width
              }}
            >
              {row.label}
            </StyledTableColumnDate>
            <StyledTableColumn>
              {row.value}
            </StyledTableColumn>
          </StyledTableRow>
        ))}
        {lastRow ? (
          <StyledTableRow
            style={{
              backgroundColor: '#f6f3ff',
            }}
          >
            <StyledTableColumnTitle>
              {lastRow.label}
            </StyledTableColumnTitle>
            <StyledTableColumnTitle>
              {lastRow.value}
            </StyledTableColumnTitle>
          </StyledTableRow>
        ) : null}
      </StyledTable>
    );
  }
}
