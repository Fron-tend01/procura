import React, { useState, useEffect } from 'react';
import { useStore } from '../../../zustand/Store';
import './styles/Companies.css';
import Swal from 'sweetalert2';

interface CompanyProps {
  nombre_comercial: string;
  razon_social: string;
}

const Company: React.FC = () => {
  const [nombre_comercial, setNombreComercial] = useState<string>('');
  const [razon_social, setRazonSocial] = useState<string>('');
  const [modalCreate, setModalCreate] = useState<boolean>(false)
  const [modalEdit, setModalEdit] = useState<boolean>(false)

  const { createCompanies }: any = useStore();
  const { companies, getCompanies}: any  = useStore(); 


    useEffect(() => {
      getCompanies(); 
    }, []); 

    const handleCreateCompany = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await createCompanies(razon_social, nombre_comercial);
        Swal.fire('Empresa creada exitosamente', '', 'success');
      } catch (error) {
        console.error('Error al crear la empresa:', error);
        Swal.fire('Error', 'Hubo un error al crear la empresa', 'error');
      }
    };

  const modalCreateCompanies = () => {
    setModalCreate(!modalCreate)
  }

  const modalEditCompanies = () => {
    setModalEdit(!modalEdit)
  }


  return (
    <div className='company'>
      <div className='create__company_btn-container'>
        <button className='btn__create' onClick={modalCreateCompanies}>Nueva Empresa</button>
      </div>
      <div className={`overlay ${modalCreate ? 'active' : ''}`}>
        <div className={`popup ${modalCreate ? 'active' : ''}`}>
          <a href="#" className="btn-cerrar-popup" onClick={modalCreateCompanies}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </a>
          {/* <h3>Crear Nueva Empresa</h3> */}
          <form className='container__create_companies' onSubmit={handleCreateCompany}>
            <div className='inputs__company'>
              <label className='label__general'>Razon Social</label>
              <input className='inputs__general'  value={nombre_comercial} onChange={(e) => setNombreComercial(e.target.value)} type='text' placeholder='Ingresa el nombre' />
            </div>
            <div className='inputs__company'>
              <label className='label__general'>Nombre Comercial</label>
              <input className='inputs__general'  type="text" name="" id="" placeholder='Ingresa el nombre'/>
            </div>
            <div className='inputs__company'>
              <label className='label__general'>Dirección</label>
              <input className='inputs__general' value={razon_social} onChange={(e) => setRazonSocial(e.target.value)} type='text' placeholder='Ingresa la direccion' />
            </div>
            <div className='create__company_btns-container'>
              <div>
                <input className='btn__general-purple' type='submit' value="Crear empresa" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='table__processes'>
        <div>
          {companies ? (
            <div>
              <p>Tus empresas {companies.length}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
        <div className='table__head'>
          <div className='thead'>
            <div className='th'>
              <p className=''>Razon Social</p>
            </div>
            <div className='th'>
              <p>Nombre comercial</p>
            </div>
            <div className='th'>
              <p>Direccion</p>
            </div>
          </div>
        </div>
        <div className={`overlay ${modalEdit ? 'active' : ''}`}>
          <div className={`popup ${modalEdit ? 'active' : ''}`}>
            <a href="#" className="btn-cerrar-popup" onClick={modalEditCompanies}>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </a>
            {/* <h3>Crear Nueva Empresa</h3> */}
            <form className='container__create_companies' onSubmit={handleCreateCompany}>
              <div className='inputs__company'>
                <label className='label__general'>Razon Social</label>
                <input className='inputs__general'  value={nombre_comercial} onChange={(e) => setNombreComercial(e.target.value)} type='text' placeholder='Ingresa el nombre' />
              </div>
              <div className='inputs__company'>
                <label className='label__general'>Nombre Comercial</label>
                <input className='inputs__general'  type="text" name="" id="" placeholder='Ingresa el nombre'/>
              </div>
              <div className='inputs__company'>
                <label className='label__general'>Dirección</label>
                <input className='inputs__general' value={razon_social} onChange={(e) => setRazonSocial(e.target.value)} type='text' placeholder='Ingresa la direccion' />
              </div>
              <div className='create__company_btns-container'>
                <div>
                  <input className='btn__general-purple' type='submit' value="Crear empresa" />
                </div>
              </div>
            </form>
          </div>
        </div>
        {companies ? (
          <div className='table__body'>
            {companies.map((empresa) => (
              <div className='tbody__container' key={empresa.id}>
                <div className='tbody'>
                  <div className='td'>
                    <p>{empresa.razon_social}</p>
                  </div>
                  <div className='td'>
                    <p>{empresa.nombre_comercial}</p>
                  </div>
                  <div className='td'>
                    <p>Loprem</p>
                  </div>
                  <div className='td'>
                    <button className='processes__edit_btn' onClick={modalEditCompanies}>Editar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
}

export default Company

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createNewCompanyActions, getCompany } from '../../../redux/actions/CompanyActions';


// import './Company.css';

// export default function Company() {
//   const [nombre_comercial, setNombreComercial] = useState('');
//   const [razon_social, setRazonSocial] = useState('');



//   const dispatch = useDispatch();
 

//   const addCompany = (company) => dispatch(createNewCompanyActions(company));

//   const submitForm = (e, action) => {
//     e.preventDefault();
//     if (action === 'create') {
//       addCompany({ nombre_comercial, razon_social });
//     } else if (action === 'search') {
//       console.log("Data de las empresas desde el  company Form del  componente Company", dataCompany); // Fix the log statement
//     }
//   };

//   // Use useEffect to fetch the companies when the component mounts
//   useEffect(() => {

//     const getCompanies = () => dispatch(getCompany())
//     getCompanies()
    
//   }, [dispatch]);

//   const dataCompany = useSelector((state) => state.companyData);

//   console.log(dataCompany)

//   return (
//     <div className='company'>
//       <div>
//         <div>
//           <form className='form__company' onSubmit={(e) => submitForm(e, 'create')}>
//             <div className='inputs__company'>
//               <label className='label__company'>Razon Social</label>
//               <input
//                 className='input__company'
//                 value={nombre_comercial}
//                 onChange={(e) => setNombreComercial(e.target.value)}
//                 type='text'
//               />
//             </div>
//             <div className='inputs__company'>
//               <label className='label__company'>Dirección</label>
//               <input
//                 className='input__company'
//                 value={razon_social}
//                 onChange={(e) => setRazonSocial(e.target.value)}
//                 type='text'
//               />
//             </div>
//             <div>
//               <input className='btc__create-company' type='submit' value="Agregar" />
//               <input className='btc__create-company' type='submit' value="Buscar" onClick={(e) => submitForm(e, 'search')} />
//             </div>
//           </form>
//           <div className='table__companys' >
//             <div>
//               {dataCompany ? (
//                 <div>
//                   <p>Tus empresas</p>
//                 </div>
//               ) : (
//                 <p>No hay empresas</p>
//               )}
//             </div>
//             <div className='table__head'>
//               <div className='thead'>
//                 <div className='th'>
//                   <p className=''>Razon Social</p>
//                 </div>
//                 <div className='th'>
//                   <p>Nombre comercial</p>
//                 </div>
//                 <div className='th'>
//                   <p>Direccion</p>
//                 </div>
//               </div>
//             </div>
//             {dataCompany ? (
//               <div>
//                 {dataCompany.map((empresa) => (
//                   <div className='table__body' key={empresa.id}>
//                     <div className='tbody'>
//                       <div className='td'>
//                         <p>{empresa.razon_social}</p>
//                       </div>
//                       <div className='td'>
//                         <p>{empresa.nombre_comercial}</p>
//                       </div>
//                       <div className='td'>
//                         <button>Editar</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>Cargando datos...</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }