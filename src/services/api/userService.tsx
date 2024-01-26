import apiService from './ApiService';

const userService = {
  login: async (email: string, password: string, customPath?: string) => {
    const path = customPath || 'usuario_login';
    return apiService.post(path, { email, password });
  },

  createCompanies: async (razon_social: string, nombre_comercial: string, customPath?: string) => {
    const path = customPath || 'empresa_create';
    return apiService.post(path, { razon_social, nombre_comercial });
  },

  getCompanies: async (customPath?: string) => {
    const path = customPath || 'empresa_get';
    return apiService.get(path);
  },

  getBranchOffices: async (customPath?: string) => {
    const path = customPath || 'sucursal_get';
    return apiService.get(path)
  },

  createBrachOffices: async (nombre: string, direccion: string, contacto: string, empresa_id: number, customPath?: string ) => {
    const path = customPath || 'sucursal_create';
    return apiService.post(path, {nombre, direccion, contacto, empresa_id})
  },


  getAreas: async (customPath?: string) => {
    const path = customPath || 'areas_get';
    return apiService.get(path)
  },

  createAreas: async (sucursal_id: number, nombre: string, customPath?: string) => {
    const path = customPath || 'area_create';
    return apiService.post(path, {sucursal_id, nombre})
  },

  getSeries: async (customPath: string) => {
    const path = customPath ||  'series_get';
    return apiService.get(path)
  },

  createSeries: async (sucursal_id: number, nombre: string, customPath?: string) => {
    const path = customPath || 'crear_serie';
    return apiService.post(path, {sucursal_id, nombre})
  },
  
  createUser: async (userData: any, customPath?: string) => {
    const path = customPath || 'usuario_create_usuario_create_post';
    return apiService.post(path, userData);
  },

  getDataApi: async (userId: string, customPath?: string) => {
    const path = customPath || `usuario_login_usuario_login_post/${userId}`;
    return apiService.get(path);
  },
};

export default userService;




// getDatos: async (datos: any, metodo: string) => {
//     const path = metodo;
//     return apiService.post(path, datos);
// },


// import apiService from './ApiService';

// const userService = {
//   login: async (email: string, password: string, customPath?: string) => {
//     const path = customPath || 'usuario_login';
//     return apiService.post(path, { email, password });
//   },

//    createCompany: async (razon_social: string, nombre_comercial: string, customPath?: string) => {
//     const path = customPath || 'empresa_create';
//     return apiService.post(path, { razon_social, nombre_comercial });
//   },

//   getCompany: async (customPath?: string) => {
//     const path = customPath || 'empresa_get';
//     return apiService.get(path);
//   },
  
//   createUser: async (userData: any, customPath?: string) => {
//     const path = customPath || 'usuario_create_usuario_create_post';
//     return apiService.post(path, userData);
//   },

//   getDataApi: async (userId: string, customPath?: string) => {
//     const path = customPath || `usuario_login_usuario_login_post/${userId}`;
//     return apiService.get(path);
//   },
// };

// export default userService;
