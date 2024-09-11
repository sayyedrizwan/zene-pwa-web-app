import CryptoJS from "crypto-js";

let theSavedKe_yFor: String = "";
let eK: String = "";

export function getK() {
  return theSavedKe_yFor;
}

export function updateK() {
  theSavedKe_yFor = `${parseInt(theSavedKe_yFor.toString()) + 1000}`;
}

export function setK(v: String, k: String) {
  theSavedKe_yFor = v;
  eK = k;
}
export function gKEnc() {
  const [firstHalf, secondHalf] = splitInHalf(theSavedKe_yFor);
  const m = `${genRan(6)}___${firstHalf}___${genRan(3)}___${secondHalf}___${genRan(3)}___${genRan(6)}`;
  return CryptoJS.AES.encrypt(m, eK.toString()).toString().replaceAll("==", "");
}

function splitInHalf(str: String): [string, string] {
  const mid = Math.ceil(str.length / 2);
  const firstHalf = str.slice(0, mid);
  const secondHalf = str.slice(mid);

  return [firstHalf, secondHalf];
}

function genRan(length: number): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}
