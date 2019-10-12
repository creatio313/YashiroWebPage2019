//import {MDCDataTable} from '@material/data-table';
//import {MDCTabBar} from '@material/tab-bar';
import {MDCDataTable} from "node_modules/@material/data-table/dist/mdc.dataTable.min.js";

mdc.autoInit();
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
