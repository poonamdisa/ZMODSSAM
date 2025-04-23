import {BusinessPartnerWrapper} from './ZBusinessPartnerWrapper';
import libEval from '../../../SAPAssetManager/Rules/Common/Library/ValidationLibrary';
import contextConverter from '../../../SAPAssetManager/Rules/Meter/BusinessPartners/BusinessPartnerContextConverter';
import userFeaturesLib from '../../../SAPAssetManager/Rules/UserFeatures/UserFeaturesLibrary';

export default function ZBusinessPartnerName(context) {
    if (userFeaturesLib.isFeatureEnabled(context, context.getGlobalDefinition('/SAPAssetManager/Globals/Features/Meter.global').getValue())) {
        contextConverter(context);
    }
    let wrapper = new BusinessPartnerWrapper(context.getBindingObject());
    let name = wrapper.name();
    return libEval.evalIsEmpty(name) ? '-' : name;
}
