using Microsoft.AspNetCore.Components;
using OfficeOpenXml;

namespace arvidpm.github.io.Components.Pages
{
    public partial class GenerateExcelSheet
    {
        [Parameter]
        public string? SheetValue { get; set; }

        private void GenerateSheet()
        {
            //Creates a blank workbook. Use the using statment, so the package is disposed when we are done.
            using (var p = new ExcelPackage())
            {
                //A workbook must have at least on cell, so lets add one... 
                var ws = p.Workbook.Worksheets.Add("MySheet");
                //To set values in the spreadsheet use the Cells indexer.
                ws.Cells["A1"].Value = $"Static text, Input text: {SheetValue}";
                //Save the new workbook. We haven't specified the filename so use the Save as method.
                p.SaveAs(new FileInfo(@"c:\workbooks\myworkbook.xlsx"));
            }
        }
    }
}