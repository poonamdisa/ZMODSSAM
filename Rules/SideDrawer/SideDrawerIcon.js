import { GlobalVar } from '../../../SAPAssetManager/Rules/Common/Library/GlobalCommon';
import Logger from '../../../SAPAssetManager/Rules/Log/Logger';

export default function SideDrawerIcon(context) {

    let armyIcon = "/ZSAM2305/Images/Army.png";
    let navyIcon = "/ZSAM2305/Images/Navy.png";
    let airForceIcon = "/ZSAM2305/Images/AirForce.png";
    let userWorkCenter = GlobalVar.getUserSystemInfo().get('USER_PARAM.VAP');
    //F – Royal Air Force
    //N – Royal Navy
    //A – British Army
    let org= userWorkCenter.substring(0,1);
    if(org === "F")
    {
        return airForceIcon;
    }
    else if (org === "N")
    {
        return navyIcon;
    }
    else if (org === "A")
    {
        return armyIcon;
    }
    else
    {
        return airForceIcon;
    }
   
}
