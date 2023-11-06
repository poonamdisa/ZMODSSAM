import OnDateChanged from '../../../SAPAssetManager/Rules/Common/OnDateChanged';
import { GlobalVar } from '../../../SAPAssetManager/Rules/Common/Library/GlobalCommon';
import Logger from '../../../SAPAssetManager/Rules/Log/Logger';

export default function OverviewOnPageLoad(context) {
    Logger.error("Poonam caption2");
    let userWorkCenter = GlobalVar.getUserSystemInfo().get('USER_PARAM.VAP');
    Logger.error("Poonam userWorkCenter2",userWorkCenter);
    //F – Royal Air Force
    //N – Royal Navy
    //A – British Army
    let org= userWorkCenter.substring(0,1);
    Logger.error("Poonam org2",org);
    if(org === "F")
    {
        context.setCaption(context.localizeText('overrviewRAFCaption'));
    }
    else if (org === "N")
    {
        context.setCaption(context.localizeText('overrviewNavyCaption'));
    }
    else if (org === "A")
    {
        context.setCaption(context.localizeText('overrviewArmyCaption'));
    }
    else{
        Logger.error("Poonam caption2",context.localizeText('app_display_name'));
        context.setCaption(context.localizeText('app_display_name'));
    }
    // First time the page has loaded, call OnDateChanged
    OnDateChanged(context);
}
