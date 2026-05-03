import ExcelJS from 'exceljs';

export async function excelRead(filePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row, rowNumber) => {
        console.log(`Row ${rowNumber}: ${row.values}`);
    });

    return worksheet;
}