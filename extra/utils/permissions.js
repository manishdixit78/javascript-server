/*const permissions={
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    },
    'getUsers1': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
        },
    }*/
    function hasPermission(moduleName,role,permissionType){
     
       if(!moduleName.hasOwnProperty(permissionType)){
           console.log("false");
       }
       else if(moduleName[permissionType].includes(role)|| (role=='head-trainer')){
           console.log("true");
       }
       else{
           console.log("false");
       }
    }
   /* hasPermission(permissions.getUsers,'head-trainer','all');
    hasPermission(permissions.getUsers,'head-trainer','read');
   
    hasPermission(permissions.getUsers1,'trainer','write');
    hasPermission(permissions.getUsers1,'trainer','delete');*/
  
//export {permissions};
export {hasPermission};
    
   
   



 
     