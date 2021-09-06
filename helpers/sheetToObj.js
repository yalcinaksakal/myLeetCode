// import * as xlsx from "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js";
const xlsx = require("https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js");
const sheetToArr = () => {
  const file = "/helpers/leet.ods";
  const fileReader = new FileReader();
  fileReader.readAsBinaryString(file);
  fileReader.onload = event => {
    const data = event.target.result;
    const workbook = xlsx.XLSX.read(data, { type: "binary" });
    const objectToReturn = [];
    workbook.SheetNames.forEach(sheet =>
      objectToReturn.push(
        ...xlsx.XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet])
      )
    );
    return objectToReturn;
  };
};

export default sheetToArr;
