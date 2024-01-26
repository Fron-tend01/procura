import React, { useEffect, useState } from 'react';
import { useStore } from '../../../zustand/Store';
import Swal from 'sweetalert2';
import './styles/BranchOffices.css';

const BranchOffices: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [contacto, setContacto] = useState('');
  const [empresa_id, setEmpresa_id] = useState('');
  const [select, setSelect] = useState<boolean>(false)
  const [selectedCompany, setSelectedCompany] = useState(null);

  const { createBranchOffices }: any = useStore();
  const { branchOffices, getBranchOffices}: any  = useStore(); 
  const { companies, getCompanies }: any = useStore()

  useEffect(() => {
    getBranchOffices()
    getCompanies()
  }, [])

  const handleCreateBranchOffice = async (e) => {
    e.preventDefault();
    try {
      await createBranchOffices(nombre, direccion, contacto, empresa_id);
      Swal.fire('Sucursal creada exitosamente', '', 'success');
    } catch (error) {
      console.error('Error al crear la empresa:', error);
      Swal.fire('Error', 'Hubo un error al crear la empresa', 'error');
    }

  };

  const handleEmpresaChange = (company) => {
    setSelectedCompany(company);
    setEmpresa_id(company);
    closeSelect(); 
  };
  const [modal, setModal] = useState(false)

  const Modal = () => {
    setModal(!modal)
    
  }


  const openSelect = () => {
    setSelect(!select)
  }

  const closeSelect = () => {
    setSelect(false)
  }



  return (
    <div className='branchOffices'>
       <div className='create__bracnhoffice_btn-container '>
        <button className='btn__general-purple' onClick={Modal}>Nueva Sucursal</button>
      </div>
      <div className={`overlay ${modal ? 'active' : ''}`}>
        <div className={`popup ${modal ? 'active' : ''}`}>
          <a href="#" className="btn-cerrar-popup" onClick={Modal}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </a>
          <h3>Crear Nueva Sucursal</h3>
          <form className='conatiner__create_branch-offices' onSubmit={handleCreateBranchOffice}>
            <div className='select__container'>
              <div className={`select-btn ${select ? 'active' : ''}`} onClick={openSelect}>
              <p>{selectedCompany ? companies.find(s => s.id === selectedCompany)?.razon_social : 'Selecciona'}</p>
                <svg className='chevron__down' xmlns="http://www.w3.org/2000/svg"  height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
              </div>
              <div className='content' style={{ display: select ? 'block' : 'none' }}>
                {/* <div className='search'>
                  <input type="text" />     
                </div> */}
                <ul className='options' style={{ display: select ? 'block' : 'none' }}>
                {companies && companies.map((company) => (
                    <li key={company.id} onClick={() => handleEmpresaChange(company.id)}>
                      {company.razon_social} {/* Corregido a sucursal.nombre */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <label className='label__general'>Nombre</label>
              <input className='inputs__general' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Ingresa el nombre' />
            </div>
            <div>
              <label className='label__general'>Dirección</label>
              <input className='inputs__general' type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder='Ingresa la dirección' />
            </div>
            <div>
              <label className='label__general'>Contacto</label>
              <input className='inputs__general' type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} placeholder='Ingresa el contacto' />
            </div>
            <div className='container__btns_branch-office'>
              <button className='btn__general-purple' type='submit'>Crear</button>
            </div>
          </form>
        </div>
      </div>
     
      <div className='table__processes' >
        <div>
          {branchOffices ? (
            <div>
              <p>Tus empresas {branchOffices.length}</p>
            </div>
          ) : (
            <p>No hay empresas</p>
          )}
        </div>
        <div className='table__head'>
          <div className='thead'>
            <div className='th'>
              <p className=''>Empresa</p>
            </div>
            <div className='th'>
              <p>Sucursal</p>
            </div>
            <div className='th'>
              <p>Direccion</p>
            </div>
          </div>
        </div>
        {branchOffices ? (
          <div className='table__body'>
            {branchOffices.map((sucursal) => {
              // Buscar la empresa correspondiente en companiesData
              const company = companies.find(company => company.id === sucursal.empresa_id);

              return (
                <div className='tbody__container' key={sucursal.id}>
                  <div className='tbody'>
                    <div className='td'>
                      <p>{company ? company.razon_social: 'Nombre no disponible'}</p>
                    </div>
                    <div className='td'>
                      <p>{sucursal.nombre}</p>
                    </div>
                    <div className='td'>
                      <p>{sucursal.direccion}</p>
                    </div>
                    <div className='td'>
                      <button className='branchoffice__edit_btn'>Editar</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
};

export default BranchOffices;
