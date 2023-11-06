import { GlobalVar } from '../../../SAPAssetManager/Rules/Common/Library/GlobalCommon';
import Logger from '../../../SAPAssetManager/Rules/Log/Logger';

export default function OverviewPageCaption(context) {
    //Logger.error("Poonam caption rule");
    let userWorkCenter = GlobalVar.getUserSystemInfo().get('USER_PARAM.VAP');
    //Logger.error("Poonam userWorkCenter",userWorkCenter);
    //F – Royal Air Force
    //N – Royal Navy
    //A – British Army
    let org= userWorkCenter.substring(0,1);
    //Logger.error("Poonam org",org);
    if(org === "F")
    {
        return context.localizeText('overrviewRAFCaption');
    }
    else if (org === "N")
    {
        return context.localizeText('overrviewNavyCaption');
    }
    else if (org === "A")
    {
        return context.localizeText('overrviewArmyCaption');
    }
    else{
        Logger.error("Poonam caption",context.localizeText('app_display_name'));
        return context.localizeText('app_display_name');
    }
    //Logger.error("poonam abcd");
    //return "ABCD";

}
