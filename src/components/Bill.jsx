import React from 'react';
import { useCart } from '../components/Cart/CartContext'
import { AiOutlineClose } from "react-icons/ai"; // Import custom cross icon from react-icons

const BillPage = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePrint = () => {
    const divToPrint = document.getElementById("printable-div");
    if (!divToPrint) {
      alert("Error: Div not found.");
      return;
    }

    const originalContents = document.body.innerHTML; // Save the original page content
    const printContents = divToPrint.outerHTML; // Get the content of the specific div
    document.body.innerHTML = printContents; // Replace body content with the div content
    window.print(); // Trigger the print dialog
    document.body.innerHTML = originalContents; // Restore the original content
  };


  return (
    <div className="bg-white p-10">
      <div className="container mx-auto py-8 px-4" id="printable-div">
        <div className="flex justify-between items-start mb-8">
            <div>
                <img src="myitemlk_logo.png" alt="Myitem.lk" className="h-16 mb-2"/>
                 <img src="computer_store_logo.png" alt='computer store' className="h-8"/>
            </div>
            <div className="text-right text-xl">
             <h1 className="text-3xl font-bold mb-2">Quotation</h1>
                <p className="text-gray-700 mb-1">
                    <span className="font-bold">MYITEM.LK (PVT) LTD.</span>
                </p>
                <p className="text-gray-700 mb-1">Address : 191 Old Road, Maharagama, Sri Lanka.</p>
                   <p className="text-gray-700 mb-1">Hotline : (+94) 77 7 66 28 58</p>
                    <p className="text-gray-700 mb-1">Head Office : (+94) 11 3 68 64 60</p>
                    <p className="text-gray-700 mb-1">Email : <span className='text-blue-500'>info@myitem.lk</span></p>
                        <p className="text-gray-700 mb-1">Web : <span className='text-blue-500'>www.myitem.lk</span></p>
            </div>
        </div>


          <div className="border-b border-gray-300 mb-4"></div>

          <table className="min-w-full mb-8 border-collapse border border-gray-200" >
  <thead className="bg-gray-100">
    <tr>
      <th className="py-2 px-4 text-center text-gray-600 border border-gray-200">#</th>
      <th className="py-2 px-4 text-center text-gray-600 border border-gray-200">DESCRIPTION</th>
      <th className="py-2 px-4 text-center text-gray-600 border border-gray-200">PRICE</th>
      <th className="py-2 px-4 text-center text-gray-600 border border-gray-200">QTY</th>
      <th className="py-2 px-4 text-center text-gray-600 border border-gray-200">TOTAL</th>
    </tr>
  </thead>
  <tbody>
    {cart.map((item, index) => (
      <tr key={item.id} className="border-b hover:bg-gray-50">
        <td className="px-4 py-2 text-center border border-gray-200">{index + 1}</td>
        <td className="px-4 py-2 text-center border border-gray-200">{item.name}</td>
        <td className="px-4 py-2 text-center border border-gray-200">
          LKR {item.price.toFixed(2)}
        </td>
        <td className="px-4 py-2 text-center border border-gray-200">{item.quantity}</td>
        <td className="px-4 py-2 text-center border border-gray-200">
          LKR {(item.price * item.quantity).toFixed(2)}
        </td>
      </tr>
    ))}
  </tbody>
</table>


              <div className='flex justify-end items-center mb-4'>
                  <p className='font-bold text-gray-700 mr-4'>GRAND TOTAL</p>
                <p className='text-gray-700'>LKR {totalPrice.toFixed(2)}</p>
              </div>

                 <div className="text-center text-sm text-gray-500 mt-8">
                  Email- <span className='text-blue-500'>info@myitem.lk</span> | Web - <span className='text-blue-500'>www.myitem.lk</span> | MYITEM.LK (PVT) LTD
                </div>

      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 ml-2"
              onClick={()=>{handlePrint()}}>
             Print
           </button>
    </div>
  );
};

export default BillPage;