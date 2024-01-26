import React, { useEffect, useState } from 'react'
import { useStore } from '../../../zustand/Store'
import './styles/Series.css'

const Series: React.FC = () => {    
  const [modalState, setModalState] = useState(false)
  const [nombre, setNombre] = useState('')
  const [select, setSelect] = useState<boolean>(false)
  const [sucursal_id, setSucursal_id] = useState<Number>(Number)
  const [selectedBranchOffice, setSelectedBranchOffice] = useState(null);

  const modal = () => {
    setModalState(!modalState)
  }

  const { series, getSeries }: any = useStore()
  const { branchOffice, getBranchOffices }: any = useStore()

  useEffect(() => {
    getSeries()
    getBranchOffices()
  }, [])

  const handleCreateSeries = () => {

  }

  const openSelect = () => {
    setSelect(!select)
  }

  const handleSeriesChange = (sucursal) => {
    setSelectedBranchOffice(sucursal);
    setSucursal_id(sucursal)
    setSelect(false)
  }


  return (
    <div className='Series'>
      <div className='create__areas_btn-container'>
        <button className='btn__create' onClick={modal}>Crear Nueva Áreas</button>
      </div>
      <div className={`overlay ${modalState ? 'active' : ''}`}>
        <div className={`popup ${modalState ? 'active' : ''}`}>
          <a href="#" className="btn-cerrar-popup" onClick={modal}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </a>
          <h3>Crear Nueva Area</h3>
          <form className='conatiner__create_series' onSubmit={handleCreateSeries}>
            <div className='select__container'>
              <div className={`select-btn ${select ? 'active' : ''}`} onClick={openSelect} >
                <p>Seleciona</p>
                <svg className='chevron__down' xmlns="http://www.w3.org/2000/svg"  height="16" width="16" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
              </div>
              <div className='content' style={{ display: select ? 'block' : 'none' }} >
                {/* <div className='search'>
                  <input type="text" />     
                </div>  */}
                <ul className='options' style={{ display: select ? 'block' : 'none' }}>
                {series && series.map((sucursal) => (
                    <li key={sucursal.id} onClick={() => handleSeriesChange(sucursal.id)}>
                      {sucursal.nombre} 
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <label className='label__general'>Nombre</label>
              <input className='inputs__general' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Ingresa el nombre' />
            </div>
            <div className='container__btns_areas'>
              <button className='btn__general-purple' type='submit'>Crear Nueva Area</button>
            </div>
          </form>
        </div>
      </div>
      <div className='table__processes'>
        <div>
        {series ? (
          <div>
            <p>Series {series.length}</p>
          </div>
        ) : (
          <p></p>
        )}
        </div>
        <div className='table__head'>
          <div className='thead'>
            <div className='th'>
              <p className=''>Nombre</p>
            </div>
            <div className='th'>
              <p>Sucursal</p>
            </div>
            <div className='th'>
              <p>Loremp</p>
            </div>
          </div>
        </div>
        {/* {series ? (
          <div className='table__body'>
            {series.map((serie) => {
              // Buscar la empresa correspondiente en companiesData
              const sucursal = branchOffice.find(sucursal => sucursal.id === serie.empresa_id);
              return (
                <div className='tbody__container' key={serie.id}>
                  <div className='tbody'>
                    <div className='td'>
                      <p>{sucursal ? sucursal.razon_social: 'Nombre no disponible'}</p>
                    </div>
                    <div className='td'>
                      <p>{serie.nombre}</p>
                    </div>
                    <div className='td'>
                      <p>{serie.direccion}</p>
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
        )} */}
      </div>
    </div>
  )
}

export default Series
