import { GlobalVar } from '../../../SAPAssetManager/Rules/Common/Library/GlobalCommon';
import Logger from '../../../SAPAssetManager/Rules/Log/Logger';

export default function OverviewPageCaption(context) {
    let userWorkCenter = GlobalVar.getUserSystemInfo().get('USER_PARAM.VAP');
   let org= userWorkCenter.substring(0,1);
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
        return context.localizeText('app_display_name');
    }
   
}
