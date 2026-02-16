import md5 from "blueimp-md5";

export default function getPathKey() {
  const hash = window.location.hash;
  const path = hash.replace(/^#/, "") || "/";
  return md5(path);
  // return path;
}
