import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const CheckoutPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
   const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState('Sri Lanka');
  const [streetAddress, setStreetAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [town, setTown] = useState('');
    const [postcode, setPostcode] = useState('');
    const [phone, setPhone] = useState('');
      const [email, setEmail] = useState('');
      const [createAccount, setCreateAccount] = useState(false);
    const [differentShipping, setDifferentShipping] = useState(false);
    const [orderNotes, setOrderNotes] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [formErrors, setFormErrors] = useState({});


  const validateForm = () => {
      let errors = {};
       if (!firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
        if (!streetAddress.trim()) {
        errors.streetAddress = "Street Address is required";
      }

      if (!town.trim()) {
        errors.town = "Town is required";
      }

          if (!postcode.trim()) {
        errors.postcode = "Postcode is required";
      }
       if (!phone.trim()) {
        errors.phone = "Phone is required";
      }
       if (!email.trim()) {
        errors.email = "Email is required";
      }
    if (!agreedTerms) {
      errors.agreedTerms = "Please agree to the terms and conditions";
    }
      setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
       if (validateForm()) {
           alert('Form submitted')
      } else {
        console.log('Validation failed. Correct the errors.');
        }
  };

  return (
    <>
    <div className="">
        <Header></Header>
    </div>

    <div className="bg-white p-10">
      <div className="container mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <div className='flex'>
                <form onSubmit={handleSubmit} className='w-2/3 pr-8'>
                <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                        First name <span className="text-red-500">*</span>
                        </label>
                    <input type="text" id='firstName' value={firstName} onChange={(e)=> setFirstName(e.target.value)}  className={`border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none`} placeholder="Enter your first name" />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm">{formErrors.firstName}</p>
                        )}

                 </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                        Last name <span className="text-red-500">*</span>
                    </label>
                        <input type="text" id='lastName' value={lastName} onChange={(e)=> setLastName(e.target.value)} className={`border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none`} placeholder="Enter your last name" />
                          {formErrors.lastName && (
                                <p className="text-red-500 text-sm">{formErrors.lastName}</p>
                            )}
                    </div>
 <div className="mb-4">
                        <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
                        Company name <span className="text-gray-500">(optional)</span>
                    </label>
                        <input type="text" id='companyName' value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none" placeholder="Enter your company name" />
                    </div>
<div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
                        Country / Region <span className="text-red-500">*</span>
                    </label>
                       <select id="country" value={country} onChange={(e)=> setCountry(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none">
                           <option>Sri Lanka</option>
                         <option>United States</option>
                            <option>Canada</option>
                       </select>
                    </div>

                     <div className="mb-4">
                        <label htmlFor="streetAddress" className="block text-gray-700 text-sm font-bold mb-2">
                        Street address <span className="text-red-500">*</span>
                    </label>
                         <input type="text" id='streetAddress' value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} className={`border ${formErrors.streetAddress ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none mb-2`} placeholder='House number and street name'/>
                          <input type="text" id='apartment' value={apartment} onChange={(e) => setApartment(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none" placeholder='Apartment, suite, unit, etc. (optional)'/>
                         {formErrors.streetAddress && (
                            <p className="text-red-500 text-sm">{formErrors.streetAddress}</p>
                         )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="town" className="block text-gray-700 text-sm font-bold mb-2">
                            Town / City <span className="text-red-500">*</span>
                    </label>
                    <input type='text' id='town' value={town} onChange={(e)=> setTown(e.target.value)}  className={`border ${formErrors.town ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none`} placeholder='Enter your town or city'/>
                      {formErrors.town && (
                        <p className="text-red-500 text-sm">{formErrors.town}</p>
                        )}
                    </div>

                      <div className="mb-4">
                        <label htmlFor="postcode" className="block text-gray-700 text-sm font-bold mb-2">
                         Postcode / ZIP <span className="text-red-500">*</span>
                    </label>
                    <input type='text' id='postcode' value={postcode} onChange={(e)=> setPostcode(e.target.value)} className={`border ${formErrors.postcode ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none`} placeholder='Enter your postcode'/>
                        {formErrors.postcode && (
                         <p className="text-red-500 text-sm">{formErrors.postcode}</p>
                            )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                         Phone <span className="text-red-500">*</span>
                    </label>
                    <input type='text' id='phone' value={phone} onChange={(e)=> setPhone(e.target.value)}  className={`border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none`} placeholder='Enter your phone number'/>
                                {formErrors.phone && (
                                  <p className="text-red-500 text-sm">{formErrors.phone}</p>
                            )}
                    </div>

                       <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                           Email address <span className="text-red-500">*</span>
                    </label>
                    <input type='email' id='email' value={email} onChange={(e)=> setEmail(e.target.value)}  className={`border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full focus:outline-none`} placeholder='Enter your email address'/>
                            {formErrors.email && (
                             <p className="text-red-500 text-sm">{formErrors.email}</p>
                            )}
                    </div>
                                  <div className='mb-4 flex items-center'>
                                    <input type='checkbox' id='createAccount' checked={createAccount} onChange={()=> setCreateAccount(!createAccount)} className='mr-2'/>
                                    <label htmlFor='createAccount' className='text-gray-700'>Create an account?</label>

                                   </div>
                                         <div className='mb-4 flex items-center'>
                                    <input type='checkbox' id='differentShipping' checked={differentShipping} onChange={()=> setDifferentShipping(!differentShipping)} className='mr-2'/>
                                    <label htmlFor='differentShipping' className='text-gray-700'>Ship to a different address?</label>

                                   </div>
                                     <div className="mb-4">
                        <label htmlFor="orderNotes" className="block text-gray-700 text-sm font-bold mb-2">
                            Order notes <span className="text-gray-500">(optional)</span>
                    </label>
                                   <textarea id='orderNotes' value={orderNotes} onChange={(e)=> setOrderNotes(e.target.value)} className='border border-gray-300 rounded-md p-2 w-full focus:outline-none' rows={3} placeholder='Notes about your order, e.g., special notes for delivery.'></textarea>
                    </div>

                </form>



            <div className='w-1/3 pl-8'>
                <div className='border border-gray-300 rounded-md p-4'>
                     <h3 className="text-xl font-bold mb-4">Your order</h3>
                       <div className='flex justify-between mb-4'>
                           <p className='text-gray-700'>MEETION BTC001 FOLDABLE KEYBOARD AND MOUSE ( 01 yaer Warranty ) * 1</p>
                            <p className='text-gray-700'>රු.6,500.00</p>
                       </div>
                        <div className='flex justify-between mb-4'>
                            <p className='font-medium text-gray-700'>Subtotal</p>
                            <p className='text-gray-700'>රු.6,500.00</p>
                        </div>
                           <div className='flex justify-between mb-4'>
                            <p className='text-gray-600'>Shipping</p>
                              <p className="text-gray-500 italic">
                           Enter your address to view shipping options.
                      </p>
                        </div>
                        <div className='flex justify-between items-center mt-4 font-bold text-xl'>
                            <p>Total</p>
                              <p className='text-red-500'>රු.6,500.00</p>
                        </div>

                          <div className='mt-4'>
                              <p className="text-sm text-gray-600">Payment Method:</p>
                               <label className="flex items-center mt-2">
                                    <input type="radio" name="paymentMethod"  className='mr-2' />
                                    <span className="text-gray-700">Direct bank transfer</span>
                                </label>
                                   <label className="flex items-center mt-2">
                                    <input type="radio" name="paymentMethod"  className='mr-2'  defaultChecked/>
                                    <span className="text-gray-700">Credit/Debit - LKR <img src="mastercard.svg" alt='mastercard' className='w-6 h-4 inline'/> <img src="visa.svg" alt='visa' className='w-6 h-4 inline'/></span>
                                </label>
                                  <p className="text-xs text-gray-500 mt-1">Pay securely by Credit/Debit Card.</p>
                            </div>
                         <div className='flex items-center mt-4'>
                                    <input type='checkbox' id='agreedTerms' checked={agreedTerms} onChange={()=> setAgreedTerms(!agreedTerms)} className='mr-2'/>
                                     <label htmlFor='agreedTerms' className='text-gray-700 text-sm'>I have read and agree to the website <a href='/terms-conditions' className='text-blue-500 underline'>Terms and conditions</a><span className='text-red-500'>*</span></label>

                         </div>
                            {formErrors.agreedTerms && (
                            <p className="text-red-500 text-sm">{formErrors.agreedTerms}</p>
                            )}
                         <button type='submit' className="bg-gray-900 hover:bg-gray-800 text-white rounded py-2 px-4 mt-4 w-full">
                                 Place order
                          </button>


                </div>
            </div>
            </div>


      </div>
    </div>
    <div className="">
        <Footer></Footer>
    </div>
    </>
  );
};

export default CheckoutPage;