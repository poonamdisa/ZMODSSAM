import { GlobalVar } from '../../../SAPAssetManager/Rules/Common/Library/GlobalCommon';
import Logger from '../../../SAPAssetManager/Rules/Log/Logger';

export default function OverviewPageCallTeams(context) {
    
    //let url = context.getGlobalDefinition('/SAPAssetManager/Globals/EPD/PMVDeepLink.global').getValue() + 
    //'sceneId=' + sceneId + '&title=' + title;
    let url="https://teams.microsoft.com/l/chat/0/0?users=diether.de.coninck@sap.com";

let canOpen =  context.nativescript.utilsModule.openUrl(url);
if (!canOpen) {
    // show alert
    context.executeAction('/SAPAssetManager/Actions/EPD/PMVAppNotFound.action');
}
return canOpen;
}
