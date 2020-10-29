import { isNotEmptyObj, isObj } from './assertion';
import { filterUndef, pick } from './object';

const addr1 = ['address1', 'Billing_Street_Address_Line_1', 'Property_Address_1'];
const addr2 = ['address2', 'Billing_Street_Address_Line_2', 'Property_Address_2'];
const city = ['city', 'Billing_City', 'Property_City'];
const state = ['state', 'Billing_State', 'Property_State_Abbr'];
const zip = ['zip', 'Billing_Zip', 'Property_ZipCode'];

export const addressToString = (val: object) =>
	isNotEmptyObj(val) &&
	`
${pick(val, addr1, true)}
${pick(val, addr2, true)}
${[pick(val, city, true), pick(val, state, true)].join(', ')} ${pick(val, zip, true)}
`.replace(/(^[ \t]*\n)/gm, '');

export const toAddressObj = (val: object) =>
	isObj(val) &&
	filterUndef({
		address_line1: pick(val, addr1, true).pop(),
		address_line2: pick(val, addr2, true).pop(),
		address_city: pick(val, city, true).pop(),
		address_state: pick(val, state, true).pop(),
		address_zip: pick(val, zip, true).pop(),
	});
