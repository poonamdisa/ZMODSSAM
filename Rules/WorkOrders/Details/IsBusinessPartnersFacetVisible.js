import PersonaLibrary from '../../../../SAPAssetManager/Rules/Persona/PersonaLibrary';
import IsServiceOrder from '../../../../SAPAssetManager/Rules/WorkOrders/Details/IsServiceOrder';

export default function IsBusinessPartnersFacetVisible(context) {
   /* if (PersonaLibrary.isWCMOperator(context)) {
        return false;
    }

    return IsServiceOrder(context);
    */
   //MoD customsiation to enable view of all BP 
   return true;
}
