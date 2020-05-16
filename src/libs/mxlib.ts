//==================================================================================================
//  Library for Maix common functions (K3F)
//==================================================================================================
//import {console_log} from "./mxlog";
const console_log = console.log
export const cc = console.log
export const ccc = (t:string) => { cc(getTimeNow() + ': ' + t) }
export const cc_ = (...args: any[]) => { cc('[' + getTimeNow() + ']', ...args) }
export const secx = () => getTimeNow().substr(-6)
export const pre0 = (n: number, len: number): string => ('0'.repeat(len) + n).slice(-1*len)
export const EOL = '\n';
export const LL = '\n';
export const Q = "'";
export const QQ = '"';

export const sFTime = (): string => {
    let oDateNow = new Date();
    return oDateNow.toLocaleString() + '.' + add3(oDateNow.getMilliseconds());
};
//const add3Zero = (n: number): string => ('000' + n).slice(-3);
//const add2 = (n: number): string => ('00' + n).slice(-2);
const add3 = (n: number): string => pre0(n, 3)
const add2 = (n: number): string => pre0(n, 2)
export const getTimeMx = (objDate: Date): string => {
    let res = ''
    res += add2(objDate.getHours()) + ':'
    res += add2(objDate.getMinutes()) + ':'
    res += add2(objDate.getSeconds())
    res += '.' + add3(objDate.getMilliseconds());
    return res
}
export const getTimeNow = (): string => getTimeMx(new Date());
export const T = () => getTimeMx(new Date());

//--------------------------------------------------------------------------------------------------
export const getRandomInt = (max: number): number => (Math.floor(Math.random() * Math.floor(max)));

// Useful for tests
export const f = async (msg: string, ms: number) => {
    let pattern = `delay "${msg}" with ${ms}`;
    //console.log(sFTime()+`: ${pattern} starts...`);
    console_log(sFTime()+`: ${pattern} starts...`);
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve(msg), ms)
    });
    let result = await promise;
    console_log(sFTime()+`: ${pattern} ends with result: "${result}".`);
};

export const J  = (obj: any):string => JSON.stringify(obj, null, '  ');
export const lObj  = (obj: any) => console.log(JSON.stringify(obj, null, '    '));
export const JObj  = (obj: any, tabs?: string) => console.log(JSON.stringify(obj, null, tabs || '  '));
export const lObj_ = (obj: any) => console_log(JSON.stringify(obj, null, '    '));

export const numbBy3 = (numb: number): string => numb.toString().replace(/\d(?=(\d{3})+$)/g, '$& ');

//const lSort = (a:string, b:string): number => a.localeCompare(b, undefined, {sensitivity: 'base'});
//export const uniqueArray = (arr: any[]): any[] => [ ...new Set(arr)]
const logMapElements = (value: any, key: any) => {
        console.log(`{${key}} => "${value}"`);
}
export const lHash = (hash: any) => hash.forEach(logMapElements);
/*
export const aSortUnique = (arr: string[]): string[] => {
    return [...new Set(arr)].sort();
};
*/
export const aArrayUnion = (arr1: string[], arr2: string[]): string[] => {
    return arr1.concat(arr2);
};

export const sGetByREx = (str: string, re: string): string => {
    const regex = new RegExp(re, 'g');
    let match: any;
    match = regex.exec(str);
    return (match && match.length >= 2) ? match[1] : "";
};

export const aGetByREx = (str: string, re: string): string[] => {
    let aRes: string[] = [];
    const regex = new RegExp(re, 'g');
    const match = regex.exec(str); // || [];
    if (match.length >= 2) {
        aRes.push(match[1])
    }
    return aRes;
};

//==================================================================================================
// classes...
export class MMap extends Map<string, string> {    // simulate perl's string map
    get(key: string) {
        return this.has(key) ? super.get(key) : "";
    };
};
