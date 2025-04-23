import {BusinessPartnerWrapper} from './ZBusinessPartnerWrapper';
import libCom from '../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import libEval from '../../../SAPAssetManager/Rules/Common/Library/ValidationLibrary';
import contextConverter from '../../../SAPAssetManager/Rules/Meter/BusinessPartners/BusinessPartnerContextConverter';
import userFeaturesLib from '../../../SAPAssetManager/Rules/UserFeatures/UserFeaturesLibrary';
import Logger from '../../../SAPAssetManager/Rules/Log/Logger';

export default function ZBusinessPartnerEmail(context) {
    if (userFeaturesLib.isFeatureEnabled(context, context.getGlobalDefinition('/SAPAssetManager/Globals/Features/Meter.global').getValue())) {
        contextConverter(context);
    }
    let pageName = libCom.getPageName(context);
    let wrapper = new BusinessPartnerWrapper(context.getBindingObject());
    let email = wrapper.communicationProperty('Email');
    libCom.setStateVariable(context, 'partneremail', email);
    let emptyVal = pageName === 'BusinessPartnerDetailsPage' ? '-' : '';
    return libEval.evalIsEmpty(email) ? emptyVal : email;    
}
