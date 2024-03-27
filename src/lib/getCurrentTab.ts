// A FUNCTION TO DETERMINE THE TAB VISITED
export default function getCurrentTab(url: string): "Solidity" | "Cairo" | "Other" {
  if (url.endsWith("/wizard")) {
    return "Solidity";
  } else if (url.endsWith("/cairo")) {
    return "Cairo";
  } else return "Other";
}