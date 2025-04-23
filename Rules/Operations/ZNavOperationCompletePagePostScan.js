import WorkOrderCompletionLibrary from '../../../SAPAssetManager/Rules/WorkOrders/Complete/WorkOrderCompletionLibrary';

export default function ZNavOperationCompletePagePostScan(context) {
                    WorkOrderCompletionLibrary.getInstance().setCompleteFlag(context, true);
                    return WorkOrderCompletionLibrary.getInstance().openMainPage(context, false);
                    
}
