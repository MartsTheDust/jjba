import { j1, j2, j3, j4, j5, j6, j7, j8, j9 } from "./ImageImporter";

function GetImg(jj: number) {
  switch (jj) {
    case 1:
      return j1;
    case 2:
      return j2;
    case 3:
      return j3;
    case 4:
      return j4;
    case 5:
      return j5;
    case 6:
      return j6;
    case 7:
      return j7;
    case 8:
      return j8;
    case 9:
      return j9;

    default:
      return "#";
  }
}

export default GetImg;
