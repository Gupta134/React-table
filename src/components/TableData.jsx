import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import shawl1 from '../assets/shawl1.jpg';
import shawl2 from '../assets/shawl2.jpg';
import shwal3 from '../assets/shwal3.jpg';
import shawl4 from '../assets/shawl4.jpg';
import shawl5 from '../assets/shawl5.jpg';
import shawl6 from '../assets/shawl6.jpg';
import shwal7 from '../assets/shwal7.jpg';
import shawl8 from '../assets/shawl8.jpg';
import shawl9 from '../assets/shawl9.jpg';
import shawl10 from '../assets/shawl10.jpg';
import shawl11 from '../assets/shawl11.jpg';

const sampleProducts = [
  {
    id: 1,
    image: shawl1,
    category: 'Shawl',
    articleNo: '4552',
    fabric: '50% Acrylic, 50% Viscose',
    color: 'Green',
    size: '40x80',
    description: 'Sulzer Shawls With all Over Jacquard',
    price: 250.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 2,
    image: shawl2,
    category: 'Shawl',
    articleNo: '930',
    fabric: '100% Acralic',
    color: 'Black',
    size: '40x80',
    description: 'Kullu Style Design With Contrast boarder Center Chasmay Self',
    price: 0.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 3,
    image: shwal3,
    category: 'Shawl',
    articleNo: '938',
    fabric: '50% Acralic 50% Viscos',
    color: 'Pink',
    size: '40x80',
    description: 'Jacquard Shawl With Raising Finishing',
    price: 0.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 4,
    image: shawl4,
    category: 'Shawl',
    articleNo: '4899',
    fabric: '50% Acrylic, 50% Viscose',
    color: 'Green',
    size: '40x80',
    description: 'Jacquard Shawl With Raising Finishing',
    price: 270.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 5,
    image: shawl5,
    category: 'Shawl',
    articleNo: '4912',
    fabric: '50% Acrylic, 50% Viscose',
    color: 'Dark Brown',
    size: '40x80',
    description: 'Jacquard Palla Middle all over Self',
    price: 0.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 6,
    image: shawl6,
    category: 'Shawl',
    articleNo: '4972',
    fabric: '50% Acrylic, 50% Viscose',
    color: 'Firozi',
    size: '40x80',
    description: 'Kanni Pala With All Over Jall In Check Style',
    price: 0.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 7,
    image: shwal7,
    category: 'Shawl',
    articleNo: '4983',
    fabric: '50% Acrylic, 50% Viscose',
    color: 'Maroon',
    size: '40x80',
    description: 'Kani Pala With All Over Jall In Check Style',
    price: 0.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 8,
    image: shawl8,
    category: 'Shawl',
    articleNo: '4984',
    fabric: '50% Acrylic, 50% Viscose',
    color: 'Wine',
    size: '40x80',
    description: 'Kanni Look Paisely Cutting Palla With All over Jall',
    price: 0.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 9,
    image: shawl9,
    category: 'Shawl',
    articleNo: '4985',
    fabric: '50% Acrylic, 50% Viscose',
    color: 'Navy',
    size: '40x80',
    description: 'Sulzer All Over Kashmiri Look Jal In 5 Shuttle',
    price: 0.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 10,
    image: shawl10,
    category: 'Shawl',
    articleNo: '6100',
    fabric: '50% Acrylic, 50% Viscose',
    color: 'Red',
    size: '40x80',
    description: 'Kani Pala With All Over Jall In Check Style',
    price: 0.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  },
  {
    id: 11,
    image: shawl11,
    category: 'Shawl',
    articleNo: '4552',
    fabric: '50% Acrylic, 50% Viscose',
    color: 'Red',
    size: '40x80',
    description: 'Sulzer Shawls With all Over Jacquard',
    price: 250.00,
    roomNo: '0',
    rackNo: '0',
    stock: ''
  }

];

const columns = [
  {
    name: 'Product Image',
    selector: row => <img src={row.image} alt={row.articleNo} width="50" />,
    sortable: false,
  },
  {
    name: 'Category',
    selector: row => row.category,
    sortable: true,
  },
  {
    name: 'Article No.',
    selector: row => row.articleNo,
    sortable: true,
  },
  {
    name: 'Fabric',
    selector: row => row.fabric,
    sortable: true,
  },
  {
    name: 'Color',
    selector: row => row.color,
    sortable: true,
  },
  {
    name: 'Size',
    selector: row => row.size,
    sortable: true,
  },
  {
    name: 'Description',
    selector: row => row.description,
    sortable: true,
  },
  {
    name: 'Price',
    selector: row => row.price,
    sortable: true,
    right: true,
  },
  {
    name: 'Room No.',
    selector: row => row.roomNo,
    sortable: true,
  },
  {
    name: 'Rack No.',
    selector: row => row.rackNo,
    sortable: true,
  },
  {
    name: 'Stock',
    selector: row => row.stock,
    sortable: true,
  },
];

const TableData = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterArticleNo, setFilterArticleNo] = useState('');
  const [filterFabric, setFilterFabric] = useState('');
  const [filterColor, setFilterColor] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleRowSelected = state => {
    setSelectedRows(state.selectedRows);
  };

  const exportPDF = () => {
    if (selectedRows.length === 0) {
      alert('No rows selected');
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
  
    const margin = 10;
    const imgWidth = pageWidth - 2 * margin;
    const imgHeight = imgWidth * (3 / 4); 
    const textStartY = margin + imgHeight + 40; 

    selectedRows.forEach((row, index) => {
      if (index > 0) {
        doc.addPage();
      }

      
      const imgData = row.image;
      const imgX = margin;
      const imgY = margin;
      doc.addImage(imgData, 'JPEG', imgX, imgY, imgWidth, imgHeight);

      doc.setFontSize(16);
      const productDetails = [
        ['Article No.', row.articleNo],
        ['Fabric', row.fabric],
        ['Size', row.size],
        ['Description', row.description],
      ];

      doc.text('Selected Product Details', pageWidth / 2, textStartY - 10, { align: 'center' });
      doc.autoTable({
        startY: textStartY,
        
        body: productDetails,
        margin: { top: 50 },
        theme: 'plain',
        styles: {
          fontSize: 14,
        },
      });
    });

    doc.save('products.pdf');
  };

  const filteredProducts = sampleProducts.filter(product => {
    return (
      product.category.toLowerCase().includes(filterCategory.toLowerCase()) &&
      product.articleNo.toLowerCase().includes(filterArticleNo.toLowerCase()) &&
      product.fabric.toLowerCase().includes(filterFabric.toLowerCase()) &&
      product.color.toLowerCase().includes(filterColor.toLowerCase()) &&
      (minPrice === '' || product.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || product.price <= parseFloat(maxPrice))
    );
  });

  const conditionalRowStyles = [
    {
      when: row => selectedRows.some(selected => selected.id === row.id),
      style: {
        backgroundColor: 'rgba(63, 81, 181, 0.9)',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  ];

  return (
    <div className="container">
      <div className="filter-inputs">
        <input
          type="text"
          placeholder="Color"
          value={filterColor}
          onChange={(e) => setFilterColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Article No."
          value={filterArticleNo}
          onChange={(e) => setFilterArticleNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fabric"
          value={filterFabric}
          onChange={(e) => setFilterFabric(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button>Generate QR Code</button>
        <button onClick={exportPDF}>Export PDF</button>
      </div>
      <div className="data-table">
        <DataTable
          title="Product List"
          columns={columns}
          data={filteredProducts}
          selectableRows
          onSelectedRowsChange={handleRowSelected}
          pagination
          conditionalRowStyles={conditionalRowStyles}
        />
      </div>
    </div>
  );
};

export default TableData;
