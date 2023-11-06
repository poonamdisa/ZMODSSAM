import QueryBuilder from '../../../SAPAssetManager/Rules/Common/Query/QueryBuilder';
import Logger from '../../../SAPAssetManager/Rules/Log/Logger';

export default function ZEquipBarcodeScannerQueryOptions(context) {
    let queryBuilder = new QueryBuilder();

    let orderId = context.binding.OrderId;
    if (orderId) {
        queryBuilder.addFilter(`OrderId eq '${orderId}'`);
    }

    let entityType = context.binding['@odata.type'];
    Logger.error("Poonam odatatype",entityType);
    if (entityType === '#sap_mobile.MyWorkOrderOperation') {
        queryBuilder.addFilter(`OperationNo eq '${context.binding.OperationNo}'`);
    }

    //queryBuilder.addFilter('WithdrawnQuantity ne QuantityUnE');
    //queryBuilder.addFilter("ItemCategory eq 'L'");
    //queryBuilder.addExtra('orderby=ItemNumber');

    return queryBuilder.build();
}
