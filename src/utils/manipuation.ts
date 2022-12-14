import { HomeParty } from "../dtos/party-dto";

export const slugify = (expression: string) => {
  expression = expression.replace(/^\s+|\s+$/g, "");

  // Make the stringing lowercase
  expression = expression.toLowerCase();

  // Remove accents, swap ñ for n, etc
  var from =
    "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to =
    "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    expression = expression.replace(
      new RegExp(from.charAt(i), "g"),
      to.charAt(i)
    );
  }

  // Remove invalid chars
  expression = expression
    .replace(/[^a-z0-9 -]/g, "")
    // Collapse whitespace and replace by _
    .replace(/\s+/g, "_")
    // Collapse dashes
    .replace(/-+/g, "_");

  return expression;
};

// Shuffle array
export function shuffleParties(parties: HomeParty[]): HomeParty[] {
  const shuffledParties: HomeParty[] = [...parties];

  shuffledParties.forEach((party: HomeParty, index: number) => {
    const random = Math.floor(Math.random() * (index + 1));
    [shuffledParties[index], shuffledParties[random]] = [
      shuffledParties[random],
      shuffledParties[index],
    ];
  });
  return shuffledParties;
}

// Sort array by key
export function sortArrayByKey(array: any[], key: string): any[] {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
