
import {BusinessPartnerWrapper} from './ZBusinessPartnerWrapper';
import libCom from '../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import libEval from '../../../SAPAssetManager/Rules/Common/Library/ValidationLibrary';
import contextConverter from '../../../SAPAssetManager/Rules/Meter/BusinessPartners/BusinessPartnerContextConverter';
import userFeaturesLib from '../../../SAPAssetManager/Rules/UserFeatures/UserFeaturesLibrary';
import Logger from '../../../SAPAssetManager/Rules/Log/Logger';

export default function ZBusinessPartnerCallTeams(context) {
    
    
    let emailid= libCom.getStateVariable(context, 'partneremail');  
    let url="https://teams.microsoft.com/l/chat/0/0?users=";
    url = url + emailid;
    
let canOpen =  context.nativescript.utilsModule.openUrl(url);
if (!canOpen) {
    // show alert
    context.executeAction('/SAPAssetManager/Actions/EPD/PMVAppNotFound.action');
}
return canOpen;
}
