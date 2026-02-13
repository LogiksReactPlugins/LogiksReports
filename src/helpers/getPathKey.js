import md5 from "blueimp-md5";

export default function getPathKey(path = window.location.pathname) {
  return md5(path);
}
