import {BusinessPartnerWrapper} from './ZBusinessPartnerWrapper';
import libCom from '../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import libEval from '../../../SAPAssetManager/Rules/Common/Library/ValidationLibrary';

export default function ZBusinessPartnerMobile(context) {
    let pageName = libCom.getPageName(context);
    let isOnEditPage = pageName === 'BusinessPartnerEditPage';
    let wrapper = new BusinessPartnerWrapper(context.getBindingObject());
    let mobile = '';
    if (isOnEditPage) {
        mobile = wrapper.communicationProperty('MobileShort');
    } else {
        mobile = wrapper.communicationProperty('Mobile');
    }
    let emptyVal = pageName === 'BusinessPartnerDetailsPage' ? '-' : '';
    return libEval.evalIsEmpty(mobile) ? emptyVal : mobile;       
}
