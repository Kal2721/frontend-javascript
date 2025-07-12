/// <reference path="./crud.d.ts" />
import rowID from interface.ts;
import rowElement from interface.ts
import * as CRUD from './crud.js';

const row: RowElement = {
	firstName: Guillaume; 
	lastName: Salva;
}

const newRowID: RowID = inserRow(row);
const updatedRow: RowElement = updateRow(rowID, 23);

updateRow(rowID, row);
deleteRow(row);
