import React , {useState}  from 'react';
const App = () => {

        const[fullName,setFullName] =useState({
            fname : " ",
            lName : " ",
            email : " ",
            phone : " ",
        });
      
       
    const inputEvent = (event) =>{
       console.log(event.target.value);
       console.log(event.target.name);
       const { value,name} = event.target;
    

      setFullName((preValue) => {
        if (name==="fname"){
            return{
                fname : value,
                lName : preValue.lName,
                email : preValue.email,
                phone : preValue.phone,
            };
        }

        else if(name==="lName"){
            return{
                fname : preValue.fname,
                lName : value,
                email : preValue.email,
                phone : preValue.phone,

            };
        }

        else if(name==="email"){
            return{
                fname : preValue.fname,
                lName : preValue.lName,
                email : value,
                phone : preValue.phone,
            };
        }

        else if(name==="phone"){
            return{
                fname : preValue.fname,
                lName : preValue.lName,
                email : preValue.email,
                phone : value,
            };
        }

        });
    };
      

    const onSubmits = (event) =>{
        event.preventDefault();
        alert("Form Submitted");
    };
   
    return(
     <>
        <div className='main_div'>
         <form onSubmit={onSubmits}>
          <div>
            <h1>
             Hello {fullName.fname} {fullName.lName}
            </h1>

            <p>
                {fullName.email}<br></br> {fullName.phone}
            </p>

            <input 
            type="text" 
            placeholder='Enter Your Name'
            name='fname'
            onChange={inputEvent} 
            value={fullName.fname}/>

            <input type="text" 
            placeholder='Enter Your Last Name' 
            name='lName' 
            onChange={inputEvent}
            value={fullName.lName}/>


            <input type="email" 
            placeholder='Enter Your Email' 
            name='email' 
            onChange={inputEvent}
         value={fullName.email}
           />

            <input type="number" 
            placeholder='Enter Your Phone Number' 
            name='phone' 
            onChange={inputEvent}
            value={fullName.phone}
           />
             

            <button type='submit'>Submit</button>
          </div>
         </form>
       </div>
     </>
    );
    };
export default App;