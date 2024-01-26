import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Articles from '../../components/sections/processes/Articles'
import Company from "../../components/sections/processes/Companies";
import BranchOffices from "../../components/sections/processes/BranchOffices";
import Series from '../../components/sections/processes/Series'
import Areas from "../../components/sections/processes/Areas";
import Users from '../../components/sections/processes/Users'
import Usergroups from '../../components/sections/processes/UserGroups'
import Families from "../../components/sections/processes/Families";
import Deliverytimes from "../../components/sections/processes/Deliverytimes";
import Ranges from "../../components/sections/processes/Ranges";
import Suppliers from "../../components/sections/processes/Suppliers";
import TypesUsers from "../../components/sections/processes/TypesUsers";
import './processes.css'

const RouteProcesses: React.FC = () => {


  return (
    <Routes>
      <Route path='/articles' element={<Articles />}/>
      <Route path="/company" element={<Company />} />
      <Route path='/branchOffice' element={<BranchOffices/>} />
      <Route path='/areas' element={<Areas />}/>
      <Route path='/series' element={<Series />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/usergroups' element={<Usergroups />}/>
      <Route path='/families' element={<Families />}/>
      <Route path='/deliverytimes' element={<Deliverytimes />}/>
      <Route path='/ranges' element={<Ranges />}/>
      <Route path='/suppliers' element={<Suppliers />}/>
      <Route path='/typesofusers' element={<TypesUsers />}/>
      
    </Routes>
  );
};

export default RouteProcesses;
