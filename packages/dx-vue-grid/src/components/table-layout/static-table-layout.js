import { ColumnGroup } from './column-group';
import { RowsBlockLayout } from './rows-block-layout';

export const StaticTableLayout = {
  props: {
    cellComponent: {
      type: Object,
      required: true,
    },
    rowComponent: {
      type: Object,
      required: true,
    },
    bodyComponent: {
      type: Object,
      required: true,
    },
    headComponent: {
      type: Object,
    },
    tableComponent: {
      type: Object,
      required: true,
    },
    containerComponent: {
      type: Object,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    bodyRows: {
      type: Array,
      required: true,
    },
    headerRows: {
      type: Array,
      default() {
        return [];
      },
    },
    minWidth: {
      type: Number,
      required: true,
    },
  },
  render() {
    const {
      cellComponent,
      rowComponent,
      bodyComponent,
      headComponent,
      tableComponent: Table,
      containerComponent: Container,
      columns,
      bodyRows,
      headerRows,
      minWidth,
    } = this;

    return (
      <Container>
        <Table
          style={{ minWidth: `${minWidth}px` }}
        >
          <ColumnGroup columns={columns} />
          {!!headerRows.length && (
            <RowsBlockLayout
              rows={headerRows}
              columns={columns}
              blockComponent={headComponent}
              rowComponent={rowComponent}
              cellComponent={cellComponent}
            />
          )}
          <RowsBlockLayout
            rows={bodyRows}
            columns={columns}
            blockComponent={bodyComponent}
            rowComponent={rowComponent}
            cellComponent={cellComponent}
          />
        </Table>
      </Container>
    );
  },
};
