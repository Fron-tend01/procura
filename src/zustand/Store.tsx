import { create } from 'zustand';
import userService from '../services/api/userService';
import Swal from 'sweetalert2';

interface Companies {
  id: number;
  nombre_comercial: string;
  razon_social: string;
}

interface BranchOffices {
  id: number;
  nombre: string;
  direccion: string;
  contacto: string;
}

interface Areas {
  id: number;
  nombre: string;
}

interface StoreState {
  companies: Companies[];
  branchOffices: BranchOffices[];
  areas: Areas[];
}

export const useStore = create<StoreState>((set, get) => ({
  companies: [],
  branchOffices: [],
  areas: [], 
  
  getCompanies: (customPath?: string) => {
    userService.getCompanies(customPath)
      .then(response => {
        set({ companies: response });
      })
      .catch(error => {
        console.error('Error fetching companies:', error);
      });
  },

  createCompanies: async (razon_social: string, nombre_comercial: string, customPath?: string) => {
    try {
      const response = await userService.createCompanies(razon_social, nombre_comercial, customPath);
      console.log('Empresa creada:', response);
      await get().getCompanies();
    } catch (error) {
      console.error('Error creating company:', error);
    }
  },

  getBranchOffices: async (customPath?: string) => {
    userService.getBranchOffices(customPath)
      .then(response => {
        set({branchOffices: response})
      })
      .catch(error => {
        console.error('Error fetching branch office:', error);
      })
  },

  createBranchOffices: async (nombre: string, direccion: string, contacto: string, empresa_id: number) => {
    try {
      const response = await  userService.createBrachOffices(nombre, direccion, contacto, empresa_id);
      console.log('Sucursal creada', response)
      await get().getBranchOffices()
    } catch (error) { 
      console.error('Error creating sucursal:', error);
    }
  },

  getAreas: async (customPath?: string) => {
    userService.getAreas(customPath)
    .then(response => {
      set({areas: response})
    })
    .catch(error =>  {
      console.error('Error fetching Areas', error)
    })
  },

  createAreas: async (sucursal_id: number, nombre: string) => {
    try {
      const response = await userService.createAreas(sucursal_id, nombre);
      Swal.fire('Area creada exitosamente', '', 'success');
      console.log('Area creada', response)
      await get().getAreas()
    } catch (error) {
      Swal.fire('Error', 'Hubo un error al crear la area', 'error');
      console.error('Error creating Areas', error)
    }
  },

  getSeries: async (customPath?: string) => {
    userService.getSeries(customPath)
    .then(response => {
      set({series: response})
    })
    .catch(error => {
      console.error('Error fetching Series', error)
    })
  },

  createSeries: async (sucursal_id: number, nombre: string) => {
    try {
      const response = await userService.createSeries(sucursal_id, nombre);
      Swal.fire('Serie creada exitosamente', '', 'success');
      console.log('Serie creada', response)
      await get().geSeries()
    } catch (error) {
      Swal.fire('Error', 'Hubo un error al crear la serie', 'error');
      console.error('Error en crear la serie', error)
    }
  }

 

  // Otras funciones de acción...

}));

