// function for hasPermission for validate the Username,role and permission
function hasPermission(moduleName, role: string, permissionType: string): boolean {

    if (!moduleName.hasOwnProperty(permissionType)) {
        console.log("false");
        return false;
    }
    else if (moduleName[permissionType].includes(role) || (role == 'head-trainer')) {
        console.log("true");
        return true;
    }
    else {
        console.log("false");
    }
}
/* hasPermission(permissions.getUsers,'head-trainer','all');
 hasPermission(permissions.getUsers,'head-trainer','read');
 hasPermission(permissions.getUsers1,'trainer','write');
 hasPermission(permissions.getUsers1,'trainer','delete');*/

//export {permissions};
export { hasPermission };







