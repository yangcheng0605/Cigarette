import { get, post } from '../utils/http'
/* api管理 */
function facilityTypesList(data) {
  return get('/admin/facility_types?facilities=all', data)
}
function addFacilityTypes(data) {
  return post('/admin/facility_types', data)
}
export {
  facilityTypesList,
  addFacilityTypes,
}
