import RowID from interface.ts;
import RowElement from interface.ts;

declare function insertRow(row: unknown): number;
declare function deleteRow(rowId: unknown): boolean;
declare function updateRow(rowId: unknown, row: unknown): boolean;
