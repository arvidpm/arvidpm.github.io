using Microsoft.AspNetCore.Components;
using OfficeOpenXml;

namespace arvidpm.github.io.Pages
{
    public partial class GenerateExcelSheet
    {
        [Parameter]
        public string? SheetValue { get; set; }

        private void GenerateSheet()
        {
            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

            //Creates a blank workbook. Use the using statment, so the package is disposed when we are done.
            using var package = new ExcelPackage();
            //A workbook must have at least on cell, so lets add one... 
            var worksheet = package.Workbook.Worksheets.Add("MySheet");
            //To set values in the spreadsheet use the Cells indexer.
            worksheet.Cells["A1"].Value = $"Static text, Input text: {SheetValue}";
            //Save the new workbook. We haven't specified the filename so use the Save as method.
            package.SaveAs(new FileInfo(@"c:\workbooks\myworkbook.xlsx"));
        }
    }
}