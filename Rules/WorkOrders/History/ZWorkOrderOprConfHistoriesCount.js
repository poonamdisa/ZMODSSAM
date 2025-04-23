import CommonLibrary from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';

//import WOHistReadlink from './WorkOrderHistoryReadLink';
/**
 * Returns the total count of work order history objects for an equipment.
 * @param {*} context SectionProxy object.
 * @returns {Number} Total count of Workorder history objects.
 */
export default function ZWorkOrderOprConfHistoriesCount(context) {
    let entity = context.getPageProxy();
    let binding =  entity.binding;
    let orderReadLink=binding['@odata.readLink'] + '/ZWorkOrderOpConf'
    return CommonLibrary.getEntitySetCount(context,orderReadLink, "");
}
