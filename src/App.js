import "./App.css";
import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

function ExportWorkBook({ data }) {
  const sheets = Object.keys(data);

  return (
    <div className="App">
      <header className="App-header">
        <ExcelFile>
          {sheets &&
            sheets.map((sheet) => {
              const name = sheet
                .split("_")
                .map((part) => part.trim().toUpperCase())
                .join(" ");
              return (
                <ExcelSheet key={sheet} dataSet={data[sheet]} name={name} />
              );
            })}
        </ExcelFile>
      </header>
    </div>
  );
}

export default ExportWorkBook;
