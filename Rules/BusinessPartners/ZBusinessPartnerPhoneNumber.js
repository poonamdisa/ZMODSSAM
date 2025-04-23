import IsAddressCommType from '../../../SAPAssetManager/Rules/BusinessPartners/IsAddressCommType';
import { BusinessPartnerWrapper } from './ZBusinessPartnerWrapper';
import ValidationLibrary from '../../../SAPAssetManager/Rules/Common/Library/ValidationLibrary';
import libCom from '../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import libEval from '../../../SAPAssetManager/Rules/Common/Library/ValidationLibrary';


/**
 * Retrieves either the Telephone number or Mobile number if available. Telephone preferred
 * @param {Context} context - calling context
 */
export default function ZBusinessPartnerPhoneNumber(context, isCallable=false) {
    let pageName = libCom.getPageName(context);

    let wrapper = new BusinessPartnerWrapper(context.getBindingObject());
    let teleType = (IsAddressCommType(context) && isCallable) ? 'CallableTelephone' : 'Telephone';
    let phoneNumber = wrapper.communicationProperty(teleType);
        
    if (ValidationLibrary.evalIsEmpty(phoneNumber)) {
        phoneNumber = wrapper.communicationProperty('Mobile');
    }

    if (ValidationLibrary.evalIsEmpty(phoneNumber)) {
        phoneNumber = wrapper.communicationProperty('TelNumber');
    }

    let emptyVal = pageName === 'BusinessPartnerDetailsPage' ? '-' : '';
    return libEval.evalIsEmpty(phoneNumber) ? emptyVal : phoneNumber;       
}
