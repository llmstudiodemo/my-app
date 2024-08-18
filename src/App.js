import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import './App.css';

const rowData = [
  {
    "id": 2,
    "symbol": "MSFT",
    "name": "Microsoft Corporation",
    "current_price": 340.25,
    "open_price": 335.00,
    "high_price": 342.50,
    "low_price": 330.00,
    "close_price": 340.25,
    "market_cap": "2.5T",
    "pe_ratio": 31.2,
    "dividend_yield": "0.85%",
    "52_week_range": "280.00 - 350.00",
    "volume": 43210000
  },
  {
    "id": 3,
    "symbol": "GOOGL",
    "name": "Alphabet Inc.",
    "current_price": 2750.00,
    "open_price": 2700.00,
    "high_price": 2780.00,
    "low_price": 2680.00,
    "close_price": 2750.00,
    "market_cap": "1.8T",
    "pe_ratio": 23.5,
    "dividend_yield": "N/A",
    "52_week_range": "2200.00 - 2900.00",
    "volume": 1234560
  },
  {
    "id": 4,
    "symbol": "AMZN",
    "name": "Amazon.com Inc.",
    "current_price": 3300.00,
    "open_price": 3250.00,
    "high_price": 3350.00,
    "low_price": 3200.00,
    "close_price": 3300.00,
    "market_cap": "1.6T",
    "pe_ratio": 60.2,
    "dividend_yield": "N/A",
    "52_week_range": "2900.00 - 3500.00",
    "volume": 9876540
  },
  {
    "id": 5,
    "symbol": "TSLA",
    "name": "Tesla Inc.",
    "current_price": 695.00,
    "open_price": 680.00,
    "high_price": 700.00,
    "low_price": 670.00,
    "close_price": 695.00,
    "market_cap": "700B",
    "pe_ratio": 80.5,
    "dividend_yield": "N/A",
    "52_week_range": "600.00 - 800.00",
    "volume": 4567890
  }
];

function App() {
  const avatarFormatter = ({ value }) => {
    return <img src={value} width="50px" height="50px" />;
  };

  return (
    <div className="App">
      <h2>
        Implement AG Grid in React
      </h2>
      <div className="ag-theme-alpine ag-style">
        <AgGridReact
          defaultColDef={{ flex: 1 }}
          rowHeight={60}
          rowData={rowData}
        >
          <AgGridColumn
            field="id"
            headerName="ID"
            sortable={true}
            filter={true}
            cellClass="vertical-middle"
          />
          <AgGridColumn
            field="symbol"
            headerName="Symbol"
            sortable={true}
            filter={true}
            cellClass="vertical-middle"
          />
          <AgGridColumn
            field="name"
            headerName="Name"
            sortable={true}
            filter={true}
            cellClass="vertical-middle"
          />
          <AgGridColumn
            field="current_price"
            headerName="Current Price"
            sortable={true}
            filter={true}
            cellClass="vertical-middle"
          />
          <AgGridColumn
            field="market_cap"
            headerName="Market Cap"
            sortable={true}
            filter={true}
            cellClass="vertical-middle"
          />
          <AgGridColumn
            field="pe_ratio"
            headerName="P/E Ratio"
            sortable={true}
            filter={true}
            cellClass="vertical-middle"
          />
          <AgGridColumn
            field="dividend_yield"
            headerName="Dividend Yield"
            sortable={true}
            filter={true}
            cellClass="vertical-middle"
          />
          <AgGridColumn
            field="52_week_range"
            headerName="52 Week Range"
            sortable={true}
            filter={true}
            cellClass="vertical-middle"
          />
          <AgGridColumn
            field="volume"
            headerName="Volume"
            sortable={true}
            filter={true}
            cellClass="vertical-middle"
          />
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
