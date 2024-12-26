import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactPage = () => {
    const [name, setName] = useState('');
      const [email, setEmail] = useState('');
          const [subject, setSubject] = useState('');
            const [message, setMessage] = useState('');
               const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    }
        setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Form submitted!')
    }else{
        console.log('Validation Failed.')
    }
  };


  return (
    <>
    <div className="">
        <Header></Header>
    </div>

    <div className="bg-white p-10">
      <div className="container mx-auto  px-4">

      <div className="relative aspect-video ">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3949786249186!2d79.94371837505896!3d6.844080493175705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae252639253b79d%3A0x83a39bf4bb83f05!2sMyitem.lk%20(PVT)!5e0!3m2!1sen!2slk!4v1710228138222!5m2!1sen!2slk"
    width="100%"
    height="80%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Location"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
           <p className="text-gray-700 mb-2">
            PHONE :<span className='text-blue-500'> (+94) 777 662 858,</span><span className='text-blue-500'> (+94) 113 686 460 </span></p>
          <p className="text-gray-700 mb-2">ADDRESS : No191, Old Road ,Maharagama.</p>
            <p className="text-gray-700 mb-2">EMAIL:<span className='text-blue-500'>info@myitem.lk</span>/<span className='text-blue-500'>ishan@myitem.lk</span></p>
              <p className="text-gray-700 mb-2"><span className='text-blue-500'>www.myitem.lk</span></p>
        </div>


        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                        <div className='flex justify-between mb-4'>
                            <div className='w-1/2 pr-2'>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    Name<span className="text-red-500">*</span>
                                </label>
                            <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)} className={`border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full`} placeholder="Your name" />
                                      {formErrors.name && (
                                            <p className="text-red-500 text-sm">{formErrors.name}</p>
                                            )}

                            </div>
                           <div className='w-1/2 pl-2'>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                 <input type="email" id='email' value={email} onChange={(e)=> setEmail(e.target.value)}  className={`border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 w-full`} placeholder="Your email" />
                                  {formErrors.email && (
                                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                                    )}
                           </div>
                        </div>
                            <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                                    Subject <span className="text-gray-500">(Optional)</span>
                                </label>
                                    <input type='text' id='subject' value={subject} onChange={(e)=> setSubject(e.target.value)} className='border border-gray-300 rounded-md p-2 w-full' placeholder='Subject'/>
                             </div>
                                   <div className="mb-4">
                                       <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                          Message
                                        </label>
                                <textarea id="message" value={message} onChange={(e)=> setMessage(e.target.value)} className='border border-gray-300 rounded-md p-2 w-full' rows='5' placeholder="Your message"></textarea>
                                 </div>
                                 <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white rounded py-2 px-4">
                                      Post Comment
                                  </button>
             </form>

        </div>
      </div>
    </div>
    <div className="">
        <Footer></Footer>
    </div>
    </>
  );
};

export default ContactPage;